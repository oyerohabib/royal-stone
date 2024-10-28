import { Navbar, Footer, Banner } from "@/components/ui";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <section className="px-4 md:px-12 xl:px-24 md:pt-32 pt-28 md:py-20 bg-secondary-green text-left">
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="text-xl md:text-3xl xl:text-[40px] font-extrabold">
            Privacy Policy
          </h1>
          <h3 className="mb-3 md:mb-5">Updated Last: 30th September 2024</h3>
          <div className="md:text-md xl:text-lg text-light-black max-w-6xl !leading-8 md:!leading-[44px]">
            <p>
              At Royal Stone, we prioritize the protection of your personal
              information. We are committed to maintaining transparency and
              trust by implementing security measures that safeguard your data.
              Our privacy practices comply with the highest industry standards,
              ensuring your information is handled with care and
              confidentiality. Personal data, such as contact details and
              purchase history, is collected solely to improve your experience,
              manage transactions, and enhance our services.{" "}
            </p>{" "}
            <br />
            <p>
              We only share your information with trusted third parties for
              essential services like payment processing and delivery, adhering
              to strict confidentiality agreements. Rest assured, we do not sell
              or rent your data to any external parties. Additionally, we use
              secure storage methods and encryption to protect your data from
              unauthorized access.{" "}
            </p>
            <br />
            <p>
              To enhance personalization, we may collect information on your
              interactions with our website, helping us tailor our services to
              your preferences. Cookies and similar technologies may be used to
              gather usage data, improving site functionality and delivering
              relevant content. You have the option to manage your cookie
              preferences through your browser settings at any time.{" "}
            </p>
            <br />
            <p>
              Royal Stone remains dedicated to protecting your rights under
              applicable data protection laws. You have the right to request
              access to, correction, or deletion of your personal data in line
              with legal guidelines. Should you have any questions or require
              further assistance, please contact our customer support team for
              clarification.{" "}
            </p>
            <br />
            <p>
              By using our services, you agree to this privacy policy and our
              practices. We may periodically update this policy to reflect
              changes in our procedures or regulations. We encourage you to
              review this policy regularly to stay informed on how we protect
              your privacy. Your trust is essential to us, and we are committed
              to maintaining it through responsible data management.
            </p>
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
}
