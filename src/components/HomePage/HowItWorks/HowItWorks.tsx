"use client";

import styles from "./HowItWorks.module.css";
import { useEffect, useRef, useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import { process } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Img1 from "../../../../public/images/discoveryii.jpg";
import Img2 from "../../../../public/images/strategize.jpg";
import Img3 from "../../../../public/images/designandpb.jpg";
import Img4 from "../../../../public/images/launchii.jpg";
import Img5 from "../../../../public/images/psoptimization.jpg";

export default function HowItWorks() {
  const rightRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [trackHeight, setTrackHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const stepTopsRef = useRef<number[]>([]);

  // 🔗 images to rotate through
  const gallery: StaticImageData[] = useMemo(
    () => [Img1, Img2, Img3, Img4, Img5],
    []
  );

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

  const imageIndex = useMemo(() => {
    if (process.length <= 1) return 0;
    const mapped = Math.floor(
      (activeIndex / (process.length - 1)) * (gallery.length - 1)
    );
    return Math.min(Math.max(mapped, 0), gallery.length - 1);
  }, [activeIndex, gallery.length]);

  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.leftContent}>
                <div className={styles.SectionIntroContainer}>
                  <SectionIntroii title='Our Processes' color='tan' />
                </div>
                <h2 className={styles.heading}>
                  How we work <span className='span2'>together</span>
                </h2>
                <div className={styles.imgContainer}>
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={imageIndex}
                      className={styles.imgLayer}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.985 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                    >
                      <Image
                        src={gallery[imageIndex]}
                        alt=''
                        fill
                        priority
                        className={styles.img}
                        sizes='(min-width:1068px) 40vw, 100vw'
                      />
                    </motion.div>
                  </AnimatePresence>
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
                    <div className={styles.imgContainerii}>
                      <AnimatePresence mode='wait'>
                        <motion.div
                          key={i}
                          className={styles.imgLayer}
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                          <Image
                            src={gallery[i]}
                            alt=''
                            fill
                            priority={i === 0}
                            className={styles.img}
                            sizes='(min-width:1068px) 40vw, 100vw'
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
