import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactPageIntro.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/contact.jpg";
import Img2 from "../../../../public/images/chris.jpg";
import Img3 from "../../../../public/images/contactusiv.png";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Calendarii from "@/components/icons/Calendarii/Calendarii";
import Email from "@/components/icons/Email/Email";
import Instagram from "@/components/icons/Instagram/Instagram";
// import Phone from "@/components/icons/Phone/Phone";
import Arrow from "@/components/icons/Arrow/Arrow";
import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";

const data = [
  {
    id: 1,
    title: "Chris Ware",
    desc: "Founder & CEO • chris@fontsandfooters.com",
    src: Img2,
  },
  {
    id: 2,
    title: "General Inquiries",
    desc: "hello@fontsandfooters.eco",
    icon: <Email className={styles.icon} />,
  },
  {
    id: 3,
    title: "LinkedIn",
    desc: "linkedin.com/fontsandfooters",
    icon: <LinkedIn className={styles.icon} />,
  },
  {
    id: 4,
    title: "Instagram",
    desc: "instagram.com/fontsandfooters",
    icon: <Instagram className={styles.icon} />,
  },
  {
    id: 5,
    title: "Calendly",
    desc: "calendly.com/fontsandfooter",
    icon: <Calendarii className={styles.icon} />,
  },
  // {
  //   id: 6,
  //   title: "Customer service",
  //   desc: "+32 470 108 222",
  //   icon: <Phone className={styles.icon} />,
  // },
];

export default function ContactPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='Contact' fill className={styles.img} />
              <div className={styles.calendlyContainer}>
                <div className={styles.cardTop}>
                  <SectionIntroii title='Plan a discovery call' />
                  <div className={styles.subheading}>
                    We’re a new, remote-first studio based in Phoenix. Pick a
                    time that works, or reach us at{" "}
                    <a
                      href='mailto:hello@fontsandfooters.com'
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      hello@fontsandfooters.com
                    </a>
                    .
                  </div>
                </div>

                <div className={styles.ccBottom}>
                  <div className={styles.ccBottomLeft}>
                    <strong>Office hours</strong>
                    <br />
                    Mon–Fri, 9am–5pm (Arizona)
                    <br />
                    Typical response: within 1 business day
                  </div>

                  <a
                    href='https://calendly.com/chris-ware-dev/discovery-call'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.ccBottomRight}
                    aria-label='Book a discovery call on Calendly'
                    title='Book a discovery call on Calendly'
                  >
                    Book on Calendly
                    <div className={styles.arrowContainer}>
                      <Arrow className={styles.icon} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <SectionIntroii title='Contact' />
              <h1 className={styles.heading}>
                {/* Let&lsquo;s stay in touch */}
                Every meaningful project starts with a conversation.
              </h1>
              <div className={styles.imgContaineriii}>
                <Image
                  src={Img3}
                  alt='thinking'
                  fill
                  className={styles.imgiii}
                />
              </div>
              <div className={styles.mapDataContainer}>
                {data.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <div className={styles.cardLeft}>
                      <div className={styles.title}>{item.title}</div>
                      <p className={styles.desc}>{item.desc}</p>
                    </div>
                    <div className={styles.cardRight}>
                      {item.src && (
                        <Image
                          src={item.src}
                          alt='Contact'
                          className={styles.imgii}
                        />
                      )}
                      {item.icon && (
                        <div className={styles.iconBox}>{item.icon}</div>
                      )}
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
