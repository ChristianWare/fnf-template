import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Outcomes.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/newhero.png";
// import Button from "@/components/shared/Button/Button";
import Clock from "@/components/icons/Clock/Clock";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

const data = [
  {
    id: 1,
    title: "More bookings, less back‑and‑forth",
    desc: "one‑screen flow, 24/7 self‑serve → booking analytics screenshots",
  },
  {
    id: 2,
    title: "Fewer no‑shows",
    desc: "deposit logic, SMS reminders → Stripe/Twilio integrations",
  },
  {
    id: 3,
    title: "Operational clarity",
    desc: "monthly calendar, staff capacity, add‑ons → admin UI visuals",
  },
  {
    id: 4,
    title: "Faster cashflow",
    desc: "instant payments, tips, upsells → Stripe receipts & dashboard",
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
                <SectionIntroii title='Core Value Pillars' color='tan' />
                <h2 className={styles.heading}>
                  Why get a custom booking website for your business from us?
                </h2>

                <p className={`${styles.copy} subheading`}>
                  A custom booking website can significantly enhance your
                  business operations and customer experience. Here are some key
                  benefits:
                </p>
                {/* <div className={styles.btnContainer}>
                  <Button href='/about' btnType='lime' text='More details' />
                </div> */}
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.mapDataContainer}>
                  {data.map((item) => (
                    <div key={item.id} className={styles.card}>
                      <Clock className={styles.icon} />
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
