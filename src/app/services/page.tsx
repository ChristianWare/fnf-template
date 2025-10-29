import FinalCTA from "@/components/AboutPage/FinalCTA/FinalCTA";
import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import Faq from "@/components/Faq/Faq";
import Features from "@/components/HomePage/Features/Features";
import Outcomes from "@/components/HomePage/Outcomes/Outcomes";
import ServicePageIntro from "@/components/ServicePage/ServicePageIntro/ServicePageIntro";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <ServicePageIntro />
      <Features />
      <Outcomes />
      <FinalCTA />
      <Faq />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
