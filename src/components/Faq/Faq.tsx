"use client";

import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Faq.module.css";
import LayoutWrapper from "../shared/LayoutWrapper";
import SectionIntroii from "../shared/SectionIntroii/SectionIntroii";
import Button from "../shared/Button/Button";
import Arrow from "@/components/icons/Arrow/Arrow";
import { questions, type SectionKey, type QuestionItem } from "@/lib/data";

/** Resolve current section from the pathname */
function sectionFromPath(pathname: string): SectionKey {
  if (pathname.startsWith("/pricing")) return "pricing";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

/** UI copy per section (titles + headings) */
const SECTION_META: Record<
  SectionKey,
  { title: string; headingSpan: string; headingRest: string }
> = {
  home: {
    title: "FAQ",
    headingSpan: "Questions, answered",
    headingRest: "with clarity.",
  },
  pricing: {
    title: "Pricing FAQ",
    headingSpan: "Pricing, spelled out",
    headingRest: "with no surprises.",
  },
  about: {
    title: "About FAQ",
    headingSpan: "Who we are",
    headingRest: "and how we work.",
  },
  work: {
    title: "Project & Process FAQ",
    headingSpan: "Process clarity",
    headingRest: "from brief to launch.",
  },
  blog: {
    title: "Content & SEO FAQ",
    headingSpan: "Content that ranks",
    headingRest: "and loads fast.",
  },
  contact: {
    title: "Getting Started FAQ",
    headingSpan: "What we need",
    headingRest: "to get you live.",
  },
};

const SECTION_ORDER: SectionKey[] = [
  "home",
  "pricing",
  "about",
  "work",
  "blog",
  "contact",
];

function bySection(section: SectionKey, list: readonly QuestionItem[]) {
  return list.filter((q) => q.sections.includes(section));
}

export default function Faq() {
  const pathname = usePathname();
  const isAllFaqPage = pathname === "/faqs";
  const currentSection = sectionFromPath(pathname);
  const meta = SECTION_META[currentSection];

  // single expand state; for grouped (/faqs) we namespace the key
  const [openKey, setOpenKey] = useState<string | null>(null);
  const toggle = (k: string) => setOpenKey((prev) => (prev === k ? null : k));

  // Route-specific list (limit to ~6 items for non-/faqs pages)
  const routeQuestions = useMemo(() => {
    if (isAllFaqPage) return [] as QuestionItem[];
    return bySection(currentSection, questions).slice(0, 6);
  }, [currentSection, isAllFaqPage]);

  // Grouped lists for /faqs
  const grouped = useMemo(() => {
    if (!isAllFaqPage) return [];
    return SECTION_ORDER.map((key) => ({
      key,
      meta: SECTION_META[key],
      items: bySection(key, questions),
    })).filter((g) => g.items.length > 0);
  }, [isAllFaqPage]);

  // Non-/faqs: single section block
  if (!isAllFaqPage) {
    return (
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}>
              <SectionIntroii title={meta.title} />
              <h2 className={styles.heading}>
                <span className={styles.span}>{meta.headingSpan}</span> <br />
                {meta.headingRest}
              </h2>
              <p className={`${styles.copy} subheading`}>
                Have more questions? We’ve collected our most helpful answers to
                keep your project moving quickly and transparently.
              </p>

              <div className={styles.btnContainer}>
                <Button
                  href='/faqs'
                  btnType='grayOutline'
                  text='See all FAQ’s'
                />
              </div>
            </div>

            <div className={styles.right}>
              {routeQuestions.map((q, i) => {
                const k = `${currentSection}-${q.id}-${i}`;
                const open = openKey === k;
                return (
                  <div
                    key={q.id}
                    className={styles.qaContainer}
                    onClick={() => toggle(k)}
                  >
                    <div className={styles.headingArrowContainer}>
                      <div className={styles.h3Container}>
                        <h3 className={styles.question} lang='en'>
                          {q.question}
                        </h3>
                      </div>
                      <div className={styles.arrowContainer}>
                        <Arrow
                          className={open ? styles.iconFlip : styles.icon}
                        />
                      </div>
                    </div>

                    <div
                      className={
                        open
                          ? `${styles.answerContainer} ${styles.show}`
                          : styles.answerContainer
                      }
                    >
                      <p className={styles.answer} lang='en'>
                        {q.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </LayoutWrapper>
      </section>
    );
  }

  // /faqs: show every section group with in-page anchors
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {grouped.map((group) => (
          <div
            key={group.key}
            id={`faq-${group.key}`} // anchor target (matches /faqs#faq-<section>)
            className={styles.groupBlock}
            aria-labelledby={`faq-heading-${group.key}`}
          >
            <div className={styles.content}>
              <div className={styles.left}>
                <SectionIntroii title={group.meta.title} />
                <h2 id={`faq-heading-${group.key}`} className={styles.heading}>
                  <span className={styles.span}>{group.meta.headingSpan}</span>{" "}
                  <br />
                  {group.meta.headingRest}
                </h2>
                <p className={styles.copy}>
                  Everything about{" "}
                  {group.meta.title.toLowerCase().replace(" faq", "")}—in one
                  place.
                </p>
              </div>

              <div className={styles.right}>
                {group.items.map((q, i) => {
                  const k = `${group.key}-${q.id}-${i}`;
                  const open = openKey === k;
                  return (
                    <div
                      key={q.id}
                      className={styles.qaContainer}
                      onClick={() => toggle(k)}
                    >
                      <div className={styles.headingArrowContainer}>
                        <div className={styles.h3Container}>
                          <h3 className={styles.question} lang='en'>
                            {q.question}
                          </h3>
                        </div>
                        <div className={styles.arrowContainer}>
                          <Arrow
                            className={open ? styles.iconFlip : styles.icon}
                          />
                        </div>
                      </div>

                      <div
                        className={
                          open
                            ? `${styles.answerContainer} ${styles.show}`
                            : styles.answerContainer
                        }
                      >
                        <p className={styles.answer} lang='en'>
                          {q.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Optional divider */}
            {/* <hr className={styles.groupDivider} /> */}
          </div>
        ))}
      </LayoutWrapper>
    </section>
  );
}
