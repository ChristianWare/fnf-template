"use client";

import styles from "./ProjectSection.module.css";
import { useState, useEffect } from "react";
import Nier from "../../../../public/images/lab.jpg";
import Dog from "../../../../public/images/direct.jpg";
import ErRentals from "../../../../public/images/transform.jpg";
import Custom from "../../../../public/images/custom.jpg";
// import DefaultImg from "../../../../public/images/direct.jpg";
import ParallaxImage from "@/components/shared/ParallaxImage/ParallaxImage";
import Arrow from "@/components/icons/Arrow/Arrow";
import { StaticImageData } from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Modal from "@/components/shared/Modal/Modal";
import Image from "next/image";

type Item = {
  id: number;
  title: string;
  description: string;
  src: StaticImageData;
};

const data: Item[] = [
  {
    id: 1,
    title: "Direct-Booking Website",
    description:
      "A conversion-first site with Stripe deposits, smart reminders, and a clean calendar—built to cut no-shows and move clients from DMs to paid appointments.",
    src: Dog,
  },
  {
    id: 2,
    title: "Booking Makeover",
    description:
      "We rebuild your existing flow—clarify policies, tighten UX, and connect the right tools—so scheduling, paying, and rebooking feel effortless.",
    src: ErRentals,
  },
  {
    id: 3,
    title: "Booking Lab (Prototype & Test)",
    description:
      "Tricky idea or new flow? We ship a one-screen working prototype to validate with real users before you invest in a full build.",
    src: Nier,
  },
  {
    id: 4,
    title: "Custom Platform & Integrations",
    description:
      "Unique rules, multi-location dashboards, or fleet/staff logic—tailored features and integrations that fit how your business actually runs.",
    src: Custom,
  },
];


export default function ProjectSection() {
  const [isTouch, setIsTouch] = useState(false);
  const [activeImage, setActiveImage] = useState<StaticImageData>(data[0].src);
  const [activeTitle, setActiveTitle] = useState(data[0].title);
  const [activeId, setActiveId] = useState<number | null>(data[0].id);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  useEffect(() => {
    const touchCapable =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setIsTouch(touchCapable);
  }, []);

  const activate = (itemId: number, src: StaticImageData, title: string) => {
    setActiveImage(src);
    setActiveTitle(title);
    setActiveId(itemId);
  };

  // const reset = () => {
  //   setActiveImage(DefaultImg);
  //   setActiveTitle("Fonts & Footers");
  //   setActiveId(null);
  // };

  const openModal = (item: Item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionIntroii title='Solutions' />
          <h2 className={styles.heading}>
            {/* Our solutions to <br /> custom booking websites */}
            Four ways we turn clicks <br /> into booked appointments
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            {data.map((item) => (
              <div
                key={item.id}
                className={styles.card}
                onMouseEnter={() => {
                  if (!isTouch) activate(item.id, item.src, item.title);
                }}
                // onMouseLeave={() => {
                //   if (!isTouch) reset();
                // }}
                onClick={() => openModal(item)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openModal(item);
                }}
                aria-pressed={activeId === item.id}
                aria-label={`Open details for ${item.title}`}
              >
                <div className={styles.title}>{item.title}</div>
                <Arrow className={styles.arrow} />
              </div>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={activeImage}
                alt={activeTitle}
                title={activeTitle}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedItem && (
          <div className={styles.modalContent}>
            <div className={styles.modalText}>
              <h3 className={styles.modalTitle}>{selectedItem.title}</h3>
              <p className={styles.modalDesc}>{selectedItem.description}</p>
            </div>
            <div className={styles.modalImageWrap}>
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                className={styles.modalImage}
                sizes='(max-width: 768px) 100vw, 600px'
                priority
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
