import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import Features from "@/components/HomePage/Features/Features";
import ComparisonChart from "@/components/PricingPage/ComparisonChart/ComparisonChart";
import PricingPageIntro from "@/components/PricingPage/PricingPageIntro/PricingPageIntro";
import ServiceDetails from "@/components/PricingPage/ServiceDetails/ServiceDetails";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import LayoutWrapper from "@/components/shared/LayoutWrapper";
import Nav from "@/components/shared/Nav/Nav";

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
      <ComparisonChart />
      <Features />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
