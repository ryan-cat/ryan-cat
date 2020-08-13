const SocialLink = ({ image, url, className }) => {
  return (
    <a href={url} target="_blank" className={className}>
      <img src={image} className="h-32 w-32 transition hover:rounded transform hover:-translate-y-1 hover:scale-110" />
    </a>
  );
};

export default SocialLink;
