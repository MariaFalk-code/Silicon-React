import Notification from "../assets/icons and logos/notification.png";
import { useState, useEffect } from "react";

const Newsletter = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "Email is required" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const res = await fetch("https://win24-assignment.azurewebsites.net/api/forms/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      alert("Something went wrong, please try again later.");
      setFormData({ email: "" });
      return;
    } else {
      setSubmitted(true);
      setFormData({ email: "" });
    }
  };

  return (
    <section className="newsletter flex-center">
      <div className="subscribe gap-2">
        <img className="notification hidden-S" src={Notification} alt="notification icon" />
        <h3 className="text-sub">
          {submitted ? (
            "Thank you for subscribing!"
          ) : (
            <>
              Subscribe to our newsletter <span className="hidden-XS-S">to stay informed about latest updates</span>
            </>
          )}
        </h3>
      </div>

      {!submitted && (
        <form onSubmit={handleSubmit} className="email-form" autoComplete="on" noValidate>
            <i className="fa-thin fa-envelope icon"></i>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="email"
              required
            />
            <small className="error">{errors.email && errors.email}</small>
          <button type="submit" className="btn btn-l sub">
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
