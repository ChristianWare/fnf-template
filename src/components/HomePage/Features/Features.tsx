import styles from "./Features.module.css";
import Integration from "@/components/icons/Integration/Integration";
import Design from "@/components/icons/Design/Design";
import Multiple from "@/components/icons/Multiple/Multiple";
import Payment from "@/components/icons/Payment/Payment";
import ServiceIllustration from "../../../../public/images/calendarii.png";
import Money from "@/components/icons/Money/Money";
import Stariii from "@/components/icons/Stariii/Stariii";
import Image from "next/image";

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  ctaLabel: string;
  icon: JSX.Element | string;
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
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
  },
  {
    slug: "salons-and-med-spas",
    title: "Salons & Med-Spas",
    subtitle: "Turn visits into confirmed appointments",
    description:
      "Service menus with durations and price ranges, stylist calendars, add-on treatments, consultation deposits, and series/packages. Waitlist logic and stylist bios reduce back-and-forth.",
    outcomes: [
      "Higher booking conversion across mobile & desktop",
      "Clear services, pricing, and add-ons",
      "Integrated payments & deposits with Stripe",
      "Faster pages (Core Web Vitals) that lift conversions",
    ],
    ctaLabel: "View service",
    icon: <Multiple className={styles.icon} />,
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
  },
  {
    slug: "black-car-and-private-transport",
    title: "Black-Car & Private Transport",
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
  },
  {
    slug: "rentals-and-experiences",
    title: "Rentals & Experiences",
    subtitle: "Reduce no-shows, improve cash flow",
    description:
      "Inventory-aware time slots, damage deposits, add-ons (helmets, insurance), waivers, and weather messaging. Easy reschedules reduce refunds and headaches.",
    outcomes: [
      "Deposit vs. full prepay flows",
      "Saved cards & vaulted customers",
      "Tips, taxes, and refunds done right",
      "Chargeback-aware receipt strategy",
    ],
    ctaLabel: "View service",
    icon: <Money className={styles.icon} />,
  },
  {
    slug: "",
    title: "",
    subtitle: "",
    description: "",
    outcomes: [],
    ctaLabel: "",
    icon: "",
  },
  {
    slug: "medspas-and-clinics",
    title: "MedSpas & Clinics",
    subtitle: "Professional scheduling for aesthetic treatments",
    description:
      "Treatment menus with consultation requirements, provider credentials, before/after galleries, consent forms, and package management. HIPAA-aware workflows and cancellation policies.",
    outcomes: [
      "Treatment-specific booking flows",
      "Provider licensing & bio showcases",
      "Package series and membership handling",
      "Secure patient data collection",
    ],
    ctaLabel: "View service",
    icon: <Stariii className={styles.icon} />,
  },
  // {
  //   slug: "vacation-rentals",
  //   title: "Vacation Rentals",
  //   subtitle: "Streamline bookings and guest management",
  //   description:
  //     "Multi-night calendars with dynamic pricing, cleaning fees, seasonal rates, guest limits, and check-in instructions. Damage deposit handling and house rules acceptance built in.",
  //   outcomes: [
  //     "Flexible night-based availability",
  //     "Dynamic pricing by season/demand",
  //     "Guest verification & deposit collection",
  //     "Automated check-in details & house rules",
  //   ],
  //   ctaLabel: "View service",
  //   icon: <Design className={styles.icon} />,
  // },
  // {
  //   slug: "ecommerce-shopify",
  //   title: "E-Commerce & Shopify",
  //   subtitle: "Convert browsers into buyers",
  //   description:
  //     "Custom Shopify themes, headless commerce with Next.js, cart optimization, checkout flows, and product configurators. Performance-tuned for mobile conversions with analytics integration.",
  //   outcomes: [
  //     "Headless Shopify with Next.js for speed",
  //     "Custom product pages & collections",
  //     "Optimized checkout & abandoned cart recovery",
  //     "Analytics, A/B testing, and conversion tracking",
  //   ],
  //   ctaLabel: "View service",
  //   icon: <Payment className={styles.icon} />,
  // },
];

export default function Features() {
  return (
    <section className={styles.container} id='features'>
      <div className={styles.parent}>
        <div className={styles.background} />

        <div className={styles.dataContainer}>
          {servicesData.map((x, index) => (
            <div key={index} className={styles.content}>
              <h3 className={styles.title}>{x.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
