import styles from "./BlogCardOne.module.css";
import Image from "next/image";
import Link from "next/link";
import SectionIntroii from "../SectionIntroii/SectionIntroii";

type CardPost = {
  title: string;
  href: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  imageAlt?: string;
};

interface Props {
  post: CardPost;
}

export default function BlogCardOne({ post }: Props) {
  const prettyDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <article className={styles.container}>
      <Link href={post.href} className={styles.link} aria-label={post.title}>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            {post.imageUrl ? (
              <Image
                src={post.imageUrl}
                alt={post.imageAlt || "Blog Image"}
                fill
                className={styles.img}
                sizes='(max-width: 1024px) 100vw, 50vw'
                priority
              />
            ) : (
              <div className={styles.imgFallback} />
            )}
          </div>
        </div>
        <div className={styles.bottom}>
          <SectionIntroii title={prettyDate} />
          <h5 className={styles.title}>{post.title}</h5>
          <p className={`${styles.desc} subheading`}>{post.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
