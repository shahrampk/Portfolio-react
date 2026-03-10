import SectionHeading from "../SectionHeading";

// import React from "react";
type ServiceType = {
  id: number;
  icon: string;
  heading: string;
  description: string;
};

const services: ServiceType[] = [
  {
    id: 1,
    icon: "⚡",
    heading: "Fast Performance",
    description:
      "Experience lightning-fast loading and smooth interactions designed for modern web applications.",
  },
  {
    id: 2,
    icon: "🎨",
    heading: "Clean UI Design",
    description:
      "A modern and minimal interface focused on clarity, usability, and a smooth user experience.",
  },
  {
    id: 3,
    icon: "💻",
    heading: "Developer Friendly",
    description:
      "Built with scalable structure and clean code practices to make development and maintenance easier.",
  },
];
function Services() {
  return (
    <section id="services-section" className="flex flex-col gap-20">
      <SectionHeading
        subTitle1="My"
        subTitle2="Provided"
        mainTitle="Services"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-20 lg:gap-32 container mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col group items-center text-center gap-5"
          >
            <p className="icon text-4xl 3xl:text-5xl text-neutral-white-100 bg-neutral-gray-800/50 duration-200 group-hover:bg-neutral-gray-800 h-20 w-20 lg:h-24 lg:w-24 rounded-full select-none flex items-center justify-center">
              {service.icon}
            </p>
            <h3 className="text-xl md:text-2xl 3xl:text-4xl font-semibold">
              {service.heading}
            </h3>
            <p className="description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
