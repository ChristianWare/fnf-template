"use client";

import styles from "./SectionIntroii.module.css";
import Star from "@/components/icons/Star/Star";
import { useEffect, useState } from "react";

function getCurrentMonth(locale?: string): string {
  const loc =
    locale ?? (typeof navigator !== "undefined" ? navigator.language : "en-US");
  return new Date().toLocaleString(loc, { month: "long" });
}

export default function SectionIntroii() {
  // Render a stable value on the server to avoid hydration issues
  const [currentMonth, setCurrentMonth] = useState<string>(
    getCurrentMonth("en-US")
  );

  // On the client, update to the user’s real locale (if different)
  useEffect(() => {
    setCurrentMonth(getCurrentMonth());
  }, []);

  return (
    <section className={styles.container}>
      <Star className={styles.icon} />
      <span className={styles.text}>
        We&apos;re taking new Projects for{" "}
        <span className={styles.month}>{currentMonth}</span>
      </span>
    </section>
  );
}
