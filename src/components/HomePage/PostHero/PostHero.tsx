import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PostHero.module.css";
import Design from "@/components/icons/Design/Design";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Money from "@/components/icons/Money/Money";
import Hosting from "@/components/icons/Hosting/Hosting";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Full Controll",
    icon: <Design className={styles.icon} />,
  },
  {
    id: 2,
    title: "Reduced Reliance",
    icon: <Hosting className={styles.icon} />,
  },
  {
    id: 3,
    title: "Improved Profit",
    icon: <Money className={styles.icon} />,
  },
];

// const stats = [
//   {
//     id: 4,
//     number: "40+",
//     label: "Websites Built",
//   },
//   { id: 5, number: "10K+", label: "Bookings", },
//   {
//     id: 6,
//     number: "5X",
//     label: "Average ROI Increase",
//   },
// ];

export default function PostHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='What we do' />
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
          <div className={styles.btnContainer}>
            <Button href='/contact' btnType='black' text='More about us' />
          </div>
          {/* <div className={styles.statsContainer}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}
