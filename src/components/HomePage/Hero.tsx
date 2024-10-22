import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-12 xl:px-24 pt-4 bg-secondary-green text-left">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="max-w-xl md:w-3/5 lg:w-1/2">
          <h1 className="text-xl md:text-3xl xl:text-[40px] font-extrabold mb-5">
            Accumsan urna quis at fau cibus magna Facilisi.
          </h1>
          <p className="md:text-md xl:text-lg text-gray-600 mb-6 lg:mb-10">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc
            neque nulla venenatis. Felis ornare nulla eros dolor viverra quis
            odio or
          </p>
          <div className="flex justify-start space-x-2 md:space-x-4">
            <button className="flex gap-[6px] xxs:gap-2 items-center bg-btn text-white px-[6px] xxs:px-3 md:px-4 py-3 rounded-lg">
              <Image
                src={"/images/apple-w.svg"}
                alt="apple image"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />
              <div className="text-xs xxs:text-[13px] text-left">
                Download on the <br />
                <span className="font-bold text-sm xxs:text-base">
                  App Store
                </span>
              </div>
            </button>
            <button className="flex gap-[6px] xxs:gap-2 items-center bg-btn text-white px-[6px] xxs:px-3 md:px-4 py-3 rounded-lg">
              <Image
                src={"/images/google-play.svg"}
                alt="apple image"
                width={40}
                height={40}
                className="size-8 md:size-10"
              />
              <div className="text-xs xxs:text-[13px] text-left">
                Get it on <br />
                <span className="font-bold text-sm xxs:text-base">
                  Google Play
                </span>
              </div>
            </button>
          </div>
        </div>
        <Image
          src="/images/home-hero.svg"
          alt="Person"
          className="w-full md:w-2/5 lg:w-1/2 self-end"
          width={"300"}
          height={"300"}
        />
      </div>
    </section>
  );
};
