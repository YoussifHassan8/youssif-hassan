import TitleTwo from "./ui/TitleTwo";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
import { useState, useEffect } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import templateData from "../../templateOneData.json";

const Experience = () => {
  const data = templateData.Experiences.experience;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getIconComponent = (iconName?: string) => {
    switch (iconName) {
      case "Education":
        return <FaGraduationCap className="w-6 h-6" />;
      case "Development":
        return <FaCode className="w-6 h-6" />;
      case "Programming":
        return <FaLaptopCode className="w-6 h-6" />;
      case "GiGraduateCap":
        return <GiGraduateCap className="w-6 h-6" />;
      case "FaBriefcase":
        return <FaBriefcase className="w-6 h-6" />;
      default:
        return <FaGraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative my-32 mx-auto max-w-7xl px-4 space-y-8 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <TitleTwo gradient={templateData.Experiences.title}>
        My Experience
      </TitleTwo>

      {isLargeScreen ? (
        <>
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2 shadow-lg shadow-blue-500/25" />
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 animate-pulse" />

          <ul className="py-8 space-y-16 relative">
            {data.map((item, index) => {
              if (item.left === true) {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardLeft
                      date={item.period || ""}
                      title={item.title}
                      foundation={item.company}
                      description={item.description}
                      logo={getIconComponent(item.icon)}
                      small={false}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={index} className="relative">
                    <ExperienceCardRight
                      date={item.period || ""}
                      title={item.title}
                      foundation={item.company}
                      description={item.description}
                      logo={getIconComponent(item.icon)}
                    />
                  </div>
                );
              }
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 shadow-lg shadow-blue-500/25" />
          <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />

          <ul className="space-y-16 ml-16">
            {data.map((item, index) => (
              <div key={index} className="relative">
                <ExperienceCardLeft
                  date={item.period || ""}
                  title={item.title}
                  foundation={item.company}
                  description={item.description}
                  logo={getIconComponent(item.icon)}
                  small={true}
                />
              </div>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Experience;
