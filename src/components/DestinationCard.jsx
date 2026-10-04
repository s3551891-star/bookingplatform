import { Link } from "react-router-dom";

import "./DestinationCard.css";

function DestinationCard({
  name,
  country,
  image,
  stays,
}) {
  return (
    <Link
      to={`/search?location=${encodeURIComponent(name)}`}
      className="destination-card"
    >
      <img
        src={image}
        alt={name}
        className="destination-card-image"
      />

      <div className="destination-card-overlay">
        <div>
          <p className="destination-card-country">
            {country}
          </p>

          <h3>{name}</h3>

          <span>
            {stays} stays
          </span>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;