import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutUs.module.css";
import Specialize from "../Specialize/Specialize";
import IndustriesIllustration from "../../../../public/images/industriesIllustration.png";
import Image from "next/image";

// import FnfLogo from "@/components/icons/FnfLogo/FnfLogo";

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

            <h2>Industries we work with</h2>
            <p className={`${styles.copy} subheading`}>
              Fonts & Footers is a specialized web development agency focused on
              one thing: turning visitors into booked appointments. Here are
              some industries we work with:
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
