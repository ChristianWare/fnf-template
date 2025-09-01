"use client";

import { useEffect, MouseEvent } from "react";
import Close from "@/components/icons/Close/Close";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    if (!isOpen) return;

    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);

    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    Object.assign(document.body.style, {
      position: "fixed",
      top: `-${scrollY}px`,
      left: "0",
      right: "0",
      width: "100%",
      overflow: "hidden",
      paddingRight: `${scrollbarWidth}px`,
    });

    return () => {
      window.removeEventListener("keydown", onEsc);
      const top = document.body.style.top;
      if (top) {
        const y = -parseInt(top, 10) || 0;
        document.body.style.cssText = "";
        window.scrollTo(0, y);
      }
    };
  }, [isOpen, onClose]);

  const stop = (e: MouseEvent) => e.stopPropagation();

  return (
    <div
      className={`${styles.backdrop} ${isOpen ? styles.open : styles.closed}`}
      onClick={onClose}
    >
      <div
        className={`${styles.dialog} ${isOpen ? styles.open : styles.closed}`}
        onClick={stop}
        role='dialog'
        aria-modal='true'
      >
        <button onClick={onClose} className={styles.closeBtn}>
          <Close className={styles.icon} />
        </button>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
