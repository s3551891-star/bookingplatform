import { Link } from "react-router";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-code">404</div>

        <div className="not-found-content">
          <span className="not-found-badge">Page not found</span>

          <h1>Oops! This stay seems to be missing.</h1>

          <p>
            The page you are looking for may have been moved, removed, or the
            URL may be incorrect. Let&apos;s get you back to StayEase.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="not-found-primary">
              Back to Home
            </Link>

            <Link to="/search" className="not-found-secondary">
              Explore Stays
            </Link>
          </div>

          <div className="not-found-links">
            <Link to="/bookings">My Bookings</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/contact">Contact Support</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;