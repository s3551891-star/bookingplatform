import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email") || "";

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.password || !formData.confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Frontend-only demo reset flow
    navigate("/login");
  };

  return (
    <section className="reset-page">
      <div className="reset-card">
        <div className="reset-icon">
          🔒
        </div>

        <div className="reset-header">
          <h1>Reset your password</h1>

          <p>
            Create a new password for your StayEase account.
          </p>

          {email && (
            <div className="reset-email">
              Account: <strong>{email}</strong>
            </div>
          )}
        </div>

        <form className="reset-form" onSubmit={handleSubmit}>
          {error && <div className="reset-error">{error}</div>}

          <div className="reset-form-group">
            <label htmlFor="reset-password">New password</label>

            <div className="reset-password-wrapper">
              <input
                id="reset-password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="reset-password-btn"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <span className="reset-hint">
              Password must contain at least 6 characters.
            </span>
          </div>

          <div className="reset-form-group">
            <label htmlFor="confirm-password">
              Confirm new password
            </label>

            <div className="reset-password-wrapper">
              <input
                id="confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />

              <button
                type="button"
                className="reset-password-btn"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="reset-submit-btn">
            Reset password
          </button>
        </form>

        <div className="reset-back">
          <Link to="/login">← Back to sign in</Link>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;