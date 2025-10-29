import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/spintro1.jpg";
import Img2 from "../../../../public/images/spintro2.jpg";

const data = [
  {
    id: 1,
    src: Img1,
    alt: "Service Image 1",
  },
  {
    id: 2,
    src: Img2,
    alt: "Service Image 2",
  },
];

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntroii title='Service Overview' />
            <h1 className={styles.heading}>
              Comprehensive solutions <br className={styles.br} /> tailored to
              your needs
            </h1>
            <p className={styles.copy}>
              Our service offerings are designed to provide you with the tools
              and support you need to succeed in today&apos;s competitive
              landscape.
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.mapDatContainer}>
                {data.map((item) => (
                  <div key={item.id} className={styles.imgContainer}>
                    <Image src={item.src} alt={item.alt} fill className={styles.img} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
