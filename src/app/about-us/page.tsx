import { Navbar, Footer } from "@/app/components/ui";
import { HeroSection, OurStory, MissionVision } from "@/app/components/AboutUs";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <OurStory />
      <MissionVision />
      <Footer />
    </>
  );
}
