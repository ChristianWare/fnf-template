import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactPageContainer.module.css";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
import Image from "next/image";
import Img1 from "../../../../public/images/chris.png";
// const data = [
//   {
//     id: 1,
//     desc: "Discovery (15 min): Tell us your services, goals, and current booking pain points.",
//   },
//   {
//     id: 2,
//     desc: "Fit check & ballpark: We review your site/links and share a quick price range the same day.",
//   },
//   {
//     id: 3,
//     desc: "Proposal (24–48 hrs): Scope, timeline, and pricing—plus deposit/BNPL options—sent for e-signature.",
//   },
//   {
//     id: 4,
//     desc: "Kickoff: Pay deposit, share access (domain, Stripe, Google/365 calendar), and brand assets.",
//   },
//   {
//     id: 5,
//     desc: "Build sprint (10–14 days): Staging link, weekly check-ins, and quick approvals to keep momentum.",
//   },
//   {
//     id: 6,
//     desc: "Launch + handoff: Domain connect, 30-min training, playbooks, and continuous post-launch support.",
//   },
// ];

export default function ContactPageContainer() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Contact <br />{" "}
              <span className={styles.span}>Fonts & Footers</span>
            </h2>
            <p className={styles.copy}>
              Have a question, need a quote, or just curious whether a custom
              booking platform is right for you? Drop a line — no strings
              attached. We reply within one business day.
            </p>
            {/* <span className={styles.subHeading}>What&#39;s next?</span>
            <div className={styles.mapDataBox}>
              {data.map((item) => (
                <div key={item.id} className={styles.dataItem}>
                  <span className={styles.index}>
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              ))}
            </div> */}
            {/* <span className={styles.subHeadingii}>
              We&#39;ll get back to you within 24 hours
            </span> */}
            {/* <br /> */}
            <div className={styles.ownerbox}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='owner' className={styles.img} />
              </div>
              <div className={styles.ownerRight}>
                {/* <LinkedIn /> */}
                <span className={styles.owner}>Chris Ware</span>
                <p className={styles.title}>Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
