import ProjectCard from "../ProjectCard";
import ForkifyImage from "../../assets/projectImages/forkify.png";
import CineSeekImage from "../../assets/projectImages/cineseek.png";
import Button from "../Button";
import SectionHeading from "../SectionHeading";
import { Suspense } from "react";
type ProjectCardDetails = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
};
const projectsData: ProjectCardDetails[] = [
  {
    id: 1,
    name: "Forkify",
    description:
      "A professional recipe application featuring an advanced search engine, recipe uploads, and serving adjustments. Built with modern JavaScript and a custom API integration.",
    image: ForkifyImage, // Path check kar lein
    link: "https://forkify-shahrampk.netlify.app",
    color: "from-orange-500", // Optional: Different color themes
  },
  {
    id: 2,
    name: "Lumina",
    description:
      "Lumina is a visual discovery platform designed to help users discover, explore, and organize inspiring photography in one place. Users can search and browse a constantly updated collection of high-quality images, explore trending and recent searches, and organize discoveries into personalized collections. The platform is being developed toward a smarter, more personalized visual discovery experience with AI-powered search planned for future releases.",
    image: "https://i.ibb.co/htghBQD/Screenshot-From-2026-09-01-22-27-00.png",
    link: "https://lumina-shahrampk.vercel.app/",
    color: "from-blue-500",
  },
  {
    id: 3,
    name: "CineSeek",
    description:
      "A sleek and intuitive online audio player designed for a seamless listening experience, featuring dynamic playlist management and smooth playback controls.",
    image: CineSeekImage,
    link: "https://cineseek-shahrampk.netlify.app/",
    color: "from-purple-500",
  },
];
function Projects() {
  return (
    <section
      id="projects-section"
      className=" flex flex-col items-center gap-20  px-4"
    >
      <SectionHeading
        subTitle1="My"
        subTitle2="Featured"
        mainTitle="Projects"
      />
      <Suspense fallback="Loading...">
        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-10">
          {projectsData.map((projectDetails) => (
            <ProjectCard key={projectDetails.id} details={projectDetails} />
          ))}
        </div>
      </Suspense>
      <div>
        <Button
          text="See More"
          rout="https://github.com/shahrampk"
          newPage={true}
        />
      </div>
    </section>
  );
}

export default Projects;
