import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PricingPageIntro.module.css";
import Nav from "@/components/shared/Nav/Nav";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";

export default function PricingPageIntro() {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='Pricing' />
          <h1 className={styles.heading}>
            From blank page <br /> to booked-solid.
          </h1>
          <p className={styles.copy}>
            Choose the engagement that matches your team size, locations, and
            growth goals.
          </p>
          <ImageCluster color='black' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
