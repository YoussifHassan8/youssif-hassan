import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import FloatingElements from "./components/ui/FloatingElements";
import MouseInteraction from "./components/ui/MouseInteraction";
import templateOneData from "../templateOneData.json";

function App() {
  return (
    <>
      <AnimatedBackground />
      <FloatingElements />
      <MouseInteraction />

      <div className="relative z-10 max-w-[1300px] mx-auto px-12 min-h-screen text-white pt-[100px] overflow-x-hidden">
        <Navbar />
        {templateOneData.NavBar.about && <About />}
        {templateOneData.NavBar.projects && <Projects />}
        {templateOneData.NavBar.skills && <Skills />}
        {templateOneData.NavBar.experience && <Experience />}
        {templateOneData.NavBar.contact && <Contact />}
      </div>
    </>
  );
}

export default App;
