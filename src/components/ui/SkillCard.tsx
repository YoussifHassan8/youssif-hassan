import { IconType } from "react-icons";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiFlask,
  SiSpring,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiRuby,
  SiRubyonrails,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiNuxtdotjs,
  SiGatsby,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiElasticsearch,
  SiJest,
  SiMocha,
  SiCypress,
  SiSelenium,
  SiFigma,
  SiAdobexd,
  SiAdobephotoshop,
  SiWordpress,
  SiShopify,
  SiWebpack,
  SiVite,
  SiSass,
  SiLess,
  SiStyledcomponents,
  SiSwift,
  SiKotlin,
  SiDart,
  SiFlutter,
  SiReactivex,
  SiGraphql,
  SiApollographql,
  SiElixir,
  SiGo,
  SiRust,
  SiWebgl,
  SiThreedotjs,
  SiElectron,
  SiRaspberrypi,
  SiArduino,
} from "react-icons/si";

interface SkillCardProps {
  icon: string;
  name: string;
  color: string;
  index: number;
  isEditing?: boolean;
  onDelete?: (name: string) => void;
}

const getIconComponent = (iconName: string): IconType => {
  const iconMap: { [key: string]: IconType } = {
    TbBrandCpp,
    SiPython,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiGithub,
    SiGit,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiDjango,
    SiFlask,
    SiSpring,
    SiPhp,
    SiSharp,
    SiDotnet,
    SiRuby,
    SiRubyonrails,
    SiVuedotjs,
    SiAngular,
    SiSvelte,
    SiNuxtdotjs,
    SiGatsby,
    SiFirebase,
    SiAmazon,
    SiGooglecloud,
    SiDocker,
    SiKubernetes,
    SiGrafana,
    SiElasticsearch,
    SiJest,
    SiMocha,
    SiCypress,
    SiSelenium,
    SiFigma,
    SiAdobexd,
    SiAdobephotoshop,
    SiWordpress,
    SiShopify,
    SiWebpack,
    SiVite,
    SiSass,
    SiLess,
    SiStyledcomponents,
    SiSwift,
    SiKotlin,
    SiDart,
    SiFlutter,
    SiReactivex,
    SiGraphql,
    SiApollographql,
    SiElixir,
    SiGo,
    SiRust,
    SiWebgl,
    SiThreedotjs,
    SiElectron,
    SiRaspberrypi,
    SiArduino,
  };

  return iconMap[iconName] || SiReact;
};

const SkillCard = ({ icon, name, color, index }: SkillCardProps) => {
  const IconComponent = getIconComponent(icon);

  return (
    <div
      className={`group relative flex flex-col items-center justify-center p-6 bg-[#1a191e] rounded-lg 
      transition-all duration-300 hover:bg-gray-700 hover:transform hover:scale-105 hover:-translate-y-2
      opacity-0 animate-fade-in-up shadow-[0_0_20px_transparent] hover:shadow-[0_0_20px]`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div
        className={`text-4xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 
        relative z-10 `}
        style={{ color }}
      >
        <IconComponent />
      </div>

      <span
        className={`absolute text-white font-medium text-lg bottom-2
        transition-all duration-300 group-hover:bottom-4`}
      >
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
