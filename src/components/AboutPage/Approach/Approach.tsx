import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Approach.module.css";
import Button from "@/components/shared/Button/Button";
import Image from "next/image";
import Img1 from "../../../../public/images/approach.jpg";

const data = [
  {
    id: 1,
    title: "Conversations that create trust (the “Diane path”)",
    desc: "Workshops, in-person networking, and real discovery calls that surface the right problem fast. Your site should make that trust transfer obvious—clear policies, human language, and easy next steps.",
  },
  {
    id: 2,
    title: "Content that compounds (the “Katelyn path”)",
    desc: "Helpful posts, guides, and FAQs that bring the right buyers from search. Your site should organize answers the way people actually look for them and lead smoothly to booking.",
  },
];

export default function Approach() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                fill
                alt='approach image'
                title='approach image'
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <h2 className={`${styles.heading} h3`}>
                Our approach to winning clients <br /> (and helping you win
                yours)
              </h2>
              <p className={styles.copy}>
                There are two reliable ways service businesses grow. We practice
                both, and we bake both into our builds:
              </p>
              <div className={styles.btnContainer}>
                <Button
                  href='/contact'
                  btnType='black'
                  text='Book your discovery call'
                />
              </div>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.mapDataContainer}>
                {data.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}>{item.desc}</p>
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
