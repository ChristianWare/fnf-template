import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import Faq from "@/components/Faq/Faq";
import FeaturesPageIntro from "@/components/FeaturesPage/FeaturesPageIntro/FeaturesPageIntro";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";

export default function FeaturesPage() {
  return (
    <main>
      <Nav />
      <FeaturesPageIntro />
      <Faq />
      <BlogSection />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
