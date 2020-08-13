import Head from 'next/head';
import Bio from '../components/Bio';
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
    </>
  );
};

export default Home;
