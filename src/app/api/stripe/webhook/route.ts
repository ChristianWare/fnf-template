/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/stripe/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

function toDateOrNull(ts?: number | null) {
  return ts ? new Date(ts * 1000) : null;
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return new NextResponse("Missing signature", { status: 400 });

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret)
    return new NextResponse("Missing webhook secret", { status: 500 });

  // IMPORTANT: read raw body string for signature verification
  const raw = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch (err) {
    console.error("Invalid webhook signature:", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerId = session.customer as string | null;

        // Find the user by metadata.userId (top-level) or by email if present
        let userId =
          (session.metadata?.userId as string | undefined) ?? undefined;
        if (!userId && session.customer_details?.email) {
          const u = await db.user.findUnique({
            where: { email: session.customer_details.email },
          });
          if (u) userId = u.id;
        }

        if (customerId && userId) {
          await db.user.update({
            where: { id: userId },
            data: { stripeCustomerId: customerId },
          });
        }
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;

        // Map to your User
        const customerId = sub.customer as string;
        let user = await db.user.findUnique({
          where: { stripeCustomerId: customerId },
        });

        // Fallback: use metadata.userId from the subscription
        if (!user) {
          const metaUserId = sub.metadata?.userId as string | undefined;
          if (metaUserId) {
            user = await db.user.findUnique({ where: { id: metaUserId } });
            if (user && !user.stripeCustomerId) {
              await db.user.update({
                where: { id: user.id },
                data: { stripeCustomerId: customerId },
              });
            }
          }
        }

        if (!user) {
          console.warn(
            "No user found for subscription",
            sub.id,
            "customer",
            customerId
          );
          return NextResponse.json({ ok: true });
        }

        const price = sub.items.data[0]?.price || null;
        const unitAmount = price?.unit_amount ?? null;
        const currency = (price?.currency ?? "usd").toUpperCase();
        const planTier =
          (sub.metadata?.planTier as string | undefined) ??
          (price?.nickname as string | undefined) ??
          null;

        // Next bill: prefer trial_end (anchor) else current_period_end
        const trialEnd = (sub as any).trial_end as number | undefined;
        const cpe = (sub as any).current_period_end as number | undefined;
        const nextAt = trialEnd ?? cpe ?? null;

        // Your schema likely stores lowercase Stripe statuses: "active", "trialing", etc.
        const status = sub.status; // keep Stripe’s lowercase status

        // Upsert your Subscription row, keyed by stripeSubscriptionId
        await db.subscription.upsert({
          where: { stripeSubscriptionId: sub.id },
          create: {
            stripeSubscriptionId: sub.id,
            stripePriceId: price?.id ?? "",
            userId: user.id,
            planTier: (planTier as any) ?? "SOLO",
            status: status as any,
            unitAmount: unitAmount ?? 0,
            currency,
            currentPeriodEnd: toDateOrNull(nextAt),
            cancelAtPeriodEnd: sub.cancel_at_period_end ?? false,
            setupFeePaidAt: null,
            meta: {},
          },
          update: {
            stripePriceId: price?.id ?? "",
            planTier: (planTier as any) ?? undefined,
            status: status as any,
            unitAmount: unitAmount ?? undefined,
            currency,
            currentPeriodEnd: toDateOrNull(nextAt),
            cancelAtPeriodEnd: sub.cancel_at_period_end ?? false,
            updatedAt: new Date(),
          },
        });

        break;
      }

      case "invoice.paid": {
        const base = event.data.object as Stripe.Invoice;

        // Re-fetch with price expansion so TS knows `price` exists
        if (!base.id) {
          throw new Error("Invoice id is undefined");
        }
        const inv = await stripe.invoices.retrieve(base.id, {
          expand: ["lines.data.price"],
        });

        const customerId = inv.customer as string | null;
        const setupPriceId = process.env.STRIPE_SETUP_FEE_PRICE;

        if (customerId && setupPriceId) {
          const user = await db.user.findUnique({
            where: { stripeCustomerId: customerId },
          });
          if (user) {
            const hasSetup = inv.lines.data.some(
              (l) => (l as any).price?.id === setupPriceId
            );
            if (hasSetup) {
              await db.subscription.updateMany({
                where: { userId: user.id, setupFeePaidAt: null },
                data: { setupFeePaidAt: new Date() },
              });
            }
          }
        }
        break;
      }

      default:
        // ignore other events for now
        break;
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new NextResponse("Webhook processing error", { status: 500 });
  }
}
