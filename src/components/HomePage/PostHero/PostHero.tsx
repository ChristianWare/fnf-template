import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PostHero.module.css";
import Multiple from "@/components/icons/Multiple/Multiple";
import Design from "@/components/icons/Design/Design";
import Lightning from "@/components/icons/Lightning/Lightning";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

const data = [
  {
    id: 1,
    title: "Creativity",
    icon: <Design className={styles.icon} />,
  },
  {
    id: 2,
    title: "Innovation",
    icon: <Lightning className={styles.icon} />,
  },
  {
    id: 3,
    title: "Strategy",
    icon: <Multiple className={styles.icon} />,
  },
];

const stats = [
  {
    id: 4,
    number: "40+",
    label: "Websites Built",
  },
  { id: 5, number: "10K+", label: "Bookings" },
  {
    id: 6,
    number: "5X",
    label: "Average ROI Increase",
  },
];

export default function PostHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='About us' />
          <h2 className={styles.heading}>
            We build custom booking websites that allow you to have full control
            over your bookings, reduce reliance on third-party platforms, and
            improve your profit margins.
          </h2>
          <div className={styles.pillsContainer}>
            {data.map((item) => (
              <div key={item.id} className={styles.pill}>
                {item.icon}
                {item.title}
              </div>
            ))}
          </div>
          <div className={styles.statsContainer}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
