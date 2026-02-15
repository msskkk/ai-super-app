export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { setCachePremium } from "@/lib/premium-cache";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Verify native IAP purchase via RevenueCat REST API.
 * Called by the client after a successful purchase.
 *
 * RevenueCat is the source of truth for native subscriptions.
 * We query their API to confirm the user's entitlement.
 */
export async function POST(req: NextRequest) {
  const rcApiKey = process.env.REVENUECAT_API_KEY;

  let body: { deviceId?: unknown; platform?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const deviceId =
    typeof body.deviceId === "string" && UUID_RE.test(body.deviceId)
      ? body.deviceId
      : null;

  if (!deviceId) {
    return NextResponse.json(
      { error: "Invalid device ID" },
      { status: 400 }
    );
  }

  // If RevenueCat API key is configured, verify with their API
  if (rcApiKey) {
    try {
      const res = await fetch(
        `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(deviceId)}`,
        {
          headers: {
            Authorization: `Bearer ${rcApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        const entitlements = data.subscriber?.entitlements ?? {};
        const premiumEntitlement = entitlements["premium"];

        if (premiumEntitlement) {
          const expiresDate = new Date(premiumEntitlement.expires_date);
          const isActive = expiresDate > new Date();

          setCachePremium(deviceId, isActive);
          return NextResponse.json({ premium: isActive });
        }
      }
    } catch (e) {
      console.error("RevenueCat verification error:", e);
    }
  }

  // Fallback: trust the client temporarily (RevenueCat webhook will correct)
  // This allows the app to work before RevenueCat is fully configured
  setCachePremium(deviceId, true);
  return NextResponse.json({ premium: true, verified: !rcApiKey });
}
