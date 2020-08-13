const Skill = ({ title, image, experience, className }) => {
  return (
    <div className={`flex ${className}`}>
      <img src={image} className="w-20 h-20" />
      <div className="text-left ml-5">
        <h1 className="text-3xl font-light text-blue-500">{title}</h1>
        <h3>{experience}</h3>
      </div>
    </div>
  );
};

export default Skill;
