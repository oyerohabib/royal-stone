import { Navbar, Footer, Banner } from "@/components/ui";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="px-4 md:px-12 xl:px-24 md:pt-32 pt-28 md:py-20 bg-secondary-green text-left">
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="text-xl md:text-3xl xl:text-[40px] font-extrabold">
            Terms Of Service
          </h1>
          <h3 className="mb-3 md:mb-5">Updated Last: 30th September 2024</h3>
          <div className="md:text-md xl:text-lg text-light-black max-w-6xl !leading-8 md:!leading-[44px]">
            <p>
              <b>1. Use of Services:</b> You may use our services in accordance
              with these terms and applicable laws. Our platform is intended for
              personal, non-commercial use unless otherwise authorized.
              Unauthorized or unlawful use of our services may result in
              termination of your account.{" "}
            </p>{" "}
            <br />
            <p>
              <b>2. User Account and Responsibilities:</b> To access certain
              features, you may need to create an account. You are responsible
              for maintaining the confidentiality of your account information
              and ensuring the security of your device. Notify us immediately if
              you suspect unauthorized activity on your account.{" "}
            </p>
            <br />
            <p>
              <b>3. Privacy and Data Protection:</b> Our Privacy Policy governs
              how we collect, use, and protect your information. By using our
              services, you consent to our collection and use of data as
              outlined in the Privacy Policy.{" "}
            </p>
            <br />
            <p>
              <b>4. Intellectual Property:</b> All content on this platform,
              including text, graphics, logos, and software, is the property of
              Royal Stone and is protected by intellectual property laws. You
              may not reproduce, distribute, or create derivative works without
              our explicit permission.{" "}
            </p>
            <br />
            <p>
              <b>5. Limitations of Liability:</b> Royal Stone will not be liable
              for any direct, indirect, incidental, or consequential damages
              arising from the use or inability to use our services. This
              includes any loss of data or damage to your device.
            </p>
            <br />
            <p>
              <b>6. Changes to Services and Terms:</b> We reserve the right to
              modify or discontinue our services or these terms at any time
              without prior notice. Continued use of our services after changes
              are implemented indicates acceptance of the new terms.
            </p>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
}
