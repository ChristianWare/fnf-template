import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./TheProblem.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/stressediii.jpg";

export default function TheProblem() {
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
          <LayoutWrapper>
            <div className={styles.left}>
              <SectionIntroii title='We get it' color='tan' />
              <h2 className={styles.heading}>
                The problem most <br className={styles.br} /> service businesses face
              </h2>
              <p className={styles.copy}>
                Your day is packed. Phones ring, texts pile up, and your
                “Bookings” button dumps people into a form that’s confusing on
                mobile. Clients bounce. No-shows creep up. You chase payments.
                Staff double-books. You’re paying for three different tools that
                still don’t talk to each other.
              </p>
              <b className={styles.bold}>
                Meanwhile, competitors with simpler checkouts win the
                booking—often from your own Instagram traffic.
              </b>
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
