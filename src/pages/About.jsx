import { Link } from "react-router";
import "./About.css";

function About() {
  return (
    <section className="about-page">
      {/* Hero */}
      <div className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-badge">About StayEase</span>

            <h1>
              Making every stay
              <span> feel easier.</span>
            </h1>

            <p>
              StayEase is a modern booking platform designed to make
              discovering, comparing, and managing stays simple and
              comfortable.
            </p>

            <div className="about-hero-actions">
              <Link to="/search" className="about-primary-btn">
                Explore stays
              </Link>

              <Link to="/contact" className="about-secondary-btn">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="about-section">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <span className="section-label">Our mission</span>

              <h2>Travel planning should feel simple.</h2>

              <p>
                Finding the right place to stay can sometimes feel
                complicated. StayEase brings the essential parts of the
                booking journey together in one clean experience.
              </p>

              <p>
                From discovering destinations to checking property details
                and managing reservations, our goal is to keep the experience
                clear, convenient, and easy to navigate.
              </p>

              <Link to="/search" className="about-text-link">
                Start exploring →
              </Link>
            </div>

            <div className="about-story-card">
              <div className="story-card-icon">✦</div>

              <h3>Designed around travelers</h3>

              <p>
                Every part of StayEase is designed with a simple idea:
                spending less time managing a booking and more time enjoying
                the journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="about-values-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="section-label">What we value</span>

            <h2>Built around a better experience.</h2>

            <p>
              We focus on the principles that make a booking platform useful,
              trustworthy, and enjoyable to use.
            </p>
          </div>

          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="value-icon">◎</div>

              <h3>Simplicity</h3>

              <p>
                Clear navigation and straightforward experiences help you
                find what you need without unnecessary complexity.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-icon">◇</div>

              <h3>Comfort</h3>

              <p>
                We want the digital booking experience to feel as comfortable
                and welcoming as the stays people discover.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-icon">✓</div>

              <h3>Clarity</h3>

              <p>
                Important property, booking, and pricing information should
                be easy to understand before making a decision.
              </p>
            </div>

            <div className="about-value-card">
              <div className="value-icon">♡</div>

              <h3>People first</h3>

              <p>
                Every feature starts with the needs of travelers and the
                experience they expect from a modern platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats-section">
        <div className="about-container">
          <div className="about-stats">
            <div className="about-stat">
              <strong>50+</strong>
              <span>Destinations</span>
            </div>

            <div className="about-stat">
              <strong>500+</strong>
              <span>Stays listed</span>
            </div>

            <div className="about-stat">
              <strong>10K+</strong>
              <span>Travelers</span>
            </div>

            <div className="about-stat">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta-section">
        <div className="about-container">
          <div className="about-cta">
            <div>
              <span className="about-cta-label">Ready to explore?</span>

              <h2>Find your next stay with StayEase.</h2>

              <p>
                Discover comfortable places and start planning your next
                journey.
              </p>
            </div>

            <Link to="/search" className="about-cta-btn">
              Explore stays →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;