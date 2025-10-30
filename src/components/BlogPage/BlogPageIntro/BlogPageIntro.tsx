import styles from "./BlogPageIntro.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/illustrations/blogIllustration.png";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

export default function BlogPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionIntroii title='Blog' />
          <h1 className={styles.heading}>Insights & News</h1>
          <p className={styles.copy}>
            Stay updated with the latest trends, tips, and stories from our
            experts. Explore our blog for valuable insights and inspiration.
          </p>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='thinking'
              fill
              className={styles.img}
              priority
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
