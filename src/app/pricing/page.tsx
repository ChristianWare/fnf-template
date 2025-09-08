import Features from "@/components/HomePage/Features/Features";
import PricingPageIntro from "@/components/PricingPage/PricingPageIntro/PricingPageIntro";
import ServiceDetails from "@/components/PricingPage/ServiceDetails/ServiceDetails";
import BlogSection from "@/components/shared/BlogSection/BlogSection";

export default function PricingPage() {
  return (
    <main>
      <PricingPageIntro />
      <ServiceDetails />
      <Features />
      <BlogSection />
    </main>
  );
}
