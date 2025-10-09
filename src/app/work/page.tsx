import Faq from "@/components/Faq/Faq";
import Features from "@/components/HomePage/Features/Features";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";
import AllProjects from "@/components/WorkPage/AllProjects/AllProjects";
import WorkPageIntro from "@/components/WorkPage/WorkPageIntro/WorkPageIntro";

export const metadata = {
  title: "Work",
  description:
    "Explore our portfolio of projects showcasing our expertise in web development, design, and digital solutions. See how we've helped clients achieve their goals with innovative and effective strategies.",
};

export default function WorkPage() {
  return (
    <main>
      <Nav />
      <WorkPageIntro />
      <AllProjects />
      <Features />
      <Faq />
      <BlogSection />
      <FinalCTAMain />
    </main>
  );
}
