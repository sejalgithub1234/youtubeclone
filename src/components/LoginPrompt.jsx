import React from "react";
import "./LoginPrompt.css"; // External CSS for styling
import { useNavigate } from 'react-router-dom';

const LoginPrompt = () => {
const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-message">
        <h2>You are not logged in</h2>
        <p>Please log in to view videos.</p>
        <button className="login-button" onClick={() => navigate('/login')}>Log In</button>
      </div>
    </div>
  );
};

export default LoginPrompt;
