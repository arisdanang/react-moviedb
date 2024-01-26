import PropTypes from "prop-types";

const Card = ({ title, imageUrl, desc, year }) => {
  return (
    <div className="max-w-sm border rounded-md p-4">
      <img
        src={`https://image.tmdb.org/t/p/original/${imageUrl}`}
        alt="poster"
        className="w-full"
        loading="lazy"
      />
      <h1>{title}</h1>
      <h2>{year}</h2>
      <p>{desc}</p>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 border rounded-md">more Info</button>
        <button className="px-4 py-2 border rounded-md">Add to list</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Card;
