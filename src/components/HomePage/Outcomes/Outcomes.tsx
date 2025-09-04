import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Outcomes.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/newhero.png";
// import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Stored Cards",
    desc: "Process payments against your client’s stored credit cards.",
  },
  {
    id: 2,
    title: "On-site QR Codes",
    desc: "Display on-site QR codes for direct mobile payments.",
  },
  {
    id: 3,
    title: "Payment Links",
    desc: "Send payment links for easy mobile transactions.",
  },
  {
    id: 4,
    title: "Tap & Pay",
    desc: "Enable Tap & Pay and integrate with terminals.",
  },
  {
    id: 5,
    title: "Tips",
    desc: "Encourage clients to leave tips during payment.",
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
                <Image src={Img1} fill alt='' className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <h2 className={styles.heading}>
                  Enhance in-store payments for your clients{" "}
                </h2>
                {/* <SectionIntroii title='Outcomes' color='tan' /> */}
                <p className={styles.copy}>
                  When using payment providers that support Apple Pay and Google
                  Pay, the payment process becomes a breeze. Just a simple
                  confirmation is all it takes, eliminating the need for manual
                  data entry. Discover the seamless payment experience today!
                </p>
                <div className={styles.btnContainer}>
                  <Button href='/about' btnType='lime' text='More details' />
                </div>
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.mapDataContainer}>
                  {data.map((item) => (
                    <div key={item.id} className={styles.card}>
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
