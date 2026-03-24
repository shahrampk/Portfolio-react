import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import Projects from "./components/ui/Projects";
import Skills from "./components/ui/Skills";
import CTA from "./components/ui/CTA";
import HowIWork from "./components/ui/HowIWork";
import Contact from "./components/ui/Contact";
import Services from "./components/ui/Services";
import Testimonial from "./components/ui/Testimonial";
import About from "./components/ui/About";
import Footer from "./components/ui/Footer";
function App() {
  return (
    <div className="font-inter selection:bg-neutral-gray-600/60 selection:text-emerald-100 overflow-x-hidden  flex flex-col gap-20 md:gap-40 ">
      <div className="fixed -top-10 right-0 radial-circle -z-10"></div>
      <Header />
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
      {/* CTA */}
      <CTA />
      {/* Skills Section */}
      <Skills />
      {/* Testimonial Section */}
      <Testimonial />
      {/* Contact Section */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
