import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/specialize.png";
import Marquee from "@/components/shared/Marquee/Marquee";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntroii title='About us' />
            <h1 className={styles.heading}>
              Our custom booking websites empower entrepreneurs.
            </h1>
            <p className={`${styles.copy} subheading`}>
              {/* We empower entrepreneurs to elevate their businesses with custom
              booking websites tailored to their unique needs. Our custom
              websites are designed to enhance client engagement and streamline
              operations so you can focus on growing your brand, not managing
              admin tasks. */}
              We empower entrepreneurs to elevate their businesses with custom
              booking websites.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Specialize'
                fill
                className={styles.img}
                priority
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <Marquee />
    </section>
  );
}
