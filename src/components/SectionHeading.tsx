type TitleType = {
  subTitle1: string;
  subTitle2: string;
  mainTitle: string;
};
function SectionHeading({ subTitle1, subTitle2, mainTitle }: TitleType) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <p className="text-xl font-semibold">
        {subTitle1} <span className="text-emerald-700">{subTitle2}</span>
      </p>

      <h1 className="text-6xl my-2 font-semibold text-neutral-white-50">
        {mainTitle}
      </h1>
    </div>
  );
}

export default SectionHeading;
