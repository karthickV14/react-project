import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    navigate("/dashboard");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handlePass = () => {
    setShowPass(!showPass);
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className="login-container">
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "80vh",
          padding: "40px",
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <div className="info-graphic">
          <img
            src={require("../../assets/da.png")}
            alt="Data Insights"
            className="info-graphic-img"
          />
        </div>
        <div className="login-form-container">
          <div className="logo">
            <h3>DATA INFOSIGHT</h3>
          </div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">E-mail id</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                required
              />
              <div
                onClick={handlePass}
                style={{
                  position: "absolute",
                  right: "250px",
                  top: "375px",
                  cursor: "pointer",
                }}
              >
                {showPass ? <LockOpenIcon /> : <LockIcon />}
              </div>
            </div>
            <div className="form-group">
              <p
                className="forgot-password-link"
                onClick={handleForgotPassword}
              >
                forgot password?
              </p>
            </div>
            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
          <div className="signup-link">
            <span>Don't have an account? </span>
            <button className="signup-btn" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
