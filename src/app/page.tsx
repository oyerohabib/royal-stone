import { Navbar, Footer, Banner } from "@/components/ui";
import {
  HeroSection,
  Services,
  GetStarted,
  Products,
  WhyRoyalStone,
} from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <GetStarted />
      <WhyRoyalStone />
      <Products />
      <Banner />
      <Footer />
    </>
  );
}
