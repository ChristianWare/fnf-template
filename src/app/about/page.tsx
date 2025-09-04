import AboutPageIntro from "@/components/AboutPage/AboutPageIntro/AboutPageIntro";
import BrandStory from "@/components/AboutPage/BrandStory/BrandStory";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <BrandStory />
      <BlogSection />
      <FinalCTA />
    </main>
  );
}
