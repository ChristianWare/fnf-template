import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import Features from "@/components/HomePage/Features/Features";
import PricingPageIntro from "@/components/PricingPage/PricingPageIntro/PricingPageIntro";
import ServiceDetails from "@/components/PricingPage/ServiceDetails/ServiceDetails";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PricingPageIntro />
      <ServiceDetails />
      <Features />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
