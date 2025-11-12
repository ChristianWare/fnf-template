import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./TheProblem.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/stressediii.jpg";
import Img2 from "../../../../public/images/stressediv.jpg";
import Illustration from "../../../../public/illustrations/stressedIllustration.png";
import Close from "@/components/icons/Close/Close";

const data = [
  {
    id: 1,
    text: "Your day is packed. Phones ring, texts pile up.",
  },
  {
    id: 1.1,
    text: 'Your "Bookings" button dumps people into a form that\'s confusing on mobile.',
  },
  {
    id: 2,
    text: "Clients bounce. No-shows creep up.",
  },
  {
    id: 3,
    text: "You chase payments. Staff double-books.",
  },
  {
    id: 4,
    text: "You're paying for three different tools that still don't talk to each other.",
  },
];

export default function TheProblem() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgContainer}>
          <Image
            src={Illustration}
            alt='thinking'
            fill
            className={styles.img}
            priority
          />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContaineri}>
              <Image src={Img1} alt='Hero Image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.middle}>
            <SectionIntroii title='Problem' color='tan' />
            <h2 className={`${styles.heading} h3`}>
              The problems most <br /> service businesses face
            </h2>
            <div className={styles.mapDataContainer}>
              <ul className={styles.dataItem}>
                {data.map((item) => (
                  <li key={item.id} className={styles.dataText}>
                    <Close className={styles.closeIcon} />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <b className={styles.bold}>Does this sound like you? <br /> We can help!</b>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainerii}>
              <Image src={Img2} alt='Hero Image' fill className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.copyContainer}>
         
        </div>
      </LayoutWrapper>
    </section>
  );
}