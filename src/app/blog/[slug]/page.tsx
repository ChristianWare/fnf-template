import styles from "./BlogPostPage.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";

export default async function BlogPostPage() {
  return (
    <main className={styles.container}>
      <LayoutWrapper>
        <h1>hey!</h1>
      </LayoutWrapper>
    </main>
  );
}
