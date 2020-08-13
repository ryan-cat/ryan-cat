import Section from './Section';
import SplitView from './SplitView';

const Education = () => {
  const body = `I attended the University of Pittsburgh and earned a degree in Computer Engineering. While I was earning my degree, I
  focused mostly on the Computer Science and the software aspect of Computer Engineering. While I still took some hardware focused classes
  such as computer architecture, microelectronics, and advanced digital design, I mostly took courses such as algorithms, artifical
  intelligence, computer vision, web applications and more.`;

  return (
    <Section title="Education" style={{ backgroundColor: 'rgba(237, 242, 247)' }}>
      <SplitView
        image="pitt.jpg"
        title="University of Pittsburgh, Pittsburgh, PA"
        subtitle="Bachelor of Science - Computer Engineering"
        info="Graduated Summa Cum Laude in April 2018"
        body={body}
      />
    </Section>
  );
};

export default Education;
