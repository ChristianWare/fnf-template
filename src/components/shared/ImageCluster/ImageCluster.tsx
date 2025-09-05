import styles from "./ImageCluster.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/Adam.jpg";
import Img2 from "../../../../public/images/alice.jpg";
import Img3 from "../../../../public/images/charlie.jpg";
import Img4 from "../../../../public/images/jane.jpg";
import Img5 from "../../../../public/images/person.jpg";
import Starii from "@/components/icons/Starii/Starii";

interface Props {
  color?: string;
}

export default function ImageCluster({ color = "" }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.imageCluster}>
        <Image src={Img1} alt='Adam' className={styles.image} />
        <Image src={Img2} alt='Alice' className={styles.image} />
        <Image src={Img3} alt='Charlie' className={styles.image} />
        <Image src={Img4} alt='Jane' className={styles.image} />
        <Image src={Img5} alt='Person' className={styles.image} />
        <div className={styles.starContainer}>
          <Starii className={styles.icon} />
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={`${styles.copy} ${styles[color]}`}>
          Trusted by 500+ clients (4.9/5)
        </span>
      </div>
    </div>
  );
}
