import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ContactPageContainer.module.css";
import ContactForm from "@/components/shared/ContactForm/ContactForm";
import Image from "next/image";
import Img1 from "../../../../public/images/chris.png";
// import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";

const data = [
  {
    id: 1,
    desc: "We'd love to schedule a call to introduce our capabilities",
  },
  {
    id: 2,
    desc: "We can sign an NDA as needed",
  },
  {
    id: 3,
    desc: "Our technical team will provide a project proposal within 48 hours",
  },
];

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
            <span className={styles.subHeading}>What&#39;s next?</span>
            <div className={styles.mapDataBox}>
              {data.map((item) => (
                <div key={item.id} className={styles.dataItem}>
                  <span className={styles.index}>
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
            <span className={styles.subHeadingii}>
              We&#39;ll get back to you within 24 hours
            </span>
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
