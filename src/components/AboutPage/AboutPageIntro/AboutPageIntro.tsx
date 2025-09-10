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
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='Specialize' fill className={styles.img} />
          </div>
          <SectionIntroii title='About us' />
          <h1 className={styles.heading}>
            Our custom booking websites <br /> are a game-changer.
          </h1>
          {/* <p className={styles.copy}>
            At Fonts & Footers, we believe that technology should simplify your
            workflow, not complicate it. Our mission is to craft booking
            solutions that are intuitive, efficient, and tailored to your unique
            needs—so you can focus on what matters most.
          </p> */}
        </div>
      </LayoutWrapper>
      <Marquee />
    </section>
  );
}
