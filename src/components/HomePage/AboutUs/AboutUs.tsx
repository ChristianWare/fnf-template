import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import Specialize from "../Specialize/Specialize";
import IndustriesIllustration from "../../../../public/illustrations/chessIllustration.png";
import Image from "next/image";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={IndustriesIllustration}
                alt='Service Illustration'
                fill
                className={styles.img}
                priority
              />
            </div>
            <SectionIntroii title='Process' />
            <h2>
              {" "}
              <span className='span1'>How</span> {" "} we work {" "}
              <span className='span2'>together</span>
            </h2>
            <p className={styles.copy}>
              When you partner with Fonts & Footers, you get more than just a
              booking website. You get a team dedicated to helping your business
              thrive with features designed to reduce no-shows, speed up
              checkout, and turn busywork into predictable, prepaid revenue.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.bottom}>
              <Specialize />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
