// components/account/AccountNav/AccountNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AccountNav.module.css";
import House from "@/components/icons/House/House";
import Cog from "@/components/icons/Cog/Cog";

export default function AccountNav() {
  const pathname = usePathname();
  const items = [
    {
      href: "/account",
      label: "Overview",
      icon: <House className={styles.icon} />,
    },
    {
      href: "/account/settings",
      label: "Settings",
      icon: <Cog className={styles.icon} />,
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`${styles.link} ${active ? styles.active : ""}`}
              >
                {it.icon}
                <span className={styles.linkText}>{it.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
