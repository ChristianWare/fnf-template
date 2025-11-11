import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WhyDB.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/solution.jpg";
import Clock from "@/components/icons/Clock/Clock";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Payment from "@/components/icons/Payment/Payment";
import Support from "@/components/icons/Support/Support";
import Analytics from "@/components/icons/Analytics/Analytics";
import Design from "@/components/icons/Design/Design";
import Check from "@/components/icons/Check/Check";
import Img2 from "../../../../public/images/work.png";

export const data = [
  {
    id: 1,
    title: "One-screen checkout",
    desc: "No maze. Pick service → pick time → pay deposit → done.",
    icon: <Check className={styles.icon} />,
  },
  {
    id: 2,
    title: "Deposit-first payments",
    desc: "Reduce no-shows and stop chasing money. Apple Pay/Google Pay built-in.",
    icon: <Payment className={styles.icon} />,
  },
  {
    id: 3,
    title: "Automatic reminders & rescheduling",
    desc: "Smart SMS/email via Twilio. Clients can self-serve changes.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 4,
    title: "Calendar sync",
    desc: "Staff, stylists, and drivers stay in sync (Google/iCal). Buffers and travel time logic included.",
    icon: <Support className={styles.icon} />,
  },
  {
    id: 5,
    title: "Add-ons & upsells",
    desc: "Tips, extras, distance fees, and packages at checkout (not on the phone).",
    icon: <Analytics className={styles.icon} />,
  },
  {
    id: 6,
    title: "SEO that matches your services",
    desc: 'Location/service pages that rank and convert, not just "look pretty."',
    icon: <Design className={styles.icon} />,
  },
  {
    id: 7,
    title: "Live analytics",
    desc: "See bookings, revenue, and show-up rates at a glance.",
    icon: <Analytics className={styles.icon} />,
  },
];

export default function WhyDB() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.imgContainerii}>
            <Image src={Img2} alt='' fill className={styles.imgii} />
          </div>
          <SectionIntroii title='How we can help' />
          <h2 className={styles.heading}>
            The solution: a site that sells the appointment for you
          </h2>
          <p className={styles.copy}>
            We can build you a custom direct-booking website that is fast, visually appealing, and mobile friendly - with zero
            friction at checkout. Just more time for you to focus on what you do best: providing amazing service.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' title='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightBottom}>
              <div className={styles.mapDataBox}>
                {data.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <div className={styles.iconBox}>{item.icon}</div>
                    <div className={styles.mapDataContent}>
                      <div className={styles.title}>{item.title}</div>
                      <p className={`${styles.desc}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
