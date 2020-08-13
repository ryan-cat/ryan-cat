import Section from './Section';
import WorkPlace from './WorkPlace';

const yearsExperience = () => {
  const diff = Math.abs(new Date() - new Date(2017, 10, 1));
  const date = new Date(diff);
  return Math.abs(date.getFullYear() - 1970) + date.getUTCMonth() / 12;
};

const workItems = [
  {
    place: 'Fluor Marine Propulsion',
    image: 'fmp.jpeg',
    years: `June 2016 - August 2017 | May 2017 - August 2017 | May 2018 - Present (${yearsExperience().toFixed(2)} years)`,
    location: 'Pittsburgh, PA',
    description:
      'Design, implement, test and deploy full stack web applications for internal use by the enterprise using tools such as React, JavaScript, TypeScript, .NET Core, Entity Framework, Oracle, SQL Server, and Azure DevOps.'
  }
];

const Experience = () => {
  return (
    <Section title="Experience" color="gray-300">
      {workItems.map((x) => (
        <WorkPlace {...x} key={x.name} />
      ))}
    </Section>
  );
};

export default Experience;
