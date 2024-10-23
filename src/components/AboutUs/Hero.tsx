import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-12 xl:px-24 md:pt-32 pt-24 md:py-20 bg-secondary-green text-left">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="max-w-2xl md:w-3/5 lg:w-1/2">
          <h1 className="text-[27px] md:text-3xl xl:text-[40px] font-extrabold mb-3 sm:mb-5">
            Who we are
          </h1>
          <p className="md:text-sm xl:text-base text-gray-600 lg:mb-10 !leading-7 lg:!leading-10">
            Vivamus in turpis leo nisi. Dictum in non eros potenti. Nulla
            senectus tincidunt gravida vel lectus. Aenean elit amet semper
            lacinia arcu id massa. Purus ut turpis nisl aliquam tellus. Vel
            ridiculus tristique ornare tristique. Risus enim imperdiet accumsan
            cras sit mauris. At et amet integer in eget suspendisse. Dictum
            aliquet nunc morbi tristique nec. Ut ultricies porta arcu nam sed.
            Nulla ac nunc nec natoque velit egestas. Posuere mattis pellentesque
            ut nisi lectus ultrices risus mauris sem. Eget parturient sit
            tristique nulla eget lacus imperdiet adipiscing. Commodo tortor arcu
            nec enim duis. Tincidunt cursus egestas nibh sollicitudin dolor
            accumsan. Lectus tristiqu
          </p>
        </div>
        <Image
          src="https://res.cloudinary.com/oyerotech-herokuapp-com/image/upload/v1729686350/about-hero_eai2hs.png"
          alt="Person"
          className="w-full md:w-2/5 lg:w-1/2 self-end"
          width={"600"}
          height={"600"}
        />
      </div>
    </section>
  );
};
