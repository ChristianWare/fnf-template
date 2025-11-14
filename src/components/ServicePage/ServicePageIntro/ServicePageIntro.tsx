import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import llustration from "../../../../public/images/whydb.jpg";
import Marquee from "@/components/shared/Marquee/Marquee";
import Button from "@/components/shared/Button/Button";

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftLeft}>
              <p className={styles.copyii}>
                We build booking websites that act like a 24/7 front desk—so
                your clients can book, pay, reschedule, and show up without
                phone tag. Built in Phoenix. Serving salons, med-spas, rentals,
                and black-car services everywhere.
              </p>
              <div className={styles.imgContainerii}>
                <Image
                  src={llustration}
                  alt='thinking'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.leftRight}>
              <div className={styles.imgContainer}>
                <Image
                  src={llustration}
                  alt='thinking'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <SectionIntroii title='About us ' />
            <h1 className={`${styles.heading} h2`}>
              Comprehensive solutions <br className={styles.br} /> tailored to
              your needs
            </h1>
            <p className={styles.copy}>
              We build booking websites that act like a 24/7 front desk—so your
              clients can book, pay, reschedule, and show up without phone tag.
              Built in Phoenix. Serving salons, med-spas, rentals, and black-car
              services everywhere.
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
      <Marquee />
    </section>
  );
}
