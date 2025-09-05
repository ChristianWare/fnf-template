import Features from "@/components/HomePage/Features/Features";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import AllProjects from "@/components/WorkPage/AllProjects/AllProjects";
import WorkPageIntro from "@/components/WorkPage/WorkPageIntro/WorkPageIntro";

export default function WorkPage() {
  return (
    <main>
      <WorkPageIntro />
      <AllProjects />
      <Features />
      <BlogSection />
    </main>
  );
}
