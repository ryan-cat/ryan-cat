import SocialLink from './SocialLink';

const socialLinks = [
  { url: 'https://www.linkedin.com/in/ryancatalogna', image: 'linkedin.png' },
  { url: 'https://twitter.com/RM_Cat412', image: 'twitter.png' },
  { url: 'https://github.com/ryan-cat', image: 'github.png' }
];

const Bio = () => {
  return (
    <div className="pt-32 font-thin text-center" style={{ height: '100vh', width: '100vw', minHeight: 900 }}>
      <div className="flex justify-center">
        <img
          src="https://media-exp3.licdn.com/dms/image/C4E03AQHfE7d2BeVYhQ/profile-displayphoto-shrink_200_200/0/1567388777594?e=1628121600&v=beta&t=BXClztFNG8G5cOIlprs1sNvskJdSUSQFUJkgeM7ovkU"
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
        {socialLinks.map((x, index) => (
          <SocialLink {...x} key={x.url} className={index != 0 ? 'ml-5' : ''} />
        ))}
      </div>
    </div>
  );
};

export default Bio;
