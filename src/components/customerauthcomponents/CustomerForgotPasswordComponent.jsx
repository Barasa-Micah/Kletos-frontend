import { useState, useEffect } from 'react';
import "../../css/customerauthcss/customerforgotpassword.css"; // Adjust CSS import as per your file structure

const CustomerForgotPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [timer, setTimer] = useState(30); // Initial timer set to 30 seconds
  const [timerActive, setTimerActive] = useState(false); // State to manage timer activation

  useEffect(() => {
    let interval = null;

    // Start countdown when timerActive is true
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false); // Deactivate timer when countdown is complete
    }

    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const handleForgotPassword = async () => {
    const data = {
      email: email,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Password reset email sent!');
        setTimerActive(true); // Activate the timer after sending the email
        setTimer(30); // Reset timer to 30 seconds
      } else {
        alert(result.error || 'Failed to send password reset email.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred during password reset.');
    }
  };

  return (
    <div className="customer-forgot-password-component flex-col">
      <div className="cfpc-heading flex">
        <h1>FORGOT PASSWORD</h1>
      </div>
      <div className="cfpc-inputs flex-col">
        <div className="cfpc-input-div flex-col-left">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="cfpc-buttons flex">
        <button onClick={handleForgotPassword} disabled={timerActive}>
          {timerActive ? `Resend in ${timer}s` : 'Reset'}
        </button>
      </div>
      {timerActive && (
        <div className="cfpc-timer flex">
          <p>Resend email in {timer} seconds</p>
        </div>
      )}
    </div>
  );
};

export default CustomerForgotPasswordComponent;
