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
        <div className="flex flex-col gap-12 lg:gap-20 max-w-[460px] relative">
          {/* Step 1 */}
          <div className="flex gap-6 relative">
            <div className="border py-1 px-3 rounded-xl -rotate-45 w-fit self-start bg-white relative z-10">
              <Image
                src={"/images/download.svg"}
                alt="download"
                width={50}
                height={50}
                className="size-8 rotate-45"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Download the Mobile App</h3>
              <p>
                Access Royal Stone&apos;s powerful tools right from your
                smartphone. Download our app from the Google Play
              </p>
            </div>
          </div>

          {/* Step Line */}
          <div className="absolute top-[30px] left-[21px] w-[2px] h-[200px] bg-[#D6EFD4]"></div>

          {/* Step 2 */}
          <div className="flex gap-6 relative">
            <div className="border py-1 px-3 rounded-xl -rotate-45 w-fit self-start bg-white relative z-10">
              <Image
                src={"/images/create.svg"}
                alt="create"
                width={50}
                height={50}
                className="size-8 rotate-45"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Create an Account</h3>
              <p>
                Sign up with ease and start your journey toward financial
                independence. Our registration process will have you ready to
                invest in minutes
              </p>
            </div>
          </div>

          {/* Step Line */}
          <div className="absolute top-[220px] left-[21px] w-[2px] h-[120px] bg-[#D6EFD4]"></div>

          {/* Step 3 */}
          <div className="flex gap-6 relative">
            <div className="border py-1 px-3 rounded-xl -rotate-45 w-fit self-start bg-white relative z-10">
              <Image
                src={"/images/plus.svg"}
                alt="plus"
                width={50}
                height={50}
                className="size-8 rotate-45"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">Make your First Transaction</h3>
              <p>
                Start building your future by making your first investment or
                savings deposit. With secure payment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-[885px]:w-1/2 xs:items-center max-[885px]:items-center">
        <div className="mx-auto max-w-lg">
          <Image
            src={
              "https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1729686349/get-started_ermp7x.png"
            }
            alt="our services"
            width={600}
            height={600}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
