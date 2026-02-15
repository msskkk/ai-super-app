import Stripe from "stripe";

// In-memory cache: deviceId → { premium, checkedAt }
// Survives within a single serverless instance; Stripe API is the source of truth.
const cache = new Map<string, { premium: boolean; checkedAt: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

/** Check if a device has an active premium subscription. */
export async function checkPremium(deviceId: string): Promise<boolean> {
  if (!deviceId) return false;

  const cached = cache.get(deviceId);
  if (cached && Date.now() - cached.checkedAt < CACHE_TTL) {
    return cached.premium;
  }

  const stripe = getStripe();
  if (!stripe) return false;

  try {
    const result = await stripe.customers.search({
      query: `metadata["deviceId"]:"${deviceId}"`,
      limit: 1,
    });

    if (result.data.length === 0) {
      cache.set(deviceId, { premium: false, checkedAt: Date.now() });
      return false;
    }

    const customer = result.data[0];
    const subs = await stripe.subscriptions.list({
      customer: customer.id,
      status: "active",
      limit: 1,
    });

    const premium = subs.data.length > 0;
    cache.set(deviceId, { premium, checkedAt: Date.now() });
    return premium;
  } catch {
    return cached?.premium ?? false;
  }
}

/** Proactively update cache (called from webhook). */
export function setCachePremium(deviceId: string, premium: boolean) {
  cache.set(deviceId, { premium, checkedAt: Date.now() });
}

// ── Server-side usage tracking (per device, daily) ──
const usageMap = new Map<string, { date: string; count: number }>();
const FREE_DAILY_LIMIT = 10;

export function checkAndRecordUsage(
  deviceId: string,
  isPremium: boolean
): { allowed: boolean; remaining: number } {
  if (isPremium) return { allowed: true, remaining: -1 };

  const key = deviceId || "anon";
  const today = new Date().toISOString().slice(0, 10);
  const entry = usageMap.get(key);

  if (!entry || entry.date !== today) {
    usageMap.set(key, { date: today, count: 1 });
    return { allowed: true, remaining: FREE_DAILY_LIMIT - 1 };
  }

  if (entry.count >= FREE_DAILY_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: FREE_DAILY_LIMIT - entry.count };
}
