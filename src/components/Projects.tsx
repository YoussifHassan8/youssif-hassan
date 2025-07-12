import ProjectCard from "./ui/ProjectCard";
import TitleTwo from "./ui/TitleTwo";
import templateData from "../../templateOneData.json";

const Projects = () => {
  const projects = templateData.Projects.projects;

  return (
    <section id="projects" className="my-32 mx-auto max-w-6xl px-4">
      <TitleTwo gradient={templateData.Projects.title}>My Projects</TitleTwo>
      <p className="text-lg font-medium text-white/60 max-w-3xl text-center mx-auto mb-12">
        Discover my creative and innovative projects, spanning design to
        development, and see how I can add value to your next endeavor
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.tech}
            liveDemo={project.liveDemo}
            img={project.imgSrc}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
