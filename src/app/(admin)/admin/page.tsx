// app/admin/page.tsx
import styles from "./AdminPage.module.css";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { Suspense } from "react";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { KPIGrid } from "@/components/admin/KPIGrid/KPIGrid";
import { UsersTable } from "@/components/admin/UsersTable/UsersTable"; 
import RefreshButton from "@/components/admin/RefreshButton/RefreshButton";

export const runtime = "nodejs"; // Prisma/Stripe safe

export default async function AdminPage() {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <main className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.headerRow}>
            <h1 className={styles.heading}>Admin Dashboard</h1>
            <RefreshButton />
          </div>

          <Suspense fallback={<div>Loading metrics…</div>}>
            <KPIGrid />
          </Suspense>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.subheading}>Users & Plans</h2>
            </div>
            <Suspense fallback={<div>Loading users…</div>}>
              <UsersTable />
            </Suspense>
          </section>
        </div>
      </LayoutWrapper>
      <FinalCTAMain />
    </main>
  );
}
