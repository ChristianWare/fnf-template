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
            <h2 className={styles.heading}>Plans made simple</h2>
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
