import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./FeaturesPreview.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";

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
    desc: "Smart SMS and email notifications powered by Twilio keep everyone informed. Clients can easily reschedule or make changes on their own.",
    icon: <div className={styles.pattern3} />,
  },
];

export default function FeaturesPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntroii title='How we can help' color='tan' />
            <h2 className={`${styles.heading} h3`}>
              The solution: a site that <br /> sells the appointment for you
            </h2>
            <div className={styles.btnContainer}>
              <Button href='/services' btnType='lime' text='See all features' />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.mapDataBox}>
              {data.map((item) => (
                <div key={item.id} className={styles.card}>
                  {item.icon}
                  <div className={styles.mapDataContent}>
                    <div className={styles.title}>{item.title}</div>
                    <p className={`${styles.desc}`}>{item.desc}</p>
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
