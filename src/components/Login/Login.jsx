// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Login.scss";
import { useState } from "react";
const SignUp = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="content">
            <img src="src\assets\react.svg" alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="content">
          <img src="src\assets\react.svg" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="content">
          <img src="src\assets\react.svg" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === 'SignUp' ? <div></div> : <div className="forgot-password">
        Forgot Password?<span> Reset</span>
      </div>}
      
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("SignUp");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "SignUp" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
export default SignUp;
