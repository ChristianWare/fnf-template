import LayoutWrapper from '@/components/shared/LayoutWrapper'
import styles from './FeaturesPageIntro.module.css'
import SectionIntroii from '@/components/shared/SectionIntroii/SectionIntroii';
import Image from 'next/image';
import ServiceIllustration from "../../../../public/images/serviceIllustration.png";

export default function FeaturesPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image
              src={ServiceIllustration}
              alt='thinking'
              fill
              className={styles.img}
              priority
            />
          </div>
          <SectionIntroii title='Features' />
            <h1 className={styles.heading}>
            Premium features <br /> at your service
            </h1>
          <p className={styles.copy}>
            One-screen checkout, deposit logic, smart reminders, calendar sync,
            add-ons, and owner-friendly analytics.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}