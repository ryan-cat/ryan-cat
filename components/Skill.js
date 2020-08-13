const Skill = ({ title, image, experience, className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={image} className="w-20 h-20" />
      <h1 className="text-3xl ml-5 font-light">{title}</h1>
    </div>
  );
};

export default Skill;
