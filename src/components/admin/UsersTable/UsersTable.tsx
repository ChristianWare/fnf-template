// app/admin/components/UsersTable.tsx
import Link from "next/link";
import styles from "./UsersTable.module.css";
import { getUsersWithSubs } from "../data";
import { format } from "date-fns";

export async function UsersTable() {
  const rows = await getUsersWithSubs();

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Users & Plans</h2>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Next bill</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>
                  <div className={styles.userCell}>
                    <div className={styles.name}>{r.name ?? "—"}</div>
                    <div className={styles.email}>{r.email}</div>
                  </div>
                </td>
                <td>{r.planTier ?? "—"}</td>
                <td>
                  <StatusBadge status={r.status ?? "—"} />
                </td>
                <td>{r.unitAmount != null ? currency(r.unitAmount) : "—"}</td>
                <td>
                  {r.currentPeriodEnd
                    ? format(new Date(r.currentPeriodEnd), "MMM d, yyyy")
                    : "—"}
                </td>
                <td className={styles.actions}>
                  {r.stripeCustomerId ? (
                    <Link
                      href={`https://dashboard.stripe.com/customers/${r.stripeCustomerId}`}
                      target='_blank'
                      className={styles.actionLink}
                    >
                      Stripe Customer
                    </Link>
                  ) : (
                    <span className={styles.muted}>No Stripe ID</span>
                  )}
                  {r.stripeSubscriptionId ? (
                    <Link
                      href={`https://dashboard.stripe.com/subscriptions/${r.stripeSubscriptionId}`}
                      target='_blank'
                      className={styles.actionLink}
                    >
                      Subscription
                    </Link>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function currency(cents: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "active" || status === "trialing"
      ? "ok"
      : status === "past_due"
        ? "warn"
        : status === "canceled" || status === "unpaid"
          ? "bad"
          : "muted";
  return <span className={`${styles.badge} ${styles[tone]}`}>{status}</span>;
}
