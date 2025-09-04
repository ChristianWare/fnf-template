import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./BrandStory.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Button from "@/components/shared/Button/Button";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

export default function BrandStory() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <SectionIntroii title='Brand story' />
              <h2 className={styles.heading}>
                Fonts = the face of your brand. <br /> Footers = the foundation
                under it.{" "}
              </h2>
              <p className={styles.copy}>
                Together, we ship booking websites that feel premium, run fast,
                and quietly handle availability, policies, payments, and
                reminders—so you can focus on the work only you can do.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/' btnType='grayOutline' text='Contact us' />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' title='' className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
