import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import SectionHeading from "../SectionHeading";
import SkillCard from "../SkillCard";
import type { JSX } from "react";

interface SkillsType {
  id: number;
  name: string;
  icon: JSX.Element;
  percentage: number;
  color: string;
}

const skillsData: SkillsType[] = [
  {
    id: 1,
    name: "React.js",
    icon: <FaReact />,
    color: "text-[#61DAFB]",
    percentage: 90,
  },
  {
    id: 2,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-[#3178C6]",
    percentage: 85,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-[#F7DF1E]",
    percentage: 95,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-[#38BDF8]",
    percentage: 95,
  },
  {
    id: 5,
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-[#1572B6]",
    percentage: 90,
  },
  {
    id: 6,
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-[#E34F26]",
    percentage: 98,
  },
];
function Skills() {
  return (
    <section
      id="skills-section"
      className="container mx-auto flex flex-col gap-20  px-4 "
    >
      <SectionHeading subTitle1="My" subTitle2="Core" mainTitle="Skill Set" />
      <div className="flex flex-col gap-5">
        {skillsData.map((skillData) => (
          <SkillCard key={skillData.id} skillData={skillData} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
