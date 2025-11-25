import styles from "./Marquee.module.css";
import Img1 from "../../../../public/images/ecomm.jpeg";
import Img2 from "../../../../public/images/salon.jpg";
import Img3 from "../../../../public/images/equipment.jpg";
import Img4 from "../../../../public/images/medspa.jpg";
import Img5 from "../../../../public/images/vacation.jpg";
import Img6 from "../../../../public/images/transport.jpg";
import Img7 from "../../../../public/images/membership.jpg";
import Check from "@/components/icons/Check/Check";
import SectionIntroii from "../SectionIntroii/SectionIntroii";

const industries = [
  {
    title: "Ecommerce",
    icon: <Check className={styles.icon} />,
    src: Img1,
    description:
      "Streamline your online store operations with flexible payment solutions.",
  },
  {
    title: "Salons & Studios",
    icon: <Check className={styles.icon} />,
    src: Img2,
    description:
      "Manage appointments and payments seamlessly for your beauty business.",
  },
  {
    title: "Equipment Rentals",
    icon: <Check className={styles.icon} />,
    src: Img3,
    description:
      "Simplify rental transactions and inventory management for your equipment business.",
  },
  {
    title: "Med-Spa & Clinics",
    icon: <Check className={styles.icon} />,
    src: Img4,
    description:
      "Handle patient payments and bookings with healthcare-focused solutions.",
  },
  {
    title: "Vacation Rentals",
    icon: <Check className={styles.icon} />,
    src: Img5,
    description:
      "Accept bookings and deposits effortlessly for your property rentals.",
  },
  {
    title: "Luxury Transport",
    icon: <Check className={styles.icon} />,
    src: Img6,
    description:
      "Process premium transportation services with secure payment options.",
  },
  {
    title: "Memberships",
    icon: <Check className={styles.icon} />,
    src: Img7,
    description: "Automate recurring payments and member management with ease.",
  },
];

export default function Marquee() {
  return (
    <section className={styles.parent}>
      <div className={styles.top}>
        <SectionIntroii title="Who we're for" />
        <h2 className={styles.heading}>
          Industries We <span className='gradientText'>Serve</span>
        </h2>
      </div>
      <div className={styles.slider}>
        <div className={styles.track}>
          {[...industries, ...industries].map(
            ({ title, icon, description }, index) => (
              <div key={`${title}-${index}`} className={styles.imgContainer}>
                <div className={styles.contentContainer}>
                  <div className={styles.iconBox}>{icon}</div>
                  <div className={styles.bottom}>
                    <h3 className={styles.label}>{title}</h3>
                    <p className={styles.desc}>{description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
