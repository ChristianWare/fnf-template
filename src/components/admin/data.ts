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

export const getSubscriptionMetrics = unstable_cache(
  async () => {
    const relevant = ["active", "trialing", "past_due"] as const;

    const [activeCount, trialingCount, pastDueCount, mrrSum] =
      await Promise.all([
        db.subscription.count({ where: { status: "active" } }),
        db.subscription.count({ where: { status: "trialing" } }),
        db.subscription.count({ where: { status: "past_due" } }),
        db.subscription.aggregate({
          _sum: { unitAmount: true },
          where: { status: { in: relevant as any } },
        }),
      ]);

    return {
      activeCount,
      trialingCount,
      pastDueCount,
      mrrCents: mrrSum._sum.unitAmount ?? 0,
    };
  },
  ["admin:subs:metrics"],
  { tags: ["admin:subs"], revalidate: 300 }
);

// List with filters + pagination
export async function listSubscriptions({
  page,
  pageSize,
  plan,
  status,
  q,
}: {
  page: number;
  pageSize: number;
  plan: string; // PlanTier or ""
  status: string; // SubStatus or ""
  q: string; // search text
}) {
  const where: any = {};

  if (plan) where.planTier = plan;
  if (status) where.status = status as any;

  // Search by user name or email
  if (q) {
    where.user = {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { email: { contains: q, mode: "insensitive" } },
      ],
    };
  }

  const [total, subs] = await Promise.all([
    db.subscription.count({ where }),
    db.subscription.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        user: {
          select: { id: true, name: true, email: true, stripeCustomerId: true },
        },
      },
    }),
  ]);

  const rows = subs.map((s) => ({
    id: s.id,
    userId: s.user.id,
    userName: s.user.name,
    userEmail: s.user.email,
    planTier: s.planTier,
    status: s.status,
    unitAmount: s.unitAmount,
    currentPeriodEnd: s.currentPeriodEnd ? new Date(s.currentPeriodEnd) : null,
    cancelAtPeriodEnd: s.cancelAtPeriodEnd,
    stripeCustomerId: s.user.stripeCustomerId!,
    stripeSubscriptionId: s.stripeSubscriptionId,
  }));

  return { total, rows };
}