import Skill from './Skill';
import skills from '../data/skills';

const SkillsSection = ({ title, type }) => {
  return (
    <>
      <div className="text-left ml-20 mb-5">
        <h1 className="text-2xl">{title}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ml-20">
        {skills
          .filter((x) => x.type === type)
          .map((x) => (
            <Skill {...x} key={x.title} />
          ))}
      </div>
    </>
  );
};

export default SkillsSection;
