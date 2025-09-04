import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./FinalCTA.module.css";
import Img1 from "../../../../public/images/whydb.jpg";

export default function FinalCTA() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={Img1} alt='Hero Image' fill className={styles.img} quality={100} />
        <div className={styles.content}>
          <LayoutWrapper>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our Promise</h2>
              <p className={styles.copy}>
                We won’t drown you in options. We’ll design clear offers,
                configure responsible policies, wire in payments, and measure
                the right things. If a feature won’t help you book better, we
                won’t recommend it.
              </p>
              {/* <div className={styles.btnContainer}>
                <Button btnType='salmon' text='Book Now' href='/' arrow />
              </div> */}
            </div>
          </LayoutWrapper>
        </div>
      </div>
    </section>
  );
}
