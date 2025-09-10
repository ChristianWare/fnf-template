import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactPageIntro.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/contact.jpg";
import Img2 from "../../../../public/images/chris.jpg";
import Img3 from "../../../../public/images/contactusiv.png";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Clock from "@/components/icons/Clock/Clock";
import Email from "@/components/icons/Email/Email";
import Instagram from "@/components/icons/Instagram/Instagram";
import Phone from "@/components/icons/Phone/Phone";
import Arrow from "@/components/icons/Arrow/Arrow";

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
    desc: "hello@evermind.eco",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 3,
    title: "Press & Media",
    desc: "press@evermind.eco",
    icon: <Email className={styles.icon} />,
  },
  {
    id: 4,
    title: "Instagram",
    desc: "@evermind.eco",
    icon: <Instagram className={styles.icon} />,
  },
  {
    id: 5,
    title: "Customer service",
    desc: "+32 470 108 222",
    icon: <Phone className={styles.icon} />,
  },
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
                  <SectionIntroii title='Plan a meeting' />
                  <div className={styles.subheading}>
                    Our HQ is based in Brussels — close to decision-makers,
                    climate goals, and good coffee.
                  </div>
                </div>
                <div className={styles.ccBottom}>
                  <div className={styles.ccBottomLeft}>
                    Avenue Louise 231 <br />
                    1050 Brussels, Belgium
                  </div>
                  <div className={styles.ccBottomRight}>
                    Show on map
                    <div className={styles.arrowContainer}>
                      <Arrow className={styles.icon} />
                    </div>
                  </div>
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
              <Image src={Img3} alt='thinking' fill className={styles.imgiii} />
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
