import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
// import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";
import { AboutUsData } from "@/lib/data";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='Fonts & Footers' color='tan' />
          <h2 className={styles.heading}>
            {/* Overbooked by busywork? You won’t be alone. We’ve helped salons,
            wellness studios, trainers, chauffeurs, pet groomers, clinics, and
            tutors replace DM juggling with reliable, paid-in-advance
            appointments. */}
            Fonts & Footers is a specialist studio focused on one thing: turning
            visitors into booked appointments. We replace clunky DMs and
            marketplace fees with one-tap reservations, deposits on file, and
            real-time calendar sync — designed to launch quickly and convert
            reliably.
            {/* We offer services designed to deliver maximum value at each stage of
            your business. From initial consultation to final delivery, our team
            is dedicated to ensuring your success. */}
            {/* Start, grow, and scale your direct-booking website—at every stage of
            your business. From initial consultation to final delivery, our team
            is dedicated to ensuring your success. */}
          </h2>
          {/* <ImageCluster /> */}
          <span className={styles.span}>Common Features:</span>
          <div className={styles.bottom}>
            <div className={styles.mapDataContainer}>
              {AboutUsData.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <div className={styles.imgContainer}>
                    <Image src={x.src} alt='img' fill className={styles.img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              href='/pricing'
              btnType='lime'
              text='Explore all features'
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
