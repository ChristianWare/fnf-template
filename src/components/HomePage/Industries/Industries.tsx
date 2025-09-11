"use client";

import { useMemo, useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Industries.module.css";
import Image from "next/image";
import { projects } from "@/lib/data";
import Arrow from "@/components/icons/Arrow/Arrow";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Button from "@/components/shared/Button/Button";

export default function Industries() {
  const tripled = useMemo(() => [...projects, ...projects, ...projects], []);
  const baseLen = projects.length;
  const startIndex = baseLen;

  const [index, setIndex] = useState<number>(startIndex);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isShifting, setIsShifting] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidth = 500;
  const gap = 32;
  const step = 1;

  const offsetX = -index * (cardWidth + gap);

  const next = () => {
    if (isShifting || !isAnimating) return;
    setIsShifting(true);
    setIndex((i) => i + step);
  };

  const prev = () => {
    if (isShifting || !isAnimating) return;
    setIsShifting(true);
    setIndex((i) => i - step);
  };

  const handleTransitionEnd = () => {
    let newIndex = index;
    let jumped = false;

    if (index >= startIndex + baseLen) {
      newIndex = index - baseLen;
      jumped = true;
    } else if (index < startIndex) {
      newIndex = index + baseLen;
      jumped = true;
    }

    if (jumped) {
      setIsAnimating(false);
      setIndex(newIndex);
      requestAnimationFrame(() => setIsAnimating(true));
    }
    setIsShifting(false);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <SectionIntroii title='Selected Works' />
              <h2 className={styles.heading}>Case studies across industries</h2>
              <div className={styles.btnContainer}>
                <Button href='/work' btnType='lime' text='All case studies' />
              </div>
            </div>
            <div className={styles.topRight}>
              <div className={styles.scrollBtns}>
                <button
                  className={styles.arrowLeft}
                  onClick={prev}
                  aria-label='Previous'
                >
                  <Arrow className={styles.arrow} />
                </button>
                <button
                  className={styles.arrowRight}
                  onClick={next}
                  aria-label='Next'
                >
                  <Arrow className={styles.arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>

      <div className={styles.carouselViewport}>
        <div
          ref={trackRef}
          className={`${styles.track} ${
            isAnimating ? styles.trackAnimating : ""
          }`}
          style={{ transform: `translateX(${offsetX}px)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {tripled.map((item, i) => (
            <div key={`${item.id}-${i}`} className={styles.card}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className={styles.img}
                priority={i === index}
                sizes='(max-width: 1200px) 90vw, 1200px'
              />
              <div className={styles.imgOverlay} />
              <div className={styles.textLayer}>
                <h3 className={styles.feature}>{item.title}</h3>
                <p className={styles.desc}>{item.h1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
