import Image from "next/image";

export const OurStory = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-6 md:gap-0 pt-8 lg:py-0 lg:pt-16 px-4 md:px-12 xl:px-24 w-full">
      <div className="w-full lg:w-1/2 flex flex-col xs:items-center lg:items-start order-2 lg:order-1">
        <div className="">
          <Image
            src={"/images/services.svg"}
            alt="dashboard services"
            width={100}
            height={100}
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 lg:px-5 order-1 lg:order-2">
        <h2 className="text-2xl xxs:text-3xl font-extrabold">Our Story</h2>
        <p className="mt-2 text-light-black mb-10 leading-8 lg:leading-10">
          Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla senectus
          tincidunt gravida vel lectus. Aenean elit amet semper lacinia arcu id
          massa. Purus ut turpis nisl aliquam tellus. Vel ridiculus tristique
          ornare tristique. Risus enim imperdiet accumsan cras sit mauris. At et
          amet integer in eget suspendisse. Dictum aliquet nunc morbi tristique
          nec. Ut ultricies porta arcu nam sed. Nulla ac nunc nec natoque velit
          egestas. Posuere mattis pellentesque ut nisi lectus ultrices risus
          mauris sem. Eget parturient sit tristique nulla eget lacus imperdiet
          adipiscing. Commodo tortor arcu nec enim duis. Tincidunt cursus
          egestas nibh sollicitudin dolor accumsan. Lectus tristiqu
        </p>
      </div>
    </section>
  );
};
