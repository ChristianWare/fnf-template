import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Different.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Clock from "@/components/icons/Clock/Clock";
import Image from "next/image";
import IMg1 from "../../../../public/images/workman.png";
import IMg2 from "../../../../public/images/workwoman.png";

const data = [
  {
    id: 1,
    title: "Beyond Websites",
    desc: "Agencies sell websites, but we deliver a complete booking experience tailored to your brand.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 2,
    title: "More Than Software",
    desc: "Tools sell software, while we provide a cohesive system that integrates UX, payments, and policies.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 3,
    title: "Automations & Analytics",
    desc: "Our solution includes automations and analytics, giving you actionable insights and streamlined operations.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 4,
    title: "You Own the System",
    desc: "Everything is shipped as a unified platform that you fully own and control.",
    icon: <Clock className={styles.icon} />,
  },
];

export default function Different() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={IMg1} alt='workman' fill className={styles.img} />
          </div>
          <div className={styles.top}>
            <SectionIntroii title='what sets us apart' />
            <h2 className={styles.heading}>How We’re Different</h2>
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
          </div>
          <div className={styles.imgContainerii}>
            <Image src={IMg2} alt='workwoman' fill className={styles.img} />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
