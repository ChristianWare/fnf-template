import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Outcomes.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/newhero.png";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Under 60s",
    desc: "From service to paid on a single screen—designed to book in under a minute.",
  },
  {
    id: 2,
    title: "24/7",
    desc: "Clients self-schedule anytime; you wake up to confirmed appointments, not DMs.",
  },
  {
    id: 3,
    title: "No-Shows ↓",
    desc: "Deposits, card-on-file, and policy acceptance reduce flakes and last-minute cancels.",
  },
  {
    id: 4,
    title: "AOV ↑",
    desc: "Checkout add-ons, packages, tips, and gift cards lift the value of every booking.",
  },
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
                A booking engine for ambitious service brands
              </h2>
                <SectionIntroii title='Outcomes' color='tan' />
                <p className={styles.copy}>
                  Fonts &amp; Footers isn’t just a website—it’s a complete
                  direct-booking system built like resilient infrastructure.
                </p>
                <p className={styles.copy}>
                  With a one-screen flow, deposits and policy capture, automated
                  reminders, and real-time staff/location logic, your calendar
                  stays accurate while clients breeze from browse to booked. Add
                  analytics, SEO schema, and fast mobile performance, and you
                  get a calmer pipeline that keeps revenue predictable.
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    href='/about'
                    btnType='lime'
                    text='About Fonts & Footers'
                  />
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
