// import Different from "@/components/AboutPage/Different/Different";
import OurTeam from "@/components/AboutPage/OurTeam/OurTeam";
import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
// import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Hero from "@/components/HomePage/Hero/Hero";
import Industries from "@/components/HomePage/Industries/Industries";
import Outcomes from "@/components/HomePage/Outcomes/Outcomes";
import ProjectSection from "@/components/HomePage/ProjectSection/ProjectSection";
// import WhyDB from "@/components/HomePage/WhyDB/WhyDB";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ChrisImg from "../../public/images/chris.png";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import PricingPreview from "@/components/HomePage/PricingPreview/PricingPreview";
import Faq from "@/components/Faq/Faq";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import BaseFeatures from "@/components/shared/BaseFeatures/BaseFeatures";
import Features from "@/components/HomePage/Features/Features";
import PostHero from "@/components/HomePage/PostHero/PostHero";
import TheProblem from "@/components/HomePage/TheProblem/TheProblem";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <PostHero />
      <TheProblem />
      {/* <WhyDB /> */}
      <Features />
      <Outcomes />
      {/* <AboutUs /> */}
      {/* <ProjectSection /> */}
      <HowItWorks />
      <Industries />
      <OurTeam
        text='I’m Chris, founder of Fonts & Footers. We focus on building
            custom booking websites that cut no-shows, speed checkout to under a
            minute, and turn busywork into predictable, prepaid revenue.'
        src={ChrisImg}
        signatureBox
      />
      <PricingPreview />

      <BaseFeatures />
      <Faq />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
