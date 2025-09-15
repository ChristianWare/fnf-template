import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AllProjects.module.css";
import { projects } from "@/lib/data";
import Image from "next/image";
// import Button from "@/components/shared/Button/Button";

export default function AllProjects() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.mapDataContainer}>
            {projects.map((project, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imgContainer}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className={styles.img}
                    sizes='(max-width: 1068px) 100vw, 50vw'
                    priority={index < 2}
                  />
                </div>
                <div className={styles.textLayer}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.h1}</p>
                  {/* <a
                    href={project.href}
                    className={styles.projectLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`View project: ${project.title}`}
                  >
                    View Project
                  </a> */}
                  {/* <Button href='/' btnType='grayOutlineii' text='Live Site' /> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
