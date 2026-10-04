import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="StayEase Home"
        >
          StayEase
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <Link to="/wishlist" className="navbar-wishlist">
            ♡ Wishlist
          </Link>

          <Link to="/login" className="navbar-login">
            Login
          </Link>

          <Link to="/register" className="navbar-signup">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <NavLink
            to="/"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Explore
          </NavLink>

          <NavLink
            to="/about"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink
            to="/wishlist"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            ♡ Wishlist
          </NavLink>

          <NavLink
            to="/login"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="mobile-nav-link mobile-signup-link"
            onClick={closeMenu}
          >
            Sign up
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;