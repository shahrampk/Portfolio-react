import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header({
  moveToSection,
}: {
  moveToSection: (section: string) => void;
}) {
  const [giveBackGround, setGiveBackGround] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 10) {
        setGiveBackGround(true);
      } else {
        setGiveBackGround(false);
      }
    };

    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      // Tailwind's `lg` breakpoint is 1024px by default
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navItems = [
    { href: "#about-section", label: "About me" },
    { href: "#process-section", label: "Process" },
    { href: "#services-section", label: "Services" },
    { href: "#projects-section", label: "Projects" },
    { href: "#skills-section", label: "Skills" },
  ] as const;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // const moveToTop = () => window.scrollTo(0, 0);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 ${
        giveBackGround ? "bg-neutral-gray-700/30 backdrop-blur-2xl" : ""
      }`}
    >
      <div className="md:container flex justify-between items-center px-4 py-5 mx-auto">
        {/* Site Title */}
        <h1
          className="tracking-wider md:text-xl font-semibold text-white cursor-pointer"
          onClick={() => moveToSection("header")}
        >
          Muhammad Shahram
        </h1>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-3 text-mint-cream-100">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-2 rounded-lg"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li>
              <a
                className="transition-colors duration-200 bg-emerald-700 hover:bg-emerald-800 text-neutral-white-200/90 px-4 py-2 rounded-lg"
                href="#contact-section"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-white-200/90 hover:bg-neutral-gray-800/50 transition-colors duration-200"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-haspopup="true"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`shadow-2xl shadow-black/30 lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" px-4 pb-5">
          <div className="rounded-2xl border border-neutral-gray-100/10 bg-neutral-gray-100/5 backdrop-blur-lg">
            <ul className="flex flex-col p-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="w-full transition-colors duration-200 hover:bg-neutral-gray-800/50 inline-block text-neutral-white-200/90 px-4 py-3 rounded-xl"
                    href={item.href}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="p-2">
                <a
                  className="w-full text-center transition-colors duration-200 bg-emerald-700 hover:bg-emerald-800 text-neutral-white-200/90 px-4 py-3 rounded-xl inline-block"
                  href="#contact-section"
                  onClick={closeMobileMenu}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
