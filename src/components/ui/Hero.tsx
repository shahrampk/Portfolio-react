import Button from "../Button";
import heroImage from "../../assets/my-photo.png";
function Hero() {
  return (
    <div className="min-h-screen flex items-center container mx-auto px-4">
      <div className="grid grid-cols-2 gap-10  w-full">
        <div>
          <div className="flex flex-col items-start gap-8">
            <h1 className="flex flex-col gap-2">
              <span className="text-3xl font-semibold">
                Hello, <span className="text-emerald-700">I'm</span>
              </span>
              <span className="text-6xl mb-2 font-semibold text-emerald-500">
                Muhammad Shahram
              </span>
              <span className="text-4xl font-semibold text-neutral-white-200">
                A Frontend Engineer
              </span>
            </h1>
            <p>
              I build modern, responsive web applications using
              <b className="text-emerald-600"> React.js</b>,
              <b className="text-emerald-600"> TypeScript</b>, and
              <b className="text-emerald-600"> JavaScript</b>, focusing on clean
              architecture and efficient user interfaces. I craft visually
              appealing and well-structured designs with
              <b className="text-emerald-600"> HTML5</b>,
              <b className="text-emerald-600"> CSS3</b>, and
              <b className="text-emerald-600"> Tailwind CSS</b>, ensuring
              performance, scalability, and a smooth user experience.
            </p>
            <div className="flex gap-5">
              <Button text="Hire me" rout="#" />
              <a
                href="#projects-section"
                className="transition-colors bg-neutral-gray-800/50 duration-200 hover:bg-neutral-gray-800 text-neutral-white-200/90 px-4 py-2 rounded-lg"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative p-2 overflow-hidden rounded-full">
            <div className="bg-emerald-600 rotate-45 absolute top-0 left-1/2 h-full w-40 -translate-x-1/2 animate-wiggle" />
            <div className="h-96 w-96  rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={heroImage}
                alt="my photo"
                className="h-full w-full object-cover relative z-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
