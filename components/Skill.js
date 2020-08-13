const Skill = ({ title, image, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={image} className="w-12 h-12" />
      <h1 className="text-2xl ml-5 font-light">{title}</h1>
    </div>
  );
};

export default Skill;
