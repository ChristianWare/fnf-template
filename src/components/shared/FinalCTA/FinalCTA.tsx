"use client";

import styles from "./FinalCTA.module.css";
// import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Button from "../Button/Button";
import SectionIntroii from "../SectionIntroii/SectionIntroii";
import Logo from "../Logo/Logo";
import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";
import Instagram from "@/components/icons/Instagram/Instagram";
import Facebook from "@/components/icons/Facebook/Facebook";
import { footerData, footerData2 } from "@/lib/data";
import Link from "next/link";

const data3 = [
  {
    id: 8,
    href: "https://www.linkedin.com/feed/",
    icon: <LinkedIn className={styles.socialIcon} />,
  },
  {
    id: 9,
    href: "https://www.instagram.com/fontsandfooters/",
    icon: <Instagram className={styles.socialIcon} />,
  },
  {
    id: 10,
    href: "https://www.facebook.com/fontsandfooters",
    icon: <Facebook className={styles.socialIcon} />,
  },
];

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
          <footer className={styles.footerContainer}>
            <div className={styles.footerTop}>
              <div className={styles.footerLeft}>
                <Logo />
                <p className={styles.copy}>
                  A modular Webflow template shaped like sustainable
                  infrastructures — designed for brands that value clarity,
                  adaptability, and modern aesthetics.
                </p>
              </div>
              <div className={styles.footerRight}>
                {footerData.map((x) => (
                  <div className={styles.optionSection} key={x.id}>
                    <div className={styles.title}>{x.title}</div>
                    <ul className={styles.optionList}>
                      {x.options.map((y) => (
                        <li key={y.id} className={styles.option}>
                          {y.option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.footerBottom}>
              <div className={styles.footerBottomLeft}>
                <small className={styles.small}>© 2025 Fonts & Footers</small>
              </div>
              <div className={styles.footerBottomRight}>
                {footerData2.map((x) => (
                  <small key={x.id} className={styles.small}>
                    {x.title}
                  </small>
                ))}
              </div>
            </div>
            <div className={styles.footerSocials}>
              {data3.map((x) => (
                <Link
                  key={x.id}
                  href={x.href}
                  target='_blank'
                  className={styles.socialIconContainer}
                >
                  {x.icon}
                </Link>
              ))}
            </div>
          </footer>
        </div>
        {/* </LayoutWrapper> */}
      </div>
    </section>
  );
}
