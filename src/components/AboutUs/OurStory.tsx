import Image from "next/image";

export const OurStory = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-6 md:gap-0 pt-8 lg:py-0 lg:pt-16 px-4 md:px-12 xl:px-24 w-full">
      <div className="w-full lg:w-1/2 flex flex-col xs:items-center lg:items-start order-2 lg:order-1">
        <div className="">
          <Image
            src={"/images/services.svg"}
            alt="dashboard services"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 lg:px-5 order-1 lg:order-2">
        <h2 className="text-2xl xxs:text-3xl font-extrabold">Our Story</h2>
        <p className="mt-2 text-light-black mb-10 leading-8 lg:leading-10">
          Founded on the belief that financial security should be within
          everyone&apos;s reach, Royal Stone was created to simplify the world
          of savings and investments. Our journey began with a vision to bridge
          the gap between financial knowledge and practical tools. Over the
          years, we&apos;ve grown into a trusted platform, earning the
          confidence of users who share our values of integrity and reliability.
          We&apos;ve worked tirelessly to make investing simple and safe,
          integrating cutting-edge technology to enhance our services and build
          a community of financially empowered individuals.
        </p>
      </div>
    </section>
  );
};
