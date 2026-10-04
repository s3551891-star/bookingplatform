import "./FilterSidebar.css";

function FilterSidebar({
  propertyType,
  setPropertyType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
  onClear,
}) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-sidebar-header">
        <div>
          <span className="filter-sidebar-label">FILTERS</span>
          <h2>Refine your search</h2>
        </div>

        <button
          type="button"
          className="filter-clear-button"
          onClick={onClear}
        >
          Clear
        </button>
      </div>

      <div className="filter-section">
        <h3>Property type</h3>

        <label className="filter-option">
          <input
            type="radio"
            name="propertyType"
            value=""
            checked={propertyType === ""}
            onChange={(event) =>
              setPropertyType(event.target.value)
            }
          />
          <span>All properties</span>
        </label>

        <label className="filter-option">
          <input
            type="radio"
            name="propertyType"
            value="Apartment"
            checked={propertyType === "Apartment"}
            onChange={(event) =>
              setPropertyType(event.target.value)
            }
          />
          <span>Apartment</span>
        </label>

        <label className="filter-option">
          <input
            type="radio"
            name="propertyType"
            value="Hotel"
            checked={propertyType === "Hotel"}
            onChange={(event) =>
              setPropertyType(event.target.value)
            }
          />
          <span>Hotel</span>
        </label>

        <label className="filter-option">
          <input
            type="radio"
            name="propertyType"
            value="Villa"
            checked={propertyType === "Villa"}
            onChange={(event) =>
              setPropertyType(event.target.value)
            }
          />
          <span>Villa</span>
        </label>

        <label className="filter-option">
          <input
            type="radio"
            name="propertyType"
            value="Resort"
            checked={propertyType === "Resort"}
            onChange={(event) =>
              setPropertyType(event.target.value)
            }
          />
          <span>Resort</span>
        </label>
      </div>

      <div className="filter-section">
        <h3>Price per night</h3>

        <div className="filter-price-grid">
          <div className="filter-input-group">
            <label htmlFor="min-price">Minimum</label>
            <input
              id="min-price"
              type="number"
              min="0"
              placeholder="$0"
              value={minPrice}
              onChange={(event) =>
                setMinPrice(event.target.value)
              }
            />
          </div>

          <div className="filter-input-group">
            <label htmlFor="max-price">Maximum</label>
            <input
              id="max-price"
              type="number"
              min="0"
              placeholder="$500+"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(event.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3>Guest rating</h3>

        {[4.5, 4, 3.5].map((rating) => (
          <label className="filter-option" key={rating}>
            <input
              type="radio"
              name="minRating"
              value={rating}
              checked={Number(minRating) === rating}
              onChange={(event) =>
                setMinRating(event.target.value)
              }
            />
            <span>
              {rating}+ <span className="filter-stars">★</span>
            </span>
          </label>
        ))}

        {minRating && (
          <button
            type="button"
            className="clear-rating"
            onClick={() => setMinRating("")}
          >
            Remove rating filter
          </button>
        )}
      </div>
    </aside>
  );
}

export default FilterSidebar;