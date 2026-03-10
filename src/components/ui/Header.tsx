import { useEffect, useState } from "react";

function Header() {
  const [giveBackGround, setGiveBackGround] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setGiveBackGround(true);
      } else {
        setGiveBackGround(false);
      }
    });
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${giveBackGround ? "bg-neutral-gray-100/5 backdrop-blur-lg" : ""}`}
    >
      <div className="container flex justify-between items-center px-4 py-5 mx-auto ">
        <div>
          <h1 className="tracking-wider text-2xl font-semibold text-white">
            Muhammad Shahram
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-3 text-mint-cream-100">
            <li>
              <a
                className="transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#about-section"
              >
                About me
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#process-section"
              >
                Process
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#services-section"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#projects-section"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#skills-section"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-200 bg-emerald-700 hover:bg-emerald-800 text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#contact-section"
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
