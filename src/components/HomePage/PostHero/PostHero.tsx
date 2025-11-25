import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./PostHero.module.css";
// import Design from "@/components/icons/Design/Design";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
// import Money from "@/components/icons/Money/Money";
// import Hosting from "@/components/icons/Hosting/Hosting";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/WhyWeExist.jpg";
import Img2 from "../../../../public/images/whydb.jpg";
import Illustration from "../../../../public/illustrations/aboutIllustration.png";
import LogoImg from "../../../../public/logos/logoBlack.png";

// const data = [
//   {
//     id: 1,
//     title: "Full Controll",
//     icon: <Design className={styles.icon} />,
//   },
//   {
//     id: 2,
//     title: "Reduced Reliance",
//     icon: <Hosting className={styles.icon} />,
//   },
//   {
//     id: 3,
//     title: "Improved Profit",
//     icon: <Money className={styles.icon} />,
//   },
// ];

// const stats = [
//   {
//     id: 4,
//     number: "40+",
//     label: "Websites Built",
//   },
//   { id: 5, number: "10K+", label: "Bookings", },
//   {
//     id: 6,
//     number: "5X",
//     label: "Average ROI Increase",
//   },
// ];

export default function PostHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntroii title='About us' />
            <h2 className={styles.heading}>
              {/* We build custom booking websites that allow you to have full control
            over your bookings, reduce reliance on third-party platforms, and
            improve your profit margins. */}
              Your story, captured <br />
              in every frame.
            </h2>
          </div>
          {/* <div className={styles.pillsContainer}>
            {data.map((item) => (
              <div key={item.id} className={styles.pill}>
                {item.icon}
                {item.title}
              </div>
            ))}
          </div> */}
          {/* <div className={styles.btnContainer}>
            <Button href='/contact' btnType='black' text='More about us' />
          </div> */}
          <div className={styles.bottom}>
            <div className={styles.b1}>
              <div className={styles.imgContainer1}>
                <Image src={Img1} fill alt='' title='' className={styles.img} />
              </div>
              <div className={styles.imgContainer2}>
                <Image src={Img2} fill alt='' title='' className={styles.img} />
              </div>
              <div className={styles.imgContainer3}>
                <Image
                  src={LogoImg}
                  fill
                  alt=''
                  title=''
                  className={styles.logo}
                />
              </div>
            </div>
            <div className={styles.b2}>
              <h3 className={styles.headingii}>
                We build custom booking websites that allow you to have full
                control over your bookings, reduce reliance on third-party
                platforms, and improve your profit margins.
              </h3>
            </div>
            <div className={styles.b3}>
              <div className={styles.b3Content}>
                <div className={styles.illustrationContainer}>
                  <Image
                    src={Illustration}
                    alt='thinking'
                    fill
                    className={styles.imgIllustration}
                  />
                </div>
                <p className={styles.copy}>
                  Turning fleeting moments into timeless masterpieces—where
                  every flash captures emotion, beauty, and perfection. We blend
                  creativity, precision.
                </p>
                <div className={styles.btnContainer}>
                  <Button
                    href='/contact'
                    btnType='black'
                    text='More about us'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.statsContainer}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.stat}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}
