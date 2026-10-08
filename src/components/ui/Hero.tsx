import Button from "../Button";
import heroImage from "../../assets/my-photo.jpeg";
function Hero() {
  return (
    <section className=" md:mt-12 flex items-center sm:mt-0 px-4 pt-24">
      <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-14 3xl:gap-20">
        <div className="flex flex-col gap-3 sm:gap-8">
          <h1 className="flex flex-col">
            <span className="text-lg md:text-2xl font-semibold 3xl:text-5xl">
              Hello, <span className="text-emerald-700">I'm</span>
            </span>
            <span className="text-2xl md:text-3xl xl:text-4xl font-semibold text-emerald-500">
              Muhammad Shahram
            </span>
            <span className="text-xl md:text-2xl xl:text-3xl font-semibold text-neutral-white-200">
              A MERN Stack Developer
            </span>
          </h1>
          <p className="text-sm sm:text-base 3xl:text-3xl leading-relaxed text-neutral-white-200/90 3xl:max-w-2xl 3xl:leading-loose 3xl:tracking-wider">
            I build modern, scalable web applications using
            <b className="text-emerald-600 tracking-wide"> MongoDB</b>,
            <b className="text-emerald-600 tracking-wide"> Express.js</b>,
            <b className="text-emerald-600 tracking-wide"> React.js</b>, and
            <b className="text-emerald-600 tracking-wide"> Node.js</b>. I focus
            on clean architecture, robust REST APIs, and efficient user
            interfaces. With
            <b className="text-emerald-600 tracking-wide"> TypeScript</b>,
            <b className="text-emerald-600 tracking-wide"> JavaScript</b>, and
            <b className="text-emerald-600 tracking-wide"> Tailwind CSS</b>, I
            create responsive, performant applications that deliver smooth and
            engaging user experiences.
          </p>
          <div className="flex w-full gap-3">
            <Button text="Hire me" rout="#contact-section" />
            <a
              href="#projects-section"
              className="inline-flex items-center justify-center rounded-lg bg-neutral-gray-800/50 px-4 py-2 text-neutral-white-200/90 transition-colors duration-200 hover:bg-neutral-gray-800"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end ">
          <div className="relative overflow-hidden rounded-full p-2">
            <div className="absolute left-1/2 top-0 h-full w-28 -translate-x-1/2 rotate-45 bg-emerald-600 animate-wiggle sm:w-32 md:w-36" />
            <div className="relative z-10 flex h-64 w-64 items-center justify-center overflow-hidden rounded-full sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 3xl:h-112 3xl:w-md">
              <img
                src={heroImage}
                alt="Portrait of Muhammad Shahram"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
