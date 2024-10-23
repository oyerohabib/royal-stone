import { Navbar, Footer, Banner, HeroText, FAQSection } from "@/components/ui";

export default function FAQs() {
  return (
    <>
      <Navbar />
      <HeroText
        heading="Frequently Asked Questions"
        subHeading="Cursus semper id sed non blandit diam"
      />
      <section className="flex flex-col gap-12 py-16 px-4 md:px-12 xl:px-32 w-full">
        <FAQSection />
      </section>
      <Banner className="pt-16" />
      <Footer />
    </>
  );
}
