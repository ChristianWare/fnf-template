import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import Hero from "@/components/HomePage/Hero/Hero";
import Industries from "@/components/HomePage/Industries/Industries";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import PricingPreview from "@/components/HomePage/PricingPreview/PricingPreview";
import Faq from "@/components/Faq/Faq";
import BaseFeatures from "@/components/shared/BaseFeatures/BaseFeatures";
import PostHero from "@/components/HomePage/PostHero/PostHero";
import FeaturesPreview from "@/components/HomePage/FeaturesPreview/FeaturesPreview";
// import BrandStory from "@/components/AboutPage/BrandStory/BrandStory";
import Problemii from "@/components/HomePage/Problemii/Problemii";
import Marquee from "@/components/shared/Marquee/Marquee";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <PostHero />
      <Marquee />
      <Problemii />
      <FeaturesPreview />
      {/* <BrandStory /> */}
      <BaseFeatures />
      <Industries />
      <PricingPreview />
      <Faq />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
