import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-green-50 py-16 px-4 text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">
            Accumsan urna quis at fau cibus magna Facilisi
          </h1>
          <p className="text-lg text-gray-600">
            Amet commodo venenatis in congue. Sit eget nulla nulla neque nulla
            venenatis.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded">
              Download on the App Store
            </button>
            <button className="bg-black text-white px-6 py-3 rounded">
              Get it on Google Play
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/images/hero.svg"
            alt="Person"
            className="rounded-md shadow-lg"
            width={"300"}
            height={"300"}
          />
        </div>
      </div>
    </section>
  );
};
