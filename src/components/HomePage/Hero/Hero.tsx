import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/thinking.png";
import Nav from "@/components/shared/Nav/Nav";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro title='Taking Projects for September' />
            <h1 className={styles.heading}>
              Direct booking websites <br /> that actually book
            </h1>
            <p className={styles.copy}>
              Ready to master direct booking and crush your revenue goals? We
              build branded, conversion-first sites with one-screen checkout,
              deposits, and reminder automations.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' btnType='lime' text='Book your discovery call' />
              <Button href='/' btnType='grayOutline' text='About us' />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='thinking' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
