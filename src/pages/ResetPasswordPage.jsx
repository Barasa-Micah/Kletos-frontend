import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/customerauthcss/customersignin.css";
import ResetPasswordComponent from "../components/customerauthcomponents/ResetPasswordComponent";

const CustomerSignInComponent = ({ onToggle }) => {
  return (
    <div className="customer-sign-in-component flex-col">
      <div className="csc-heading flex">
        <h1>SIGN IN</h1>
      </div>
      <div className="csc-inputs flex-col">
        <div className="csc-input-div flex-col-left">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="csc-input-div flex-col-left">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
      </div>
      <Link to="/resetpassword" className="forgot-password flex">
        Forgot Password?
      </Link>
      <div className="csc-buttons flex">
        <button>Sign In</button>
      </div>
      <span className="register-section">
        Don't have an account?{" "}
        <span className="register-action" onClick={onToggle}>
          Register
        </span>
      </span>
    </div>
  );
};

export default CustomerSignInComponent;
