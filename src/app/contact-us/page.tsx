"use client";
import { useState } from "react";
import { Navbar, Footer, Input, Button, Banner } from "@/app/components/ui";
import Image from "next/image";

export default function AboutUs() {
  const initialFormValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form Values Submitted");
    setFormValues(initialFormValues);
  };
  return (
    <>
      <Navbar />
      <section className="flex flex-col gap-2 py-20 px-4 md:px-12 xl:px-24 items-center justify-center text-center bg-secondary-green">
        <h2 className="text-2xl md:text-3xl xl:text-[40px] font-extrabold text-black">
          Contact Us
        </h2>
        <p className="text-light-black">
          Need our help? Feel free to reach out to us
        </p>
      </section>

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

      <section className="flex flex-col gap-6 pb-16 px-4 md:px-12 xl:px-24 w-full">
        <h3 className="text-2xl font-semibold text-black">
          Want to fill a form instead?
        </h3>
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          onSubmit={handleFormSubmit}
        >
          <Input
            type={"text"}
            label={"Full Name"}
            placeholder={"Your Full Name"}
            name="fullName"
            value={formValues.fullName}
            onChange={handleFormChange}
          />
          <Input
            type={"email"}
            label={"Email Address"}
            placeholder={"Your Email Address"}
            name="email"
            value={formValues.email}
            onChange={handleFormChange}
          />
          <Input
            type={"tel"}
            label={"Phone Number"}
            placeholder={"Your Phone Number"}
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleFormChange}
          />
          <Input
            type={"text"}
            label={"Message"}
            placeholder={"How can we help you, Please?"}
            name="message"
            value={formValues.message}
            onChange={handleFormChange}
          />
          <Button text={"Submit"} />
        </form>
      </section>
      <Banner className="pt-16" />
      <Footer />
    </>
  );
}
