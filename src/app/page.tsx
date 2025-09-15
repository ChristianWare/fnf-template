import Different from "@/components/AboutPage/Different/Different";
import OurTeam from "@/components/AboutPage/OurTeam/OurTeam";
import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
// import Features from "@/components/HomePage/Features/Features";
import Hero from "@/components/HomePage/Hero/Hero";
// import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import Industries from "@/components/HomePage/Industries/Industries";
import Outcomes from "@/components/HomePage/Outcomes/Outcomes";
import ProjectSection from "@/components/HomePage/ProjectSection/ProjectSection";
import WhyDB from "@/components/HomePage/WhyDB/WhyDB";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ChrisImg from "../../public/images/chris.png";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyDB />
      <ProjectSection />
      <Industries />
      <Outcomes />
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      <Different />
      <OurTeam
        text='I’m Chris, founder of Fonts & Footers. We focus on building
            custom booking websites that cut no-shows, speed checkout to under a
            minute, and turn busywork into predictable, prepaid revenue.'
            src={ChrisImg}
      />
      <BlogSection />
      <ContactPageContainer />
    </main>
  );
}
