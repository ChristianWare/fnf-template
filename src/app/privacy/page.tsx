import Img from "../../../public/images/herovi.jpg";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "../leagal.module.css";
import Image from "next/image";
import Nav from "@/components/shared/Nav/Nav";
import Footer from "@/components/shared/Footer/Footer";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

const PrivacyPage = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img}
          alt='Nier Transportation'
          fill
          className={styles.img2}
          sizes='100vw'
          priority
          quality={100}
        />
        <Nav />
        <LayoutWrapper>
          <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              Privacy Policy Statement for Nier Transportation
            </h1>
            <p className={styles.topCopy}>
              At Nier Transportation we take your privacy seriously. This
              Privacy Policy outlines how we collect, use, and protect your
              personal information when you visit our website or use our
              transportation services.
            </p>
          </div>
        </LayoutWrapper>
      </section>
      <LayoutWrapper>
        <div className={styles.content}>
          <p>
            <strong>Effective Date: 09/14/2023</strong>
          </p>
          <br />
          <h2>1. Information Collection and Use:</h2>
          <p>
            We may collect personal information such as your name, contact
            details, and payment information when you book a transportation
            service through our website or contact us for inquiries. We use this
            information solely for the purpose of providing and improving our
            services to you.
          </p>
          <br />
          <h2>2. Information Sharing:</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with trusted service
            providers who assist us in operating our website and delivering our
            services. These third parties are obligated to maintain the
            confidentiality of your information and are prohibited from using it
            for any other purpose.
            <br />
            <br />
          </p>
          <h2>3. Data Security:</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, please note that no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <br />
          <h2>4. Cookies:</h2>
          <p>
            We may use cookies and similar technologies to enhance your
            experience on our website. These cookies allow us to remember your
            preferences, analyze website traffic, and customize content. You can
            choose to disable cookies through your browser settings, although
            this may limit certain features of our website.
            {/* <br />
              <br />
              - To provide and maintain our services.
              <br />
              <br />
              - To communicate with you, including responding to your inquiries
              and providing customer support.
              <br />
              <br />- To improve our website and services. To send you updates,
              promotions, and other marketing communications (you can opt-out at
              any time). */}
          </p>
          <br />
          <h2>5. Links to Third-Party Websites:</h2>
          <p>
            Our website may contain links to third-party websites for your
            convenience and information. We are not responsible for the privacy
            practices or content of these websites. We recommend reviewing the
            privacy policies of any third-party sites you visit.
            {/* <br />
              <br />
              - Service providers and contractors who assist us in operating our
              business.
              <br />
              <br />- Legal authorities, if required by law or to protect our
              rights or the rights of others. */}
          </p>
          <br />
          <h2>6. Changes to this Privacy Policy:</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any significant changes by posting the updated policy on our
            website or through other communication channels.
          </p>
          <br />
          <h2>7. Contact Us:</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us:
            <br />
            <br />
            <strong>
              Address:
              <br />
              10105 E Vía Linda Suite A- 105 <br />
              Scottsdale, AZ 85258
            </strong>
            <br />
            <br />
            <strong>
              Phone: <br />
              480-300-6003
            </strong>
            <br />
            <br />
            <strong>
              Email <br />
              reservations@niertransportation.com
            </strong>
          </p>
          <br />
          <b>
            By using our website or services, you consent to the collection,
            use, and disclosure of your personal information as described in
            this Privacy Policy.
          </b>
        </div>
      </LayoutWrapper>
      <FinalCTAMain />
      <Footer />
    </main>
  );
};

export default PrivacyPage;
