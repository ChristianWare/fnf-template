import styles from "./Footer.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../../public/images/logoLight.png";
import Link from "next/link";
import LinkedIn from "@/components/icons/LinkedIn/LinkedIn";
import Yelp from "@/components/icons/Yelp/Yelp";
import Facebook from "@/components/icons/Facebook/Facebook";

interface Option {
  id: number;
  option: string;
  href?: string;
}

interface Section {
  id: number;
  title: string;
  options: Option[];
}

const data: Section[] = [
  {
    id: 1,
    title: "Services",
    options: [
      {
        id: 1.1,
        option: "Airport Transfers",
        href: "/services/airport-transfers",
      },
      {
        id: 1.2,
        option: "Hourly Charters",
        href: "/services/hourly-chauffeur",
      },
      {
        id: 1.3,
        option: "Corporate Events",
        href: "/services/corporate-events",
      },
      { id: 1.4, option: "Party Bus", href: "/services/party-bus" },
      { id: 1.5, option: "Weddings", href: "/services/party-bus-weddings" },
    ],
  },
  {
    id: 2,
    title: "Quick Links",
    options: [
      { id: 2.1, option: "About", href: "/about" },
      { id: 2.2, option: "Services", href: "/services" },
      { id: 2.3, option: "Blog", href: "/blog" },
      { id: 2.4, option: "Contact", href: "/contact" },
    ],
  },
  {
    id: 3,
    title: "Connect",
    options: [
      {
        id: 3.1,
        option: "reservations@niertransportation.com",
        href: "mailto:reservations@niertransportation.com",
      },
      { id: 3.2, option: "480-300-6003", href: "tel:4803006003" },
    ],
  },
];

const data2 = [
  { id: 4, title: "Privacy Policy", href: "/privacy" },
  { id: 5, title: "Terms & Conditions", href: "/terms" },
  { id: 6, title: "Accessibility Policy", href: "/accessibility" },
  { id: 7, title: "California Disclosures", href: "/california" },
];

const data3 = [
  {
    id: 8,
    href: "https://www.linkedin.com/company/nier-transportation/",
    icon: <LinkedIn className={styles.socialIcon} />,
  },
  {
    id: 9,
    href: "https://www.yelp.com/biz/nier-transportation-scottsdale",
    icon: <Yelp className={styles.socialIcon} />,
  },
  {
    id: 10,
    href: "https://www.facebook.com/profile.php?id=61576008853306",
    icon: <Facebook className={styles.socialIcon} />,
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' className={styles.img} priority />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((section) => (
              <div key={section.id} className={styles.optionSection}>
                <div className={styles.title}>{section.title}</div>
                <ul className={styles.optionList}>
                  {section.options.map((opt) => (
                    <li key={opt.id} className={styles.option}>
                      {opt.href ? (
                        <Link href={opt.href}>{opt.option}</Link>
                      ) : (
                        opt.option
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.b3}>
            {data3.map((item) => (
              <div key={item.id} className={styles.socialIconContainer}>
                <Link
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.data2Container}>
            {data2.map((item) => (
              <p key={item.id} className={styles.option}>
                <Link href={item.href}>{item.title}</Link>
              </p>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}
