import Image from "next/image";

export const Services = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-6 py-16 lg:py-0 lg:pt-16 px-4 md:px-12 xl:px-24 w-full">
      <div className="w-full lg:w-1/2 flex flex-col xs:items-center lg:items-start xl:border-r">
        <div className="max-w-lg xs:text-center lg:text-left">
          <h2 className="text-2xl xxs:text-3xl font-extrabold mb-4">
            Our Services
          </h2>
          <p className="mt-2 text-light-black mb-10">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc
            neque nulla venenatis. Felis ornare nulla eros dolor viverra quis
            odio or
          </p>

          <Image
            src={"/images/services.png"}
            alt="dashboard services"
            width={600}
            height={600}
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col xs:items-center lg:items-start gap-5 lg:px-5">
        <div className="flex flex-col gap-4 md:max-w-2xl bg-lighter-gray px-4 py-5 md:p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/chart.svg"}
              alt="target"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Make an Investment</h3>
          <p className="text-light-black md:pr-4">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc
            neque nulla venenatis. Felis ornare nulla eros dolor viverra quis
            odio or
          </p>
        </div>
        <div className="flex flex-col gap-4 md:max-w-2xl bg-lighter-gray px-4 py-5 md:p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/target.svg"}
              alt="target"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Create a Savings Target</h3>
          <p className="text-light-black md:pr-4">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc
            neque nulla venenatis. Felis ornare nulla eros dolor viverra quis
            odio or
          </p>
        </div>
        <div className="flex flex-col gap-4 md:max-w-2xl bg-lighter-gray px-4 py-5 md:p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/stocks.svg"}
              alt="target"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Invest in Stocks</h3>
          <p className="text-light-black md:pr-4">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue. Sit eget nullam nunc
            neque nulla venenatis. Felis ornare nulla eros dolor viverra quis
            odio or
          </p>
        </div>
      </div>
    </section>
  );
};
