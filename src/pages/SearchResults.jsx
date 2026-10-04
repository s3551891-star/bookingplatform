import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import ListingCard from "../components/ListingCard";
import FilterSidebar from "../components/FilterSidebar";

import "./SearchResults.css";

const listings = [
  {
    id: 1,
    title: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    type: "Apartment",
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
    type: "Hotel",
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
    type: "Villa",
    rating: 4.9,
    reviews: 74,
    price: 190,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Contemporary London Stay",
    location: "London, UK",
    type: "Hotel",
    rating: 4.7,
    reviews: 112,
    price: 210,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Peaceful Garden Villa",
    location: "Lahore, Pakistan",
    type: "Villa",
    rating: 4.8,
    reviews: 63,
    price: 145,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Luxury Resort Escape",
    location: "Dubai, UAE",
    type: "Resort",
    rating: 4.9,
    reviews: 154,
    price: 260,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
];

function SearchResults() {
  const [searchParams] = useSearchParams();

  const locationQuery = searchParams.get("location") || "";

  const [propertyType, setPropertyType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [sortBy, setSortBy] = useState("recommended");

  const filteredListings = useMemo(() => {
    let results = listings.filter((listing) => {
      const locationMatch = locationQuery
        ? `${listing.title} ${listing.location}`
            .toLowerCase()
            .includes(locationQuery.toLowerCase())
        : true;

      const typeMatch = propertyType
        ? listing.type === propertyType
        : true;

      const minimumPrice = minPrice
        ? Number(minPrice)
        : 0;

      const maximumPrice = maxPrice
        ? Number(maxPrice)
        : Infinity;

      const priceMatch =
        listing.price >= minimumPrice &&
        listing.price <= maximumPrice;

      const ratingMatch = minRating
        ? listing.rating >= Number(minRating)
        : true;

      return (
        locationMatch &&
        typeMatch &&
        priceMatch &&
        ratingMatch
      );
    });

    results = [...results].sort((a, b) => {
      if (sortBy === "price-low") {
        return a.price - b.price;
      }

      if (sortBy === "price-high") {
        return b.price - a.price;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return b.rating * b.reviews - a.rating * a.reviews;
    });

    return results;
  }, [
    locationQuery,
    propertyType,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
  ]);

  const handleClearFilters = () => {
    setPropertyType("");
    setMinPrice("");
    setMaxPrice("");
    setMinRating("");
    setSortBy("recommended");
  };

  return (
    <div className="search-results-page">
      <div className="search-results-container">
        <div className="search-results-header">
          <div>
            <span className="search-results-label">
              STAYEASE EXPLORE
            </span>

            <h1>
              {locationQuery
                ? `Stays in ${locationQuery}`
                : "Explore stays"}
            </h1>

            <p>
              Discover comfortable places for your next journey.
            </p>
          </div>

          <Link
            to="/"
            className="search-results-home-link"
          >
            ← Back home
          </Link>
        </div>

        <div className="search-results-layout">
          <div className="search-filter-column">
            <FilterSidebar
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              minRating={minRating}
              setMinRating={setMinRating}
              onClear={handleClearFilters}
            />
          </div>

          <main className="search-results-main">
            <div className="search-results-toolbar">
              <p>
                <strong>{filteredListings.length}</strong>{" "}
                {filteredListings.length === 1
                  ? "stay"
                  : "stays"}{" "}
                found
              </p>

              <div className="sort-control">
                <label htmlFor="sortBy">Sort by</label>

                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(event) =>
                    setSortBy(event.target.value)
                  }
                >
                  <option value="recommended">
                    Recommended
                  </option>
                  <option value="price-low">
                    Price: Low to High
                  </option>
                  <option value="price-high">
                    Price: High to Low
                  </option>
                  <option value="rating">
                    Guest Rating
                  </option>
                </select>
              </div>
            </div>

            {filteredListings.length > 0 ? (
              <div className="search-results-grid">
                {filteredListings.map((listing) => (
                  <ListingCard
                    key={listing.id}
                    id={listing.id}
                    image={listing.image}
                    title={listing.title}
                    location={listing.location}
                    rating={listing.rating}
                    reviews={listing.reviews}
                    price={listing.price}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">⌕</div>

                <h2>No stays found</h2>

                <p>
                  Try changing your location or removing some
                  filters.
                </p>

                <button
                  type="button"
                  className="browse-all-button"
                  onClick={handleClearFilters}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;