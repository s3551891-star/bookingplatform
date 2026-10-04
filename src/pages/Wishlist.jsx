import { Link } from "react-router";
import "./Wishlist.css";

const wishlistItems = [
  {
    id: 1,
    title: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    rating: 4.9,
    reviews: 128,
    price: 120,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Modern Downtown Suite",
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: 96,
    price: 165,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Elegant Bosphorus Villa",
    location: "Istanbul, Türkiye",
    rating: 4.9,
    reviews: 154,
    price: 190,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Contemporary London Stay",
    location: "London, United Kingdom",
    rating: 4.7,
    reviews: 82,
    price: 210,
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
  },
];

function Wishlist() {
  return (
    <div className="wishlist-page">
      <section className="wishlist-header">
        <div>
          <span className="wishlist-label">Saved stays</span>

          <h1>Your Wishlist</h1>

          <p>
            Keep track of the places you would love to stay.
          </p>
        </div>

        <Link to="/search" className="wishlist-explore-button">
          Explore stays
        </Link>
      </section>

      <section className="wishlist-content">
        {wishlistItems.length > 0 ? (
          <>
            <div className="wishlist-count">
              {wishlistItems.length} saved{" "}
              {wishlistItems.length === 1 ? "stay" : "stays"}
            </div>

            <div className="wishlist-grid">
              {wishlistItems.map((item) => (
                <article className="wishlist-card" key={item.id}>
                  <div className="wishlist-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="wishlist-image"
                    />

                    <button
                      type="button"
                      className="wishlist-remove"
                      aria-label={`Remove ${item.title} from wishlist`}
                    >
                      ♥
                    </button>
                  </div>

                  <div className="wishlist-card-content">
                    <div className="wishlist-card-top">
                      <h2>{item.title}</h2>

                      <span className="wishlist-rating">
                        ★ {item.rating}
                      </span>
                    </div>

                    <p className="wishlist-location">
                      {item.location}
                    </p>

                    <p className="wishlist-reviews">
                      {item.reviews} reviews
                    </p>

                    <div className="wishlist-card-bottom">
                      <div className="wishlist-price">
                        <strong>${item.price}</strong>
                        <span> / night</span>
                      </div>

                      <Link
                        to={`/listing/${item.id}`}
                        className="wishlist-view-button"
                      >
                        View stay
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="empty-wishlist">
            <div className="empty-wishlist-icon">♡</div>

            <h2>Your wishlist is empty</h2>

            <p>
              Save your favorite stays and they will appear here.
            </p>

            <Link
              to="/search"
              className="wishlist-explore-button"
            >
              Explore stays
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

export default Wishlist;