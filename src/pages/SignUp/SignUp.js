import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        background: "linear-gradient(179deg, #2E6CBF 0%, #133F7A 100%)",
        // padding: "20px",
        height: "100vh",
        color: "honeydew",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-2"
            style={{ backgroundColor: "honeydew", height: "100vh" }}
          >
            <div style={{ display: "flex" }}>
              <img
                src={require("../../assets/Logo.png")}
                alt="Logo"
                style={{ marginBottom: "20px" }}
              />
              <h4
                style={{
                  color: "#133F7A",
                  fontWeight: "600",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "20px 0 0 5px",
                }}
              >
                Data Info Sight
              </h4>
            </div>
            <div style={{ width: "100%" }}>
              <img
                src={require("../../assets/rafiki.png")}
                width="100%"
                height="300vh"
                alt="Logo"
              />
            </div>
          </div>

          <div className="col-md-10">
            <div
              style={{
                display: "flex ",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <h2>Registration</h2>
            </div>

            <div style={{ padding: "30px 10px" }}>
              {/* <h5 className="h5">Personal Information</h5>

            <form>
              <ul className="profile-form">
                <li>
                  <label>First Name</label>
                  <input></input>
                </li>
                <li>
                  <label>Middle Name</label>
                  <input></input>
                </li>
                <li>
                  <label>Last Name</label>
                  <input></input>
                </li>
                <li>
                  <label>Gender</label>
                  <input></input>
                </li>
                <li>
                  <label>DOB</label>
                  <input></input>
                </li>
                <li>
                  <label>Address</label>
                  <input></input>
                </li>
                <li>
                  <label>Phone</label>
                  <input></input>
                </li>
              </ul>
            </form> */}
              <h5 className="h5">Create Account Here </h5>
              <form>
                <ul className="create-account-form">
                  <li>
                    <label>Email </label>
                    <input></input>
                  </li>
                  <li>
                    <label>Password</label>
                    <input></input>
                  </li>
                  <li>
                    <label>Confirm password </label>
                    <input></input>
                  </li>
                </ul>
                <div className="register-btn">
                  <button onClick={handleRegister}>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
