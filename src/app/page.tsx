import { Navbar, Footer } from "@/app/components/ui";
import {
  HeroSection,
  Services,
  GetStarted,
  Products,
} from "@/app/components/Homepage";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <GetStarted />
      <Products />
      <Footer />
    </>
  );
}
