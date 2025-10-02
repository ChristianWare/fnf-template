// app/account/billing/history/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import { auth } from "../../../../../auth";
import { db } from "@/lib/db";
import styles from "@/components/account/ChargesTable/ChargesTable.module.css";
import { format } from "date-fns";
import Link from "next/link";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-08-27.basil",
});

function currency(cents?: number | null, code = "USD") {
  if (cents == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

/** Prefer charge.receipt_url, then hosted invoice, then PDF */
function getReceiptLink(inv: Stripe.Invoice): string | null {
  const c = (inv as any).charge as Stripe.Charge | string | null | undefined;
  const chargeObj =
    typeof c === "object" && c && "id" in c ? (c as Stripe.Charge) : null;

  return (
    chargeObj?.receipt_url ??
    (inv.hosted_invoice_url as string | null | undefined) ??
    (inv.invoice_pdf as string | null | undefined) ??
    null
  );
}

export default async function BillingHistoryPage({
  searchParams,
}: {
  searchParams?: { starting_after?: string; ending_before?: string };
}) {
  const session = await auth();
  if (!session) return null;

  const where = session.user?.id
    ? { id: session.user.id }
    : session.user?.email
      ? { email: session.user.email }
      : null;
  if (!where) return null;

  const user = await db.user.findUnique({
    where,
    select: { stripeCustomerId: true },
  });
  if (!user?.stripeCustomerId) {
    return (
      <section className={styles.card}>
        <h1 className={styles.title}>Billing history</h1>
        <p className={styles.muted}>No Stripe customer found.</p>
      </section>
    );
  }

  const params: Stripe.InvoiceListParams = {
    customer: user.stripeCustomerId,
    limit: 20,
    expand: [
      "data.charge",
      "data.payment_intent.latest_charge",
      "data.lines.data.price", // expanded even if TS types don’t show .price
    ],
  };
  if (searchParams?.starting_after)
    params.starting_after = searchParams.starting_after;
  if (searchParams?.ending_before)
    params.ending_before = searchParams.ending_before;

  const invoices = await stripe.invoices.list(params);

  const rows = invoices.data.map((inv) => {
    const created = new Date((inv.created ?? 0) * 1000);
    const status = inv.status ?? "open";
    const amountPaid = inv.amount_paid ?? 0;
    const currencyCode = (inv.currency ?? "usd").toUpperCase();

    // Description: prefer line.price.nickname (via any), fall back to line.description
    const line0 = inv.lines?.data?.[0] as Stripe.InvoiceLineItem | undefined;
    const nicknameFromPrice = (
      line0 ? (line0 as any)?.price?.nickname : undefined
    ) as string | undefined;
    const nickname =
      nicknameFromPrice ??
      (line0?.description as string | undefined) ??
      "Subscription";

    // Try charge.receipt_url; if not, try PI.latest_charge.receipt_url
    let receiptUrl = getReceiptLink(inv);
    if (!receiptUrl) {
      const pi: any = (inv as any).payment_intent;
      const latest = pi?.latest_charge as Stripe.Charge | undefined;
      receiptUrl = latest?.receipt_url ?? null;
    }

    return {
      id: inv.id,
      date: created,
      description: nickname,
      amountPaid,
      currency: currencyCode,
      status,
      receiptUrl,
    };
  });

  // Keep newest first
  rows.sort((a, b) => b.date.getTime() - a.date.getTime());

  // const firstId = rows[0]?.id;
  const lastId = rows[rows.length - 1]?.id;

  return (
    <section className={styles.card}>
      <h1 className={styles.title}>Billing history</h1>

      {rows.length === 0 ? (
        <p className={styles.muted}>No invoices yet.</p>
      ) : (
        <>
          <div className={styles.tableWrap}>
            <table className={styles.table} role='table'>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>{format(r.date, "MMM d, yyyy")}</td>
                    <td>{r.description}</td>
                    <td className={styles.status}>{r.status}</td>
                    <td>{currency(r.amountPaid, r.currency)}</td>
                    <td>
                      {r.receiptUrl ? (
                        <a
                          href={r.receiptUrl}
                          target='_blank'
                          rel='noreferrer'
                          className={styles.link}
                        >
                          View receipt ↗
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {/* Newer page */}
            {/* {(searchParams?.ending_before || firstId) && firstId ? (
              <Link
                className={styles.link}
                href={{
                  pathname: "/account/billing/history",
                  query: { ending_before: firstId },
                }}
              >
                Newer
              </Link>
            ) : null} */}

            {/* Older page */}
            {invoices.has_more && lastId ? (
              <Link
                className={styles.link}
                href={{
                  pathname: "/account/billing/history",
                  query: { starting_after: lastId },
                }}
              >
                Older
              </Link>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
}
