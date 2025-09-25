import Img from "../../../public/images/whydb.jpg";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "../leagal.module.css";
import Image from "next/image";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
};

const AccessibilityPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img}
          alt='Accessibility Policy'
          fill
          className={styles.img2}
          sizes='100vw'
          priority
          quality={100}
        />
        <Nav />
        <LayoutWrapper>
          <div className={styles.mainContent}>
            <h1 className={styles.heading} lang='en'>
              Accessibility <br /> Policy
            </h1>
          </div>
        </LayoutWrapper>
      </section>
      <LayoutWrapper>
        <div className={styles.content}>
          <p>
            <strong>Effective Date: 09/25/2025</strong>
          </p>
          <br />
          <h2>1. Introduction</h2>
          <p>
            Welcome to Fonts &amp; Footers’ Accessibility Policy. We design and
            build booking-focused websites and we’re committed to making our own
            website accessible to all people, including those with disabilities.
            This policy outlines our ongoing efforts to provide an inclusive,
            usable experience for the widest possible audience.
          </p>
          <br />
          <h2>2. Web Content Accessibility Guidelines (WCAG)</h2>
          <p>
            We strive to align with the Web Content Accessibility Guidelines
            (WCAG) 2.2 Level AA. Our efforts include:
            <br />
            <br />
            - Providing meaningful alternative text for non-text content (e.g.,
            images and media).
            <br />
            <br />- Ensuring the site is operable by keyboard and compatible
            with modern screen readers.
            <br />
            <br />- Maintaining responsive, adaptable layouts that work across
            devices and screen sizes.
            <br />
            <br />- Preserving clear, consistent navigation, headings, and
            landmark structure.
            <br />
            <br />- Preserving sufficient color contrast and visible focus
            states on interactive elements.
          </p>
          <br />
          <h2>3. Assistive Technologies</h2>
          <p>
            We aim to support a range of assistive technologies, including
            screen readers, voice recognition software, and browser zoom and
            contrast settings. Users who rely on these tools should be able to
            access our content and complete typical tasks with ease.
          </p>
          <br />
          <h2>4. Feedback and Contact Information</h2>
          <p>
            Accessibility is a shared effort. If you encounter an issue or have
            suggestions to improve accessibility on our site, please reach out:
            <br />
            <br />
            <strong>
              Mailing Address (correspondence only):
              <br />
              Scottsdale, AZ, USA
            </strong>
            <br />
            <br />
            <strong>
              Email
              <br />
              hello@fontsandfooters.com
            </strong>
            <br />
            <br />
            <strong>
              Contact Form
              <br />
              fontsandfooters.com/contact
            </strong>
          </p>
          <br />
          <h2>5. Ongoing Accessibility Efforts</h2>
          <p>
            Accessibility is an ongoing process. We periodically audit our site,
            address issues as we discover them, and incorporate accessibility
            checks into our design and development workflow. As standards and
            assistive technologies evolve, we’ll continue to refine our
            approach.
          </p>
          <br />
          <h2>6. Third-Party Content and Integrations</h2>
          <p>
            Some portions of our site may include third-party content, plug-ins,
            or links beyond our control. While we select partners with
            accessibility in mind, we cannot guarantee the accessibility of
            external websites or embedded services.
          </p>
          <br />
          <h2>7. Requesting Alternative Formats</h2>
          <p>
            If you need information from our website in an alternative format or
            need a reasonable accommodation, please contact us using the
            information above. We’ll make every reasonable effort to meet your
            needs promptly.
          </p>
          <br />
        </div>
      </LayoutWrapper>
      <FinalCTAMain />
    </main>
  );
};
export default AccessibilityPage;
