/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Login.scss";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      onLogin(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="page-container">
      <div className="banner">
        <h1>Quiz Web App</h1>
        <p>
        Quiz App is a simple React application that provides a quiz based on questions fetched from an external API. The app requires users to log in before they can start the quiz. It features user authentication, fetches quiz questions from an external API, includes a timer for quiz duration, and displays results after quiz completion.
        </p>
        <p className="footer-text">Created by Adi Syahrul Setya Budi</p>
      </div>
      <div className="login-side">
        <div className="login-container">
          <div className="header">
            <div className="text">Login</div>
          </div>
          <div className="inputs">
            <div className="content">
              <img src="src/assets/username.png" alt="" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="content">
              <img src="src/assets/key.png" alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit" onClick={handleLogin}>
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
