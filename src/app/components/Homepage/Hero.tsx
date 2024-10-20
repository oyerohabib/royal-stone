import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="px-24 pt-4 bg-secondary-green text-center md:text-left">
      <div className="container mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="max-w-xl md:w-1/2">
          <h1 className="text-[40px] font-extrabold mb-5">
            Accumsan urna quis at fau cibus magna Facilisi.
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc
            neque nulla venenatis. Felis ornare nulla eros dolor viverra quis
            odio or
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="flex gap-2 items-center bg-btn text-white px-5 py-3 rounded-lg">
              <Image
                src={"/images/apple-w.svg"}
                alt="apple image"
                width={40}
                height={40}
                className=""
              />
              <div className="text-[13px] text-left">
                Download on the <br />
                <span className="font-bold text-base">App Store</span>
              </div>
            </button>
            <button className="flex gap-2 items-center bg-btn text-white px-5 py-3 rounded-lg">
              <Image
                src={"/images/google-play.svg"}
                alt="apple image"
                width={40}
                height={40}
                className=""
              />
              <div className="text-[13px] text-left">
                Get it on <br />
                <span className="font-bold text-base">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <Image
          src="/images/hero.svg"
          alt="Person"
          className="w-full md:w-1/2 self-end"
          width={"300"}
          height={"300"}
        />
      </div>
    </section>
  );
};
