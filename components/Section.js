const Section = ({ title, children, style, className }) => {
  return (
    <div className={`font-thin`} style={style} className={className}>
      <div className="container py-16 text-center">
        <h2 className="text-5xl mb-5">{title}</h2>

        {children}
      </div>
    </div>
  );
};

export default Section;
