// app/account/upgrade/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "../../../../../auth";
import { db } from "@/lib/db";
import { planToPriceId, setupFeePriceId, Plan } from "@/lib/billing/prices";
import { firstOfNextMonthPhoenixUnix } from "@/lib/dates";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const form = await req.formData();
  const plan = form.get("plan") as Plan | null;
  if (!plan) return new NextResponse("Missing plan", { status: 400 });

  // Load user
  const user = await db.user.findUnique({
    where: { email: session.user.email! },
  });
  if (!user) return new NextResponse("User not found", { status: 404 });

  // Ensure Stripe customer
  let stripeCustomerId = user.stripeCustomerId;
  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name ?? undefined,
      metadata: { userId: user.id },
    });
    stripeCustomerId = customer.id;
    await db.user.update({
      where: { id: user.id },
      data: { stripeCustomerId },
    });
  }

  const trialEnd = firstOfNextMonthPhoenixUnix();
  const setupPrice = setupFeePriceId();
  const planPrice = planToPriceId(plan);

  const checkout = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: stripeCustomerId,
    // One-time $500 setup as a product line item; charged immediately
    line_items: [
      { price: setupPrice, quantity: 1 },
      { price: planPrice, quantity: 1 },
    ],
    subscription_data: {
      trial_end: trialEnd, // first of next month
      metadata: {
        userId: user.id,
        planTier: plan,
      },
    },
    allow_promotion_codes: true,
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/account?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/account?canceled=1`,
  });

  return NextResponse.redirect(checkout.url!);
}
