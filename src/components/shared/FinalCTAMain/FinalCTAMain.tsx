"use client";

import styles from "./FinalCTAMain.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Button from "../Button/Button";
import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";
import Instagram from "@/components/icons/Instagram/Instagram";
import Facebook from "@/components/icons/Facebook/Facebook";
import { footerData } from "@/lib/data";
import Link from "next/link";
import Logo from "../Logo/Logo";

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

export default function FinalCTAMain() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={Img1} alt='Hero Image' fill className={styles.img} />
        {/* <LayoutWrapper> */}
        <div className={styles.content}>
          <div className={styles.left}>
            {/* <SectionIntroii title='Fonts & Footers' color='tan' /> */}

            <Logo />
            <h2 className={styles.heading}>
              Ready to stop chasing <br /> and start booking?
            </h2>

            <div className={styles.btnContainer}>
              <Button
                href='https://calendly.com/chris-ware-dev/discovery-call'
                target='_blank'
                btnType='lime'
                text='Book your discovery call'
              />
              <Button href='/contact' btnType='grayOutline' text='Contact us' />
            </div>
          </div>
          <footer className={styles.footerContainer}>
            <div className={styles.footerTop}>
              <div className={styles.footerLeft}>
                {/* <SectionIntroii title='Fonts & Footers' /> */}
                <p className={`${styles.copy} subheading`}>
                  We design and build online booking websites for businesses
                  based in the service industry. Take deposits, prevent
                  no-shows, and let clients self-schedule 24/7.
                </p>
              </div>
              <div className={styles.footerRight}>
                {footerData.map((x) => (
                  <div className={styles.optionSection} key={x.id}>
                    <div className={styles.title}>{x.title}</div>
                    <ul className={styles.optionList}>
                      {x.options.map((y) => (
                        <Link
                          key={y.id}
                          href={y.href}
                          className={styles.optionLink}
                        >
                          <li className={styles.option}>{y.option}</li>
                        </Link>
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
                {/* {footerData2.map((x) => (
                  <small key={x.id} className={styles.small}>
                    {x.title}
                  </small>
                ))} */}
                <small className={styles.small}>
                  This site was designed and developed by Fonts & Footers
                </small>
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
