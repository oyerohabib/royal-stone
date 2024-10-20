import Image from "next/image";

export const WhyRoyalStone = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-6 py-16 px-24 w-full">
      <div className="w-1/2 flex flex-col">
        <div className="max-w-lg">
          <h2 className="text-3xl font-extrabold mb-4">
            Why Royal Stone is the best Choice
          </h2>
          <p className="mt-2 text-light-black mb-10">
            Proin quam varius facilisis urna. Viverra at vitae lacus at ut
            volutpat. Amet commodo venenatis in congue.
          </p>
        </div>
      </div>
      <div className="w-1/2 grid grid-cols-2 gap-5 px-5">
        <div className="flex flex-col items-center gap-4 max-w-2xl bg-lighter-gray p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/fast.svg"}
              alt="fast transaction"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Fast Transactions</h3>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-2xl bg-lighter-gray p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/configuration.svg"}
              alt="easy config"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Easy Configuration</h3>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-2xl bg-lighter-gray p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/secure.svg"}
              alt="secure platform"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Secure Platform</h3>
        </div>
        <div className="flex flex-col items-center gap-4 max-w-2xl bg-lighter-gray p-6 rounded-3xl">
          <div className="border p-2 rounded-xl -rotate-45 w-fit">
            <Image
              src={"/images/bubble.svg"}
              alt="target"
              width={50}
              height={50}
              className="size-6 rotate-45"
            />
          </div>
          <h3 className="text-lg font-semibold">Easy To Use</h3>
        </div>
      </div>
    </section>
  );
};
