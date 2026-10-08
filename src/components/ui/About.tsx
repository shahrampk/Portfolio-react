import Button from "../Button";
import aboutImage from "../../assets/about.jpeg";

function About() {
  return (
    <section
      id="about-section"
      className=" grid grid-cols-1 md:grid-cols-5 md:gap-10 items-center px-4 "
    >
      <div className="hidden md:flex justify-start items-center col-span-2">
        <div className="border-l-10 border-b-10 lg:border-l-20 lg:border-b-20 border-emerald-900 p-5">
          <img
            loading="lazy"
            src={aboutImage}
            alt="My Photo"
            className="w-96 scale-3d scale-110 lg:translate-x-7 lg:-translate-y-7"
          />
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-5 items-start">
        {/* sub Title */}
        <div>
          {/* <h1 className="text-lg md:text-2xl font-semibold 3xl:text-5xl"> */}
          <h1 className="text-2xl sm:text-4xl font-semibold my-2">
            About <span className="text-emerald-700">Me</span>
          </h1>
          {/* 
          <h1 className="text-2xl sm:text-4xl font-semibold my-2">
            Hi, I’m Shahram a MERN Stack Developer
          </h1> */}
        </div>
        {/* Title */}

        <p className="text-sm sm:text-base 3xl:text-3xl leading-relaxed text-neutral-white-200/90 3xl:max-w-2xl 3xl:leading-loose 3xl:tracking-wider">
          I'm Shahram, a passionate{" "}
          <b className="text-emerald-600">MERN Stack Developer</b> focused on
          building modern, scalable, and user-friendly web applications. I work
          across both frontend and backend development using{" "}
          <b className="text-emerald-600">MongoDB</b>,{" "}
          <b className="text-emerald-600">Express.js</b>,{" "}
          <b className="text-emerald-600">React.js</b>, and{" "}
          <b className="text-emerald-600">Node.js</b>, allowing me to build
          complete applications from intuitive interfaces to robust server-side
          systems. I use <b className="text-emerald-600">TypeScript</b> and{" "}
          <b className="text-emerald-600">JavaScript</b> to write clean and
          maintainable code, while{" "}
          <b className="text-emerald-600">Tailwind CSS</b> helps me create
          responsive and polished user interfaces. On the backend, I build{" "}
          <b className="text-emerald-600">RESTful APIs</b>, implement
          authentication and authorization, manage databases, and structure
          applications with scalability and maintainability in mind. I value{" "}
          <b className="text-emerald-600">clean architecture</b>,{" "}
          <b className="text-emerald-600">performance</b>,{" "}
          <b className="text-emerald-600">security</b>, and smooth user
          experiences. Whether I'm developing a feature from scratch,
          integrating an API, optimizing an application, or solving a technical
          challenge, I aim to create practical and reliable solutions that
          provide real value.
        </p>
        <Button text="Hire me" rout="#" />
      </div>
    </section>
  );
}

export default About;
