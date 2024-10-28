import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-12 xl:px-24 md:pt-32 pt-24 md:py-20 bg-secondary-green text-left">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="max-w-2xl md:w-3/5 lg:w-1/2">
          <h1 className="text-[27px] md:text-3xl xl:text-[40px] font-extrabold mb-3 sm:mb-5">
            Who we are
          </h1>
          <p className="md:text-sm xl:text-base text-gray-600 lg:mb-10 !leading-7 lg:!leading-10">
            Royal Stone is a forward-thinking financial platform dedicated to
            helping individuals achieve their financial goals. We provide
            user-friendly investment and savings solutions that make
            wealth-building accessible to everyone. Our team is driven by a
            commitment to transparency, trust, and innovation. We aim to empower
            individuals to take control of their financial futures, offering
            opportunities that cater to both beginner and experienced investors.
            From setting up savings goals to diversifying investments, we are
            here to guide you every step of the way.
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1729686350/about-hero_eai2hs.png"
          alt="Person"
          className="w-full md:w-2/5 lg:w-1/2 self-end"
          width={"600"}
          height={"600"}
        />
      </div>
    </section>
  );
};
