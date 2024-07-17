import React from "react";
import { useNavigate } from "react-router-dom";
import MailLockIcon from "@mui/icons-material/MailLock";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handsubmit = () => {
    navigate("/get-otp");
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
            src={require("../../../../assets/da1.png")}
            alt="Data Insights"
            className="info-graphic-img"
          />
        </div>
        <div className="login-form-container">
          <div className="logo" style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "20px" }}>Forgot Password</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                className="forgot-password-info"
                style={{
                  color: "rgb(121 121 121)",
                  fontSize: 12,
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: "5px",
                }}
              >
                Please Enter Your Email Address to Receive a Verification Code
              </p>
              <MailLockIcon style={{ color: "rgb(121 121 121)" }} />
            </div>
          </div>
          <form className="login-form" style={{ marginBottom: "40px" }}>
            <div className="form-group">
              <label htmlFor="email">E-mail id</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button type="submit" className="login-button" onClick={handsubmit}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
