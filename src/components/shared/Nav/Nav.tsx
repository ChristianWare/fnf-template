"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useEffect, useState, MouseEvent } from "react";

const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Work", href: "/work" },
  { text: "Pricing", href: "/pricing" },
  { text: "Contact", href: "/contact" },
];

interface Props {
  color?: string;
  hamburgerColor?: string;
}

export default function Nav({ color = "", hamburgerColor = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    body.style.overflow =
      window.innerWidth <= 968 && isOpen ? "hidden" : "auto";

    const handleResize = () => setIsOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const handleHamburgerClick = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    toggleMenu();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div
          className={
            isOpen ? `${styles.navItems} ${styles.active}` : styles.navItems
          }
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${styles[color]}`}
              onClick={closeMenu}
            >
              {item.text}
            </Link>
          ))}

          <div className={styles.btnContainerii}>
            <Button
              href='/contact'
              text='Book your discovery call'
              btnType='black'
              onClick={closeMenu}
            />
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button
            href='/contact'
            text='Book your discovery call'
            btnType='black'
          />
        </div>

        <span
          className={
            isOpen ? `${styles.hamburger} ${styles.active}` : styles.hamburger
          }
          onClick={handleHamburgerClick}
          aria-expanded={isOpen}
          role='button'
        >
          <span
            className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
          ></span>
          <span
            className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
          ></span>
          <span
            className={`${styles.whiteBar} ${styles[hamburgerColor]}`}
          ></span>
        </span>
      </nav>
    </header>
  );
}
