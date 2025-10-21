import styles from "./Logo.module.css";
import Link from "next/link";
import Calendar from "@/components/icons/Calendar/Calendar";

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      <Calendar className={styles.icon} />
      <span className={styles.text}>Fonts & Footers</span>
    </Link>
  );
};

export default Logo;
