import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingWidget.css";

function BookingWidget({
  listingId,
  price,
  maxGuests = 4,
}) {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleReserve = () => {
    const params = new URLSearchParams();

    if (checkIn) {
      params.set("checkIn", checkIn);
    }

    if (checkOut) {
      params.set("checkOut", checkOut);
    }

    if (guests) {
      params.set("guests", guests);
    }

    const query = params.toString();

    navigate(`/booking/${listingId}${query ? `?${query}` : ""}`);
  };

  return (
    <aside className="booking-widget">
      <div className="booking-widget-price">
        <strong>${price}</strong>
        <span>/ night</span>
      </div>

      <div className="booking-widget-fields">
        <div className="booking-widget-field">
          <label htmlFor="widget-check-in">Check-in</label>
          <input
            id="widget-check-in"
            type="date"
            value={checkIn}
            min={new Date().toISOString().split("T")[0]}
            onChange={(event) => setCheckIn(event.target.value)}
          />
        </div>

        <div className="booking-widget-field">
          <label htmlFor="widget-check-out">Check-out</label>
          <input
            id="widget-check-out"
            type="date"
            value={checkOut}
            min={
              checkIn || new Date().toISOString().split("T")[0]
            }
            onChange={(event) => setCheckOut(event.target.value)}
          />
        </div>

        <div className="booking-widget-field">
          <label htmlFor="widget-guests">Guests</label>

          <select
            id="widget-guests"
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
          >
            {Array.from(
              { length: maxGuests },
              (_, index) => index + 1
            ).map((number) => (
              <option key={number} value={number}>
                {number} {number === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        className="booking-widget-button"
        onClick={handleReserve}
      >
        Reserve
      </button>

      <p className="booking-widget-note">
        You won't be charged yet.
      </p>
    </aside>
  );
}

export default BookingWidget;