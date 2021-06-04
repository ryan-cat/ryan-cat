import Section from './Section';
import SplitView from './SplitView';

// const yearsExperience = () => {
//   const diff = Math.abs(new Date() - new Date(2021, 5, 14));
//   const date = new Date(diff);
//   return Math.round(Math.abs(date.getFullYear() - 1970) + date.getUTCMonth() / 12);
// };

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
    description: `I had worked two interships and then worked full-time at Fluor Marine Propulsion. For those three and a half years, 
      my primary responsiblity was to design, implement, test and deploy full stack web applications for internal use by the enterprise using tools such as React, JavaScript,
      TypeScript, .NET Core, GraphQL, Entity Framework, Oracle, SQL Server, and Azure DevOps. Additionally, I had helped the company migrate to Azure.
      That involved strategizing for the migration as well as implementing, building, and securing Azure technologies such as Virtual Networks, Virtual Machines, Storage, Service Bus,
      and Databases. Those technologies were created and managed using Terraform.`
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
