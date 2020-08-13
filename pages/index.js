import Head from 'next/head';
import Bio from '../components/Bio';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ryan Catalogna</title>
      </Head>
      <Bio />
      <Experience />
      <Skills />
      <Education />
    </>
  );
};

export default Home;
