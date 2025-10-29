import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import Faq from "@/components/Faq/Faq";
// import Features from "@/components/HomePage/Features/Features";
import ComparisonChart from "@/components/PricingPage/ComparisonChart/ComparisonChart";
import PricingPageIntro from "@/components/PricingPage/PricingPageIntro/PricingPageIntro";
import ServiceDetails from "@/components/PricingPage/ServiceDetails/ServiceDetails";
import BaseFeatures from "@/components/shared/BaseFeatures/BaseFeatures";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";

export const metadata = {
  title: "Pricing",
  description:
    "Explore our pricing plans and find the perfect fit for your business needs.",
};

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PricingPageIntro />
      <section style={{ background: "#f4f3ea" }}>
        <LayoutWrapper>
          <div style={{ padding: "4rem 0" }}>
            <ServiceDetails />
          </div>
        </LayoutWrapper>
      </section>
      {/* <Features /> */}
      <BaseFeatures />
      <ComparisonChart />
      <Faq />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
