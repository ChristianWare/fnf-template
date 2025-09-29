/* eslint-disable @typescript-eslint/no-explicit-any */
// app/admin/data.ts
// import { cache } from "react";
import { db } from "@/lib/db";
import { unstable_cache } from "next/cache";

type SubStatus = "active" | "trialing" | "past_due" | "canceled" | "unpaid";

export const getAdminKPIs = unstable_cache(
  async () => {
    const now = new Date();
    const in30d = new Date(now);
    in30d.setDate(now.getDate() + 30);

    const relevant: SubStatus[] = ["active", "trialing", "past_due"];

    const [activeCount, mrrCents, upcomingCount, atRiskCount] =
      await Promise.all([
        db.subscription.count({
          where: { status: { in: relevant } },
        }),
        db.subscription
          .aggregate({
            _sum: { unitAmount: true },
            where: { status: { in: relevant } },
          })
          .then((a) => a._sum.unitAmount ?? 0),
        db.subscription.count({
          where: {
            status: { in: relevant },
            cancelAtPeriodEnd: false,
            currentPeriodEnd: { gte: now, lte: in30d },
          },
        }),
        db.subscription.count({
          where: { status: "past_due" },
        }),
      ]);

    return {
      activeCount,
      mrr: mrrCents,
      upcomingCount,
      atRiskCount,
    };
  },
  ["admin:metrics"],
  { tags: ["admin:metrics"], revalidate: 300 } // 5 min
);

export const getUsersWithSubs = unstable_cache(
  async () => {
    const users = await db.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        // if you store it on User (recommended):
        stripeCustomerId: true as any, // remove "as any" if on your model
        // include latest/only subscription
        subscriptions: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            stripeSubscriptionId: true,
            planTier: true,
            status: true,
            unitAmount: true,
            currentPeriodEnd: true,
          },
        },
      },
    });

    // flatten shape for table
    return users.map((u) => {
      const sub = u.subscriptions?.[0];
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        stripeCustomerId: (u as any).stripeCustomerId ?? null,
        stripeSubscriptionId: sub?.stripeSubscriptionId ?? null,
        planTier: sub?.planTier ?? null,
        status: sub?.status ?? null,
        unitAmount: sub?.unitAmount ?? null,
        currentPeriodEnd: sub?.currentPeriodEnd ?? null,
      };
    });
  },
  ["admin:users"],
  { tags: ["admin:users"], revalidate: 300 }
);

export const getRecentUsersWithSubs = unstable_cache(
  async (take = 5) => {
    const users = await db.user.findMany({
      take,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        stripeCustomerId: true,
        subscriptions: {
          orderBy: { createdAt: "desc" },
          take: 1,
          select: {
            stripeSubscriptionId: true,
            planTier: true,
            status: true,
            unitAmount: true,
            currentPeriodEnd: true,
          },
        },
      },
    });

    return users.map((u) => {
      const sub = u.subscriptions[0];
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        stripeCustomerId: u.stripeCustomerId,
        stripeSubscriptionId: sub?.stripeSubscriptionId ?? null,
        planTier: sub?.planTier ?? null,
        status: sub?.status ?? null,
        unitAmount: sub?.unitAmount ?? null,
        currentPeriodEnd: sub?.currentPeriodEnd ?? null,
      };
    });
  },
  ["admin:users:recent"],
  { tags: ["admin:users"], revalidate: 300 }
);

export async function getUserDetails(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      subscriptions: {
        orderBy: { createdAt: "desc" },
        take: 5, // recent history if they’ve had multiple
      },
      accounts: true, // NextAuth providers (optional but handy)
      Post: { orderBy: { createdAt: "desc" }, take: 3 }, // if you want to show recent posts
    },
  });
  return user;
}