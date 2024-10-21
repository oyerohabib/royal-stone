import { Navbar, Footer, Banner } from "@/app/components/ui";
import {
  HeroSection,
  Services,
  GetStarted,
  Products,
  WhyRoyalStone,
} from "@/app/components/HomePage";

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
