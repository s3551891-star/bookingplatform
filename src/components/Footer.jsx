import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            StayEase
          </Link>

          <p>
            Find comfortable stays and make every
            journey easier.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/search">
            Explore Stays
          </Link>

          <Link to="/wishlist">
            Wishlist
          </Link>

          <Link to="/bookings">
            My Bookings
          </Link>
        </div>

        <div className="footer-column">
          <h4>Support</h4>

          <Link to="/faq">
            FAQ
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/about">
            About
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 StayEase. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;