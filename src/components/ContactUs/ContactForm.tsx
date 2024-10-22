"use client";
import { useState } from "react";
import { Input, Button } from "@/components/ui";

export const ContactForm = () => {
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
  );
};
