import Image from "next/image";

export const Banner = () => {
  return (
    <section className="py-16 px-4 md:px-12 xl:px-24 w-full bg-secondary-green">
      <div className="flex flex-col gap-10 items-center justify-center py-10 px-4 bg-primary-green rounded-[20px]">
        <h2 className="text-[40px] leading-[48px] text-white text-center font-extrabold max-w-xl">
          Start putting your money in the right places
        </h2>

        <div className="flex justify-center md:justify-start space-x-4 text-primary-green">
          <button className="flex gap-2 items-center bg-white px-5 py-3 rounded-lg">
            <Image
              src={"/images/apple-g.svg"}
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
          <button className="flex gap-2 items-center bg-white px-5 py-3 rounded-lg">
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
    </section>
  );
};

export default Banner;
