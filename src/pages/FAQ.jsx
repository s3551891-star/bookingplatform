import { useMemo, useState } from "react";
import { Link } from "react-router";
import "./FAQ.css";

const faqData = [
  {
    id: 1,
    question: "How do I search for a stay?",
    answer:
      "Use the search bar on the home page. Enter your destination, check-in and check-out dates, and number of guests. Then select Search to view available stays.",
  },
  {
    id: 2,
    question: "How do I make a booking?",
    answer:
      "Open any listing you are interested in, review its details, select your dates and number of guests, and continue to the booking page. After reviewing your information, you can confirm the reservation.",
  },
  {
    id: 3,
    question: "Can I cancel my booking?",
    answer:
      "Cancellation options depend on the booking and its policy. Open your booking details to review the available reservation information.",
  },
  {
    id: 4,
    question: "How can I view my bookings?",
    answer:
      "You can view your reservations from the My Bookings section. Each booking includes its reference number, dates, guests, status, and total amount.",
  },
  {
    id: 5,
    question: "Can I save a property for later?",
    answer:
      "Yes. Use the heart button on a listing to save a property to your Wishlist. Your saved stays can then be viewed from the Wishlist page.",
  },
  {
    id: 6,
    question: "How do I change my profile information?",
    answer:
      "Open your Profile page to review your account information. Account preferences and notification settings can be managed from Settings.",
  },
  {
    id: 7,
    question: "What payment methods are supported?",
    answer:
      "The current StayEase frontend is a demonstration platform, so real payment processing has not been connected yet.",
  },
  {
    id: 8,
    question: "Is StayEase available on mobile devices?",
    answer:
      "Yes. StayEase is designed with responsive layouts so the interface can adapt to desktop, tablet, and mobile screen sizes.",
  },
  {
    id: 9,
    question: "How can I contact StayEase support?",
    answer:
      "Visit the Contact page and send us a message through the contact form. You can also find the available support information there.",
  },
  {
    id: 10,
    question: "Can I change my password?",
    answer:
      "Yes. If you need to reset your password, use the Forgot Password option on the Login page and follow the password reset flow.",
  },
];

function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openId, setOpenId] = useState(null);

  const filteredFAQs = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return faqData;
    }

    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(search) ||
        item.answer.toLowerCase().includes(search)
    );
  }, [searchTerm]);

  const toggleFAQ = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="faq-page">
      {/* Hero */}
      <div className="faq-hero">
        <div className="faq-container">
          <span className="faq-badge">Help Center</span>

          <h1>Frequently asked questions</h1>

          <p>
            Find answers to common questions about searching, booking,
            managing your account, and using StayEase.
          </p>

          <div className="faq-search">
            <span className="faq-search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm && (
              <button
                type="button"
                className="faq-clear-btn"
                onClick={() => setSearchTerm("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        <div className="faq-container">
          <div className="faq-layout">
            <aside className="faq-sidebar">
              <div className="faq-sidebar-card">
                <span>Need more help?</span>

                <h3>Can't find your answer?</h3>

                <p>
                  Our support team is ready to help with your questions.
                </p>

                <Link to="/contact">Contact support →</Link>
              </div>

              <div className="faq-sidebar-links">
                <Link to="/search">Explore stays</Link>
                <Link to="/bookings">My bookings</Link>
                <Link to="/profile">My profile</Link>
              </div>
            </aside>

            <div className="faq-list-section">
              <div className="faq-list-header">
                <div>
                  <span className="faq-section-label">
                    Knowledge base
                  </span>

                  <h2>Common questions</h2>
                </div>

                <span className="faq-count">
                  {filteredFAQs.length} questions
                </span>
              </div>

              {filteredFAQs.length > 0 ? (
                <div className="faq-list">
                  {filteredFAQs.map((item) => (
                    <div
                      className={`faq-item ${
                        openId === item.id ? "faq-item-open" : ""
                      }`}
                      key={item.id}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleFAQ(item.id)}
                        aria-expanded={openId === item.id}
                      >
                        <span>{item.question}</span>

                        <span className="faq-toggle">
                          {openId === item.id ? "−" : "+"}
                        </span>
                      </button>

                      {openId === item.id && (
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="faq-empty">
                  <div className="faq-empty-icon">⌕</div>

                  <h3>No questions found</h3>

                  <p>
                    Try a different search term or contact our support
                    team.
                  </p>

                  <Link to="/contact">Contact support</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="faq-bottom">
        <div className="faq-container">
          <div className="faq-bottom-card">
            <div>
              <span>Still need help?</span>

              <h2>We're here for you.</h2>
            </div>

            <Link to="/contact" className="faq-bottom-btn">
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;