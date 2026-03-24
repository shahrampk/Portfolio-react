import {
  Header,
  Hero,
  Projects,
  Skills,
  CTA,
  HowIWork,
  Contact,
  Services,
  Testimonial,
  About,
  Footer,
} from "./components/ui/index";
function App() {
  const moveToSection = (sectionName: string) => {
    const section = document.querySelector<HTMLElement>(`#${sectionName}`);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80;
      console.log(y);

      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="font-inter selection:bg-neutral-gray-600/60 selection:text-emerald-100 overflow-x-hidden  flex flex-col gap-20 md:gap-36">
      <div className="fixed -top-10 right-0 radial-circle -z-10"></div>
      <div className="flex flex-col gap-20 md:gap-36 md:max-w-5/6 mx-auto">
        <Header moveToSection={moveToSection} />
        {/* Hero Section */}
        <Hero />
        {/* About me */}
        <About />
        {/* Working Process */}
        <HowIWork />
        {/* Services */}
        <Services />
        {/* Projects Section */}
        <Projects />
      </div>
      {/* CTA */}
      <CTA />
      <div className="flex flex-col gap-20 md:gap-36 md:max-w-5/6 mx-auto">
        {/* Skills Section */}
        <Skills />
        {/* Testimonial Section */}
        <Testimonial />
        {/* Contact Section */}
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
