import { Link } from "react-router";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Sufiyan",
    email: "sufiyan@example.com",
    phone: "+92 300 1234567",
    location: "Lahore, Pakistan",
    memberSince: "January 2026",
    bookings: 3,
    wishlist: 4,
  };

  return (
    <div className="profile-page">
      <section className="profile-header">
        <div>
          <span className="profile-label">Account</span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and account activity.
          </p>
        </div>

        <Link to="/settings" className="edit-profile-button">
          Account settings
        </Link>
      </section>

      <div className="profile-layout">
        <main className="profile-main">
          <section className="profile-card profile-overview">
            <div className="profile-avatar">
              S
            </div>

            <div className="profile-overview-info">
              <span className="profile-role">
                Personal Account
              </span>

              <h2>{user.name}</h2>

              <p>{user.email}</p>

              <span className="member-since">
                Member since {user.memberSince}
              </span>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <span className="card-label">Personal details</span>
                <h2>Contact information</h2>
              </div>

              <Link to="/settings" className="small-edit-link">
                Edit
              </Link>
            </div>

            <div className="contact-grid">
              <div className="contact-item">
                <span>Full name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="contact-item">
                <span>Email address</span>
                <strong>{user.email}</strong>
              </div>

              <div className="contact-item">
                <span>Phone number</span>
                <strong>{user.phone}</strong>
              </div>

              <div className="contact-item">
                <span>Location</span>
                <strong>{user.location}</strong>
              </div>
            </div>
          </section>

          <section className="profile-card">
            <div className="profile-card-heading">
              <div>
                <span className="card-label">Activity</span>
                <h2>Your account</h2>
              </div>
            </div>

            <div className="activity-list">
              <Link
                to="/bookings"
                className="activity-item"
              >
                <div className="activity-icon">
                  ✓
                </div>

                <div>
                  <strong>My Bookings</strong>
                  <span>
                    View your upcoming and previous stays.
                  </span>
                </div>

                <span className="activity-arrow">→</span>
              </Link>

              <Link
                to="/wishlist"
                className="activity-item"
              >
                <div className="activity-icon">
                  ♡
                </div>

                <div>
                  <strong>Wishlist</strong>
                  <span>
                    View your saved favorite stays.
                  </span>
                </div>

                <span className="activity-arrow">→</span>
              </Link>

              <Link
                to="/settings"
                className="activity-item"
              >
                <div className="activity-icon">
                  ⚙
                </div>

                <div>
                  <strong>Settings</strong>
                  <span>
                    Manage your account preferences.
                  </span>
                </div>

                <span className="activity-arrow">→</span>
              </Link>
            </div>
          </section>
        </main>

        <aside className="profile-sidebar">
          <section className="profile-card account-summary">
            <span className="card-label">Overview</span>

            <h2>Account summary</h2>

            <div className="summary-stat">
              <div>
                <span>Bookings</span>
                <strong>{user.bookings}</strong>
              </div>

              <span className="summary-icon">✓</span>
            </div>

            <div className="summary-stat">
              <div>
                <span>Saved stays</span>
                <strong>{user.wishlist}</strong>
              </div>

              <span className="summary-icon">♡</span>
            </div>
          </section>

          <section className="profile-card profile-help">
            <div className="help-icon">?</div>

            <h2>Need help?</h2>

            <p>
              Have a question about your account or booking?
            </p>

            <Link to="/contact" className="contact-support-link">
              Contact support →
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Profile;