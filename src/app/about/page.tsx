import AboutPageIntro from "@/components/AboutPage/AboutPageIntro/AboutPageIntro";
import BrandStory from "@/components/AboutPage/BrandStory/BrandStory";
import FinalCTA from "@/components/AboutPage/FinalCTA/FinalCTA";
import OurTeam from "@/components/AboutPage/OurTeam/OurTeam";
import Values from "@/components/AboutPage/Values/Values";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ChrisImg from "../../../public/images/chris.png";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";


export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutPageIntro />
      <BrandStory />
      <FinalCTA />
      <Values />
      <HowItWorks />
      <OurTeam
        text='I’m Chris, founder of Fonts & Footers. We focus on building
            custom booking websites that cut no-shows, speed checkout to under a
            minute, and turn busywork into predictable, prepaid revenue.'
        src={ChrisImg}
      />{" "}
      <BlogSection />
      <FinalCTAMain />
    </main>
  );
}
