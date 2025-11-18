import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Problemii.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/stressediii.jpg";
import Button from "@/components/shared/Button/Button";
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

export default function Problemii() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={`${styles.heading} h3 `}>
              The problems most <br /> service businesses face
            </h2>
            <div className={styles.btnContainer}>
              <Button
                href='/contact'
                btnType='black'
                text='Book your discovery call'
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              {/* <p className={styles.copy}>
                Your day is packed. Phones ring, texts pile up, and your
                “Bookings” button dumps people into a form that’s confusing on
                mobile. Clients bounce. No-shows creep up. You chase payments.
                Staff double-books. You’re paying for three different tools that
                still don’t talk to each other.
                <br />
                <br />
                Meanwhile, competitors with simpler checkouts win the
                booking—often from your own Instagram traffic.
              </p> */}
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
              <b className={styles.bold}>
                Does this sound like you? <br /> We can help!
              </b>
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img1}
                  alt='Hero Image'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
