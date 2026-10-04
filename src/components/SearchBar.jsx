import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

function SearchBar() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (checkIn) {
      params.set("checkIn", checkIn);
    }

    if (checkOut) {
      params.set("checkOut", checkOut);
    }

    if (guests) {
      params.set("guests", guests);
    }

    navigate(`/search?${params.toString()}`);
  };

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <div className="search-field">
        <label htmlFor="location">
          Where
        </label>

        <input
          id="location"
          type="text"
          placeholder="Search destination"
          value={location}
          onChange={(event) =>
            setLocation(event.target.value)
          }
        />
      </div>

      <div className="search-field">
        <label htmlFor="checkIn">
          Check-in
        </label>

        <input
          id="checkIn"
          type="date"
          value={checkIn}
          onChange={(event) =>
            setCheckIn(event.target.value)
          }
        />
      </div>

      <div className="search-field">
        <label htmlFor="checkOut">
          Check-out
        </label>

        <input
          id="checkOut"
          type="date"
          value={checkOut}
          onChange={(event) =>
            setCheckOut(event.target.value)
          }
        />
      </div>

      <div className="search-field">
        <label htmlFor="guests">
          Guests
        </label>

        <select
          id="guests"
          value={guests}
          onChange={(event) =>
            setGuests(event.target.value)
          }
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
        </select>
      </div>

      <button
        type="submit"
        className="search-button"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;