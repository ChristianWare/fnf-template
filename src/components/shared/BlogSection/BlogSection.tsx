import styles from "./BlogSection.module.css";
import BlogCardOne from "../BlogCardOne/BlogCardOne";
import BlogCardTwo from "../BlogCardTwo/BlogCardTwo";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntroii from "../SectionIntroii/SectionIntroii";
import Img1 from "../../../../public/images/speed.jpg";
import Img2 from "../../../../public/images/whydb.jpg";
import Img3 from "../../../../public/images/ecomm.jpeg";

export default function BlogSection() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntroii title='Company insights (comming soon!)' />
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <BlogCardOne src={Img1} />
            </div>
            <div className={styles.bottomRight}>
              <BlogCardTwo src={Img2} />
              <BlogCardTwo src={Img3} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
