import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";
// import Specialize from "../Specialize/Specialize";

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='About Us' color='tan' />
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
          </h2>
          <ImageCluster />
          {/* <Specialize /> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}
