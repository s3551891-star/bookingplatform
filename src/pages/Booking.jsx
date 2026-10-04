import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Booking.css";

const listings = {
  1: {
    title: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    price: 120,
    guests: 4,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },

  2: {
    title: "Modern Downtown Suite",
    location: "Dubai, UAE",
    price: 165,
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },

  3: {
    title: "Elegant Bosphorus Villa",
    location: "Istanbul, Türkiye",
    price: 190,
    guests: 6,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
};

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const listing = listings[id];

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [error, setError] = useState("");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 0;
    }

    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);

    const difference = end - start;

    if (difference <= 0) {
      return 0;
    }

    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  const priceTotal = listing ? listing.price * nights : 0;
  const serviceFee = Math.round(priceTotal * 0.1);
  const total = priceTotal + serviceFee;

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!guestName.trim() || !email.trim() || !phone.trim()) {
      setError("Please complete your guest information.");
      return;
    }

    if (!checkIn || !checkOut) {
      setError("Please select your check-in and check-out dates.");
      return;
    }

    if (nights <= 0) {
      setError("Check-out date must be after the check-in date.");
      return;
    }

    if (Number(guests) > listing.guests) {
      setError(`This property allows up to ${listing.guests} guests.`);
      return;
    }

    const booking = {
      listingId: id,
      listingTitle: listing.title,
      location: listing.location,
      image: listing.image,
      guestName,
      email,
      phone,
      checkIn,
      checkOut,
      guests: Number(guests),
      nights,
      pricePerNight: listing.price,
      serviceFee,
      total,
      specialRequest,
      status: "Confirmed",
      bookingId: `SE-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    sessionStorage.setItem("stayEaseBooking", JSON.stringify(booking));

    navigate("/booking-confirmation");
  };

  if (!listing) {
    return (
      <div className="booking-not-found">
        <h1>Property not found</h1>
        <Link to="/search">Back to Explore</Link>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-container">
        {/* Header */}
        <div className="booking-page-header">
          <Link to={`/listing/${id}`} className="booking-back-link">
            ← Back to property
          </Link>

          <h1>Complete your booking</h1>

          <p>
            Reserve your stay at {listing.title}.
          </p>
        </div>

        <div className="booking-layout">
          {/* Form */}
          <form className="booking-form" onSubmit={handleSubmit}>
            {/* Guest information */}
            <section className="booking-form-section">
              <div className="booking-section-title">
                <span>01</span>
                <div>
                  <h2>Guest information</h2>
                  <p>Tell us who will be staying.</p>
                </div>
              </div>

              <div className="booking-fields-grid">
                <div className="booking-field full-width">
                  <label htmlFor="guestName">Full name</label>
                  <input
                    id="guestName"
                    type="text"
                    placeholder="Enter your full name"
                    value={guestName}
                    onChange={(event) =>
                      setGuestName(event.target.value)
                    }
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                  />
                </div>
              </div>
            </section>

            {/* Dates */}
            <section className="booking-form-section">
              <div className="booking-section-title">
                <span>02</span>
                <div>
                  <h2>Your stay</h2>
                  <p>Select your dates and number of guests.</p>
                </div>
              </div>

              <div className="booking-fields-grid">
                <div className="booking-field">
                  <label htmlFor="checkIn">Check-in</label>
                  <input
                    id="checkIn"
                    type="date"
                    value={checkIn}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(event) =>
                      setCheckIn(event.target.value)
                    }
                  />
                </div>

                <div className="booking-field">
                  <label htmlFor="checkOut">Check-out</label>
                  <input
                    id="checkOut"
                    type="date"
                    value={checkOut}
                    min={
                      checkIn ||
                      new Date().toISOString().split("T")[0]
                    }
                    onChange={(event) =>
                      setCheckOut(event.target.value)
                    }
                  />
                </div>

                <div className="booking-field full-width">
                  <label htmlFor="guests">Guests</label>

                  <select
                    id="guests"
                    value={guests}
                    onChange={(event) =>
                      setGuests(event.target.value)
                    }
                  >
                    {Array.from(
                      { length: listing.guests },
                      (_, index) => index + 1
                    ).map((number) => (
                      <option value={number} key={number}>
                        {number} {number === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Special request */}
            <section className="booking-form-section">
              <div className="booking-section-title">
                <span>03</span>
                <div>
                  <h2>Special requests</h2>
                  <p>Optional information for your host.</p>
                </div>
              </div>

              <div className="booking-field">
                <label htmlFor="specialRequest">
                  Special request
                </label>

                <textarea
                  id="specialRequest"
                  rows="5"
                  placeholder="Anything you'd like your host to know?"
                  value={specialRequest}
                  onChange={(event) =>
                    setSpecialRequest(event.target.value)
                  }
                />
              </div>
            </section>

            {error && (
              <div className="booking-error">
                {error}
              </div>
            )}

            <button type="submit" className="confirm-booking-button">
              Confirm Booking
            </button>

            <p className="booking-secure-note">
              This is a frontend demo. No real payment will be processed.
            </p>
          </form>

          {/* Summary */}
          <aside className="booking-summary-card">
            <img
              src={listing.image}
              alt={listing.title}
              className="booking-summary-image"
            />

            <div className="booking-summary-content">
              <span className="booking-summary-type">
                STAYEASE
              </span>

              <h2>{listing.title}</h2>

              <p>{listing.location}</p>

              <div className="booking-summary-divider" />

              <div className="booking-summary-dates">
                <div>
                  <span>Check-in</span>
                  <strong>
                    {checkIn || "Select date"}
                  </strong>
                </div>

                <div>
                  <span>Check-out</span>
                  <strong>
                    {checkOut || "Select date"}
                  </strong>
                </div>

                <div>
                  <span>Guests</span>
                  <strong>
                    {guests} {Number(guests) === 1 ? "Guest" : "Guests"}
                  </strong>
                </div>
              </div>

              <div className="booking-summary-divider" />

              <div className="summary-price-row">
                <span>
                  ${listing.price} × {nights || 0}{" "}
                  {nights === 1 ? "night" : "nights"}
                </span>

                <strong>${priceTotal}</strong>
              </div>

              <div className="summary-price-row">
                <span>Service fee</span>
                <strong>${serviceFee}</strong>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>${total}</strong>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Booking;