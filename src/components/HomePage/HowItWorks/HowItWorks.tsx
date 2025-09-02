"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HowItWorks.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import { process } from "@/lib/data";
import Image from "next/image";
import Img1 from '../../../../public/images/how.jpg'

export default function HowItWorks() {
  const rightRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [trackHeight, setTrackHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const stepTopsRef = useRef<number[]>([]);

  const measure = () => {
    if (!listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    setTrackHeight(r.height);

    stepTopsRef.current = stepRefs.current.map((el) => (el ? el.offsetTop : 0));
  };

  useEffect(() => {
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);

    measure();
    const id = requestAnimationFrame(measure);

    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(id);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);
  const { scrollYProgress } = useScroll({
    target: rightRef,
    offset: ["start 10%", "end 55%"], 
  });
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, trackHeight]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  useMotionValueEvent(heightTransform, "change", (h) => {
    const barPx = Number(h) || 0;
    const tops = stepTopsRef.current;
    if (!tops.length) return;
    let idx = 0;
    for (let i = 0; i < tops.length; i++) {
      if (barPx >= tops[i]) idx = i;
      else break;
    }
    setActiveIndex(idx);
  });

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <SectionIntroii title='Our Process' />
              <h2 className={styles.heading}>How it works</h2>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill alt='' title='' className={styles.img} />
              </div>
            </div>
          </div>

          <div className={styles.right} ref={rightRef}>
            <div className={styles.progressTrack} aria-hidden='true'>
              <motion.div
                className={styles.progressBar}
                style={{ height: heightTransform, opacity: opacityTransform }}
              />
            </div>
            <div ref={listRef} className={styles.mapDataBox}>
              {process.map((item, i) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={[
                    styles.card,
                    i < activeIndex ? styles.isPast : "",
                    i === activeIndex ? styles.isActive : "",
                  ].join(" ")}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.stepIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <strong className={styles.title}>{item.title}</strong>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
