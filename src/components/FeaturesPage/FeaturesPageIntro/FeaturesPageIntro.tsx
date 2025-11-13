import LayoutWrapper from '@/components/shared/LayoutWrapper'
import styles from './FeaturesPageIntro.module.css'
import SectionIntroii from '@/components/shared/SectionIntroii/SectionIntroii';

export default function FeaturesPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='Features' />
          <h1 className={styles.heading}>
            Everything you need to <br /> turn visitors into booked clients
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