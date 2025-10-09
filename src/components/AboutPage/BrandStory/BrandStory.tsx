import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./BrandStory.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/brandStory.jpg";
import Button from "@/components/shared/Button/Button";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Clock from "@/components/icons/Clock/Clock";
import Design from "@/components/icons/Design/Design";
import Listing from "@/components/icons/Listing/Listing";
import Lightning from "@/components/icons/Lightning/Lightning";

const data = [
  {
    id: 1,
    title: "Win back hours",
    desc: "Automated reminders, reschedules, and no-show rules keep your calendar full without the back-and-forth.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 2,
    title: "Book more, charge smarter",
    desc: "Deposits, packages, memberships—and Buy Now, Pay Later—to boost conversion and average order value.",
    icon: <Lightning className={styles.icon} />,
  },
  {
    id: 3,
    title: "Clarity that converts",
    desc: "Crystal-clear menus, policies, and one-screen checkout reduce friction and build trust.",
    icon: <Listing className={styles.icon} />,
  },
  {
    id: 4,
    title: "Premium, on-brand",
    desc: "A fast, mobile-first site that looks as good as your work—so every visit feels top-shelf.",
    icon: <Design className={styles.icon} />,
  },
];

export default function BrandStory() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <SectionIntroii title='About Fonts & Footers' />
              <h2 className={styles.heading}>
                A new studio with a <br /> fresh take on booking websites.
              </h2>

              <p className={`${styles.copy} subheading`}>
                Fonts &amp; Footers is a new company focused on one thing:
                turning visitors into paid, confirmed bookings for service-based
                businesses. Being new means we’re not carrying legacy templates
                or bloated stacks—we build lean, modern, conversion-first sites
                with Stripe-first payments and sensible ops baked in.
              </p>

              <p className={`${styles.copy} subheading`}>
                Our perspective is fresh: product thinking over pretty pages,
                clarity over cleverness, and speed without sacrificing
                standards. That shows up in flows that actually reduce no-shows,
                deposits and BNPL (buy now pay later) that unlock bigger
                services without slowing cash flow, and policy UX (user
                experience) that prevents “DM me” chaos before it starts.
              </p>

              <div className={styles.btnContainer}>
                <Button
                  href='https://calendly.com/chris-ware-dev/discovery-call'
                  target='_blank'
                  btnType='grayOutline'
                  text='Schedule a discovery call'
                />
              </div>
            </div>

            <div className={styles.leftBottom}>
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

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                fill
                alt='Client reviewing a full calendar of confirmed bookings'
                title='High-value bookings without the busywork'
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
