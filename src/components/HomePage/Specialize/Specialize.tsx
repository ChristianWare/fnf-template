"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Specialize.module.css";
import Image, { StaticImageData } from "next/image";

import Img1 from "../../../../public/images/salon.jpg";
import Img2 from "../../../../public/images/transport.jpg";
import Img3 from "../../../../public/images/vacation.jpg";
import Img4 from "../../../../public/images/equipment.jpg";
import Img5 from "../../../../public/images/medspa.jpg";
import Img6 from "../../../../public/images/multi.jpg";
import Img7 from "../../../../public/images/membership.jpg";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Starii from "@/components/icons/Starii/Starii";

type Specialty = {
  id: number;
  feature: string;
  desc: string;
  src: StaticImageData;
};

const specialties: readonly Specialty[] = [
  {
    id: 1,
    feature: "One-screen checkout",
    desc: "A streamlined service → time → pay flow specifically designed for mobile devices. Customers complete their entire booking in seconds without juggling multiple screens or forms.",
    src: Img1,
  },
  {
    id: 2,
    feature: "Deposit-first payments",
    desc: "Secure payment collection powered by Stripe with support for Apple Pay and Google Pay. Reduce no-shows by requiring deposits upfront, with automatic refund handling built in.",
    src: Img2,
  },
  {
    id: 3,
    feature: "Automatic reminders & rescheduling",
    desc: "Smart SMS and email reminders sent via Twilio keep your calendar full and reduce missed appointments. Customers can reschedule with one click, automatically updating your availability in real-time.",
    src: Img3,
  },
  {
    id: 4,
    feature: "Calendar sync & staff management",
    desc: "Two-way sync with Google Calendar and iCal keeps your team's schedules in perfect harmony. Manage staff roles, set buffer times between appointments, and block out dates with granular control.",
    src: Img4,
  },
  {
    id: 5,
    feature: "Add-ons & upsells",
    desc: "Intelligently suggest relevant extras and upgrades during the checkout flow, not after the fact. Increase average order value by 30-40% by presenting add-ons at the moment of highest intent.",
    src: Img5,
  },
  {
    id: 6,
    feature: "SEO'd service/location pages",
    desc: "Every service and location gets its own optimized landing page that ranks in local search. These pages are built to convert visitors into bookings with clear CTAs and social proof.",
    src: Img6,
  },
  {
    id: 7,
    feature: "Live analytics",
    desc: "Real-time dashboard tracking bookings, revenue, show-up rates, and payment method distribution. Make data-driven decisions with insights that update as your business operates throughout the day.",
    src: Img7,
  },
  {
    id: 8,
    feature: "Full ownership",
    desc: "Everything runs on your domain with your Stripe account and your customer data—no third-party lock-in. You get the complete source code, giving you total control and the freedom to customize or migrate anytime.",
    src: Img1,
  },
] as const;

export default function Specialize() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set([0]));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ticking = useRef(false);

  const measure = useCallback(() => {
    const mid = window.innerHeight * 0.7;

    let bestIdx = 0;
    let bestDist = Infinity;
    const nextVisible = new Set<number>();

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();

      const isVisible = rect.bottom >= 0 && rect.top <= window.innerHeight;
      if (isVisible) nextVisible.add(idx);

      const center = rect.top + rect.height * 0.5;
      const dist = Math.abs(center - mid);

      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    setVisibleSet(nextVisible);
    setActiveIndex((prev) => (prev !== bestIdx ? bestIdx : prev));
  }, []);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      measure();
      ticking.current = false;
    });
  }, [measure]);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll, measure]);

  return (
    // <LayoutWrapper>
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntroii title='Our Specialties' />
          </div>

          <h2 className={styles.heading}>
            Whether you run a one-chair salon, manage a fleet of luxury cars, or
            oversee a portfolio of vacation rentals, we build booking platforms
            tailored to your exact service model and growth stage.
          </h2>

          <div className={styles.imgContainer}>
            <div className={styles.imageStack}>
              {specialties.map((s, idx) => (
                <Image
                  key={s.id}
                  src={s.src}
                  alt={s.feature}
                  className={`${styles.imgLayer} ${
                    idx === activeIndex ? styles.visible : ""
                  }`}
                  fill
                  priority={idx === 0}
                  quality={100}
                  sizes='(max-width: 768px) 100vw, 40vw'
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.mapDataBox}>
            {specialties.map((x, idx) => {
              const isActive = idx === activeIndex;
              const depthBehind = Math.max(0, activeIndex - idx);
              const PEEK_STEP = 5;
              const translateY =
                idx <= activeIndex ? `-${depthBehind * PEEK_STEP}%` : "0%";
              const opacityBehind = Math.max(0.1, 1 - depthBehind * 0.1);
              const scaleBehind = 1 - Math.min(depthBehind, 8) * 0.04;
              const enteringOpacity =
                idx > activeIndex && !visibleSet.has(idx) ? 0 : undefined;

              return (
                <div
                  key={x.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  data-index={idx}
                  className={`${styles.card} ${
                    isActive ? styles.isActive : styles.isInactive
                  }`}
                  style={{
                    zIndex: isActive ? 1000 : idx + 1,
                    opacity:
                      enteringOpacity !== undefined
                        ? enteringOpacity
                        : opacityBehind,
                    transform: `translateY(${translateY}) scale(${
                      idx <= activeIndex ? scaleBehind : 1
                    })`,
                    willChange: "opacity, transform",
                  }}
                >
                  <Starii className={styles.blackDot} />
                  <div className={styles.cardLeft}>
                    <h3 className={styles.id}>
                      {x.feature}
                    </h3>
                  </div>
                  <div className={styles.cardRight}>
                    <div className={styles.imgContainerii}>
                      <Image
                        src={x.src}
                        alt={x.feature}
                        fill
                        quality={100}
                        sizes='(max-width: 768px) 100vw, 100vw'
                        className={styles.imgSingle}
                      />
                    </div>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    // </LayoutWrapper>
  );
}
