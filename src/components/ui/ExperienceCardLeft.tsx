import { IoIosArrowBack } from "react-icons/io";
import { ReactElement } from "react";

interface ExperienceCardProps {
  date: string;
  title: string;
  foundation: string;
  description: string;
  logo: ReactElement;
  small: boolean;
}

const ExperienceCardLeft = ({
  date,
  title,
  foundation,
  description,
  logo,
  small,
}: ExperienceCardProps) => {
  return (
    <div className="relative experience-card animate-slide-in-left">
      <div
        className={`absolute ${
          !small ? "left-1/2" : "left-[-12px] sm:left-[-16px]"
        } -translate-x-1/2 bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white/20 rounded-full p-3 z-10 shadow-lg shadow-blue-500/25 transition-all duration-300 timeline-dot animate-timeline-glow`}
      >
        <div className="w-6 h-6 text-white">{logo}</div>
      </div>

      <div
        className={`relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 rounded-2xl shadow-xl transition-all duration-300 card-content animate-card-float hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-[1.02] ${
          !small 
            ? "ml-[670px] w-[380px]" 
            : "ml-8 sm:ml-12 w-full max-w-sm sm:max-w-md lg:max-w-lg"
        }`}
      >
        <div className={`absolute ${
          !small ? "left-[-22px]" : "left-[-18px] sm:left-[-22px]"
        } top-[6px] text-blue-500 drop-shadow-lg`}>
          <IoIosArrowBack fontSize={32} />
        </div>

        <div className="space-y-3 sm:space-y-4">
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full">
            <span className="text-xs font-medium text-blue-300">{date}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="text-purple-400 font-semibold text-base sm:text-lg">{foundation}</p>

          <div className="text-gray-300 leading-relaxed">
            <p className="text-sm">{description}</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 rounded-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default ExperienceCardLeft;
