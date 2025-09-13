import styles from "./NewPostPage.module.css";
import AdminNewPostForm from "@/components/admin/AdminNewPostForm/AdminNewPostForm";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import { createPostAction } from "@/lib/posts";

export const runtime = "nodejs";

export default function NewPostPage() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <AdminNewPostForm action={createPostAction} />;
      </LayoutWrapper>
    </div>
  );
}
