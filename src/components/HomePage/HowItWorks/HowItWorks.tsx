"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HowItWorks.module.css";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import { process } from "@/lib/data";

export default function HowItWorks() {
  const rightRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [trackHeight, setTrackHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Measure track height to map scroll progress -> px height
  useEffect(() => {
    const measure = () => {
      if (!listRef.current) return;
      const r = listRef.current.getBoundingClientRect();
      setTrackHeight(r.height);
    };
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, []);

  // Scroll progress relative to the right column
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

  // IntersectionObserver to mark past/active steps
  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        let bestIdx = activeIndex;
        let best = -1;
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.index);
          if (e.intersectionRatio > best) {
            best = e.intersectionRatio;
            bestIdx = idx;
          }
        }
        setActiveIndex(bestIdx);
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-25% 0% -55% 0%",
      }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeIndex]);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <SectionIntroii title='Our Process' />
              <h2 className={styles.heading}>How it works</h2>
            </div>
          </div>

          <div className={styles.right} ref={rightRef}>
            <div
              ref={trackRef}
              className={styles.progressTrack}
              aria-hidden='true'
            >
              <motion.div
                className={styles.progressBar}
                style={{ height: heightTransform, opacity: opacityTransform }}
              />
            </div>

            <div ref={listRef} className={styles.mapDataBox}>
              {process.map((item, i) => (
                <div
                  key={item.id}
                  ref={(el) => { stepRefs.current[i] = el; }}
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
