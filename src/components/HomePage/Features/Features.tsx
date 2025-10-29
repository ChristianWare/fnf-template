// "use client";

import styles from "./Features.module.css";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Integration from "@/components/icons/Integration/Integration";
import Design from "@/components/icons/Design/Design";
import Analytics from "@/components/icons/Analytics/Analytics";
import Multiple from "@/components/icons/Multiple/Multiple";
import Hosting from "@/components/icons/Hosting/Hosting";
import Edit from "@/components/icons/Edit/Edit";
import Clock from "@/components/icons/Clock/Clock";
import Payment from "@/components/icons/Payment/Payment";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Img1 from "../../../../public/images/whydb.jpg";
import Img2 from "../../../../public/images/howItWorks.jpg";
import OnlineBooking from "../../../../public/images/onlineBooking.jpg";
import CreditCard from "../../../../public/images/creditcard.jpg";
import AnalyticsImage from "../../../../public/images/analytics.jpg";
import Transform from "../../../../public/images/transform.jpg";
import Empathy from "../../../../public/images/empathy.jpg";
import Direct from "../../../../public/images/direct.jpg";
import Branding from "../../../../public/images/ecomm.jpeg";
import Access from "../../../../public/images/how.jpg";
import Money from "@/components/icons/Money/Money";
import Stariii from "@/components/icons/Stariii/Stariii";
// import { usePathname } from "next/navigation";
// import Button from "@/components/shared/Button/Button";
import { StaticImageData } from "next/image";

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  ctaLabel: string;
  icon: JSX.Element | string;
  src: string | StaticImageData;
};

const servicesData: Service[] = [
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
    src: "",
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
    src: "",
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
    src: "",
  },
  {
    slug: "direct-booking-website",
    title: "Direct-Booking Website",
    subtitle: "Turn visits into confirmed appointments",
    description:
      "A conversion-focused Next.js website that makes it effortless to book, pay a deposit, and get on your calendar.",
    outcomes: [
      "Higher booking conversion across mobile & desktop",
      "Clear services, pricing, and add-ons",
      "Integrated payments & deposits with Stripe",
      "Faster pages (Core Web Vitals) that lift conversions",
    ],
    ctaLabel: "View service",
    icon: <Multiple className={styles.icon} />,
    src: OnlineBooking,
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
    src: "",
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
    src: "",
  },
  {
    slug: "booking-and-scheduling",
    title: "Booking & Scheduling",
    subtitle: "Frictionless calendars for teams & locations",
    description:
      "Role-aware scheduling, add-ons, duration rules, and multi-location management made simple.",
    outcomes: [
      "Provider calendars with buffer & prep times",
      "Add-ons, upsells, and packages at checkout",
      "Multi-location routing and availability",
      "Automated confirmations & reminders",
    ],
    ctaLabel: "View service",
    icon: <Integration className={styles.icon} />,
    src: Transform,
  },
  {
    slug: "stripe-payments-and-deposits",
    title: "Stripe Payments & Deposits",
    subtitle: "Reduce no-shows, improve cash flow",
    description:
      "Deposits, holds, BNPL, tips, refunds—implemented with dispute-ready receipts and tax handling.",
    outcomes: [
      "Deposit vs. full prepay flows",
      "Saved cards & vaulted customers",
      "Tips, taxes, and refunds done right",
      "Chargeback-aware receipt strategy",
    ],
    ctaLabel: "View service",
    icon: <Money className={styles.icon} />,
    src: CreditCard,
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
    src: "",
  },
  {
    slug: "local-and-programmatic-seo",
    title: "Local & Programmatic SEO",
    subtitle: "Get discovered where people book",
    description:
      "Local packs, service-city landing pages, and structured data to grow inbound bookings.",
    outcomes: [
      "Service-city page frameworks",
      "GBP optimization & review ingestion",
      "Schema: LocalBusiness, Service, FAQ",
      "Editorial calendar aligned to demand",
    ],
    ctaLabel: "View service",
    icon: <Design className={styles.icon} />,
    src: Img1,
  },
  {
    slug: "performance-and-core-web-vitals",
    title: "Performance & Core Web Vitals",
    subtitle: "Speed that converts",
    description:
      "Image pipeline, caching, and font strategy for a snappy site that drives more completed checkouts.",
    outcomes: [
      "Image/CDN optimization",
      "Font loading & CLS control",
      "Edge caching & route splitting",
      "Performance KPIs with targets",
    ],
    ctaLabel: "View service",
    icon: <Hosting className={styles.icon} />,
    src: Img2,
  },
  {
    slug: "migration-to-nextjs",
    title: "Migration to Next.js",
    subtitle: "Replatform without losing SEO",
    description:
      "From Webflow/Wix/WordPress to a modern, scalable stack with clean redirects and content mapping.",
    outcomes: [
      "301s and content parity plan",
      "Sanity CMS migration",
      "Launch checklist & DNS/HTTPS",
      "No-loss rankings approach",
    ],
    ctaLabel: "View service",
    icon: <Edit className={styles.icon} />,
    src: Direct,
  },
  {
    slug: "analytics-and-crm",
    title: "Analytics & CRM",
    subtitle: "Attribute bookings to revenue",
    description:
      "GA4 + server events, ad pixels, and CRM handoffs so you can see what actually fills your calendar.",
    outcomes: [
      "End-to-end funnel visibility",
      "UTM hygiene & campaign mapping",
      "Call tracking & form tracking",
      "HubSpot/Close/Pipedrive integrations",
    ],
    ctaLabel: "View service",
    icon: <Analytics className={styles.icon} />,
    src: AnalyticsImage,
  },
  {
    slug: "branding-and-visual-identity",
    title: "Branding & Visual Identity",
    subtitle: "A look that sells the appointment",
    description:
      "Conversion-ready brand kits: typography, color, components, and social/OG assets.",
    outcomes: [
      "Booking-first brand system",
      "Reusable UI components",
      "Ad & social variants",
      "Guidelines for consistency",
    ],
    ctaLabel: "View service",
    icon: <Stariii className={styles.icon} />,
    src: Branding,
  },
  {
    slug: "accessibility-and-compliance",
    title: "Accessibility & Compliance",
    subtitle: "Confident, inclusive experiences",
    description:
      "WCAG 2.2 AA, consent patterns, and PCI-aware flows aligned with Stripe best practices.",
    outcomes: [
      "WCAG AA patterns baked-in",
      "Consent and privacy UX",
      "Legal pages & policies",
      "QA & ongoing audits",
    ],
    ctaLabel: "View service",
    icon: <Payment className={styles.icon} />,
    src: Access,
  },
  {
    slug: "care-plans",
    title: "Care Plans",
    subtitle: "Continuous improvements & support",
    description:
      "Updates, CRO experiments, seasonal promos, and new service rollouts that keep bookings growing.",
    outcomes: [
      "Monthly updates & fixes",
      "CRO testing roadmap",
      "Promo & campaign launches",
      "Priority support SLAs",
    ],
    ctaLabel: "View service",
    icon: <Clock className={styles.icon} />,
    src: Empathy,
  },
];

export default function Features() {
  // const pathname = usePathname();
  const srcToUrl = (s: string | StaticImageData) =>
    typeof s === "string" ? s : s.src;

  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionIntroii title='services' />
          </div>
          <h2 className={styles.heading}>Services we offer</h2>
          {/* {pathname === "/" && (
            <div className={styles.btnContainer}>
              <Button
                href='/pricing/#compare'
                btnType='black'
                text='See full feature list'
              />
            </div>
          )} */}
        </div>
        <div className={styles.parent}>
          <div className={styles.dataContainer}>
            {servicesData.map((x, index) => (
              <div key={index} className={styles.content}>
                <div
                  className={styles.bg}
                  style={{ backgroundImage: `url(${srcToUrl(x.src)})` }}
                />
                <div className={styles.overlay} />
                <div className={styles.inner}>
                  <div className={styles.iconContainer}>{x.icon}</div>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
