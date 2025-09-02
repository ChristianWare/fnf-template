import styles from "./BlogCardTwo.module.css";
import Image, { StaticImageData } from "next/image";
import SectionIntroii from "../SectionIntroii/SectionIntroii";

interface Props {
  src: StaticImageData;
}

export default function BlogCardTwo({ src }: Props) {
  return (
    <article className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src={src} alt='Blog Image' fill className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <SectionIntroii title='August 31, 2025' />
        <h5 className={styles.title}>
          Designing Templates Like Green Architecture
        </h5>
        <p className={styles.desc}>
          From construction blueprints to digital templates — discover why
          flexible, component-based design is the future for brands of any size.
        </p>
      </div>
    </article>
  );
}
