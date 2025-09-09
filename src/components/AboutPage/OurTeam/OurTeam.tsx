import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./OurTeam.module.css";
import Image from "next/image";
import ChrisImg from "../../../../public/images/chris.png";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

export default function OurTeam() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='From Founder' />

          <h2 className={styles.heading}>
            &ldquo;I’m Chris, founder of Fonts & Footers—building complete,
            deposit-ready booking websites that cut no-shows, speed checkout to
            under a minute, and turn busywork into predictable, prepaid
            revenue.&rdquo;
          </h2>
          <div className={styles.imgContainer}>
            <Image src={ChrisImg} alt='' className={styles.img} />
          </div>
          {/* <p className={styles.copy}>
              When you’re growing, you don’t need another pretty website. You
              need a partner who cares about filled calendars, fewer no-shows,
              and clear next steps. I’m Chris, founder of Fonts & Footers. Our
              niche is sharp: direct-booking websites that move visitors to paid
              appointments—fast. We track what matters—completion rate, show
              rate, prepaid %, rebooking, membership mix, and LTV/CAC—so you
              keep the relationship and the margin.
            </p>1 */}
          <div className={styles.signatureBox}>
            <SectionIntro title='Chris - Founder of Fonts & Footers' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
