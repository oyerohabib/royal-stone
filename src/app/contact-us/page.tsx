import { Navbar, Footer, Banner, HeroText } from "@/components/ui";
import { ContactForm } from "@/components/ContactUs/ContactForm";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <HeroText
        heading="Contact Us"
        subHeading="Need our help? Feel free to reach out to us"
      />
      {/* Contact Us details */}
      <section className="flex flex-col gap-12 pt-16 pb-12 px-4 md:px-12 xl:px-24 w-full">
        <div className="w-full flex flex-col md:flex-row xs:items-center lg:items-start gap-5">
          <div className="flex flex-col gap-3 w-full bg-lighter-gray px-4 py-5 md:p-6 rounded-3xl">
            <div className="border p-2 rounded-xl -rotate-45 w-fit">
              <Image
                src={"/images/whatsapp.svg"}
                alt="target"
                width={50}
                height={50}
                className="size-6 rotate-45"
              />
            </div>
            <h3 className="text-lg font-semibold">Chat with us on Whatsapp</h3>
            <p className="text-light-black md:pr-4">09010201223</p>
          </div>
          <div className="flex flex-col gap-3 w-full bg-lighter-gray px-4 py-5 md:p-6 rounded-3xl">
            <div className="border p-2 rounded-xl -rotate-45 w-fit">
              <Image
                src={"/images/call.svg"}
                alt="target"
                width={50}
                height={50}
                className="size-6 rotate-45"
              />
            </div>
            <h3 className="text-lg font-semibold">Call an Agent</h3>
            <p className="text-light-black md:pr-4">09010201223</p>
          </div>
          <div className="flex flex-col gap-3 w-full bg-lighter-gray px-4 py-5 md:p-6 rounded-3xl">
            <div className="border p-2 rounded-xl -rotate-45 w-fit">
              <Image
                src={"/images/mail.svg"}
                alt="target"
                width={50}
                height={50}
                className="size-6 rotate-45"
              />
            </div>
            <h3 className="text-lg font-semibold">Send a Mail</h3>
            <p className="text-light-black md:pr-4">Support@royalstone.com</p>
          </div>
        </div>
        <hr className="w-full px-4 md:px-12 xl:px-24" />
      </section>
      <ContactForm />
      <Banner className="pt-16" />
      <Footer />
    </>
  );
}
