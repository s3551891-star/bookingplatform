import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    // Frontend-only demo login
    navigate("/profile");
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <Link to="/" className="login-logo">
              Stay<span>Ease</span>
            </Link>

            <h1>Welcome back</h1>
            <p>Sign in to manage your stays and bookings.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && <div className="login-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <div className="password-label-row">
                <label htmlFor="password">Password</label>

                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <div className="password-input-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="show-password-btn"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="remember-row">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />

              <span>Remember me</span>
            </label>

            <button type="submit" className="login-submit-btn">
              Sign in
            </button>
          </form>

          <div className="login-divider">
            <span>or</span>
          </div>

          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </p>
          </div>
        </div>

        <div className="login-side">
          <div className="login-side-content">
            <span className="login-badge">StayEase</span>

            <h2>Your next stay starts here.</h2>

            <p>
              Discover comfortable places, manage your reservations, and keep
              all your travel plans organized in one place.
            </p>

            <div className="login-benefits">
              <div className="benefit-item">
                <span>✓</span>
                <p>Manage your bookings easily</p>
              </div>

              <div className="benefit-item">
                <span>✓</span>
                <p>Save your favorite stays</p>
              </div>

              <div className="benefit-item">
                <span>✓</span>
                <p>Plan your next trip with ease</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;