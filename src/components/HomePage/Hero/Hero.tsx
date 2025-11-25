import styles from "./Hero.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/thinking.png";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";
// import Marquee from "@/components/shared/Marquee/Marquee";
import Features from "../Features/Features";
// import ScrollHorizontalText from "@/components/shared/ScrollHorizontalText/ScrollHorizontalText";

export default function Hero() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='thinking'
                fill
                className={styles.img}
                priority
              />
            </div>
            <SectionIntroii title='Web development Agency' />
            <h1 className={styles.heading}>
              Custom booking websites
              <br />
              <span className="span1">your clients</span> 
              {" "} will <span className="span2">love.</span>
            </h1>
            <p className={styles.copy}>
              Fonts & Footers turns your website into a 24/7 front desk that
              reduces no-shows, collects deposits, and fills your calendar
              without endless calls and DMs.
            </p>
            {/* <ScrollHorizontalText
              text='Bookings up'
              text2='No‑shows down'
              text3='Admin time saved'
              pxPerSec={50}
            /> */}
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='black'
                text='Book your discovery call'
              />
              <ImageCluster
                size='small'
                orientation='horizontal'
                color='black'
              />
            </div>
          </div>
          <div className={styles.right}>
            <Features />
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
      {/* <span className={styles.span}>Industries we work with:</span> */}
      {/* <Marquee /> */}
    </div>
  );
}
