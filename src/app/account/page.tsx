// app/account/page.tsx
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import styles from "./AccountPage.module.css";
import Link from "next/link";
import { db } from "@/lib/db";
import { format } from "date-fns";


export const runtime = "nodejs";

export default async function AccountPage() {
 const session = await auth();
 if (!session) redirect("/login");

 // Use email (unique) if id isn’t in the session
 const where = session.user?.id
   ? { id: session.user.id }
   : session.user?.email
     ? { email: session.user.email }
     : null;

 if (!where) redirect("/login"); // no identifier at all; be safe

 const user = await db.user.findUnique({
   where,
   include: {
     subscriptions: { orderBy: { createdAt: "desc" }, take: 1 },
   },
 });

 if (!user) redirect("/login");

 const sub = user.subscriptions?.[0] ?? null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Account</h1>
      </header>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Plan</h2>

        {sub ? (
          <div className={styles.grid}>
            <Detail label='Plan' value={readablePlan(sub.planTier)} />
            <Detail label='Status' value={sub.status} />
            <Detail label='Amount' value={currency(sub.unitAmount)} />
            <Detail
              label='Next bill'
              value={
                sub.currentPeriodEnd
                  ? format(new Date(sub.currentPeriodEnd), "MMM d, yyyy")
                  : "—"
              }
            />
            <Detail
              label='Renews'
              value={
                sub.cancelAtPeriodEnd
                  ? "Will cancel at period end"
                  : "Auto-renew on next bill date"
              }
            />
          </div>
        ) : (
          <p className={styles.muted}>
            You don’t have a subscription yet. Choose a plan to get started.
          </p>
        )}

        <div className={styles.actions}>
          {sub ? (
            // Server-safe form: posts to portal route which redirects to Stripe
            <form method='POST' action='/account/billing/portal'>
              <button className={styles.primaryBtn} type='submit'>
                Manage subscription
              </button>
            </form>
          ) : (
            <Link href='/#pricing' className={styles.primaryLink}>
              View plans
            </Link>
          )}
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Profile</h2>
        <div className={styles.grid}>
          <Detail label='Name' value={user?.name ?? "—"} />
          <Detail label='Email' value={user?.email ?? "—"} />
          <Detail
            label='Billing'
            value={
              user?.stripeCustomerId ? (
                <a
                  href={`https://dashboard.stripe.com/customers/${user.stripeCustomerId}`}
                  target='_blank'
                  className={styles.ext}
                >
                  View in Stripe ↗
                </a>
              ) : (
                "—"
              )
            }
          />
        </div>
      </section>
    </div>
  );
}

function readablePlan(p?: string | null) {
  switch (p) {
    case "SOLO":
      return "Solo";
    case "TEAM":
      return "Team";
    case "RENTAL_FLEET":
      return "Rental/Fleet";
    case "MULTI_LOCATION":
      return "Multi-Location";
    case "CUSTOM":
      return "Custom";
    default:
      return "—";
  }
}

function currency(cents?: number | null) {
  if (cents == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className={styles.detail}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
