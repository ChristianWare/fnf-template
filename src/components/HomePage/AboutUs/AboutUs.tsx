import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='About Us' color='tan' />
          <h2 className={styles.heading}>
            Fonts & Footers is a specialist studio focused on one thing: turning
            visitors into booked appointments. We replace clunky DMs and
            marketplace fees with one-tap designed to launch quickly and convert
            reliably.
          </h2>
        <ImageCluster />
        </div>
      </LayoutWrapper>
    </section>
  );
}
