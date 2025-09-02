import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Outcomes.module.css";

export default function Outcomes() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              A calm structure for ambitious brands
            </h2>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
