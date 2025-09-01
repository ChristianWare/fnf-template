"use client";

import styles from "./FinalCTA.module.css";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";
import Image from "next/image";
import Happy from "../../../../public/images/smileii.png";

export default function FinalCTA() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
              <SectionIntro title='Fonts & Footers' color='tan' />
            <div className={styles.imgContainer}>
              <Image
                src={Happy}
                alt='Happy illustration'
                fill
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Ready to fill your calendar?</h2>
            <p className={styles.copy}>
              Let&apos;s get started with a quick chat to discuss your needs and
              how we can help.
            </p>

            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='blue'
                text='Book a 15-minute call'
                arrow
              />
              {/* <Button
              href='/contact'
              btnType='noBackgroundWhiteText'
              text='Prefer email?'
              arrow
            /> */}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
