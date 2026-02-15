export const dynamic = "force-dynamic";

import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!stripeKey || !priceId) {
    return NextResponse.json(
      { error: "Payments not configured" },
      { status: 503 }
    );
  }

  const stripe = new Stripe(stripeKey);
  const { deviceId } = await req.json();

  if (!deviceId || typeof deviceId !== "string") {
    return NextResponse.json({ error: "Missing device ID" }, { status: 400 });
  }

  try {
    // Check if this device already has a customer with active subscription
    const existing = await stripe.customers.search({
      query: `metadata["deviceId"]:"${deviceId}"`,
      limit: 1,
    });

    if (existing.data.length > 0) {
      const subs = await stripe.subscriptions.list({
        customer: existing.data[0].id,
        status: "active",
        limit: 1,
      });
      if (subs.data.length > 0) {
        return NextResponse.json({ error: "Already subscribed", premium: true });
      }
    }

    // Create or reuse customer
    const customer =
      existing.data.length > 0
        ? existing.data[0]
        : await stripe.customers.create({ metadata: { deviceId } });

    const origin = req.headers.get("origin") || "https://mt-2sby.vercel.app";

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?checkout=cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Checkout failed";
    console.error("Checkout error:", msg);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
