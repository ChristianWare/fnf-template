import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Outcomes.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/newhero.png";
import Clock from "@/components/icons/Clock/Clock";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

const data = [
  {
    id: 1,
    title: "You want more completed bookings",
    desc: "Mobile-first, one-screen checkout that reduces friction and increases finished checkouts.",
  },
  {
    id: 2,
    title: "You’re ready to use deposits",
    desc: "Deposit-first logic to cut no-shows, with clear, plain-English reschedule policies.",
  },
  {
    id: 3,
    title: "You want to own your platform",
    desc: "Your Stripe, your Twilio, your domain, your data. No lock-in or surprise fees.",
  },
  {
    id: 4,
    title: "You have staff, drivers, or resources to coordinate",
    desc: "Google/iCal sync, buffers, travel time, blackout dates, and role-based access.",
  },
  {
    id: 5,
    title: "You sell add-ons and care about AOV",
    desc: "Upsells and extras at checkout—tips, packages, child seats, treatments, insurance.",
  },
  {
    id: 6,
    title: "You value measurable outcomes",
    desc: "Analytics for completion rate, show-up rate, Apple/Google Pay share, and revenue.",
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
                <Image
                  src={Img1}
                  fill
                  alt='Booking flow preview on mobile and dashboard analytics'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <SectionIntroii title="Who we're a fit for" color='tan' />
                <h2 className={styles.heading}>
                  {/* The right partner if you want <br /> your site to book itself */}
                  Who we&apos;re a fit for
                </h2>
                <p className={styles.copy}>
                  Fonts &amp; Footers is built for service businesses that want
                  a fast, deposit-first booking flow, clear policies, and
                  calendars that don’t collide—backed by analytics you can act
                  on.
                </p>
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
