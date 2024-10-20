import { Navbar, Footer } from "@/app/components/ui";
import {
  HeroSection,
  Services,
  GetStarted,
  Products,
  WhyRoyalStone,
} from "@/app/components/Homepage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <GetStarted />
      <WhyRoyalStone />
      <Products />
      <Footer />
    </>
  );
}
