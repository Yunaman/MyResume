import DynamicAtmosphere from "@/components/DynamicAtmosphere";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CreativeProcess from "@/components/sections/CreativeProcess";
import TechArsenal from "@/components/sections/TechArsenal";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import ExperimentalLab from "@/components/sections/ExperimentalLab";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <DynamicAtmosphere />
      <Hero />
      <About />
      <CreativeProcess />
      <TechArsenal />
      <Skills />
      <Portfolio />
      <ExperimentalLab />
      <Testimonials />
      <Contact />
    </>
  );
}
