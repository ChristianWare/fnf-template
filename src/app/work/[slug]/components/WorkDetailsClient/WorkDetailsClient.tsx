import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WorkDetailsClient.module.css";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function WorkDetailsClient() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2>WorkDetailsClient</h2>
      </LayoutWrapper>
    </section>
  );
}
