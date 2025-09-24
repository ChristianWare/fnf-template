"use client";

import styles from "./ServiceDetails.module.css";
import { pricingData } from "@/lib/data";
import Check from "@/components/icons/Check/Check";
import Button from "@/components/shared/Button/Button";
import { usePathname } from "next/navigation";

export default function ServiceDetails() {
  const pathname = usePathname();
  const isPricingPage = pathname === "/pricing";

  const data = isPricingPage ? pricingData : pricingData.slice(0, 3);
  const btnText = isPricingPage ? "Subscribe" : "Learn More";
  const btnhref = isPricingPage ? "/subscribe" : "/pricing";

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.right}>
          {data.map((x) => (
            <div
              className={styles.card}
              key={x.id}
              id={x.service.toLowerCase().replace(/\s+/g, "-")}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardTopLeft}>
                  <h3 className={styles.serviceNameHeading}>{x.service}</h3>
                  <h3 className={styles.price}>{x.price}</h3>
                </div>
                <div className={styles.cardTopRight}>
                  {/* <h4 className={styles.descii}>{x.descii}</h4> */}
                  <p className={styles.headline}>{x.desc}</p>
                  <div className={styles.btnContainer}>
                    <Button
                      href={btnhref}
                      btnType='grayOutline'
                      text={btnText}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.servicesCard}>
                <div className={styles.servicesCardTop}>
                  <div className={styles.serviceCardTopA}>
                    {x.servicesInclude.map((y) => (
                      <div key={y.serviceName} className={styles.box}>
                        <h4 className={styles.serviceName}>
                          <Check className={styles.icon} />
                          {y.serviceName}
                        </h4>
                        {/* <p
                            className={styles.descriptionMobile}
                            key={y.description}
                          >
                            {y.description}
                          </p> */}
                      </div>
                    ))}
                  </div>
                  <div className={styles.serviceCardTopB}>
                    <div className={styles.serviceCardDots}>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                      <span className={styles.dot}></span>
                    </div>
                  </div>
                </div>
                <div className={styles.servicesCardBottom}>
                  {x.servicesInclude.map((z) => (
                    <p className={styles.description} key={z.description}>
                      {z.description}
                    </p>
                  ))}
                </div>
                {/* <div className={styles.addonSection}>
                    <div className={styles.addonSectionTop}>
                      <SectionIntro
                        title='Expansion blocks and price add-ons'
                        color='black'
                        borderColor='borderColorBlack'
                      />
                    </div>
                    <div className={styles.addonSectionBottom}>
                      <div className={styles.addonSectionTableHeadings}>
                        <h4 className={styles.title}>Expansion Block</h4>
                        <h4 className={styles.title}>When it Triggers</h4>
                        <h4 className={styles.title}>Add-on fee (USD)</h4>
                      </div>
                      <div className={styles.mapData}>
                        {x.addonSectionData.map((x) => (
                          <div
                            key={x.id}
                            className={styles.addonSectionBottomContainer}
                          >
                            {" "}
                            <div>
                              <h4 className={styles.titleMobile}>
                                Expansion Block:
                              </h4>
                              <h5 className={styles.titleii}>
                                {x.expansionblock}
                              </h5>
                            </div>
                            <div>
                              <h4 className={styles.titleMobile}>
                                When it Triggers:
                              </h4>
                              <p className={styles.info}>{x.details}</p>
                            </div>
                            <div>
                              <h4 className={styles.titleMobile}>
                                Add-on fee (USD):
                              </h4>
                              <p className={styles.info}>{x.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
