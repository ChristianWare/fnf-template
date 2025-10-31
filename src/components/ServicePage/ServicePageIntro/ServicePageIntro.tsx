import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/spintro1.jpg";
import Img2 from "../../../../public/images/spintro2.jpg";
import llustration from "../../../../public/illustrations/aboutIllustration.png";

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
            <div className={styles.imgContainer1}>
              <Image
                src={llustration}
                alt='thinking'
                fill
                className={styles.img1}
                priority
              />
            </div>
            <SectionIntroii title='About us ' />
            <h1 className={styles.heading}>
              Comprehensive solutions <br className={styles.br} /> tailored to
              your needs
            </h1>
            {/* <p className={styles.copy}>
              At Fonts & Footers, we specialize in creating custom booking
              websites designed to help businesses reduce no-shows, speed up
              checkout times, and increase revenue. Our mission is to simplify
              the booking process for both businesses and their customers,
              providing a seamless experience that drives growth and customer
              satisfaction.
            </p> */}
          </div>
          <div className={styles.bottom}>
            <div className={styles.mapDatContainer}>
              {data.map((item) => (
                <div key={item.id} className={styles.imgContainer}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={styles.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
