import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
// import Image from "next/image";
// import llustration from "../../../../public/illustrations/aboutIllustration.png";
import Marquee from "@/components/shared/Marquee/Marquee";
import Button from "@/components/shared/Button/Button";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <div className={styles.imgContainer1}>
            <Image
            src={llustration}
            alt='thinking'
            fill
            className={styles.img1}
            priority
            />
            </div> */}
            <SectionIntroii title='About us ' />
            <h1 className={styles.heading}>
              Comprehensive solutions <br className={styles.br} /> tailored to
              your needs
            </h1>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='black'
                text='Book your discovery call'
              />
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.copy}>
              We build booking websites that act like a 24/7 front desk—so your
              clients can book, pay, reschedule, and show up without phone tag.
              Built in Phoenix. Serving salons, med-spas, rentals, and black-car
              services everywhere.
            </p>
            <ImageCluster size='small' orientation='horizontal' color='black' />
          </div>
        </div>
      </LayoutWrapper>
      <Marquee />
    </section>
  );
}
