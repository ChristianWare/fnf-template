import styles from "./Logo.module.css";
import Link from "next/link";
// import Calendar from "@/components/icons/Calendar/Calendar";

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      {/* <Calendar className={styles.icon} /> */}
      <div className={styles.icon} />
      <span className={styles.text1}>Fonts</span>
      <span className={styles.text2}>&</span>
      <span className={styles.text3}>Footers</span>
    </Link>
  );
};

export default Logo;
