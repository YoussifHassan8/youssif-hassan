import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import templateOneData from "../templateOneData.json";
function App() {
  return (
    <>
      <div className="max-w-[1300px] mx-auto px-12 min-h-screen text-white pt-[100px]">
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
