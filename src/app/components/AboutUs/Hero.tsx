import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="px-4 md:px-12 xl:px-24 pt-4 bg-secondary-green text-left">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="max-w-xl md:w-3/5 lg:w-1/2">
          <h1 className="text-xl md:text-3xl xl:text-[40px] font-extrabold mb-5">
            Who we are
          </h1>
          <p className="md:text-md xl:text-lg text-gray-600 mb-6 lg:mb-10">
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
          src="/images/about-hero.svg"
          alt="Person"
          className="w-full md:w-2/5 lg:w-1/2 self-end"
          width={"300"}
          height={"300"}
        />
      </div>
    </section>
  );
};
