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

  let body: { deviceId?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { deviceId } = body;

  if (!deviceId || typeof deviceId !== "string") {
    return NextResponse.json({ error: "Missing device ID" }, { status: 400 });
  }

  // Validate device ID format (UUID v4)
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(deviceId)) {
    return NextResponse.json({ error: "Invalid device ID" }, { status: 400 });
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

    const ALLOWED_ORIGINS = [
      "https://mt-2sby.vercel.app",
      process.env.NEXT_PUBLIC_APP_URL,
    ].filter(Boolean);

    const requestOrigin = req.headers.get("origin") || "";
    const origin = ALLOWED_ORIGINS.includes(requestOrigin)
      ? requestOrigin
      : "https://mt-2sby.vercel.app";

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
