import styles from "./AdminPage.module.css";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import UserButton from "@/components/dashboard/UserButton/UserButton";
// import Link from "next/link";
import Button from "@/components/shared/Button/Button";

export default async function AdminPage() {
  const session = await auth();
  if (!session || session.user.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <main className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h1 className={styles.heading}>Admin Dashboard</h1>
          <UserButton />
          <section style={{ marginTop: "2rem" }}>
            <h2 className={styles.subheading}>Blog</h2>
            <p className={styles.copy ?? ""}>
              Create and manage posts. Drafts are visible only to admins.
            </p>

            <div className={styles.btnContainer}>
              <Button
                href='/admin/blog/new'
                btnType='black'
                text='New Post +'
              />
              <Button
                href='/admin/blog'
                btnType='blackOutline'
                text='Manage Posts'
              />
              {/* <Link
                href='/admin/blog/new'
                className='rounded-md bg-black px-4 py-2 text-white'
              >
                New Post
              </Link>

              <Link href='/admin/blog' className='rounded-md border px-4 py-2'>
                Manage Posts
              </Link> */}
            </div>
          </section>
        </div>
      </LayoutWrapper>
    </main>
  );
}
