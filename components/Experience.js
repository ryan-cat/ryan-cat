import Section from './Section';
import SplitView from './SplitView';

const yearsExperience = () => {
  const diff = Math.abs(new Date() - new Date(2021, 5, 14));
  const date = new Date(diff);
  return Math.round(Math.abs(date.getFullYear() - 1970) + date.getUTCMonth() / 12);
};

const workItems = [
  {
    place: 'Amazon - Software Development Engineer',
    image: 'amazon.png',
    years: `June 2021 - Present`,
    location: 'Pittsburgh, PA',
    description: ``
  },
  {
    place: 'Fluor Marine Propulsion - Software Developer',
    image: 'fmp.jpeg',
    years: `June 2016 - August 2016 | May 2017 - August 2017 | May 2018 - June 2021`,
    location: 'Pittsburgh, PA',
    description: `I have worked two interships and am now working full-time at Fluor Marine Propulsion. For these three and a half years, 
      my primary responsiblity is to design, implement, test and deploy full stack web applications for internal use by the enterprise using tools such as React, JavaScript,
      TypeScript, .NET Core, GraphQL, Entity Framework, Oracle, SQL Server, and Azure DevOps. More recently, I have been focused on helping our company migrate to Azure.
      This involves strategizing for this migration as well as implementing, building, and securing Azure technologies such as Virtual Networks, Virtual Machines, Storage, Service Bus,
      and Databases. These technologies are created and managed using Terraform.`
  }
];

const Experience = () => {
  return (
    <Section title="Experience" style={{ backgroundColor: 'rgba(237, 242, 247)' }}>
      {workItems.map((x) => (
        <div className="mb-10" key={x.place}>
          <SplitView image={x.image} title={x.place} subtitle={x.years} info={x.location} body={x.description} />
        </div>
      ))}
    </Section>
  );
};

export default Experience;
