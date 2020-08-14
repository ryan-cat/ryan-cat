const SplitView = ({ image, title, subtitle, info, body }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:ml-20">
      <div className="text-center sm:text-right pb-5 sm:pb-0 pt-3">
        <img src={image} className="rounded inline-block" />
      </div>
      <div className="text-left ml-5 sm:ml-20 col-span-1 sm:col-span-2">
        <h3 className="text-3xl font-light text-blue-500">{title}</h3>
        <h4 className="text-xl font-light text-green-600">{subtitle}</h4>
        <h5 className="text-lg font-thin">{info}</h5>
        <p className="mt-3 text-lg font-thin">{body}</p>
      </div>
    </div>
  );
};

export default SplitView;
