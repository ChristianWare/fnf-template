import AllBlogsPosts from "@/components/BlogPage/AllBlogsPosts/AllBlogsPosts";
import BlogPageIntro from "@/components/BlogPage/BlogPageIntro/BlogPageIntro";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest news and insights from Fonts & Footers.",
};

export default function BlogPage() {
  return (
    <main>
      <Nav />
      <BlogPageIntro />
      <Suspense
        fallback={
          <section style={{ padding: "2rem 0" }}>
            <p>Loading posts…</p>
          </section>
        }
      >
        <AllBlogsPosts />
      </Suspense>{" "}
      {/* <BlogSection /> */}
      <FinalCTAMain />
    </main>
  );
}
