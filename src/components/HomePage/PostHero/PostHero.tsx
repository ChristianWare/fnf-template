import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PostHero.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import ServiceIllustration from "../../../../public/images/calendarii.png";


export default function PostHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
           <div className={styles.imgContainer1}>
                        <Image
                          src={ServiceIllustration}
                          alt='Service Illustration'
                          fill
                          className={styles.img}
                          priority
                        />
                      </div>
          <SectionIntroii title='About us' />
          <h2 className={styles.heading}>
            We build{" "}
            <span className={`${styles.span1} span1`}>
              custom booking websites
            </span>{" "}
            that allow you to have {" "}
            <span className={`${styles.span2} span2`}>full control</span> over
            your bookings, reduce reliance on third-party platforms, and{" "}
            <span className={`${styles.span1} span1`}>improve</span> your{" "}
            <span className={`${styles.span2} span2`}>profit margins.</span>
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
