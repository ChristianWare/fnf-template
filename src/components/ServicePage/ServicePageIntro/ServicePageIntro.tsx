import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
// import Img1 from "../../../../public/images/spintro1.jpg";
// import Img2 from "../../../../public/images/spintro2.jpg";
import llustration from "../../../../public/illustrations/aboutIllustration.png";
import Marquee from "@/components/shared/Marquee/Marquee";

// const data = [
//   {
//     id: 1,
//     src: Img1,
//     alt: "Service Image 1",
//   },
//   {
//     id: 2,
//     src: Img2,
//     alt: "Service Image 2",
//   },
// ];

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
            <p className={styles.copy}>
              We build booking websites that act like a 24/7 front desk—so your
              clients can book, pay, reschedule, and show up without phone tag.
              Built in Phoenix. Serving salons, med-spas, rentals, and black-car
              services everywhere.
            </p>
          </div>
          <div className={styles.bottom}>
            {/* <div className={styles.mapDatContainer}>
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
            </div> */}
            <Marquee />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
