import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardDetails {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
}
function ProjectCard({ details }: { details: ProjectCardDetails }) {
  console.log(details);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
      {/* Top Half: Image */}
      <div className="relative overflow-hidden aspect-square md:aspect-7/9">
        <img
          src={details.image}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
          alt="Food Recipe website photo"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
      </div>

      {/* Floating Link Button - Hover par bara hoga */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
        <a
          href={details.link}
          className="w-16 h-16 bg-neutral-gray-700 hover:bg-neutral-gray-600 rounded-full flex items-center justify-center border-4 border-emerald-500 shadow-2xl text-white"
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-neutral-gray-900 via-neutral-gray-800/50 to-neutral-gray-700/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
        <h3 className="text-xl font-bold text-white mb-1">{details.name}</h3>
        <p className="text-gray-300 text-sm leading-relaxed ">
          {details.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
