import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WhyDB.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Button from "@/components/shared/Button/Button";
import Clock from "@/components/icons/Clock/Clock";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Payment from "@/components/icons/Payment/Payment";
import Support from "@/components/icons/Support/Support";
import Analytics from "@/components/icons/Analytics/Analytics";
import Design from "@/components/icons/Design/Design";

export const data = [
  {
    id: 1,
    title: "Direct-Booking Website Development",
    desc: "We design and build fast, on-brand websites with a one-screen booking flow (service → pro → time → pay) that converts on mobile.",
    icon: <Design className={styles.icon} />,
  },
  {
    id: 2,
    title: "Offer Architecture & UX",
    desc: "We tidy your services, add-ons, memberships, gift cards, and deposit strategy—then shape a clear path from browse to booked.",
    icon: <Analytics className={styles.icon} />,
  },
  {
    id: 3,
    title: "Staff, Location & Resource Logic",
    desc: "Configure real-world rules: multi-location hours, buffers, rooms/equipment, permissions, and time zones—without the scheduling mess.",
    icon: <Support className={styles.icon} />,
  },
  {
    id: 4,
    title: "Payments, Policies & No-Show Protection",
    desc: "Stripe/Square/PayPal with deposits, tips, invoices, card-on-file, and policy acceptance—so your time is respected and your revenue is protected.",
    icon: <Payment className={styles.icon} />,
  },
  {
    id: 5,
    title: "Intake, Reminders & Client Profiles",
    desc: "Custom forms, confirmations, and reminders, plus simple client history—so every visit feels prepared and personal.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 6,
    title: "Analytics, SEO & Reporting",
    desc: "Track what matters (completion rate, AOV, no-show %, rebook velocity) and ship structured data for search visibility and smarter decisions.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 7,
    title: "Migrations & Integrations",
    desc: "Move from your current system with care. Sync calendars, connect Zoom/Meet, Mailchimp/Klaviyo, Meta/IG, and more—cleanly and securely.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 8,
    title: "Care Plans & Optimization",
    desc: "Post-launch tuning to lift conversion: copy tests, deposit adjustments, add-on placement, performance passes, and accessibility checks.",
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
              <SectionIntroii title='Our main service' />
              <h2 className={styles.heading}>
                {/* Why choose a custom booking website for your business? */}
                Here&rsquo;s what we do:
              </h2>
              <p className={styles.copy}>
                We build custom booking websites that allow you to have full
                control over your bookings, reduce reliance on third-party
                platforms, and improve your profit margins. Our sites also
                enhance your brand identity and customer experience.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  href='/pricing'
                  btnType='grayOutline'
                  text='Check Pricing'
                />
              </div>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.mapDataBox}>
                {data.slice(0, 4).map((item) => (
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
