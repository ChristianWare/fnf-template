import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./TheProblem.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Img1 from "../../../../public/images/stressediii.jpg";
import Img2 from "../../../../public/images/stressediv.jpg";
import Close from "@/components/icons/Close/Close";

const data = [
  {
    id: 1,
    text: "Your day is packed. Phones ring, texts pile up",
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
              {data.map((item) => (
                <ul key={item.id} className={styles.dataItem}>
                  <Close className={styles.closeIcon} />
                  <li className={styles.dataText}>{item.text}</li>
                </ul>
              ))}
            </div>
            {/* <b className={styles.bold}>
              Meanwhile, competitors with simpler checkouts win the
              booking—often from your own Instagram traffic.
            </b> */}
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainerii}>
              <Image src={Img2} alt='Hero Image' fill className={styles.img} />
            </div>
          </div>
        </div>
        <div className={styles.copyContainer}>
          {/* <p className={styles.copy}>
            Your day is packed. Phones ring, texts pile up, and your “Bookings”
            button dumps people into a form that’s confusing on mobile. Clients
            bounce. No-shows creep up. You chase payments. Staff double-books.
            You’re paying for three different tools that still don’t talk to
            each other.
          </p> */}
          {/* Todo:
          
          make an unordered list wwith an X before each line instead of a paragraph
          */}
          {/* <b className={styles.bold}>
            Meanwhile, competitors with simpler checkouts win the booking—often
            from your own Instagram traffic.
          </b> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}

// <div className={styles.content}>
//   <div className={styles.left}>
//     <div className={styles.imgContainer}>
//       <Image src={Img1} alt='Hero Image' fill className={styles.img} />
//       <div className={styles.overlay} />
//       <div className={styles.textOver}>
//         <SectionIntroii
//           title='Problem '
//           color='tan'
//         />
//         <h2 className={styles.heading}>
//           We get it. Your day is packed. Phones ring, texts pile up, and
//           your “Bookings” button dumps people into a form that’s
//           confusing on mobile. Clients bounce. No-shows creep up. You
//           chase payments. Staff double-books. You’re paying for three
//           different tools that still don’t talk to each other.
//         </h2>
//       </div>
//     </div>
//   </div>
//   <div className={styles.right}>
//     <div className={styles.imgContainer}>
//       <Image src={Img2} alt='Hero Image' fill className={styles.img} />
//       <div className={styles.overlay} />
//       <div className={`${styles.textOver} ${styles.textOverTop}`}>
//         <SectionIntroii title='Solution' color='tan' />
//         <h2 className={styles.heading}>
//           We can build you a custom direct-booking website that is fast,
//           visually appealing, and mobile friendly - with zero friction
//           at checkout. Just more time for you to focus on what you do
//           best: providing amazing service.
//         </h2>
//       </div>
//     </div>
//   </div>
// </div>
