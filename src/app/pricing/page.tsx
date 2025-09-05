import PricingPageIntro from "@/components/PricingPage/PricingPageIntro/PricingPageIntro";
import ServiceDetails from "@/components/PricingPage/ServiceDetails/ServiceDetails";
import BlogSection from "@/components/shared/BlogSection/BlogSection";

export default function PricingPage() {
  return (
    <main>
      <PricingPageIntro />
      <ServiceDetails />
      <BlogSection />
    </main>
  );
}
