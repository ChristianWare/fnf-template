import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./FeaturesPreview.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";
import ServiceIllustration from "../../../../public/images/calendarii.png";
import Img1 from "../../../../public/images/relief.jpg";
import Img2 from "../../../../public/images/reliefii.jpg";
import Image from "next/image";

export const data = [
  {
    id: 1,
    title: "One-screen checkout",
    desc: "No maze to navigate through. Simply pick your service, select a time, pay your deposit, and you're done.",
    icon: <div className={styles.pattern1} />,
  },
  {
    id: 2,
    title: "Deposit-first payments",
    desc: "Reduce no-shows and stop chasing money after appointments. Apple Pay and Google Pay are built-in for seamless transactions.",
    icon: <div className={styles.pattern2} />,
  },
  {
    id: 3,
    title: "Auto reminders",
    desc: "Smart SMS and email notifications keep everyone informed. Clients can easily reschedule or make changes on their own.",
    icon: <div className={styles.pattern3} />,
  },
  {
    id: 4,
    title: "Calendar sync",
    desc: "Staff, stylists, and drivers stay in sync (Google/iCal). Buffers and travel time logic included.",
    icon: <div className={styles.pattern4} />,
  },
  // {
  //   id: 5,
  //   title: "Add-ons & upsells",
  //   desc: "Tips, extras, distance fees, and packages at checkout (not on the phone).",
  //   icon: <div className={styles.pattern5} />,
  // },
  // {
  //   id: 6,
  //   title: "SEO that matches your services",
  //   desc: 'Location/service pages that rank and convert, not just "look pretty."',
  //   icon: <div className={styles.pattern6} />,
  // },
  // {
  //   id: 7,
  //   title: "Live analytics",
  //   desc: "See bookings, revenue, and show-up rates at a glance.",
  //   icon: <div className={styles.pattern7} />,
  // },
  {
    id: 7,
    title: "",
    desc: "",
    icon: "",
    src: Img1,
  },
  {
    id: 8,
    title: "",
    desc: "",
    icon: "",
    src: Img2,
  },
];

export default function FeaturesPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.imgContainer1}>
              <Image
                src={ServiceIllustration}
                alt='Service Illustration'
                fill
                className={styles.img}
                priority
              />
            </div>
            <SectionIntroii title='How we can help' />
            <h2 className={`${styles.heading} h3`}>
              The solution: a site that <br /> sells the appointment for you
            </h2>
            <p className={styles.copy}>
              Fonts & Footers builds direct-booking websites designed around how
              real clients decide: fast, visual, on their phone, with zero
              friction at checkout.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='/services'
                btnType='black'
                text='See all features'
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.background} />
            <div className={styles.mapDataBox}>
              {data.map((item) => (
                <div
                  key={item.id}
                  className={`${styles.card} ${
                    item.src ? styles.cardWide : ""
                  }`}
                >
                  {item.icon}
                  <div className={styles.mapDataContent}>
                    {item.title && (
                      <div className={styles.title}>{item.title}</div>
                    )}
                    {item.desc && <p className={styles.desc}>{item.desc}</p>}
                    {item.src && (
                      <div className={styles.imgContainer2}>
                        <Image
                          src={item.src}
                          alt={item.title || "Relief"}
                          title={item.title || "Relief"}
                          fill
                          className={styles.img2}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
