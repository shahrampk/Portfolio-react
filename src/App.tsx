import Testimonial from "../src/components/ui/Testimonial";
import About from "./components/ui/About";
import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import Projects from "./components/ui/Projects";
import Skills from "./components/ui/Skills";
import CTA from "./components/ui/CTA";
import Services from "./components/ui/Services";
import HowIWork from "./components/ui/HowIWork";
import Contact from "./components/ui/Contact";
function App() {
  return (
    <div className="font-inter flex flex-col gap-40 pb-20 selection:bg-neutral-gray-600/60 selection:text-emerald-100 overflow-x-hidden">
      <div className="fixed -top-10 right-0 radial-circle -z-10"></div>
      <Header />
      <>
        {/* Hero Section */}
        <Hero />
      </>
      {/* About me */}
      <About />
      {/* Working Process */}
      <HowIWork />
      {/* Services */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* CTA */}
      <CTA />

      {/* Skills Section */}
      <Skills />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
