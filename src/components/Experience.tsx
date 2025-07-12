import TitleTwo from "./ui/TitleTwo";
import ExperienceCardLeft from "./ui/ExperienceCardLeft";
import ExperienceCardRight from "./ui/ExperienceCardRight";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
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
      default:
        return <FaGraduationCap className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative my-32 mx-auto max-w-6xl px-4 space-y-6"
    >
      <TitleTwo gradient={templateData.Experiences.title}>
        My Experience
      </TitleTwo>

      {isLargeScreen ? (
        <>
          <div className="absolute left-1/2 w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="py-4 space-y-12 relative">
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
          <div className="absolute w-1 h-full bg-white/60 transform -translate-x-1/2" />
          <ul className="space-y-12">
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
