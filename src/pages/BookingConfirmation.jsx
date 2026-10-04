import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = sessionStorage.getItem("stayEaseBooking");

    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    }
  }, []);

  if (!booking) {
    return (
      <div className="confirmation-empty">
        <div className="confirmation-empty-icon">!</div>

        <h1>No booking found</h1>

        <p>
          We could not find a recent booking in this session.
        </p>

        <Link to="/search" className="confirmation-primary-button">
          Explore stays
        </Link>
      </div>
    );
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="confirmation-success">
          <div className="confirmation-check">✓</div>

          <span className="confirmation-label">
            BOOKING CONFIRMED
          </span>

          <h1>Your stay is booked!</h1>

          <p>
            Thank you, {booking.guestName}. Your reservation has
            been successfully created.
          </p>
        </div>

        <div className="confirmation-layout">
          <section className="confirmation-card">
            <div className="confirmation-card-header">
              <div>
                <span>RESERVATION</span>
                <h2>{booking.bookingId}</h2>
              </div>

              <strong className="confirmation-status">
                {booking.status}
              </strong>
            </div>

            <div className="confirmation-property">
              <img
                src={booking.image}
                alt={booking.listingTitle}
              />

              <div>
                <span>STAYEASE</span>
                <h3>{booking.listingTitle}</h3>
                <p>{booking.location}</p>
              </div>
            </div>

            <div className="confirmation-details-grid">
              <div>
                <span>Guest</span>
                <strong>{booking.guestName}</strong>
              </div>

              <div>
                <span>Guests</span>
                <strong>
                  {booking.guests}{" "}
                  {booking.guests === 1 ? "Guest" : "Guests"}
                </strong>
              </div>

              <div>
                <span>Check-in</span>
                <strong>{booking.checkIn}</strong>
              </div>

              <div>
                <span>Check-out</span>
                <strong>{booking.checkOut}</strong>
              </div>

              <div>
                <span>Duration</span>
                <strong>
                  {booking.nights}{" "}
                  {booking.nights === 1 ? "night" : "nights"}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{booking.email}</strong>
              </div>
            </div>

            {booking.specialRequest && (
              <div className="confirmation-request">
                <span>Special request</span>
                <p>{booking.specialRequest}</p>
              </div>
            )}
          </section>

          <aside className="confirmation-summary">
            <h2>Payment summary</h2>

            <div className="confirmation-price-row">
              <span>
                ${booking.pricePerNight} × {booking.nights}{" "}
                {booking.nights === 1 ? "night" : "nights"}
              </span>

              <strong>
                ${booking.pricePerNight * booking.nights}
              </strong>
            </div>

            <div className="confirmation-price-row">
              <span>Service fee</span>
              <strong>${booking.serviceFee}</strong>
            </div>

            <div className="confirmation-total">
              <span>Total</span>
              <strong>${booking.total}</strong>
            </div>

            <p className="confirmation-demo-note">
              This is a frontend demo. No real payment was
              processed.
            </p>
          </aside>
        </div>

        <div className="confirmation-actions">
          <Link
            to="/bookings"
            className="confirmation-primary-button"
          >
            View My Bookings
          </Link>

          <Link
            to="/search"
            className="confirmation-secondary-button"
          >
            Explore More Stays
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;