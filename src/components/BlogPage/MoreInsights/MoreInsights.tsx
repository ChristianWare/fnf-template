import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./MoreInsights.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

export default function MoreInsights() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntroii title='More Insights' />
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
