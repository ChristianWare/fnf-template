import styles from "./AdminPage.module.css";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import UserButton from "@/components/dashboard/UserButton/UserButton";
// import Link from "next/link";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";

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
          <h1 className={styles.heading}>Admin Dashboard</h1>
          <UserButton />
        </div>
      </LayoutWrapper>
      <FinalCTAMain />
    </main>
  );
}
