import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/thinking.png";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";

export default function Hero() {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='thinking'
                fill
                className={styles.img}
                priority
              />
            </div>
            <SectionIntroii title='Web Development Agency' />
            <h1 className={styles.heading}>
              Custom booking websites <br /> that actually book
            </h1>
            <p className={styles.copy}>
              We design and build online booking websites for businesses based
              in the service industry.
               {/* Take deposits, prevent no-shows, and let
              clients self-schedule 24/7. */}
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='lime'
                text='Book your discovery call'
              />
              {/* <Button href='/about' btnType='grayOutline' text='About us' /> */}{" "}
              <ImageCluster
                size='small'
                orientation='horizontal'
                color='black'
              />
            </div>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
