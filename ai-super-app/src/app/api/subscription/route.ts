export const dynamic = "force-dynamic";

import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { checkPremium, setCachePremium } from "@/lib/premium-cache";

export async function GET(req: NextRequest) {
  const deviceId = req.headers.get("x-device-id");
  const sessionId = req.nextUrl.searchParams.get("session_id");

  // After checkout redirect: verify via session ID (avoids search indexing delay)
  if (sessionId && deviceId) {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (stripeKey) {
      try {
        const stripe = new Stripe(stripeKey);
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (
          session.payment_status === "paid" &&
          session.customer
        ) {
          const customer = await stripe.customers.retrieve(
            session.customer as string
          );
          if (
            !customer.deleted &&
            customer.metadata?.deviceId === deviceId
          ) {
            setCachePremium(deviceId, true);
            return NextResponse.json({ premium: true });
          }
        }
      } catch {
        // Fall through to normal check
      }
    }
  }

  if (!deviceId) {
    return NextResponse.json({ premium: false });
  }

  const premium = await checkPremium(deviceId);
  return NextResponse.json({ premium });
}
