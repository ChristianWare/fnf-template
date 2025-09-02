"use client";

import styles from "./FinalCTA.module.css";
// import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Button from "../Button/Button";
import SectionIntroii from "../SectionIntroii/SectionIntroii";
import Logo from "../Logo/Logo";

export default function FinalCTA() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={Img1} alt='Hero Image' fill className={styles.img} />
        {/* <LayoutWrapper> */}
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntroii title='Fonts & Footers' color='tan' />

            <h2 className={styles.heading}>
              Ready to stop chasing <br /> and start booking?
            </h2>

            <div className={styles.btnContainer}>
              <Button href='/' btnType='lime' text='Book your discovery call' />
              <Button href='/' btnType='grayOutline' text='About us' />
            </div>
          </div>
          <div className={styles.footerContainer}>
            <div className={styles.footerLeft}>
              <Logo />
            </div>
            <div className={styles.footerRight}></div>
          </div>
        </div>
        {/* </LayoutWrapper> */}
      </div>
    </section>
  );
}
