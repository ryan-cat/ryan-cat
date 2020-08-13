const Section = ({ title, children, style, childClassName }) => {
  return (
    <div className={`font-thin`} style={style}>
      <div className="container py-16 text-center">
        <h2 className="text-5xl mb-5">{title}</h2>

        <div className={childClassName}>{children}</div>
      </div>
    </div>
  );
};

export default Section;
