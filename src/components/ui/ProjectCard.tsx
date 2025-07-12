import { FaGithub } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: Technology[];
  liveDemo: string;
  repo: string;
  img: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  liveDemo,
  repo,
  img,
}: ProjectCardProps) => {
  return (
    <div className="relative group h-full">
      <div className="relative h-full p-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl group transform transition-all duration-500 hover:-translate-y-2">
        <div className="bg-[#1a191e] p-6 rounded-3xl h-full space-y-4 relative overflow-hidden">
          <div className="aspect-video overflow-hidden rounded-xl border-2 border-white/10 relative">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-between space-y-6">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>      
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                 key={index}
                className={`px-3 py-1 text-sm font-medium rounded-full bg-gray-800 transition-transform hover:-translate-y-1 hover:shadow-lg duration-200 ${tech.color}`}
                >
                  {tech.name}
                </span>
                ))}
          </div>
            <div className="flex gap-3 mt-4">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white rounded-xl transition-all relative overflow-hidden"
                >
                  <IoPlayCircleOutline className="w-5 h-5" />
                  <span className="font-semibold tracking-wide">Live Demo</span>
                </a>
              )}

              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white rounded-xl transition-all relative overflow-hidden"
                >
                  <FaGithub className="w-5 h-5" />
                  <span className="font-semibold tracking-wide">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
