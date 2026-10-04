import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Frontend-only demo flow
    navigate(`/reset-password?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="forgot-page">
      <div className="forgot-card">
        <div className="forgot-icon">
          🔑
        </div>

        <div className="forgot-header">
          <h1>Forgot your password?</h1>

          <p>
            No worries. Enter the email address associated with your
            StayEase account and we'll help you reset your password.
          </p>
        </div>

        <form className="forgot-form" onSubmit={handleSubmit}>
          {error && <div className="forgot-error">{error}</div>}

          <div className="forgot-form-group">
            <label htmlFor="forgot-email">Email address</label>

            <input
              id="forgot-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              autoComplete="email"
            />
          </div>

          <button type="submit" className="forgot-submit-btn">
            Continue
          </button>
        </form>

        <div className="forgot-back">
          <Link to="/login">← Back to sign in</Link>
        </div>

        <div className="forgot-register">
          <p>
            Don't have an account?{" "}
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;