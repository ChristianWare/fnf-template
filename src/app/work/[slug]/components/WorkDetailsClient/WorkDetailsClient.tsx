// WorkDetailsClient.tsx
"use client";

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

type Project = (typeof projects)[number];

export default function WorkDetailsClient({ project }: { project: Project }) {
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

  return (
    <main className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.t1}>
            <SectionIntroii title={project.title} color='tan' />
            <h1 className={styles.heading}>{project.h1}</h1>
          </div>
          <div className={styles.t2}>
            <div className={styles.imgContainer}>
              <video preload='auto' autoPlay muted loop className={styles.img}>
                <source src={project.video} />
              </video>
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
              <div className={styles.btnContainer}>
                <Button
                  href='/contact'
                  btnType='tanOutline'
                  text='Live Website'
                  arrow
                />
              </div>
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
          <div className={styles.imgContainerii}>
            <Image
              src={project.src2}
              alt={project.title}
              fill
              className={styles.imgii}
            />
          </div>
          <div className={styles.imgContainerii}>
            <Image
              src={project.src3}
              alt={project.title}
              fill
              className={styles.imgii}
            />
          </div>
          <div className={styles.imgContainerii}>
            <Image
              src={project.src3}
              alt={project.title}
              fill
              className={styles.imgii}
            />
          </div>
          <div className={styles.imgContainerii}>
            <Image
              src={project.src3}
              alt={project.title}
              fill
              className={styles.imgii}
            />
          </div>
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
    </main>
  );
}
