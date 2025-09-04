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
    title: "Respect time",
    desc: "We value your time and ours—efficiency is built into every step.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 2,
    title: "Output > effort",
    desc: "Results matter more than hours logged. We focus on what moves the needle.",
    icon: <Lightning className={styles.icon} />,
  },
  {
    id: 3,
    title: "Clarity converts",
    desc: "Clear communication and design drive action and trust.",
    icon: <Listing className={styles.icon} />,
  },
  {
    id: 4,
    title: "Small by design",
    desc: "Lean teams mean faster pivots, less overhead, and more attention to you.",
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
              <SectionIntroii title='Brand story' />
              <h2 className={styles.heading}>
                Fonts = the face of your brand. <br /> Footers = the foundation
                under it.{" "}
              </h2>
              <p className={styles.copy}>
                Together, we ship booking websites that feel premium, run fast,
                and quietly handle availability, policies, payments, and
                reminders—so you can focus on the work only you can do.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/' btnType='grayOutline' text='Contact us' />
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
              <Image src={Img1} fill alt='' title='' className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
