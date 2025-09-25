import Img from "../../../public/images/herovi.jpg";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "../leagal.module.css";
import Image from "next/image";
import Nav from "@/components/shared/Nav/Nav";
import Footer from "@/components/shared/Footer/Footer";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

const TermsPage = () => {
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
        <Nav navItemColor='var(--tan)' signUpBtnType='nav' />
        <LayoutWrapper>
          <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              Terms and Conditions
            </h1>
          </div>
        </LayoutWrapper>
      </section>
      <LayoutWrapper>
        <div className={styles.content}>
          <p>
            <strong>Effective Date: 09/14/2023</strong>
          </p>
          <br />
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to Nier Transportation&#39;s website. By accessing or using
            this website, you agree to comply with and be bound by these Terms
            of Use (&quot;Terms&quot;). If you do not agree to these Terms,
            please do not use this website.
          </p>
          <br />
          <h2>2. Changes to Terms</h2>
          <p>
            Nier Transportation reserves the right to modify, amend, or update
            these Terms at any time without prior notice. Any changes will be
            effective immediately upon posting. Your continued use of the
            website following the posting of changes constitutes your acceptance
            of those changes.
          </p>
          <br />
          <h2>3. Use of the Website</h2>
          <p>
            You must be at least 18 years old to use this website. You agree to
            use this website for lawful purposes only and in a manner consistent
            with all applicable laws and regulations. You may not use this
            website in any way that could damage, disable, overburden, or impair
            Nier Transportation&#39;s services or interfere with other
            users&#39; enjoyment of the website.
          </p>
          <br />
          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on this
            website are the property of Nier Transportation and are protected by
            copyright and other intellectual property laws. You may not use,
            reproduce, or distribute any content from this website without prior
            written permission from Nier Transportation.
          </p>
          <br />
          <h2>5. Privacy</h2>
          <p>
            Your use of this website is also governed by our Privacy Policy,
            which can be found at [Link to Privacy Policy]. By using this
            website, you consent to the collection and use of your information
            as described in the Privacy Policy.
          </p>
          <br />
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            This website is provided &quot;as is&quot; without warranties of any
            kind, either express or implied. Nier Transportation disclaims all
            warranties, including but not limited to the accuracy, completeness,
            reliability, or availability of this website.
          </p>
          <br />
          <h2>7. Limitation of Liability</h2>
          <p>
            Nier Transportation will not be liable for any direct, indirect,
            incidental, special, consequential, or punitive damages arising out
            of your access to or use of this website.
          </p>
          <br />
          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Arizoan and California. Any disputes arising from or in
            connection with these Terms will be subject to the exclusive
            jurisdiction of the courts located in Arizoan and California.
          </p>
          <br />
          <h2>9. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms, please
            contact us at:
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
        </div>
      </LayoutWrapper>
      <FinalCTA />
      <Footer />
    </main>
  );
};
export default TermsPage;

// Nier Transportation
