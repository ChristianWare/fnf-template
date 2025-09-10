import OurTeam from "@/components/AboutPage/OurTeam/OurTeam";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Features from "@/components/HomePage/Features/Features";
import Hero from "@/components/HomePage/Hero/Hero";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import Industries from "@/components/HomePage/Industries/Industries";
import Outcomes from "@/components/HomePage/Outcomes/Outcomes";
import ProjectSection from "@/components/HomePage/ProjectSection/ProjectSection";
import WhyDB from "@/components/HomePage/WhyDB/WhyDB";
import BlogSection from "@/components/shared/BlogSection/BlogSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyDB />
      <ProjectSection />
      <Outcomes />
      <Industries />
      <Features />
      <HowItWorks />
      <OurTeam />
      <BlogSection />
    </main>
  );
}
