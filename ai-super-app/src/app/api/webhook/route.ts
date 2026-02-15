export const dynamic = "force-dynamic";

import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { setCachePremium } from "@/lib/premium-cache";

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeKey || !webhookSecret) {
    return NextResponse.json({ error: "Not configured" }, { status: 503 });
  }

  const stripe = new Stripe(stripeKey);
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.customer) {
          const customer = await stripe.customers.retrieve(
            session.customer as string
          );
          if (!customer.deleted && customer.metadata?.deviceId) {
            setCachePremium(customer.metadata.deviceId, true);
          }
        }
        break;
      }

      case "customer.subscription.deleted":
      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        if (sub.customer) {
          const customer = await stripe.customers.retrieve(
            sub.customer as string
          );
          if (!customer.deleted && customer.metadata?.deviceId) {
            const isActive = sub.status === "active";
            setCachePremium(customer.metadata.deviceId, isActive);
          }
        }
        break;
      }
    }
  } catch (e) {
    console.error("Webhook processing error:", e);
  }

  return NextResponse.json({ received: true });
}
