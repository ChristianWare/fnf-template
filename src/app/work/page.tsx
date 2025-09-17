import Features from "@/components/HomePage/Features/Features";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";
import AllProjects from "@/components/WorkPage/AllProjects/AllProjects";
import WorkPageIntro from "@/components/WorkPage/WorkPageIntro/WorkPageIntro";

export default function WorkPage() {
  return (
    <main>
      <Nav />
      <WorkPageIntro />
      <AllProjects />
      <Features />
      <BlogSection />
      <FinalCTAMain />
    </main>
  );
}
