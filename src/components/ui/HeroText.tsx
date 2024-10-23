type HeroTextProps = {
  heading: string;
  subHeading: string;
};

export const HeroText = ({ heading, subHeading }: HeroTextProps) => {
  return (
    <section className="flex flex-col gap-2 md:gap-4 md:pt-32 pt-32 md:py-20 px-4 pb-12 md:px-12 xl:px-24 items-center justify-center text-center bg-secondary-green">
      <h2 className="text-2xl md:text-3xl xl:text-[40px] font-extrabold text-black">
        {heading}
      </h2>
      <p className="text-light-black">{subHeading}</p>
    </section>
  );
};
