import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/specialize.png";
import Nav from "@/components/shared/Nav/Nav";
import Marquee from "@/components/shared/Marquee/Marquee";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='Specialize' fill className={styles.img} />
          </div>
          <SectionIntroii title='About us' />
          <h1 className={styles.heading}>
            Direct booking <br /> is our #1 sport.
          </h1>
          <p className={styles.copy}>
            We build websites where great service meets zero scheduling drama.
          </p>
        </div>
      </LayoutWrapper>
      <Marquee />
    </section>
  );
}
