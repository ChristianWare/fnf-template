import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WhyDB.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Button from "@/components/shared/Button/Button";
import Clock from "@/components/icons/Clock/Clock";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

const data = [
  {
    id: 1,
    title: "Own the relationship",
    desc: "Stop renting your pipeline from marketplaces. Keep the data, the margins, and the repeat business.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 2,
    title: "Protect your time",
    desc: "Card-on-file, deposits, and policy acceptance reduce no-shows and last-minute cancellations.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 3,
    title: "Delight on mobile",
    desc: "One-screen flows and lightning-fast UX mean fewer drop-offs and more completed bookings.",
    icon: <Clock className={styles.icon} />,
  },
];

export default function WhyDB() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' title='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <SectionIntroii title='Benefits' />
              <h2 className={styles.heading}>
                Why choose a custom booking website for your business?
              </h2>
              <p className={styles.copy}>
                A custom booking website allows you to have full control over
                your bookings, reduce reliance on third-party platforms, and
                improve your profit margins. It also enhances your brand
                identity and customer experience.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/pricing' btnType='grayOutline' text='Check Pricing' />
              </div>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.mapDataBox}>
                {data.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <div className={styles.iconBox}>{item.icon}</div>
                    <div className={styles.mapDataContent}>
                      <div className={styles.title}>{item.title}</div>
                      <p className={styles.desc}>{item.desc}</p>
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
