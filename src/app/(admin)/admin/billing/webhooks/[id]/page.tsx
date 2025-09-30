// app/admin/billing/webhooks/[id]/page.tsx
import { redirect } from "next/navigation";
import { auth } from "../../../../../../../auth";
import { getWebhookEvent } from "@/components/admin/webhooks/data";
import styles from "./WebhookDetail.module.css";

export const runtime = "nodejs";

export default async function WebhookDetail({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/login");

  const ev = await getWebhookEvent(params.id);
  if (!ev) redirect("/admin/billing/webhooks");

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Webhook Event</h1>
      <div className={styles.grid}>
        <div>
          <div className={styles.label}>Type</div>
          <div className={styles.val}>{ev.type}</div>
        </div>
        <div>
          <div className={styles.label}>Status</div>
          <div className={styles.val}>{ev.status}</div>
        </div>
        <div>
          <div className={styles.label}>Stripe Event ID</div>
          <div className={styles.val}>{ev.stripeEventId}</div>
        </div>
        <div>
          <div className={styles.label}>Created</div>
          <div className={styles.val}>{ev.createdAt.toISOString()}</div>
        </div>
        {ev.errorMessage ? (
          <div style={{ gridColumn: "1 / -1" }}>
            <div className={styles.label}>Error</div>
            <pre className={styles.pre}>{ev.errorMessage}</pre>
          </div>
        ) : null}
        <div style={{ gridColumn: "1 / -1" }}>
          <div className={styles.label}>Payload</div>
          <pre className={styles.pre}>
            {JSON.stringify(ev.payload, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}
