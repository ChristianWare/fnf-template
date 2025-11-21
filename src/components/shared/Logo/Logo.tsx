import styles from "./Logo.module.css";
import Link from "next/link";
// import Refresh from "@/components/icons/Refresh/Refresh";

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      {/* <Refresh className={styles.icon} /> */}
      <span className={styles.text1}>Fonts & Footers</span>
      {/* <span className={styles.text1}>&-</span> */}
      {/* <span className={styles.text1}>Footers</span> */}
    </Link>
  );
};

export default Logo;
