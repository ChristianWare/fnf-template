"use client";

import styles from "./ProjectSection.module.css";
import { useState, useEffect } from "react";
import Nier from "../../../../public/images/lab.jpg";
import Dog from "../../../../public/images/direct.jpg";
import ErRentals from "../../../../public/images/transform.jpg";
import Custom from "../../../../public/images/custom.jpg";
import DefaultImg from "../../../../public/images/direct.jpg";
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
    title: "Booking Lab as a Service",
    description:
      "Have an idea or tricky flow? We prototype quickly, validate with users, and turn concepts into a working one-screen booking experience you can test.",
    src: Nier,
  },
  {
    id: 2,
    title: "Direct-Booking Transformation",
    description:
      "Modernize how clients schedule, pay, and return. We rebuild your booking UX, enforce clear policies, and connect the stack that fits your ops.",
    src: Dog,
  },
  {
    id: 3,
    title: "Fast-Track Launch",
    description:
      "Need to go live soon? We compress discovery → design → build into a focused sprint without sacrificing clarity, performance, or brand.",
    src: ErRentals,
  },
  {
    id: 4,
    title: "Custom Platform Development",
    description:
      "From unique rules to multi-location dashboards, we engineer tailored features and integrations so your system fits the way you actually work.",
    src: Custom,
  },
];

export default function ProjectSection() {
  const [isTouch, setIsTouch] = useState(false);
  const [activeImage, setActiveImage] = useState<StaticImageData>(DefaultImg);
  const [activeTitle, setActiveTitle] = useState("Fonts & Footers");
  const [activeId, setActiveId] = useState<number | null>(null);

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

  const reset = () => {
    setActiveImage(DefaultImg);
    setActiveTitle("Fonts & Footers");
    setActiveId(null);
  };

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
            Our solutions to <br /> custom booking websites
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
                onMouseLeave={() => {
                  if (!isTouch) reset();
                }}
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
