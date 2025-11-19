import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import llustration from "../../../../public/images/whydb.jpg";
import Button from "@/components/shared/Button/Button";
import Illustration from "../../../../public/illustrations/aboutIllustration.png";

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.illustrationContainer}>
              <Image
                src={Illustration}
                alt='thinking'
                fill
                className={styles.illustration}
              />
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.imgContainer}>
              <Image
                src={llustration}
                alt='thinking'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <SectionIntroii title='About us ' />
            <h1 className={`${styles.heading} h2`}>
              Comprehensive solutions <br className={styles.br} /> tailored to
              your needs
            </h1>
            <p className={styles.copy}>
              We turn service websites into 24/7 front desks—so more people
              finish checkout, fewer people no-show, and your team stops chasing
              payments and DMs.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='black'
                text='Book your discovery call'
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
      {/* <Marquee /> */}
    </section>
  );
}
