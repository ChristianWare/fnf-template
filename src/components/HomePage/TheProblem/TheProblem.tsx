import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./TheProblem.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/stressediii.jpg";
import Img2 from "../../../../public/images/solutioniii.jpg";

export default function TheProblem() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='Hero Image' fill className={styles.img} />
              <div className={styles.overlay} />
              <div className={styles.textOver}>
                <SectionIntroii
                  title='Problem '
                  color='tan'
                />
                <h2 className={styles.heading}>
                  We get it. Your day is packed. Phones ring, texts pile up, and
                  your “Bookings” button dumps people into a form that’s
                  confusing on mobile. Clients bounce. No-shows creep up. You
                  chase payments. Staff double-books. You’re paying for three
                  different tools that still don’t talk to each other.
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img2} alt='Hero Image' fill className={styles.img} />
              <div className={styles.overlay} />
              <div className={`${styles.textOver} ${styles.textOverTop}`}>
                <SectionIntroii title='Solution' color='tan' />
                <h2 className={styles.heading}>
                  We can build you a custom direct-booking website that is fast,
                  visually appealing, and mobile friendly - with zero friction
                  at checkout. Just more time for you to focus on what you do
                  best: providing amazing service.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
