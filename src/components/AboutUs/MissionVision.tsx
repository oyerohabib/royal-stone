import Image from "next/image";

export const MissionVision = () => {
  return (
    <section
      className="flex flex-col lg:flex-row justify-between gap-6 bg-secondary-green
     pt-12 lg:py-0 lg:pt-16 px-4 md:px-12 xl:px-24 w-full"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 lg:px-5">
        <h2 className="text-2xl xxs:text-3xl font-extrabold">
          Our Mission & Vision
        </h2>
        <p className="text-light-black leading-8 lg:leading-10">
          Our mission at Royal Stone is to create a world where financial
          freedom is achievable for everyone. We aim to equip individuals with
          the tools and knowledge needed to make informed financial decisions.
          Our vision is to be the go-to platform for savings and investments,
          providing a secure environment that fosters growth and confidence. By
          continuously evolving and improving our services, we are dedicated to
          helping users build lasting wealth and reach new financial milestones.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="">
          <Image
            src={"/images/get-started.svg"}
            alt="dashboard services"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
