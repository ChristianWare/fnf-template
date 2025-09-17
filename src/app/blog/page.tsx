import BlogPageIntro from "@/components/BlogPage/BlogPageIntro/BlogPageIntro";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";

export default function BlogPage() {
  return (
    <main>
      <Nav />
      <BlogPageIntro />
      <BlogSection />
      <FinalCTAMain />
    </main>
  );
}
