import { Link } from "react-router-dom";

import "./ListingCard.css";

function ListingCard({
  id,
  image,
  title,
  location,
  rating,
  reviews,
  price,
}) {
  return (
    <article className="listing-card">
      <div className="listing-card-image-wrapper">
        <img
          src={image}
          alt={title}
          className="listing-card-image"
        />

        <button
          type="button"
          className="listing-card-wishlist"
          aria-label={`Add ${title} to wishlist`}
        >
          ♡
        </button>
      </div>

      <div className="listing-card-content">
        <div className="listing-card-title-row">
          <h3>{title}</h3>

          <div className="listing-card-rating">
            <span>★</span>
            <strong>{rating}</strong>
          </div>
        </div>

        <p className="listing-card-location">
          {location}
        </p>

        <p className="listing-card-reviews">
          {reviews} reviews
        </p>

        <div className="listing-card-bottom">
          <div className="listing-card-price">
            <strong>${price}</strong>
            <span>/ night</span>
          </div>

          <Link
            to={`/listing/${id}`}
            className="listing-card-link"
          >
            View Stay
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ListingCard;