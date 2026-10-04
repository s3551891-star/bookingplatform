import { useState } from "react";
import { Link } from "react-router";
import "./Settings.css";

function Settings() {
  const [notifications, setNotifications] = useState({
    bookingUpdates: true,
    promotions: false,
    recommendations: true,
    emailUpdates: true,
  });

  const [preferences, setPreferences] = useState({
    language: "English",
    currency: "USD",
  });

  const handleNotificationChange = (name) => {
    setNotifications((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handlePreferenceChange = (event) => {
    const { name, value } = event.target;

    setPreferences((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div className="settings-page">
      <section className="settings-header">
        <div>
          <span className="settings-label">Account</span>

          <h1>Settings</h1>

          <p>
            Manage your preferences, notifications, and account
            security.
          </p>
        </div>

        <Link to="/profile" className="profile-settings-button">
          View profile
        </Link>
      </section>

      <div className="settings-layout">
        <main className="settings-main">
          {/* =================================================
              PERSONAL PREFERENCES
              ================================================= */}

          <section className="settings-card">
            <div className="settings-card-heading">
              <div>
                <span className="settings-card-label">
                  Preferences
                </span>

                <h2>Personal preferences</h2>

                <p>
                  Choose how information is displayed across
                  StayEase.
                </p>
              </div>
            </div>

            <div className="settings-form-grid">
              <div className="settings-field">
                <label htmlFor="language">
                  Language
                </label>

                <select
                  id="language"
                  name="language"
                  value={preferences.language}
                  onChange={handlePreferenceChange}
                >
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
                </select>
              </div>

              <div className="settings-field">
                <label htmlFor="currency">
                  Currency
                </label>

                <select
                  id="currency"
                  name="currency"
                  value={preferences.currency}
                  onChange={handlePreferenceChange}
                >
                  <option value="USD">
                    USD — US Dollar
                  </option>
                  <option value="PKR">
                    PKR — Pakistani Rupee
                  </option>
                  <option value="AED">
                    AED — UAE Dirham
                  </option>
                  <option value="EUR">
                    EUR — Euro
                  </option>
                  <option value="GBP">
                    GBP — British Pound
                  </option>
                </select>
              </div>
            </div>
          </section>

          {/* =================================================
              NOTIFICATIONS
              ================================================= */}

          <section className="settings-card">
            <div className="settings-card-heading">
              <div>
                <span className="settings-card-label">
                  Notifications
                </span>

                <h2>Notification preferences</h2>

                <p>
                  Decide which updates you would like to
                  receive.
                </p>
              </div>
            </div>

            <div className="notification-list">
              <div className="notification-item">
                <div>
                  <strong>Booking updates</strong>

                  <span>
                    Receive updates about your bookings,
                    reservations, and stay information.
                  </span>
                </div>

                <button
                  type="button"
                  className={`toggle ${
                    notifications.bookingUpdates
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNotificationChange(
                      "bookingUpdates"
                    )
                  }
                  aria-label="Toggle booking updates"
                  aria-pressed={
                    notifications.bookingUpdates
                  }
                >
                  <span></span>
                </button>
              </div>

              <div className="notification-item">
                <div>
                  <strong>Special offers</strong>

                  <span>
                    Get occasional information about offers
                    and promotions.
                  </span>
                </div>

                <button
                  type="button"
                  className={`toggle ${
                    notifications.promotions
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNotificationChange(
                      "promotions"
                    )
                  }
                  aria-label="Toggle special offers"
                  aria-pressed={
                    notifications.promotions
                  }
                >
                  <span></span>
                </button>
              </div>

              <div className="notification-item">
                <div>
                  <strong>Travel recommendations</strong>

                  <span>
                    Receive personalized destination and
                    stay recommendations.
                  </span>
                </div>

                <button
                  type="button"
                  className={`toggle ${
                    notifications.recommendations
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNotificationChange(
                      "recommendations"
                    )
                  }
                  aria-label="Toggle travel recommendations"
                  aria-pressed={
                    notifications.recommendations
                  }
                >
                  <span></span>
                </button>
              </div>

              <div className="notification-item">
                <div>
                  <strong>Email updates</strong>

                  <span>
                    Receive important account information
                    through email.
                  </span>
                </div>

                <button
                  type="button"
                  className={`toggle ${
                    notifications.emailUpdates
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleNotificationChange(
                      "emailUpdates"
                    )
                  }
                  aria-label="Toggle email updates"
                  aria-pressed={
                    notifications.emailUpdates
                  }
                >
                  <span></span>
                </button>
              </div>
            </div>
          </section>

          {/* =================================================
              SECURITY
              ================================================= */}

          <section className="settings-card">
            <div className="settings-card-heading">
              <div>
                <span className="settings-card-label">
                  Security
                </span>

                <h2>Password & security</h2>

                <p>
                  Keep your account secure and manage your
                  sign-in options.
                </p>
              </div>
            </div>

            <div className="security-list">
              <div className="security-item">
                <div className="security-icon">
                  🔒
                </div>

                <div className="security-info">
                  <strong>Password</strong>

                  <span>
                    Last changed recently
                  </span>
                </div>

                <Link
                  to="/forgot-password"
                  className="security-action"
                >
                  Change
                </Link>
              </div>

              <div className="security-item">
                <div className="security-icon">
                  ✓
                </div>

                <div className="security-info">
                  <strong>Email verification</strong>

                  <span>
                    Your email address is verified
                  </span>
                </div>

                <span className="verified-badge">
                  Verified
                </span>
              </div>
            </div>
          </section>

          {/* =================================================
              ACCOUNT ACTIONS
              ================================================= */}

          <section className="settings-card danger-card">
            <div className="settings-card-heading">
              <div>
                <span className="settings-card-label danger-label">
                  Account
                </span>

                <h2>Account actions</h2>

                <p>
                  Manage your account access and session.
                </p>
              </div>
            </div>

            <div className="account-actions">
              <button
                type="button"
                className="logout-button"
              >
                Log out
              </button>

              <button
                type="button"
                className="delete-account-button"
              >
                Delete account
              </button>
            </div>
          </section>
        </main>

        <aside className="settings-sidebar">
          <div className="settings-sidebar-card">
            <div className="settings-user-avatar">
              S
            </div>

            <h2>Sufiyan</h2>

            <p>sufiyan@example.com</p>

            <span>Personal Account</span>

            <Link
              to="/profile"
              className="sidebar-profile-link"
            >
              View profile
            </Link>
          </div>

          <div className="settings-help-card">
            <div className="settings-help-icon">
              ?
            </div>

            <h2>Need help?</h2>

            <p>
              If you have questions about your account,
              our support team can help.
            </p>

            <Link to="/contact">
              Contact support →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Settings;