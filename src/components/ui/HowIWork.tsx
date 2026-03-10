import SectionHeading from "../SectionHeading";

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
      className="flex flex-col gap-20 container mx-auto px-4"
    >
      <SectionHeading subTitle1="My" subTitle2="Working" mainTitle="Process" />

      <div className="flex flex-col gap-36">
        {steps.map((step, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={step.id}
              className="relative grid gap-10 lg:gap-20 items-center lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]"
            >
              {/* Number + small label rail */}
              <div
                className={`flex flex-col gap-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-5xl font-semibold text-emerald-500">
                    {step.label}
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-emerald-500/60 via-emerald-400/40 to-transparent" />
                </div>

                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-semibold text-neutral-white-50 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-gray-100/90 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-sm md:text-base text-neutral-gray-50/90">
                    {step.bulletPoints.map((point) => (
                      <li key={point} className="flex items-center gap-2 ">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card side */}
              <div
                className={`${
                  isEven ? "lg:order-1" : "lg:order-2"
                } flex justify-center`}
              >
                <div className="relative w-full max-w-md rounded-3xl bg-neutral-gray-900/60 border border-neutral-gray-700/60 shadow-2xl shadow-black/70 backdrop-blur-xl overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-emerald-500/15 via-sky-400/5 to-transparent pointer-events-none" />

                  <div className="flex flex-col items-center gap-6 px-8 py-10">
                    <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-neutral-gray-800/80 border border-neutral-gray-700/70 shadow-[0_18px_40px_rgba(16,185,129,0.35)]">
                      <span className="text-2xl">
                        {step.id === 1 && "📋"}
                        {step.id === 2 && "⚙️"}
                        {step.id === 3 && "🧪"}
                        {step.id === 4 && "🚀"}
                      </span>
                    </div>
                    <div className="space-y-2 text-center">
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/90">
                        Phase {step.id}
                      </p>
                      <p className="text-lg font-semibold text-neutral-white-50">
                        {step.title}
                      </p>
                    </div>
                    <p className="text-sm text-neutral-gray-100/80 text-center">
                      From first idea to final launch, I keep you in the loop at
                      every step so the product always matches your
                      expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* subtle connector arrow */}
              {step.id !== steps.length && (
                <div className="hidden lg:block absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
                  <div className="h-16 w-px bg-linear-to-b from-emerald-400/70 via-emerald-400/30 to-transparent relative">
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-emerald-400/80" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HowIWork;
