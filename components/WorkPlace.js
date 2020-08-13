const WorkPlace = ({ place, image, years, location, description }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      <div className="text-center sm:text-right pb-5 sm:pb-0">
        <img src={image} className="rounded inline-block" />
      </div>
      <div className="text-left ml-20 col-span-1 sm:col-span-2">
        <h3 className="text-3xl font-light text-blue-500">{place}</h3>
        <h4 className="text-xl font-light text-green-600">{years}</h4>
        <h5 className="text-lg">{location}</h5>
        <p className="mt-3 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default WorkPlace;
