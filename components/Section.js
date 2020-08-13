const Section = ({ title, color, children }) => {
  const bgColor = color || 'white';

  return (
    <div className={`bg-${bgColor} font-thin`}>
      <div className="container py-16 text-center">
        <h2 className="text-5xl mb-10">{title}</h2>

        {children}
      </div>
    </div>
  );
};

export default Section;
