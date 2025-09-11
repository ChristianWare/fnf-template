import AboutPageIntro from "@/components/AboutPage/AboutPageIntro/AboutPageIntro";
import BrandStory from "@/components/AboutPage/BrandStory/BrandStory";
// import Different from "@/components/AboutPage/Different/Different";
import FinalCTA from "@/components/AboutPage/FinalCTA/FinalCTA";
import OurTeam from "@/components/AboutPage/OurTeam/OurTeam";
import Values from "@/components/AboutPage/Values/Values";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import BlogSection from "@/components/shared/BlogSection/BlogSection";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <BrandStory />
      <FinalCTA />
      {/* <Different /> */}
      <Values />
      <HowItWorks />
      <OurTeam />
      <BlogSection />
    </main>
  );
}
