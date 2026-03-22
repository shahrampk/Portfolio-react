import { MdRocketLaunch } from "react-icons/md";
import SectionHeading from "../SectionHeading";
import { BsBugFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

type StepType = {
  id: number;
  label: string;
  title: string;
  description: string;
  bulletPoints: string[];
};

const steps: StepType[] = [
  {
    id: 1,
    label: "01",
    title: "Analyze & Research",
    description:
      "Every great project starts with clarity. I take time to understand your goals, audience, and constraints before writing a single line of code.",
    bulletPoints: [
      "Dive into your requirements & vision",
      "Research competitors and best practices",
      "Define a clear roadmap and priorities",
    ],
  },
  {
    id: 2,
    label: "02",
    title: "Development Phase",
    description:
      "Once the plan is locked in, I translate ideas into clean, scalable code with a strong focus on performance and maintainability.",
    bulletPoints: [
      "Implement pixel-perfect UI from designs",
      "Build reusable, well-structured components",
      "Integrate APIs and real data flows",
    ],
  },
  {
    id: 3,
    label: "03",
    title: "Testing Phase",
    description:
      "Before anything goes live, I rigorously test the experience to make sure everything feels smooth, stable, and intuitive.",
    bulletPoints: [
      "Cross-browser and device testing",
      "Fix edge cases and polish UX details",
      "Optimize load time and interactions",
    ],
  },
  {
    id: 4,
    label: "04",
    title: "Launch & Handover",
    description:
      "When everything is ready, I help ship your product confidently and make sure you have everything you need to grow it further.",
    bulletPoints: [
      "Deploy to your preferred environment",
      "Monitor, refine, and apply final tweaks",
      "Provide documentation and ongoing support options",
    ],
  },
];

function HowIWork() {
  return (
    <section
      id="process-section"
      className="container mx-auto flex flex-col gap-14 px-4 sm:px-6 lg:px-8 md:gap-20"
    >
      <SectionHeading subTitle1="My" subTitle2="Working" mainTitle="Process" />

      <div className="flex flex-col gap-14 md:gap-24 xl:gap-32">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={step.id}
              className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24 2xl:gap-28"
            >
              {/* Number + small label rail */}
              <div
                className={`flex flex-col gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-semibold text-emerald-500 md:text-5xl 2xl:text-6xl">
                    {step.label}
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-emerald-500/60 via-emerald-400/40 to-transparent" />
                </div>

                <div className="max-w-xl xl:max-w-2xl 2xl:max-w-3xl flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold text-neutral-white-50 md:text-3xl 2xl:text-4xl">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base 3xl:text-3xl leading-relaxed text-neutral-white-200/90 3xl:max-w-2xl 3xl:leading-loose 3xl:tracking-wider">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-gray-50/90 md:text-base 2xl:text-lg">
                    {step.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card side */}
              <div
                className={`flex justify-center ${
                  isEven ? "lg:order-1" : "lg:order-2"
                } mt-2 lg:mt-0`}
              >
                <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-gray-700/60 bg-neutral-gray-900/60 shadow-2xl shadow-black/70 backdrop-blur-xl sm:max-w-md xl:max-w-lg 2xl:max-w-xl">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/15 via-sky-400/5 to-transparent pointer-events-none" />

                  <div className="flex flex-col items-center gap-6 px-6 py-8 sm:px-8 sm:py-10 2xl:px-10 2xl:py-12">
                    <div className="flex items-center justify-center rounded-2xl p-4 sm:p-5">
                      <span className="text-7xl sm:text-8xl 2xl:text-9xl">
                        {step.id === 1 && <IoIosSearch />}
                        {step.id === 2 && <FaLaptopCode />}
                        {step.id === 3 && <BsBugFill />}
                        {step.id === 4 && <MdRocketLaunch />}
                      </span>
                    </div>
                    <div className="space-y-2 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90">
                        Phase {step.id}
                      </p>
                      <p className="text-lg font-semibold text-neutral-white-50 2xl:text-xl">
                        {step.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowIWork;
