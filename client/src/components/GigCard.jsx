import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const GigCard = ({ gig }) => {
  return (
    <Link
      to={`/gig/${gig._id}`}
      className="border p-4 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col gap-4"
    >
      <img
        className="h-48 w-full object-cover rounded-lg"
        src={gig.cover}
        alt={`${gig.title} cover`}
      />

      <div className="flex gap-3 items-center">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={gig.user.photo}
          alt={`${gig.user.username} profile`}
        />
        <p className="text-gray-700">
          <span className="font-semibold">{gig.user.username} </span>
          tarafından
        </p>
      </div>

      <p className="text-lg font-semibold text-gray-800">{gig.title}</p>

      <p className="flex items-center gap-1 text-yellow-500">
        <FaStar />
        <span className="font-bold text-lg">{gig.avgRating}</span>
        <span className="text-gray-600">({gig.reviewCount})</span>
      </p>

      <p className="text-xl font-semibold text-gray-900">${gig.price}</p>
    </Link>
  );
};

export default GigCard;
