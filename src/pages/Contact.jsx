import { useState } from "react";
import { Link } from "react-router";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      return;
    }

    // Frontend-only demo form submission
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-container">
          <span className="contact-badge">Contact StayEase</span>

          <h1>How can we help?</h1>

          <p>
            Have a question about a stay, booking, or your account?
            Send us a message and we'll be happy to help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <span className="contact-section-label">
                Get in touch
              </span>

              <h2>We're here to help.</h2>

              <p className="contact-info-description">
                Whether you need help with your booking or simply have a
                question, our support team is ready to assist you.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">✉</div>

                  <div>
                    <h3>Email</h3>
                    <p>support@stayease.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">☎</div>

                  <div>
                    <h3>Phone</h3>
                    <p>+92 300 1234567</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">⌖</div>

                  <div>
                    <h3>Office</h3>
                    <p>Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">◷</div>

                  <div>
                    <h3>Support hours</h3>
                    <p>Monday – Sunday, 24/7</p>
                  </div>
                </div>
              </div>

              <div className="contact-help-card">
                <h3>Looking for quick answers?</h3>

                <p>
                  Check our frequently asked questions before sending a
                  message.
                </p>

                <Link to="/faq">Visit FAQ →</Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h2>Send us a message</h2>

                <p>
                  Fill out the form below and we'll get back to you.
                </p>
              </div>

              {submitted && (
                <div className="contact-success">
                  Your message has been submitted successfully.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">Full name</label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="contact-email">Email address</label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-subject">Subject</label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="contact-message">Message</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="contact-bottom">
        <div className="contact-container">
          <div className="contact-bottom-card">
            <div>
              <span>Need help with a reservation?</span>

              <h2>Manage your bookings easily.</h2>
            </div>

            <Link to="/bookings" className="contact-bottom-btn">
              My bookings →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;