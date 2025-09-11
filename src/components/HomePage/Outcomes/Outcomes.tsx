import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Outcomes.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/newhero.png";
// import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Own the relationship",
    desc: "Stop renting your pipeline from marketplaces. Keep the data, the margins, and the repeat business.",
  },
  {
    id: 2,
    title: "Protect your time",
    desc: "Card-on-file, deposits, and policy acceptance reduce no-shows and last-minute cancellations.",
  },
  {
    id: 3,
    title: "Delight on mobile",
    desc: "One-screen flows and lightning-fast UX mean fewer drop-offs and more completed bookings.",
  },
  {
    id: 4,
    title: "Automate reminders",
    desc: "Send automated reminders to clients to reduce missed appointments and improve attendance.",
  },
  // {
  //   id: 5,
  //   title: "Grow repeat business",
  //   desc: "Easily offer loyalty rewards and rebooking options to encourage clients to return.",
  // },
];

export default function Outcomes() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}></div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill alt='' className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <h2 className={styles.heading}>
                  Why get a custom booking website for your business?
                </h2>
                {/* <SectionIntroii title='Outcomes' color='tan' /> */}
                <p className={styles.copy}>
                  A custom booking website can significantly enhance your
                  business operations and customer experience. Here are some key
                  benefits:
                </p>
                <div className={styles.btnContainer}>
                  <Button href='/about' btnType='lime' text='More details' />
                </div>
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.mapDataContainer}>
                  {data.map((item) => (
                    <div key={item.id} className={styles.card}>
                      <div className={styles.title}>{item.title}</div>
                      <p className={styles.desc}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
