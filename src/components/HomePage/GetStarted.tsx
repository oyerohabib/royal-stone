import Image from "next/image";

export const GetStarted = () => {
  return (
    <section
      className="flex flex-col min-[885px]:flex-row 
    justify-between gap-16 min-[885px]:gap-6 pt-12 md:pt-24 px-4 md:px-12 xl:px-24 w-full bg-secondary-green"
    >
      <div className="w-full min-[885px]:w-1/2 flex flex-col xs:items-center min-[885px]:items-start">
        <h2 className="text-2xl xxs:text-3xl font-extrabold mb-12">
          How To Get Started
        </h2>
        <div className="flex flex-col gap-12 lg:gap-20 max-w-[460px]">
          <div className="flex gap-6">
            <div className="border py-1 px-3 rounded-xl -rotate-45 w-fit self-start bg-white">
              <Image
                src={"/images/download.svg"}
                alt="target"
                width={50}
                height={50}
                className="size-8 rotate-45"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                Download the Mobile App
              </h3>
              <p className="mt-2 text-light-black leading-7">
                Proin quam varius facilisis urna. Viverra at vitae lacus at ut
                volutpat. Amet commodo venenatis in congue.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="border py-1 px-3 rounded-xl -rotate-45 w-fit self-start bg-white">
              <Image
                src={"/images/create.svg"}
                alt="target"
                width={50}
                height={50}
                className="size-8 rotate-45"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                Create an Account
              </h3>
              <p className="mt-2 text-light-black leading-7">
                Proin quam varius facilisis urna. Viverra at vitae lacus at ut
                volutpat. Amet commodo venenatis in congue.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="border py-1 px-3 rounded-xl -rotate-45 w-fit self-start bg-white">
              <Image
                src={"/images/plus.svg"}
                alt="target"
                width={50}
                height={50}
                className="size-8 rotate-45"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black">
                Make your First Transaction
              </h3>
              <p className="mt-2 text-light-black leading-7">
                Proin quam varius facilisis urna. Viverra at vitae lacus at ut
                volutpat. Amet commodo venenatis in congue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-[885px]:w-1/2 xs:items-center max-[885px]:items-center">
        <div className="mx-auto max-w-lg">
          <Image
            src={"/images/get-started.svg"}
            alt="our services"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
