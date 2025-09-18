import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PricingPreview.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ServiceDetails from "@/components/PricingPage/ServiceDetails/ServiceDetails";
import Button from "@/components/shared/Button/Button";

export default function PricingPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntroii title='Pricing' />
            <h2 className={styles.heading}>
              Affordable plans for every budget
            </h2>
            <p className={styles.copy}>
              Explore our range of pricing options designed to fit any budget,
              offering exceptional value and flexibility to meet your unique
              needs
            </p>
          </div>
          <div className={styles.bottom}>
            <ServiceDetails />
          </div>
          <div className={styles.btnContainer}>
            <Button
              href='/pricing'
              btnType='lime'
              text='See all pricing details'
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
