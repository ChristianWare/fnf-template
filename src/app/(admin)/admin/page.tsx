import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import styles from "./AdminPage.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import UserButton from "@/components/dashboard/UserButton/UserButton";

export default async function AdminPage() {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <main className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <h1 className={styles.heading}>Admin Dashboard</h1>
          <UserButton />
        </div>
      </LayoutWrapper>
    </main>
  );
}
