/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/stripe/webhook/route.ts
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  let evt: Stripe.Event;

  try {
    evt = stripe.webhooks.constructEvent(body, sig!, endpointSecret);
  } catch (err: any) {
    return new NextResponse(
      `Webhook signature verification failed: ${err.message}`,
      { status: 400 }
    );
  }

  try {
    switch (evt.type) {
      case "checkout.session.completed": {
        const cs = evt.data.object as Stripe.Checkout.Session;
        if (cs.mode === "subscription" && cs.subscription) {
          const sub = await stripe.subscriptions.retrieve(
            cs.subscription as string,
            { expand: ["latest_invoice"] }
          );
          // Upsert customer on user if missing
          const userId = sub.metadata?.userId ?? null;
          if (userId && cs.customer) {
            await db.user.update({
              where: { id: userId },
              data: {
                stripeCustomerId:
                  typeof cs.customer === "string"
                    ? cs.customer
                    : cs.customer.id,
              },
            });
          }
          // setupFeePaidAt: the initial invoice includes the one-time price; mark it now
          await upsertSubscriptionFromStripe(sub, true);
        }
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = evt.data.object as Stripe.Subscription;
        await upsertSubscriptionFromStripe(sub, false);
        break;
      }
      case "invoice.paid":
      case "invoice.payment_failed": {
        // Optional: use for dunning metrics
        break;
      }
      default:
        break;
    }
  } catch (e: any) {
    // Log and keep 200 to avoid endless retries, or return 500 if you want retry behavior
    console.error("Stripe webhook error:", e);
  }

  return NextResponse.json({ received: true });
}

async function upsertSubscriptionFromStripe(
  sub: Stripe.Subscription,
  markSetupFee: boolean
) {
  const customerId =
    typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  const price = sub.items.data[0]?.price;
  const planTier = (sub.metadata?.planTier as any) ?? undefined;

  if (!customerId || !price) return;

  const user = await db.user.findFirst({
    where: { stripeCustomerId: customerId },
  });
  if (!user) return;

  await db.subscription.upsert({
    where: { stripeSubscriptionId: sub.id },
    create: {
      userId: user.id,
      stripeSubscriptionId: sub.id,
      stripePriceId: price.id,
      planTier: planTier ?? "SOLO",
      status: sub.status as any,
      unitAmount: price.unit_amount ?? 0,
      currency: (price.currency ?? "usd").toUpperCase(),
      currentPeriodEnd: (sub as any).current_period_end
        ? new Date((sub as any).current_period_end * 1000)
        : null,
      cancelAtPeriodEnd: sub.cancel_at_period_end ?? false,
      setupFeePaidAt: markSetupFee ? new Date() : undefined,
    },
    update: {
      stripePriceId: price.id,
      planTier: planTier ?? "SOLO",
      status: sub.status as any,
      unitAmount: price.unit_amount ?? 0,
      currency: (price.currency ?? "usd").toUpperCase(),
      currentPeriodEnd: (sub as any).current_period_end
        ? new Date((sub as any).current_period_end * 1000)
        : null,
      cancelAtPeriodEnd: sub.cancel_at_period_end ?? false,
      ...(markSetupFee ? { setupFeePaidAt: new Date() } : {}),
    },
  });
}
