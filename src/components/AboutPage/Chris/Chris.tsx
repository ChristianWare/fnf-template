import SectionIntroii from "@/components/shared/SectionIntroii/SectionIntroii";
import styles from "./Chris.module.css";
import Image from "next/image";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import ChrisImg from "../../../../public/images/chris.png";

export default function Chris() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.circleContainer}>
              <div className={styles.pulsingCircles} />
              <div className={styles.imgContainer}>
                <Image src={ChrisImg} alt='' fill className={styles.img} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              A quick hello — <br />
              from the owner
            </h2>
            <p className={styles.copy}>
              Hi, I’m Chris—founder, builder, and the guy who won’t stop
              tweaking your checkout until people actually finish it. I didn’t
              set out to “do web.” I set out to fix the moment where service
              businesses lose money—the second someone tries to book and hits
              friction. 
              {/* Along the way I wore a lot of hats: designer, dev, ops,
              accidental therapist for owners juggling calendars and cash flow.
              I built my own booking stack the hard way (Next.js, Stripe,
              Twilio, Prisma, Postgres), stress-tested it with real clients, and
              learned what actually moves the needle.  */}
            </p>
            <SectionIntroii title='Chris - Founder of Fonts & Footers' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
