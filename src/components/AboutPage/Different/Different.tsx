import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Different.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import IMg2 from "../../../../public/images/happyiii.png";
import FnfLogo from "@/components/icons/FnfLogo/FnfLogo";

const data = [
  {
    id: 1,
    title: "Booking-First Expertise",
    desc: "We’re not a generalist web shop. We specialize in direct-booking: deposit mechanics, policy enforcement, staff/location logic, and one-screen flows that convert—especially on mobile.",
    icon: <FnfLogo className={styles.icon} />,
  },
  {
    id: 2,
    title: "Win-Win Partnership",
    desc: "We ask operator questions (not just design ones), align on real goals, and shape your offers so the front desk, staff, and clients all have a smoother day.",
    icon: <FnfLogo className={styles.icon} />,
  },
  {
    id: 3,
    title: "Honesty & Transparency",
    desc: "If complexity hurts conversions, we’ll say so—and show the tradeoffs. You’ll see the metrics we track (completion, AOV, no-show %, rebook rate) and how decisions impact them.",
    icon: <FnfLogo className={styles.icon} />,
  },
  {
    id: 4,
    title: "No Fluff, Just Outcomes",
    desc: "No drama, no vanity deliverables. We ship measurable improvements, provide dashboards, and run a 30-day tune-up to lift bookings and reduce no-shows.",
    icon: <FnfLogo className={styles.icon} />,
  },
];

export default function Different() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          {/* <div className={styles.imgContainer}>
            <Image src={IMg1} alt='workman' fill className={styles.img} />
          </div> */}
          <div className={styles.top}>
            <div className={styles.imgContaineriii}>
              <Image src={IMg2} alt='workwoman' fill className={styles.img} />
            </div>
            <SectionIntroii title='what sets us apart' />
            <h2 className={styles.heading}>How we’re different</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.mapDataContainer}>
              {data.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>{item.icon}</div>
                    <strong className={styles.title}>{item.title}</strong>
                  </div>
                  <div className={styles.cardBottom}>
                    <p className={styles.desc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.imgContainerii}>
                <Image src={IMg2} alt='workwoman' fill className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
