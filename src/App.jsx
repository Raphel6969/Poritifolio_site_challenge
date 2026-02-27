import { useRef } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Story from "./Components/Story";
import Contact from "./Components/Contact";

export default function App() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const storyRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        heroRef={heroRef}
        projectsRef={projectsRef}
        storyRef={storyRef}
        contactRef={contactRef}
      />

      <div ref={heroRef}>
        <Hero />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={storyRef}>
        <Story />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}
