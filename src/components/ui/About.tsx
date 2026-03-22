import Button from "../Button";
import aboutImage from "../../assets/my-photo.avif";

function About() {
  return (
    <section
      id="about-section"
      className="grid grid-cols-1 md:grid-cols-5 lg:gap-5 items-center container mx-auto px-4 "
    >
      <div className="hidden md:flex justify-start items-center col-span-2">
        <div className="border-l-10 border-b-10 lg:border-l-20 lg:border-b-20 border-emerald-900 p-5">
          <img
            src={aboutImage}
            alt="My Photo"
            className="w-96 scale-3d scale-110 lg:translate-x-7 lg:-translate-y-7"
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-5 items-start">
        {/* sub Title */}
        <div>
          <p className="text-lg md:text-2xl font-semibold 3xl:text-5xl">
            About <span className="text-emerald-700">Me</span>
          </p>

          <h1 className="text-2xl sm:text-4xl font-semibold my-2">
            Hi, I’m Shahram a Frontend Developer
          </h1>
        </div>
        {/* Title */}
        <p className="text-sm sm:text-base 3xl:text-3xl leading-relaxed text-neutral-white-200/90 3xl:max-w-2xl 3xl:leading-loose 3xl:tracking-wider">
          I'm Shahram, an enthusiastic web developer with a focus on creating
          cutting-edge, responsive, and intuitive online applications. My
          proficiency with <b className="text-emerald-600">TypeScript</b>,{" "}
          <b className="text-emerald-600">JavaScript</b>, and{" "}
          <b className="text-emerald-600">React.js</b> enables me to develop
          dynamic and effective front-end experiences. I create aesthetically
          pleasing, functional, and user-friendly interfaces using{" "}
          <b className="text-emerald-600">Tailwind CSS</b>,{" "}
          <b className="text-emerald-600">CSS3</b>, and{" "}
          <b className="text-emerald-600">HTML5</b>. Clean code, smooth user
          interactions, and scalable designs that satisfy practical requirements
          are my main priorities. Whether it's creating interactive elements,
          enhancing performance, or putting responsive layouts into practice, I
          blend technical accuracy with creativity to produce web solutions that
          have an impact.
        </p>
        <Button text="Hire me" rout="#" />
      </div>
    </section>
  );
}

export default About;
