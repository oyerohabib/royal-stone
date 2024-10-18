import { Navbar, Footer } from "@/app/components/ui";
import {
  HeroSection,
  Services,
  Steps,
  Products,
} from "@/app/components/Homepage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Steps />
      <Products />
      <Footer />
    </>
  );
}
