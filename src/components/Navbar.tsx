import templateData from "../../data.json";

const Navbar = () => {
  const templateOneData = templateData;

  return (
    <>
      <nav>
        <ul className="fixed top-4 left-0 right-0 z-50 rounded-full bg-[#211f2a] max-w-[600px] mx-auto flex items-center justify-evenly py-4 flex-wrap">
          {templateOneData.NavBar.about && (
            <li>
              <a
                href="#about"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                About
              </a>
            </li>
          )}
          {templateOneData.NavBar.projects && (
            <li>
              <a
                href="#projects"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                Projects
              </a>
            </li>
          )}
          {templateOneData.NavBar.skills && (
            <li>
              <a
                href="#skills"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                Skills
              </a>
            </li>
          )}
          {templateOneData.NavBar.experience && (
            <li>
              <a
                href="#experience"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                Experience
              </a>
            </li>
          )}
          {templateOneData.NavBar.contact && (
            <li>
              <a
                href="#contact"
                className="text-lg font-medium text-white/60 hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
