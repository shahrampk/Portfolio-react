import Button from "../Button";
import heroImage from "../../assets/my-photo.png";
function Hero() {
  return (
    <section className="mt-12 flex min-h-screen items-center sm:mt-0">
      <div className="container mx-auto w-full px-4 pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 3xl:gap-20">
          <div className="flex flex-col items-start gap-6 sm:gap-8">
            <h1 className="flex flex-col gap-2">
              <span className="text-2xl font-semibold sm:text-3xl 3xl:text-8xl">
                Hello, <span className="text-emerald-700">I'm</span>
              </span>
              <span className="mb-2 text-4xl font-semibold text-emerald-500 sm:text-5xl lg:text-6xl 3xl:text-7xl">
                Muhammad Shahram
              </span>
              <span className="text-2xl font-semibold text-neutral-white-200 sm:text-3xl lg:text-4xl 3xl:text-5xl">
                A Frontend Engineer
              </span>
            </h1>
            <p className=" text-sm leading-relaxed text-neutral-white-200/90 sm:text-base 3xl:max-w-2xl 3xl:text-3xl 3xl:leading-loose 3xl:tracking-wider">
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
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-5">
              <Button text="Hire me" rout="#" />
              <a
                href="#projects-section"
                className="inline-flex items-center justify-center rounded-lg bg-neutral-gray-800/50 px-4 py-2 text-neutral-white-200/90 transition-colors duration-200 hover:bg-neutral-gray-800"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <div className="relative overflow-hidden rounded-full p-2">
              <div className="absolute left-1/2 top-0 h-full w-28 -translate-x-1/2 rotate-45 bg-emerald-600 animate-wiggle sm:w-32 md:w-36" />
              <div className="relative z-10 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 3xl:h-112 3xl:w-md">
                <img
                  src={heroImage}
                  alt="Portrait of Muhammad Shahram"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
