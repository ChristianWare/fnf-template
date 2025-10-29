"use client";

import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AllProjects.module.css";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function AllProjects() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.mapDataContainer}>
            {projects.slice().reverse().map((project, index) => (
              <Link
                href={`/work/${project.slug}`}
                key={project.slug ?? index}
                className={styles.card}
                aria-label={`${project.title} case study`}
              >
                <div className={styles.imgContainer}>
                  <Image
                    src={project.src2}
                    alt={project.title}
                    fill
                    className={styles.img}
                    sizes='(max-width: 568px) 100vw, (max-width: 1068px) 50vw, 33vw'
                    priority={index < 3}
                  />
                </div>
                <div className={styles.textLayer}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.h1}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
