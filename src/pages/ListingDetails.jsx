import { Link, useParams } from "react-router-dom";
import BookingWidget from "../components/BookingWidget";
import "./ListingDetails.css";

const listings = {
  1: {
    title: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    type: "Apartment",
    rating: 4.9,
    reviews: 128,
    price: 120,
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    host: "Ayesha",
    hostYears: 5,
    description:
      "A stylish and comfortable city apartment in Lahore, perfect for business trips, family stays, and weekend getaways. The apartment offers modern interiors, a peaceful environment, and convenient access to major areas of the city.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "Air conditioning",
      "Kitchen",
      "Free parking",
      "TV",
      "Workspace",
    ],
  },

  2: {
    title: "Modern Downtown Suite",
    location: "Dubai, UAE",
    type: "Hotel",
    rating: 4.8,
    reviews: 96,
    price: 165,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    host: "Omar",
    hostYears: 7,
    description:
      "A modern downtown suite with elegant interiors and easy access to Dubai's major attractions. Enjoy a comfortable stay with premium amenities and a beautiful city atmosphere.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "Swimming pool",
      "Gym",
      "Air conditioning",
      "Breakfast",
      "Smart TV",
    ],
  },

  3: {
    title: "Elegant Bosphorus Villa",
    location: "Istanbul, Türkiye",
    type: "Villa",
    rating: 4.9,
    reviews: 74,
    price: 190,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    host: "Emre",
    hostYears: 8,
    description:
      "A beautiful villa overlooking the Bosphorus, combining traditional Turkish character with modern comfort. Ideal for families and groups looking for a memorable Istanbul experience.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "Sea view",
      "Private garden",
      "Kitchen",
      "Air conditioning",
      "Free parking",
    ],
  },
};

function ListingDetails() {
  const { id } = useParams();
  const listing = listings[id];

  if (!listing) {
    return (
      <div className="listing-not-found">
        <h1>Property not found</h1>
        <p>The stay you are looking for does not exist.</p>
        <Link to="/search">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="listing-details-page">
      <div className="listing-details-container">
        <div className="listing-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/search">Explore</Link>
          <span>/</span>
          <span>{listing.title}</span>
        </div>

        <div className="listing-heading">
          <div>
            <span className="listing-type">{listing.type}</span>

            <h1>{listing.title}</h1>

            <div className="listing-meta">
              <span>★ {listing.rating}</span>
              <span>{listing.reviews} reviews</span>
              <span>{listing.location}</span>
            </div>
          </div>

          <button
            type="button"
            className="listing-share-button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: listing.title,
                  text: `Check out ${listing.title} on StayEase.`,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard?.writeText(window.location.href);
                alert("Listing link copied.");
              }
            }}
          >
            ↗ Share
          </button>
        </div>

        <div className="listing-gallery">
          <div className="listing-gallery-main">
            <img
              src={listing.images[0]}
              alt={listing.title}
            />
          </div>

          <div className="listing-gallery-side">
            {listing.images.slice(1).map((image, index) => (
              <div className="listing-gallery-small" key={image}>
                <img
                  src={image}
                  alt={`${listing.title} ${index + 2}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="listing-main-layout">
          <main className="listing-content">
            <section className="listing-overview">
              <div>
                <strong>{listing.guests}</strong>
                <span>Guests</span>
              </div>

              <div>
                <strong>{listing.bedrooms}</strong>
                <span>Bedrooms</span>
              </div>

              <div>
                <strong>{listing.beds}</strong>
                <span>Beds</span>
              </div>

              <div>
                <strong>{listing.bathrooms}</strong>
                <span>Bathrooms</span>
              </div>
            </section>

            <section className="listing-section">
              <h2>About this stay</h2>
              <p>{listing.description}</p>
            </section>

            <section className="listing-section">
              <h2>What this place offers</h2>

              <div className="amenities-grid">
                {listing.amenities.map((amenity) => (
                  <div className="amenity-item" key={amenity}>
                    <span>✓</span>
                    <p>{amenity}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="listing-section">
              <h2>Your host</h2>

              <div className="host-card">
                <div className="host-avatar">
                  {listing.host.charAt(0)}
                </div>

                <div>
                  <h3>{listing.host}</h3>
                  <p>
                    Hosting on StayEase for {listing.hostYears} years
                  </p>
                </div>
              </div>
            </section>

            <section className="listing-section">
              <div className="reviews-heading">
                <h2>Guest reviews</h2>

                <span>
                  ★ {listing.rating} · {listing.reviews} reviews
                </span>
              </div>

              <div className="review-preview">
                <div className="review-avatar">M</div>

                <div>
                  <h3>Muhammad</h3>
                  <span>★★★★★</span>
                  <p>
                    "A wonderful stay with a great location and
                    excellent facilities. Everything was clean and
                    comfortable."
                  </p>
                </div>
              </div>
            </section>
          </main>

          <aside className="listing-booking-column">
            <BookingWidget
              listingId={id}
              price={listing.price}
              maxGuests={listing.guests}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;