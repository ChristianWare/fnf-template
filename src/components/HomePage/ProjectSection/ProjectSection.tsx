/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import styles from "./ProjectSection.module.css";
import { useState, useEffect } from "react";
import Thunder from "../../../../public/images/whydb.jpg";
import Chuxly from "../../../../public/images/Jim&Connie.jpg";
import Honey from "../../../../public/images/speed.jpg";
import Rentals from "../../../../public/images/charlie.jpg";
import Img3 from "../../../../public/images/ecomm.jpeg";
import DefaultImg from "../../../../public/images/speed.jpg";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Arrow from "@/components/icons/Arrow/Arrow";
import { StaticImageData } from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

const data = [
  { id: 1, title: "Thundertrails", src: Thunder },
  { id: 2, title: "Chuxly", src: Chuxly },
  { id: 3, title: "Golden Drips", src: Honey },
  { id: 4, title: "Elite Retreat Rentals", src: Rentals },
  { id: 5, title: "Furniture", src: Img3 },
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
            {data.map((item) => (
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
                <h3 className={styles.title}>{item.title}</h3>
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
      </LayoutWrapper>
    </section>
  );
}
