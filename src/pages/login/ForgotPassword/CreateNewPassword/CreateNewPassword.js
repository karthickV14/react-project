import React, { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useNavigate } from "react-router-dom";
import PasswordIcon from "@mui/icons-material/Password";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const handleNewPass = () => {
    setShowPass(!showPass);
  };
  const handleCreatePassword = () => {
    navigate("/");
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
            <h3 style={{ marginBottom: "20px" }}>Create Password</h3>
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
                  width: "100%",
                }}
              >
                Create New Password For Your Account
              </p>
              <br />
              <PasswordIcon style={{ color: "rgb(121 121 121)" }} />
            </div>
          </div>
          <form className="login-form" style={{ marginBottom: "40px" }}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                required
              />
            </div>
            <div
              onClick={handleNewPass}
              style={{
                position: "absolute",
                right: "250px",
                top: "347px",
                cursor: "pointer",
              }}
            >
              {showPass ? <LockOpenIcon /> : <LockIcon />}
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                type={showPass ? "text" : "password"}
                id="password2"
                name="password2"
                required
              />
            </div>
            <div
              onClick={handleNewPass}
              style={{
                position: "absolute",
                right: "250px",
                top: "428px",
                cursor: "pointer",
              }}
            >
              {showPass ? <LockOpenIcon /> : <LockIcon />}
            </div>
            <button
              type="submit"
              className="login-button"
              onClick={handleCreatePassword}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
