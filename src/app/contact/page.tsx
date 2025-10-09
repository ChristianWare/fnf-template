import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import ContactPageIntro from "@/components/ContactPage/ContactPageIntro/ContactPageIntro";
import Faq from "@/components/Faq/Faq";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fonts & Footers for inquiries, support, or feedback. We're here to help!",
};

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <ContactPageIntro />
      <ContactPageContainer />
      <Faq />
      <FinalCTAMain />
    </main>
  );
}
