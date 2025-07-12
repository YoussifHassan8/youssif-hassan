import SkillCard from "./ui/SkillCard";
import TitleTwo from "./ui/TitleTwo";
import SkillsDescription from "./skills/SkillsDescription";
import templateData from "../../data.json";

const Skills = () => {
  const skills = templateData.Skills.skills;
  const title = templateData.Skills.title;

  return (
    <section
      id="skills"
      className="my-32 mx-auto max-w-6xl px-4 space-y-6 relative"
    >
      <TitleTwo gradient={title}>My Skills</TitleTwo>

      <SkillsDescription />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <SkillCard
              key={skill.name}
              icon={Icon}
              name={skill.name}
              color={skill.color}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
