"use client";

import { useState, useRef, useEffect } from "react";
import type { StaticImageData } from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./WorkDetailsClient.module.css";
import { projects } from "@/lib/data";
import Link from "next/link";
import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import Image from "next/image";
import Button from "@/components/shared/Button/Button";
import OurTeam from "@/components/AboutPage/OurTeam/OurTeam";
import Chris from "../../../../../../public/images/chris.jpg";
import MoreProjects from "@/components/WorkPage/MoreProjects/MoreProjects";
import Modal from "@/components/shared/Modal/Modal";

type Project = (typeof projects)[number];

export default function WorkDetailsClient({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSrc, setSelectedSrc] = useState<
    string | StaticImageData | null
  >(null);

  if (!project) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.container}>
            <h1 className={styles.heading}>Project not found</h1>
            <Link href='/services'>Back to services</Link>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  const openWith = (src: string | StaticImageData) => {
    setSelectedSrc(src);
    setIsOpen(true);
  };

  return (
    <main className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.left}>
            <SectionIntroii title='category here' color='tan' />
            <h1 className={styles.heading}>{project.title}</h1>
            <p className={styles.copy}>{project.h1}</p>
            <div className={styles.btnContainer}>
              <Button
                href={project.href}
                target='_blank'
                btnType='tanOutline'
                text='Live Website'
                arrow
              />
            </div>
            <div className={styles.detailsBox}>
              <div className={styles.db1}>
                <div className={styles.label}>Launch Date</div>
                <div className={styles.value}>{project.year}</div>
              </div>
              <div className={styles.db1}>
                <div className={styles.label}>Platform</div>
                <div className={styles.value}>{project.platform}</div>
              </div>
              <div className={styles.db1}>
                <div className={styles.label}>Tech</div>
                <div className={styles.value}>{project.tech}</div>
              </div>
              <div className={styles.db1}>
                <div className={styles.label}>Tech</div>
                <div className={styles.value}>{project.tech}</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={project.src}
                alt={project.title}
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>

        <section className={styles.introSection}>
          <SectionIntroii title='Project details' color='tan' />
          <h5 className={styles.description}>{project.description}</h5>
          <div className={styles.challengeHeading}>The Challenge</div>
          <div className={styles.challengBox}>
            {project.challenge.map((item, index) => (
              <p key={index} className={styles.challenge}>
                {item.challengeDetail}
              </p>
            ))}
          </div>
        </section>

        <div className={styles.images}>
          <button
            type='button'
            className={styles.imgButtonReset}
            onClick={() => openWith(project.src2)}
            aria-label='Open Home Page expanded preview'
          >
            <div className={styles.box}>
              <div className={styles.imgContainerii}>
                <Image
                  src={project.src2}
                  alt={`${project.title} – Home Page`}
                  fill
                  className={styles.imgii}
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
              </div>
              {/* <h3 className={styles.imgTitle}>Home Page</h3> */}
              <SectionIntroii title='Home Page' color='tan' />
            </div>
          </button>

          <button
            type='button'
            className={styles.imgButtonReset}
            onClick={() => openWith(project.src3)}
            aria-label='Open About Page expanded preview'
          >
            <div className={styles.box}>
              <div className={styles.imgContainerii}>
                <Image
                  src={project.src3}
                  alt={`${project.title} – About Page`}
                  fill
                  className={styles.imgii}
                />
              </div>
              {/* <h3 className={styles.imgTitle}>About Page</h3> */}
              <SectionIntroii title='About Page' color='tan' />
            </div>
          </button>

          <button
            type='button'
            className={styles.imgButtonReset}
            onClick={() => openWith(project.src4)}
            aria-label='Open Services Page expanded preview'
          >
            <div className={styles.box}>
              <div className={styles.imgContainerii}>
                <Image
                  src={project.src4}
                  alt={`${project.title} – Services Page`}
                  fill
                  className={styles.imgii}
                />
              </div>
              {/* <h3 className={styles.imgTitle}>Services Page</h3> */}
              <SectionIntroii title='Services Page' color='tan' />
            </div>
          </button>

          <button
            type='button'
            className={styles.imgButtonReset}
            onClick={() => openWith(project.src5)}
            aria-label='Open Admin Dashboard expanded preview'
          >
            <div className={styles.box}>
              <div className={styles.imgContainerii}>
                <Image
                  src={project.src5}
                  alt={`${project.title} – Admin Dashboard`}
                  fill
                  className={styles.imgii}
                />
              </div>
              <SectionIntroii title='Admin Dashboard' color='tan' />
            </div>
          </button>
        </div>

        <section className={styles.introSection}>
          <div className={styles.challengeHeading}>The Results</div>
          <div className={styles.challengBox}>
            {project.results.map((item, index) => (
              <p key={index} className={styles.challenge}>
                {item.resultDetail}
              </p>
            ))}
          </div>
        </section>

        <br />
        <br />
        <br />

        <OurTeam
          text={project.testimonial}
          src={project.src}
          backgroundColor='black'
          textColor='tan'
        />

        <section className={styles.introSection}>
          <div className={styles.finalBox}>
            <div className={styles.fb1}>
              <div className={styles.imgContaineriv}>
                <Image
                  src={Chris}
                  alt={project.title}
                  fill
                  className={styles.imgiv}
                />
              </div>
            </div>
            <div className={styles.fb2}>
              <div className={styles.fb2a}>
                <SectionIntroii title='Ready to start?' color='tan' />
                <div className={styles.fb2Subheading}>
                  Let’s make something that matters.
                </div>
                <p className={styles.fb2copy}>
                  Chris is here to guide you every step of the way.
                </p>
              </div>
              <div className={styles.fb2b}>
                <div className={styles.btnContainer}>
                  <Button
                    href='/contact'
                    btnType='greenOutline'
                    text='Book a call Today'
                    arrow
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutWrapper>

      <MoreProjects excludeSlug={project.slug} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedSrc && (
          <TallImageViewer src={selectedSrc} alt={project.title} />
        )}
      </Modal>
    </main>
  );
}

function TallImageViewer({
  src,
  alt,
}: {
  src: string | StaticImageData;
  alt: string;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);

  const dims =
    typeof src !== "string"
      ? {
          width: (src as StaticImageData).width,
          height: (src as StaticImageData).height,
        }
      : { width: 1720, height: 14429 };

  const startAutoPan = () => {
    if (runningRef.current) return;
    runningRef.current = true;
    const step = () => {
      if (!runningRef.current || !frameRef.current) return;
      frameRef.current.scrollTop += 1.5;
      rafRef.current = requestAnimationFrame(step);
    };
    step();
  };

  const stopAutoPan = () => {
    runningRef.current = false;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  useEffect(() => () => stopAutoPan(), []);

  return (
    <div className={styles.viewer}>
      <div
        ref={frameRef}
        className={styles.viewerFrame}
        onPointerDown={startAutoPan}
        onPointerUp={stopAutoPan}
        onPointerLeave={stopAutoPan}
        onTouchEnd={stopAutoPan}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src={src}
            alt={alt}
            width={dims.width}
            height={dims.height}
            priority
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: 8,
            }}
          />
        </div>
      </div>
      <div className={styles.viewerHint}>
        Tip: press & hold to auto-scroll • Drag/scroll to explore • Esc to close
      </div>
    </div>
  );
}
