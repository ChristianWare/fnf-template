import styles from "./Believe.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";

export default function Believe() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image
          src={Img1}
          alt='Hero Image'
          fill
          className={styles.img}
          quality={100}
        />
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Promise</h2>
          <p className={styles.copy}>
            We won’t drown you in options. We’ll design clear offers, configure
            responsible policies, wire in payments, and measure the right
            things. If a feature won’t help you book better, we won’t recommend
            it.
          </p>
        </div>
      </div>
    </section>
  );
}
