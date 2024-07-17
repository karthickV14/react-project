import { useNavigate } from "react-router-dom";
import React from "react";
import SecurityIcon from "@mui/icons-material/Security";

const GetOTP = () => {
  const navigate = useNavigate();
  const handleOTP = () => {
    navigate("/create-new-password");
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
            <h3 style={{ marginBottom: "20px" }}>Verification</h3>
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
                We have Sent OTP to your Register Email.Please Enter code you
                Receive
              </p>
              <SecurityIcon style={{ color: "rgb(121 121 121)" }} />
            </div>
          </div>
          <form className="login-form" style={{ marginBottom: "40px" }}>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input type="text" id="otp" name="otp" required />
            </div>
            <button type="submit" className="login-button" onClick={handleOTP}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetOTP;
