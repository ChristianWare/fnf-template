// app/admin/billing/webhooks/page.tsx
import { redirect } from "next/navigation";
import { auth } from "../../../../../../auth";
import styles from "./WebhooksPage.module.css";
import { Suspense } from "react";
import { WebhookTable } from "@/components/admin/WebhookTable/WebhookTable";

export const runtime = "nodejs";

export default async function WebhooksPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") redirect("/login");

  const sp = await searchParams;
  const page = Math.max(parseInt(sp.page ?? "1", 10) || 1, 1);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Webhook Events</h1>
      </header>

      <Suspense key={page} fallback={<div>Loading events…</div>}>
        <WebhookTable page={page} />
      </Suspense>
    </main>
  );
}
