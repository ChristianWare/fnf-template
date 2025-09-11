/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import styles from "./ProjectSection.module.css";
import { useState, useEffect } from "react";
import Nier from "../../../../public/images/road.webp";
import Dog from "../../../../public/images/dog.jpg";
import ErRentals from "../../../../public/images/erRentals.png";
import DefaultImg from "../../../../public/images/road.webp";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Arrow from "@/components/icons/Arrow/Arrow";
import { StaticImageData } from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Nier Transportation",
    src: Nier,
    href: "https://www.niertransportation.com/",
  },
  {
    id: 2,
    title: "Dog Spa",
    src: Dog,
    href: "https://www.niertransportation.com/",
  },
  {
    id: 3,
    title: "Elite Retreat Rentals",
    src: ErRentals,
    href: "https://www.niertransportation.com/",
  },
];

export default function ProjectSection() {
  const [isTouch, setIsTouch] = useState(false);
  const [activeImage, setActiveImage] = useState(DefaultImg);
  const [activeTitle, setActiveTitle] = useState("Fonts & Footers");
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const touchCapable =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouch(touchCapable);
  }, []);

  const activate = (itemId: number, src: StaticImageData, title: string) => {
    setActiveImage(src);
    setActiveTitle(title);
    setActiveId(itemId);
  };

  const reset = () => {
    setActiveImage(DefaultImg);
    setActiveTitle("Fonts & Footers");
    setActiveId(null);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntroii title='Our Work' />
          <h2 className={styles.heading}>
            Custom booking websites <br /> we&#39;ve built
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            {data.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className={styles.card}
                onMouseEnter={() => {
                  if (!isTouch) activate(item.id, item.src, item.title);
                }}
                onMouseLeave={() => {
                  if (!isTouch) reset();
                }}
                onClick={() => {
                  if (isTouch) {
                    activeId === item.id
                      ? reset()
                      : activate(item.id, item.src, item.title);
                  }
                }}
              >
                <Link href={item.href} target='_blank' className={styles.title}>
                  {item.title}
                </Link>
                <Arrow className={styles.arrow} />
              </div>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={activeImage}
                alt={activeTitle}
                title={activeTitle}
              />
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button href='/work' btnType='black' text='See all of our work' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
