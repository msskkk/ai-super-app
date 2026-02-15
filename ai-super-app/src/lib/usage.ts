import { getDeviceId } from "./device-id";
import { getPlatform } from "./platform";

const STORAGE_KEY = "ai-super-app-usage";
const FREE_DAILY_LIMIT = 10;

interface UsageData {
  date: string;
  count: number;
  isPremium: boolean;
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function getUsage(): UsageData {
  if (typeof window === "undefined")
    return { date: today(), count: 0, isPremium: false };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: today(), count: 0, isPremium: false };
    const data: UsageData = JSON.parse(raw);
    if (data.date !== today()) {
      return { date: today(), count: 0, isPremium: data.isPremium };
    }
    return data;
  } catch {
    return { date: today(), count: 0, isPremium: false };
  }
}

function saveUsage(data: UsageData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function canUse(): boolean {
  const u = getUsage();
  if (u.isPremium) return true;
  return u.count < FREE_DAILY_LIMIT;
}

export function getRemainingUses(): number {
  const u = getUsage();
  if (u.isPremium) return Infinity;
  return Math.max(0, FREE_DAILY_LIMIT - u.count);
}

export function isPremium(): boolean {
  return getUsage().isPremium;
}

export function recordUse() {
  const u = getUsage();
  u.count += 1;
  u.date = today();
  saveUsage(u);
}

export function setPremium(val: boolean) {
  const u = getUsage();
  u.isPremium = val;
  saveUsage(u);
}

/** Sync premium status from server response. */
export function syncFromServer(serverUsage: {
  remaining: number;
  premium: boolean;
}) {
  const u = getUsage();
  u.isPremium = serverUsage.premium;
  if (serverUsage.remaining >= 0) {
    u.count = FREE_DAILY_LIMIT - serverUsage.remaining;
  }
  u.date = today();
  saveUsage(u);
}

/** Check subscription status from server on app load. */
export async function refreshPremiumStatus(): Promise<boolean> {
  try {
    const deviceId = getDeviceId();
    if (!deviceId) return false;

    const url = new URL("/api/subscription", window.location.origin);
    // Pass platform so server can check RevenueCat for native apps
    const platform = getPlatform();
    if (platform !== "web") {
      url.searchParams.set("platform", platform);
    }
    // Check if we just came back from checkout
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    if (sessionId) {
      url.searchParams.set("session_id", sessionId);
    }

    const res = await fetch(url.toString(), {
      headers: { "x-device-id": deviceId },
    });
    if (!res.ok) return isPremium();

    const data = await res.json();
    setPremium(data.premium);
    return data.premium;
  } catch {
    return isPremium();
  }
}
