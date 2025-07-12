import Tags from "../ui/Tags";
import Title from "../ui/Title";
import Slider from "../ui/Slider";
import Description from "../ui/Description";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

interface RightSideProps {
  name: {
    content: string;
    gradient: string;
  };
  tags: string[];
  description: {
    content: string;
    highlights: {
      start: number;
      end: number;
      color: string;
    }[];
  };
  resumeButton: {
    resumeLink: string;
    resumeGradient: string;
    resumeColor1: string;
  };
  links: {
    id: string;
    link: string;
    preview: boolean;
  }[];
}

const RightSide = ({
  name,
  tags,
  description,
  resumeButton,
  links,
}: RightSideProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return FaGithub;
      case "linkedin":
        return FaLinkedin;
      case "x":
        return FaXTwitter;
      case "codeforces":
        return SiCodeforces;
      case "leetcode":
        return SiLeetcode;
      default:
        return FaGithub;
    }
  };

  return (
    <>
      <Tags tags={tags} />
      <Title name={name} />
      <Slider />
      <Description
        highlights={description.highlights}
        content={description.content}
      />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4 mt-6 sm:mt-8">
        <div className="relative group w-full sm:w-auto">
          <button
            className="relative px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer w-full sm:w-auto"
            style={{
              background: resumeButton.resumeGradient,
              boxShadow: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px -5px ${resumeButton.resumeColor1}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <a
              href={resumeButton.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center sm:justify-start gap-2"
            >
              <span className="bg-gradient-to-r from-white to-[#d4fff1] bg-clip-text text-transparent">
                View My Resume
              </span>
              <FaArrowRight />
            </a>
          </button>
        </div>

        <ul className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
          {links
            .filter(({ preview }) => preview)
            .map(({ id, link }) => {
              const IconComponent = getIcon(id);
              return (
                <li
                  className="relative p-2 rounded-full hover:bg-white/10 transition-all duration-300 group text-white"
                  key={id}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <IconComponent
                      fontSize={28}
                      className="sm:text-[32px] drop-shadow-lg transition-all duration-300 hover:scale-110"
                    />
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default RightSide;
