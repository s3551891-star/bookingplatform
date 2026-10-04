import { Link, useLocation, useParams } from "react-router-dom";
import "./BookingDetails.css";

const demoBookings = [
  {
    bookingId: "SE-100241",
    listingId: 1,
    listingTitle: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    checkIn: "2026-10-10",
    checkOut: "2026-10-13",
    guests: 2,
    nights: 3,
    pricePerNight: 120,
    serviceFee: 36,
    total: 396,
    guestName: "Sufiyan",
    email: "sufiyan@example.com",
    phone: "+92 300 1234567",
    status: "Confirmed",
  },
  {
    bookingId: "SE-100242",
    listingId: 2,
    listingTitle: "Modern Downtown Suite",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    checkIn: "2026-11-05",
    checkOut: "2026-11-08",
    guests: 2,
    nights: 3,
    pricePerNight: 165,
    serviceFee: 49.5,
    total: 544.5,
    guestName: "Sufiyan",
    email: "sufiyan@example.com",
    phone: "+92 300 1234567",
    status: "Confirmed",
  },
  {
    bookingId: "SE-100243",
    listingId: 3,
    listingTitle: "Elegant Bosphorus Villa",
    location: "Istanbul, Türkiye",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    checkIn: "2026-12-15",
    checkOut: "2026-12-18",
    guests: 4,
    nights: 3,
    pricePerNight: 190,
    serviceFee: 57,
    total: 627,
    guestName: "Sufiyan",
    email: "sufiyan@example.com",
    phone: "+92 300 1234567",
    status: "Completed",
  },
];

function BookingDetails() {
  const { id } = useParams();
  const location = useLocation();

  const bookingFromState = location.state?.booking;

  let booking = bookingFromState;

  if (!booking) {
    const savedBooking = sessionStorage.getItem(
      "stayEaseBooking"
    );

    if (savedBooking) {
      try {
        const parsedBooking = JSON.parse(savedBooking);

        if (parsedBooking.bookingId === id) {
          booking = parsedBooking;
        }
      } catch {
        console.error("Unable to read saved booking.");
      }
    }
  }

  if (!booking) {
    booking = demoBookings.find(
      (item) => item.bookingId === id
    );
  }

  if (!booking) {
    return (
      <div className="booking-details-not-found">
        <h1>Booking not found</h1>

        <p>
          We could not find the booking you are looking for.
        </p>

        <Link to="/bookings">
          ← Back to My Bookings
        </Link>
      </div>
    );
  }

  return (
    <div className="booking-details-page">
      <div className="booking-details-container">
        <Link
          to="/bookings"
          className="booking-details-back"
        >
          ← Back to My Bookings
        </Link>

        <div className="booking-details-header">
          <div>
            <span>RESERVATION</span>

            <h1>Booking Details</h1>

            <p>
              Reservation #{booking.bookingId}
            </p>
          </div>

          <span
            className={`booking-details-status ${
              booking.status === "Completed"
                ? "completed"
                : ""
            }`}
          >
            {booking.status}
          </span>
        </div>

        <div className="booking-details-layout">
          <main className="booking-details-main">
            <section className="booking-details-property">
              <img
                src={booking.image}
                alt={booking.listingTitle}
              />

              <div>
                <span>STAYEASE</span>

                <h2>{booking.listingTitle}</h2>

                <p>{booking.location}</p>

                <Link
                  to={`/listing/${booking.listingId}`}
                  className="booking-details-property-link"
                >
                  View property
                </Link>
              </div>
            </section>

            <section className="booking-details-section">
              <h2>Stay information</h2>

              <div className="booking-details-grid">
                <div>
                  <span>Check-in</span>
                  <strong>{booking.checkIn}</strong>
                </div>

                <div>
                  <span>Check-out</span>
                  <strong>{booking.checkOut}</strong>
                </div>

                <div>
                  <span>Guests</span>
                  <strong>
                    {booking.guests}{" "}
                    {booking.guests === 1
                      ? "Guest"
                      : "Guests"}
                  </strong>
                </div>

                <div>
                  <span>Duration</span>
                  <strong>
                    {booking.nights}{" "}
                    {booking.nights === 1
                      ? "night"
                      : "nights"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="booking-details-section">
              <h2>Guest information</h2>

              <div className="booking-details-grid">
                <div>
                  <span>Full name</span>
                  <strong>
                    {booking.guestName || "Sufiyan"}
                  </strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    {booking.email || "Not provided"}
                  </strong>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>
                    {booking.phone || "Not provided"}
                  </strong>
                </div>
              </div>
            </section>

            {booking.specialRequest && (
              <section className="booking-details-section">
                <h2>Special request</h2>

                <p className="booking-special-request">
                  {booking.specialRequest}
                </p>
              </section>
            )}
          </main>

          <aside className="booking-details-summary">
            <h2>Price summary</h2>

            <div className="booking-price-row">
              <span>
                ${booking.pricePerNight} ×{" "}
                {booking.nights}{" "}
                {booking.nights === 1
                  ? "night"
                  : "nights"}
              </span>

              <strong>
                $
                {(
                  booking.pricePerNight *
                  booking.nights
                ).toFixed(2)}
              </strong>
            </div>

            <div className="booking-price-row">
              <span>Service fee</span>

              <strong>
                ${Number(booking.serviceFee || 0).toFixed(2)}
              </strong>
            </div>

            <div className="booking-price-total">
              <span>Total</span>

              <strong>
                ${Number(booking.total).toFixed(2)}
              </strong>
            </div>

            <div className="booking-summary-note">
              <span>✓</span>
              <p>
                Your reservation is confirmed. This is a
                frontend-only demo.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;