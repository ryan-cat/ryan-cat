const Section = ({ title, children, style }) => {
  return (
    <div className={`font-thin`} style={style}>
      <div className="container py-16 text-center">
        <h2 className="text-5xl mb-10">{title}</h2>

        {children}
      </div>
    </div>
  );
};

export default Section;
