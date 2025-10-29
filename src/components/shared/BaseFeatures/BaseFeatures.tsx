// BaseFeatures.tsx
"use client";

import { useState } from "react";
import Arrow from "@/components/icons/Arrow/Arrow";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";
import SectionIntroii from "../SectionIntroii/SectionIntroii";
import styles from "./BaseFeatures.module.css";
import Design from "@/components/icons/Design/Design";
import Payment from "@/components/icons/Payment/Payment";
import Clock from "@/components/icons/Clock/Clock";
import Integration from "@/components/icons/Integration/Integration";
import Multiple from "@/components/icons/Multiple/Multiple";
import Hosting from "@/components/icons/Hosting/Hosting";
import Money from "@/components/icons/Money/Money";
import Stariii from "@/components/icons/Stariii/Stariii";
import Analytics from "@/components/icons/Analytics/Analytics";
import Edit from "@/components/icons/Edit/Edit";
import Modal from "../Modal/Modal";
import Image, { StaticImageData } from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import Reminder from "../../../../public/images/reminder.jpg";
import Seo from "../../../../public/images/seo.jpg";
import OnlineBooking from "../../../../public/images/onlineBooking.jpg";
import Staff from "../../../../public/images/staff.jpg";
import Blog from "../../../../public/images/blog.jpg";
import Reviews from "../../../../public/images/reviews.jpg";
import AnalyticsImg from "../../../../public/images/analytics.jpg";
import RevisionsImg from "../../../../public/images/revisions.jpg";
import CreditCard from "../../../../public/images/creditcard.jpg";
import Img2 from "../../../../public/images/work.png";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  src: StaticImageData;
};

const pagesData = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  { id: 3, title: "Services" },
  { id: 4, title: "Contact" },
  { id: 5, title: "Legal Information" },
  { id: 6, title: "404" },
];

const featureData: Feature[] = [
  {
    icon: <Design className={styles.icon} />,
    title: "One-screen booking tool",
    description:
      "A frictionless, single-view journey that guides guests from service selection to provider, time, and payment without forcing page reloads or context switches. Real-time availability and price updates make choices obvious and reduce decision fatigue, while prefilled fields for returning customers shorten the path to confirmation. Inline add-ons, clear deposit disclosures, and policy callouts prevent surprises and support higher conversion. Built mobile-first, it feels instant and trustworthy on any device.",
    bullets: [
      "Realtime availability and pricing",
      "Inline upsells and add-ons",
      "Prefilled details for returning guests",
      "Clear policy and deposit messaging",
      "Mobile-first performance",
    ],
    src: OnlineBooking,
  },
  {
    icon: <Payment className={styles.icon} />,
    title: "Payment Processing",
    description:
      "Powered by Stripe for speed, security, and flexibility, the checkout supports deposits vs. full prepay, saved cards, Apple Pay/Google Pay, and optional BNPL. You can authorize now and capture later, issue partial refunds, and generate detailed, dispute-ready receipts with itemized add-ons and taxes. Surcharges and promo codes are rules-driven, so you can recover fees or run campaigns without custom dev. Everything is PCI-safe and designed for minimal friction and maximum trust.",
    bullets: [
      "Deposits or full prepay",
      "Apple Pay/Google Pay and BNPL",
      "Partial capture and refunds",
      "Dispute-ready receipts",
      "Rule-based promos and surcharges",
    ],
    src: Img1,
  },
  {
    icon: <Clock className={styles.icon} />,
    title: "Automated SMS/email reminders",
    description:
      "Configurable reminders reduce no-shows while keeping guests informed and confident. Choose timing windows like 24h, 3h, and 1h, add arrival notes or parking tips, and embed self-serve reschedule/cancel links that respect deposit and cutoff policies. Messages are branded, trackable, and localized where needed, so communication stays on-brand and clear. The result is fewer last-minute gaps, happier staff, and a smoother day-of experience for everyone.",
    bullets: [
      "Flexible timing windows",
      "Self-serve reschedule/cancel links",
      "Brandable templates",
      "Localized messaging support",
      "Reduced no-shows and gaps",
    ],
    src: Reminder,
  },
  {
    icon: <Integration className={styles.icon} />,
    title: "SEO & GEO Strategy",
    description:
      "Programmatic service and location pages ship with structured data, Open Graph, and fast Core Web Vitals to lift local rankings and click-through. Built-in GEO modules let you target neighborhoods and attractions with relevant copy, FAQs, and internal links. Calendar syncs and PMS/CRM hooks keep operational data aligned with marketing, improving accuracy and freshness. The stack favors clean URLs, strong headings, and schema so search engines understand and reward your content.",
    bullets: [
      "Programmatic service/location pages",
      "Schema and Open Graph out of the box",
      "Neighborhood-targeted modules",
      "Clean URLs and strong headings",
      "Calendar and PMS/CRM sync",
    ],
    src: Seo,
  },
  {
    icon: <Multiple className={styles.icon} />,
    title: "Multi-staff Management",
    description:
      "Assign roles, set availability, and manage resources with precision across providers and locations. Guests can choose a favorite pro or let the system auto-assign by skill tags, utilization, or performance goals. Blackout windows, buffer times, and travel/setup constraints prevent overbooking and protect service quality. Staff dashboards surface what matters—today’s schedule, notes, upsells—so teams stay focused and efficient.",
    bullets: [
      "Role-based permissions",
      "Skill tags and auto-assignment",
      "Blackouts, buffers, constraints",
      "Per-provider calendars",
      "Actionable staff dashboards",
    ],
    src: Staff,
  },
  {
    icon: <Hosting className={styles.icon} />,
    title: "Blog & News",
    description:
      "A lightweight CMS makes publishing fast: drafts, scheduled posts, image optimization, and canonical/redirect controls keep content tidy and SEO-sound. Use it for launches, promos, event coverage, and evergreen guides that capture intent and convert. Built-in components handle pull quotes, CTAs, and inline forms, turning readers into bookings without custom code. Everything is performance-aware for snappy LCP and great UX on mobile.",
    bullets: [
      "Drafts and scheduled publishing",
      "Canonical and redirect controls",
      "Inline CTAs and forms",
      "Image optimization",
      "Mobile-first performance",
    ],
    src: Blog,
  },
  {
    icon: <Money className={styles.icon} />,
    title: "Dynamic Pricing",
    description:
      "Price intelligently with time-of-day and day-of-week rules, seasonal tables, and surge windows for peak demand. Bundle popular add-ons, create limited-time offers, and test tiers to find the sweet spot for conversion and margin. Guardrails ensure transparency: guests always see a clear breakdown before payment. Because pricing logic is configuration-driven, you can iterate quickly without touching code.",
    bullets: [
      "Time/day rules and seasons",
      "Surge windows for peaks",
      "Bundles and limited offers",
      "Transparent price breakdown",
      "Config-driven, no deploys",
    ],
    src: CreditCard,
  },
  {
    icon: <Stariii className={styles.icon} />,
    title: "Reviews",
    description:
      "Automated post-visit flows collect ratings and comments while memories are fresh, with smart nudges that lift response rates. Publish the best testimonials on site and social with UGC permissions handled in the background, and route issues privately to your team for fast recovery. Widgets like carousels and badges update themselves, keeping proof fresh. The net effect is higher trust, stronger SEO, and more bookings.",
    bullets: [
      "Automated request flows",
      "UGC permissions captured",
      "Embeddable carousels/badges",
      "Private issue routing",
      "Fresh social proof for SEO",
    ],
    src: Reviews,
  },
  {
    icon: <Analytics className={styles.icon} />,
    title: "Analytics",
    description:
      "A clear dashboard tracks bookings, conversion rate, AOV, add-on attach, and channel attribution, so you know what’s working and why. Funnel events—from view to selection, add-on, and pay—are captured for precise optimization. Export clean signals to GA4 and Meta to power remarketing and lookalikes that map to revenue, not vanity metrics. With transparent data, you can double down on winning campaigns and fix friction fast.",
    bullets: [
      "Bookings, CR, AOV, attach rate",
      "Channel attribution clarity",
      "Full funnel event tracking",
      "GA4 and Meta exports",
      "Insights tied to revenue",
    ],
    src: AnalyticsImg,
  },
  {
    icon: <Edit className={styles.icon} />,
    title: "Unlimted Revisions",
    description:
      "During the build phase, iterate freely on copy, layout, media, and micro-interactions until the experience looks right and sells hard. We move quickly with structured feedback loops, so rounds are decisive and momentum stays high. Accessibility, performance, and brand details are tuned as we go to avoid costly post-launch fixes. You launch confidently, with a site dialed to your voice and your market.",
    bullets: [
      "Structured feedback loops",
      "Copy, layout, and UX tweaks",
      "Accessibility and performance passes",
      "Brand-consistent polish",
      "Launch-ready confidence",
    ],
    src: RevisionsImg,
  },
];

export default function BaseFeatures() {
  const [selected, setSelected] = useState<Feature | null>(null);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.imgContainer}>
                <Image src={Img2} alt='' fill className={styles.img} />
              </div>
              <SectionIntroii title='Modular blocks' />
              <h2 className={styles.heading}>
                What&apos;s included <br /> in every website we build
              </h2>
            </div>
            <div className={styles.topRight}>
              <p className={`${styles.copy} subheading`}>
                We start from a basic structure and then we add the
                functionalities that are used for your business. You keep
                control of your site and your budget.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  href='/contact'
                  btnType='black'
                  text="Let's figure out what you really need"
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.one}>
              <SectionIntro title='Base pages' />
              <div className={styles.mapDataContainer}>
                {pagesData.map((page) => (
                  <div key={page.id} className={styles.card}>
                    <div className={styles.title}>
                      <Arrow className={styles.arrow} /> {page.title}
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.copyii}>
                These are the essential pages that every website needs to have.
                They provide the basic information about your business and help
                visitors navigate your site. We do this with a custom design
                website that matches your brand identity.
              </p>
            </div>
            <div className={styles.twoThree}>
              {featureData.map((feature, index) => (
                <button
                  key={index}
                  className={styles.featureCard}
                  onClick={() => setSelected(feature)}
                  aria-label={`Open details for ${feature.title}`}
                >
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  {feature.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className={styles.modalContent}>
            <div className={styles.modalText}>
              <div>
                <h3 className={styles.modalTitle}>{selected.title}</h3>
                <p className={`${styles.modalCopy} subheading`}>
                  {selected.description}
                </p>
              </div>
              <ul className={styles.modalList}>
                {selected.bullets.map((b, i) => (
                  <li key={i} className={styles.modalListItem}>
                    • {b}
                  </li>
                ))}
              </ul>
              <div className={styles.modalCta}>
                <Button
                  href='/contact'
                  btnType='black'
                  text='Learn more'
                  arrow
                />
              </div>
            </div>
            <div className={styles.modalImage}>
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className={styles.modalImg}
                priority
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
