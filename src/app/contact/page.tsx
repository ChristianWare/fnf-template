import ContactPageContainer from "@/components/ContactPage/ContactPageContainer/ContactPageContainer";
import ContactPageIntro from "@/components/ContactPage/ContactPageIntro/ContactPageIntro";
import FinalCTAMain from "@/components/shared/FinalCTAMain/FinalCTAMain";
import Nav from "@/components/shared/Nav/Nav";

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <ContactPageIntro />
      <ContactPageContainer />
      <FinalCTAMain />
    </main>
  );
}
