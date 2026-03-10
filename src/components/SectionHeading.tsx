type TitleType = {
  subTitle1: string;
  subTitle2: string;
  mainTitle: string;
};
function SectionHeading({ subTitle1, subTitle2, mainTitle }: TitleType) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-lg md:text-xl xl:text-2xl 3xl:text-3xl font-semibold">
        {subTitle1} <span className="text-emerald-700">{subTitle2}</span>
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl my-2 font-semibold text-neutral-white-50">
        {mainTitle}
      </h1>
    </div>
  );
}

export default SectionHeading;
