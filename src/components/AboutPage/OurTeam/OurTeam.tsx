import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./OurTeam.module.css";
import Image from "next/image";
import ChrisImg from "../../../../public/images/chris.jpg";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function OurTeam() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={ChrisImg} alt='' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Founder-led, partner-minded — <br />
              focused on your bookings
            </h2>
            <p className={styles.copy}>
              When you’re growing, you don’t need another pretty website. You
              need a partner who cares about filled calendars, fewer no-shows,
              and clear next steps. I’m Chris, founder of Fonts & Footers. Our
              niche is sharp: direct-booking websites that move visitors to paid
              appointments—fast. We track what matters—completion rate, show
              rate, prepaid %, rebooking, membership mix, and LTV/CAC—so you
              keep the relationship and the margin.
            </p>
            <div className={styles.signatureBox}>
              <SectionIntro title='Chris - Founder of Fonts & Footers' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
