// app/account/layout.tsx
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AccountPage.module.css";

export const runtime = "nodejs";

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <main className={styles.parent}>
      <Nav />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
        <FinalCTAMain />
    </main>
  );
}
