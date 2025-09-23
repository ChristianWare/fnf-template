"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useEffect, useState, MouseEvent, useRef } from "react";
import Image from "next/image";
import Img1 from "../../../../public/images/whydb.jpg";
import SectionIntroii from "../SectionIntroii/SectionIntroii";

const navItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Work", href: "/work" },
  { text: "Pricing", href: "/pricing" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];

interface Props {
  color?: string;
  hamburgerColor?: string;
}

export default function Nav({ color = "", hamburgerColor = "" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const body = document.body;
    body.style.overflow =
      window.innerWidth <= 1068 && isOpen ? "hidden" : "auto";
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

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isOpen && currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }
      lastScrollY = currentScrollY;
    };

    const optimizedHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandleScroll);
    return () => window.removeEventListener("scroll", optimizedHandleScroll);
  }, [isOpen]);

  return (
    <header
      className={`${styles.header} ${showNav || isOpen ? styles.show : styles.hide} ${isOpen ? styles.open : ""}`}
      ref={navRef}
    >
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

          <div className={styles.menuImage}>
            <Image src={Img1} alt='Menu image' fill className={styles.img} />
            <div className={styles.menuImageOverlay}>
              {/* <span className={styles.menuImageText}>Fonts & Footers</span> */}
              <SectionIntroii title='Fonts & Footers' color='tan' />
            </div>
          </div>

          <div className={styles.btnContainerii}>
            <Button
              href='/contact'
              text='Book your discovery call'
              btnType='black'
              onClick={closeMenu}
            />
          </div>
        </div>

        {isOpen && <div className={styles.overlay} onClick={closeMenu} />}

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
