import styles from "./Logo.module.css";
import Link from "next/link";
import SectionIntroii from "../SectionIntroii/SectionIntroii";

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      <SectionIntroii title='Fonts & Footers' color='tan' />
    </Link>
  );
};

export default Logo;
