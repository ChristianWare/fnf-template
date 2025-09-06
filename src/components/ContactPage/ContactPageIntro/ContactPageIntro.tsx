import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactPageIntro.module.css";
import Nav from "@/components/shared/Nav/Nav";
import Image from "next/image";
import Img1 from "../../../../public/images/contact.jpg";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

export default function ContactPageIntro() {
  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='Contact' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <SectionIntroii title='Contact' />
              <h1 className={styles.heading}>Let&lsquo;s stay in touch</h1>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
