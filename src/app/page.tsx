import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Features from "@/components/HomePage/Features/Features";
import Hero from "@/components/HomePage/Hero/Hero";
import WhyDB from "@/components/HomePage/WhyDB/WhyDB";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyDB />
      <Features />
    </main>
  );
}
