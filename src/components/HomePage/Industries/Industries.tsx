"use client";

import { useMemo, useRef, useState } from "react";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Industries.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Img2 from "../../../../public/images/speed.jpg";
import Img3 from "../../../../public/images/how.jpg";
import Img4 from "../../../../public/images/ecomm.jpeg";
import Arrow from "@/components/icons/Arrow/Arrow";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";

const data = [
  {
    id: 1,
    feature: "Salon & Wellness Booking",
    desc: "→ Perfect for hair studios, barbers, spas, and massage therapists who need staff-level calendars, service add-ons, and tip capture.",
    src: Img1,
  },
  {
    id: 2,
    feature: "Luxury Transport Scheduling",
    desc: "→ Custom flows for black-car fleets, limo services, and executive shuttles—with live vehicle availability, distance pricing, and damage-hold deposits.",
    src: Img2,
  },
  {
    id: 3,
    feature: "Vacation-Rental Portfolios",
    desc: "→ Multi-property engines that sync with PMS calendars, support dynamic nightly rates, and offer guest portals for upsells like late checkout or grocery packs.",
    src: Img3,
  },
  {
    id: 4,
    feature: "Equipment & Experience Rentals",
    desc: "→ Ideal for kayak fleets, camera-gear shops, and adventure tours that need inventory tracking, QR check-in/out, and overtime fee automation.",
    src: Img4,
  },
  {
    id: 5,
    feature: "Medical & Clinic Appointments",
    desc: "→ HIPAA-ready scheduling for dentists, physiotherapists, and aesthetic clinics, featuring intake forms, insurance fields, and room/resource allocation.",
    src: Img1,
  },
  {
    id: 6,
    feature: "Multi-Location Chains",
    desc: "→ One backend for franchises or studio chains, allowing location switchers, per-branch pricing, and centralised analytics.",
    src: Img2,
  },
  {
    id: 7,
    feature: "Membership & Recurring Services",
    desc: "→ Platforms that bundle recurring bookings with subscription billing—perfect for personal-training packages, co-working desks, or wellness clubs.",
    src: Img3,
  },
];

export default function Industries() {
  const tripled = useMemo(() => [...data, ...data, ...data], []);
  const baseLen = data.length;
  const startIndex = baseLen;

  const [index, setIndex] = useState(startIndex);
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
              <SectionIntroii title='Who we work with' />
              <h2 className={styles.heading}>Industries We Serve</h2>
            </div>
            <div className={styles.topRight}>
              <div className={styles.scrollBtns}>
                <button
                  className={styles.arrowLeft}
                  onClick={prev}
                  aria-label='Previous'
                  // aria-disabled={isShifting}
                >
                  <Arrow className={styles.arrow} />
                </button>
                <button
                  className={styles.arrowRight}
                  onClick={next}
                  aria-label='Next'
                  // aria-disabled={isShifting}
                >
                  <Arrow className={styles.arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>

      {/* Full-bleed viewport so 500px cards can extend beyond the page edges */}
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
                alt={item.feature}
                fill
                className={styles.img}
                priority={i === index}
              />
              <div className={styles.imgOverlay} />
              <div className={styles.textLayer}>
                <h3 className={styles.feature}>{item.feature}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
