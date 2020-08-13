import Section from './Section';

import SkillsSection from './SkillsSection';

const sections = [
  { title: 'Programming Languages', type: 'language' },
  { title: 'Front End Technologies', type: 'frontend-technology' },
  { title: 'Backend Technologies', type: 'backend-technology' },
  { title: 'Cloud Technologies', type: 'cloud-technology' },
  { title: 'Software/Tooling', type: 'software/tooling' }
];

const Skills = () => {
  return (
    <Section title="Skills">
      {sections.map((x) => (
        <div className="pb-10" key={x.title}>
          <SkillsSection {...x} />
        </div>
      ))}
    </Section>
  );
};

export default Skills;
