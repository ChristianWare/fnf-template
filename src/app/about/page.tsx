// import Values from "@/components/AboutPage/Values/Values";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import Nav from "@/components/shared/Nav/Nav";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Faq from "@/components/Faq/Faq";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Fonts & Footers, our mission to simplify booking, and how we help businesses reduce no-shows and increase revenue with custom booking websites.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      <Faq />
      <BlogSection />
      <FinalCTAMain />
    </main>
  );
}
