import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MyBookings.css";

const demoBookings = [
  {
    bookingId: "SE-100241",
    listingId: 1,
    listingTitle: "Luxury City Apartment",
    location: "Lahore, Pakistan",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    checkIn: "2026-10-10",
    checkOut: "2026-10-13",
    guests: 2,
    nights: 3,
    total: 396,
    status: "Confirmed",
  },
  {
    bookingId: "SE-100242",
    listingId: 2,
    listingTitle: "Modern Downtown Suite",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80",
    checkIn: "2026-11-05",
    checkOut: "2026-11-08",
    guests: 2,
    nights: 3,
    total: 544.5,
    status: "Confirmed",
  },
  {
    bookingId: "SE-100243",
    listingId: 3,
    listingTitle: "Elegant Bosphorus Villa",
    location: "Istanbul, Türkiye",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
    checkIn: "2026-12-15",
    checkOut: "2026-12-18",
    guests: 4,
    nights: 3,
    total: 627,
    status: "Completed",
  },
];

function MyBookings() {
  const [bookings, setBookings] = useState(demoBookings);

  useEffect(() => {
    const savedBooking = sessionStorage.getItem(
      "stayEaseBooking"
    );

    if (!savedBooking) {
      return;
    }

    try {
      const booking = JSON.parse(savedBooking);

      setBookings((currentBookings) => {
        const alreadyExists = currentBookings.some(
          (item) => item.bookingId === booking.bookingId
        );

        if (alreadyExists) {
          return currentBookings;
        }

        return [booking, ...currentBookings];
      });
    } catch {
      console.error("Unable to read saved booking.");
    }
  }, []);

  return (
    <div className="my-bookings-page">
      <div className="my-bookings-container">
        <div className="my-bookings-header">
          <div>
            <span className="my-bookings-label">
              YOUR TRIPS
            </span>

            <h1>My Bookings</h1>

            <p>
              Manage your upcoming and previous StayEase
              reservations.
            </p>
          </div>

          <Link
            to="/search"
            className="my-bookings-explore-button"
          >
            Explore stays
          </Link>
        </div>

        <div className="my-bookings-list">
          {bookings.map((booking) => (
            <article
              className="booking-history-card"
              key={booking.bookingId}
            >
              <img
                src={booking.image}
                alt={booking.listingTitle}
              />

              <div className="booking-history-content">
                <div className="booking-history-top">
                  <div>
                    <span className="booking-history-label">
                      {booking.bookingId}
                    </span>

                    <h2>{booking.listingTitle}</h2>

                    <p>{booking.location}</p>
                  </div>

                  <span
                    className={`booking-history-status ${
                      booking.status === "Completed"
                        ? "completed"
                        : ""
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>

                <div className="booking-history-details">
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
                    <span>Total</span>
                    <strong>${booking.total}</strong>
                  </div>
                </div>

                <div className="booking-history-footer">
                  <span>
                    {booking.nights}{" "}
                    {booking.nights === 1
                      ? "night"
                      : "nights"}
                  </span>

                  <Link
                    to={`/bookings/${booking.bookingId}`}
                    state={{ booking }}
                    className="booking-history-view"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;