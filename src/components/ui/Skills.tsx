import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
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

const frontendSkills: SkillsType[] = [
  {
    id: 2,
    name: "React.js",
    icon: <FaReact />,
    color: "text-[#61DAFB]",
    percentage: 90,
  },
  {
    id: 4,
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "text-white",
    percentage: 80,
  },
  {
    id: 5,
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "text-[#3178C6]",
    percentage: 85,
  },
  {
    id: 6,
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-[#F7DF1E]",
    percentage: 95,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-[#38BDF8]",
    percentage: 95,
  },
  {
    id: 8,
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-[#1572B6]",
    percentage: 90,
  },
  {
    id: 9,
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-[#E34F26]",
    percentage: 98,
  },
];

const backendSkills: SkillsType[] = [
  {
    id: 0,
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-[#47A248]",
    percentage: 85,
  },
  {
    id: 1,
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-white",
    percentage: 85,
  },
  {
    id: 3,
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-[#339933]",
    percentage: 85,
  },
];

function Skills() {
  return (
    <section id="skills-section" className="flex flex-col gap-20 px-4">
      <SectionHeading subTitle1="My" subTitle2="Core" mainTitle="Skill Set" />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white">Frontend</h2>
          {frontendSkills.map((skillData) => (
            <SkillCard key={skillData.id} skillData={skillData} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-white">Backend</h2>
          {backendSkills.map((skillData) => (
            <SkillCard key={skillData.id} skillData={skillData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
