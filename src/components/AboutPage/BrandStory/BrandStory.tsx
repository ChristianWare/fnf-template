import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./BrandStory.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/brandStoryii.jpg";
import Button from "@/components/shared/Button/Button";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Clock from "@/components/icons/Clock/Clock";
import Design from "@/components/icons/Design/Design";
import Listing from "@/components/icons/Listing/Listing";
import Lightning from "@/components/icons/Lightning/Lightning";

const data = [
  {
    id: 1,
    title: "Simplicity beats persuasion",
    desc: "Your clients aren't reading—they're trying to finish a task on their phone.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 2,
    title: "Friction is expensive",
    desc: "Every extra field, page, or surprise fee lowers completion rates.",
    icon: <Lightning className={styles.icon} />,
  },
  {
    id: 3,
    title: "Own your platform",
    desc: "Your Stripe, your data, your domain. No lock-in.",
    icon: <Listing className={styles.icon} />,
  },
  {
    id: 4,
    title: "Clarity wins",
    desc: "Plain-English policies near the button reduce cancellations and support.",
    icon: <Design className={styles.icon} />,
  },
  {
    id: 5,
    title: "Outcomes over aesthetics",
    desc: "Beautiful is required; bookings are the goal.",
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
              <SectionIntroii title='Who we are — and why it matters' />
              <h2 className={styles.heading}>Why we exist</h2>
              <p className={styles.copy}>
                Most service businesses don’t have a marketing problem—they have
                a booking problem. Clunky forms, mixed-up calendars, and payment
                chases leak revenue every day. We started Fonts & Footers to fix
                that single point of failure: the moment a customer decides to
                book.
              </p>
            </div>
            <div className={styles.leftBottom}>
              {/* <h3 className={`${styles.subHeadingii} h3`}>
                What we do (in one line)
              </h3>
              <br />
              <p className={styles.copy}>
                We turn your site into a direct-booking machine with a
                one-screen, deposit-first checkout, automatic reminders,
                calendar sync, and service pages that convert.
              </p>
              <br />
              <br /> */}
              <h3 className={`${styles.subHeading} h3`}>Our point of view:</h3>
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
            <div className={styles.btnContainer}>
              <Button
                href='https://calendly.com/chris-ware-dev/discovery-call'
                target='_blank'
                btnType='grayOutline'
                text='Schedule a discovery call'
              />
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
