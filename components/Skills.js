import Section from './Section';

import SkillsSection from './SkillsSection';

const sections = [
  { title: 'Advanced', type: 'advanced' },
  { title: 'Intermediate', type: 'intermediate' },
  { title: 'Basic', type: 'basic' }
];

const Skills = () => {
  return (
    <Section title="Skills" childClassName="sm:ml-20">
      {sections.map((x) => (
        <div className="pb-10" key={x.title}>
          <SkillsSection {...x} />
        </div>
      ))}
    </Section>
  );
};

export default Skills;
