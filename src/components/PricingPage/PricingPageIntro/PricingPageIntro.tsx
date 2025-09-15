import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PricingPageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";
import Image from "next/image";
import Img1 from "../../../../public/images/pricingii.png";


export default function PricingPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='thinking'
              fill
              className={styles.img}
              priority
            />
          </div>
          <SectionIntroii title='Pricing' />
          <h1 className={styles.heading}>
            From blank page <br /> to booked-solid.
          </h1>
          <p className={styles.copy}>
            Choose the engagement that matches your team size, locations, and
            growth goals.
          </p>
          <ImageCluster color='black' size='small' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
