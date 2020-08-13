import { useState, useEffect } from 'react';
import SocialLink from './SocialLink';

const socialLinks = [
  { url: 'https://www.linkedin.com/in/ryan-catalogna-6b3900103/', image: 'linkedin.png' },
  { url: 'https://twitter.com/RM_Cat412', image: 'twitter.png' },
  { url: 'https://github.com/ryan-cat', image: 'github.png' }
];

const Bio = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(100);
    }, 200);
  }, []);

  return (
    <div className={`pt-32 font-thin text-center transition-opacity duration-1000 ease-in opacity-${opacity} z-10`} style={{ height: '100vh', width: '100vw' }}>
      <div className="flex justify-center">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHfE7d2BeVYhQ/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=mQwsBsVqxbAAkIkDY5qRv61Zwgv826fBn1cjaQX-ndM"
          className="rounded-full h-64 w-64"
        />
      </div>
      <div className="mt-3">
        <h1 className="text-6xl">Ryan Catalogna</h1>
        <h2 className="text-3xl">Full Stack Developer</h2>
        <h3 className="text-1xl">Pittsburgh, PA</h3>
      </div>

      <h4 className="mt-5 text-xl">Get in contact</h4>

      <div className="flex justify-center mt-3">
        {socialLinks.map((x) => (
          <SocialLink {...x} key={x.url} className="ml-5" />
        ))}
      </div>
    </div>
  );
};

export default Bio;
