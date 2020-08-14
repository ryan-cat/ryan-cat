import Section from './Section';
import SplitView from './SplitView';

const yearsExperience = () => {
  const diff = Math.abs(new Date() - new Date(2017, 10, 1));
  const date = new Date(diff);
  return Math.abs(date.getFullYear() - 1970) + date.getUTCMonth() / 12;
};

const workItems = [
  {
    place: 'Fluor Marine Propulsion - Software Developer',
    image: 'fmp.jpeg',
    years: `June 2016 - August 2016 | May 2017 - August 2017 | May 2018 - Present`,
    location: 'Pittsburgh, PA',
    description: `I have worked two interships and am now working full-time at Fluor Marine Propulsion. For these roughly ${yearsExperience()} years, 
      my primary responsiblity is to design, implement, test and deploy full stack web applications for internal use by the enterprise using tools such as React, JavaScript,
      TypeScript, .NET Core, GraphQL, Entity Framework, Oracle, SQL Server, and Azure DevOps.`
  }
];

const Experience = () => {
  return (
    <Section title="Experience" style={{ backgroundColor: 'rgba(237, 242, 247)' }}>
      {workItems.map((x) => (
        <SplitView image={x.image} title={x.place} subtitle={x.years} info={x.location} body={x.description} key={x.place} />
      ))}
    </Section>
  );
};

export default Experience;
