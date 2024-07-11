import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/customerauthcss/customersignin.css";

const CustomerSignInComponent = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Store the token in localStorage
        navigate("/"); // Navigate to the homepage
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="customer-sign-in-component flex-col">
      <div className="csc-heading flex">
        <h1>SIGN IN</h1>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="csc-inputs flex-col">
        <div className="csc-input-div flex-col-left">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="csc-input-div flex-col-left">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <a className="forgot-password flex">forgot Password ?</a>
      <div className="csc-buttons flex">
        <button onClick={handleSubmit}>Sign In</button>
      </div>
      <span className="register-section">
        Dont have an account ?{" "}
        <span className="register-action" onClick={onToggle}>
          Register
        </span>
      </span>
    </div>
  );
};

export default CustomerSignInComponent;
