import React, { useState, useEffect } from "react";
import "../../css/customerauthcss/resetpassword.css";

const ResetPasswordComponent = () => {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [countdown, setCountdown] = useState(20);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    return () => {
      // Clear the interval when component unmounts
      clearInterval(timerId);
    };
  }, [timerId]);

  const handleResetPassword = () => {
    if (email.trim() !== "") {
      // Simulating sending reset password email with a small delay
      setTimeout(() => {
        setShowConfirmation(true);
        startCountdown();
      }, 1000); // 1 second delay
    }
  };

  const startCountdown = () => {
    // Restart countdown timer
    setCountdown(20); // Reset countdown to 20 seconds
    const id = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(id); // Clear timer when countdown reaches 0
        }
        return prevCount - 1;
      });
    }, 1000); // Timer ticks every 1 second
    setTimerId(id); // Save timer id to state
  };

  const handleResendEmail = () => {
    if (!timerId) {
      // Only allow resend if timer is not running
      startCountdown();
    }
  };

  return (
    <div className="reset-password-component">
      {!showConfirmation ? (
        <div className="reset-form">
          <h2>Reset Password</h2>
          <div className="reset-inputs">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="reset-button" onClick={handleResetPassword}>
            Reset
          </button>
        </div>
      ) : (
        <div className="confirmation-message">
          <p>A password reset email has been sent to:</p>
          <p>
            <strong>{email}</strong>
          </p>
          <p>
            Check your email and follow the instructions to reset your password.
          </p>
          <div className="timer">
            <p>
              Resend email in <strong>{countdown} seconds</strong>
            </p>
            <button
              className="resend-button"
              onClick={handleResendEmail}
              disabled={countdown !== 0}
            >
              Resend Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordComponent;
