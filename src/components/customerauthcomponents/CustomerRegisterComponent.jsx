import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/customerauthcss/customerregister.css";

const CustomerRegisterComponent = ({ onToggle }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { firstName, lastName, email, password, confirmPassword } = formData;
    const fullName = `${firstName} ${lastName}`;

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email,
          password,
          confirm_password: confirmPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Welcome, ${fullName}! Your account has been created successfully.`);
        navigate("/auth");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="customer-register-component flex-col">
      <div className="crc-heading flex">
        <h1>REGISTER</h1>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="crc-inputs flex-col">
        <div className="crc-input-div flex-col-left">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="crc-input-div flex-col-left">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="crc-input-div flex-col-left">
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
        <div className="crc-input-div flex-col-left">
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
        <div className="crc-input-div flex-col-left">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="crc-buttons flex">
        <button type="submit" onClick={handleSubmit}>Register</button>
      </div>
      <span className="crc-sign-section">
        I have an account <span className="crc-sign-in-action" onClick={onToggle}>Sign In</span>
      </span>
    </div>
  );
};

export default CustomerRegisterComponent;
