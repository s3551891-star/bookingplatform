import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import ListingCard from "../components/ListingCard";
import "./Home.css";

const destinations = [
  {
    name: "Lahore",
    country: "Pakistan",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80",
    stays: 124,
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
    stays: 186,
  },
  {
    name: "Istanbul",
    country: "Türkiye",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
    stays: 158,
  },
  {
    name: "London",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    stays: 215,
  },
];

const featuredListings = [
  {
    id: 1,
    title: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    rating: 4.9,
    reviews: 128,
    price: 120,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Modern Downtown Suite",
    location: "Dubai, UAE",
    rating: 4.8,
    reviews: 96,
    price: 165,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Elegant Bosphorus Villa",
    location: "Istanbul, Türkiye",
    rating: 4.9,
    reviews: 74,
    price: 190,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-eyebrow">TRAVEL • STAY • EXPERIENCE</p>

            <h1>Find a place you'll love to stay.</h1>

            <p className="hero-description">
              Discover comfortable stays, beautiful destinations, and memorable
              experiences wherever your journey takes you.
            </p>

            <SearchBar />
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="home-section destinations-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">EXPLORE</span>
            <h2>Popular destinations</h2>
          </div>

          <p>
            Discover some of the most loved destinations and find your perfect
            stay.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              country={destination.country}
              image={destination.image}
              stays={destination.stays}
            />
          ))}
        </div>
      </section>

      {/* Featured stays */}
      <section className="home-section featured-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">STAYEASE PICKS</span>
            <h2>Featured stays</h2>
          </div>

          <p>
            Handpicked stays designed to make your next trip comfortable and
            memorable.
          </p>
        </div>

        <div className="listings-grid">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="home-cta-content">
          <span className="section-eyebrow">YOUR NEXT JOURNEY</span>

          <h2>Ready to find your next stay?</h2>

          <p>
            Explore destinations, compare stays, and book a place that feels
            right for you.
          </p>

          <a href="/search" className="home-cta-button">
            Explore Stays
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;