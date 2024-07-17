import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import React, { useState } from "react";
import "./EditProfile.css";

const EditProfile = () => {
  const [showChangePasswordPaper, setShowChangePasswordPaper] = useState(false);

  console.log(showChangePasswordPaper);

  function handleDisplayChangePassword() {
    setShowChangePasswordPaper(!showChangePasswordPaper);
  }
  return (
    <div className="profile-form-container">
      {/* <div className="Personal-container">
        <div className="Personal-sec">
          <h5 className="h5">Personal Information</h5>
          <form>
            
            
          </form>
        </div>
      </div>
      <div className="change-password-container">
        <div className="change-password-sec">
          <h5 className="h5"> Change Password</h5>

          <form>
            <ul className="change-password-fields">
              <li>
                <label>Old Password</label>
                <input></input>
              </li>
              <li>
                <label>New Password</label>
                <input></input>
              </li>
              <li>
                <label>Confirm Password</label>
                <input></input>
              </li>
            </ul>
            <div className="change-password-btns">
              <button>Cancel</button>
              <button>Save</button>
            </div>
          </form>
        </div>
      </div> */}

      <div className="profile-picture">
        <Avatar alt="" sx={{ width: 150, height: 150, margin: "20px 10px" }}>
          <DriveFileRenameOutlineSharpIcon />
        </Avatar>
      </div>
      <div className="profile-list">
        <form>
          <div className="list-of-fields">
            <div className="fields">
              <label>First Name</label>
              <input></input>
            </div>
            <div className="fields">
              <label>Middle Name</label>
              <input></input>
            </div>
            <div className="fields">
              <label>Last Name</label>
              <input></input>
            </div>
            <div className="fields">
              <label>Gender</label>
              <input></input>
            </div>
            <div className="fields">
              <label>DOB</label>
              <input></input>
            </div>
            <div className="fields">
              <label>Address</label>
              <input></input>
            </div>
            <div className="fields">
              <label>Phone</label>
              <input></input>
            </div>
            <div className="fields-check">
              <label>Change Password</label>
              <input
                style={{ marginLeft: "15px" }}
                type="checkbox"
                value={showChangePasswordPaper}
                onClick={handleDisplayChangePassword}
                onChange={(e) => {
                  handleDisplayChangePassword(e.target.value);
                }}
              ></input>
            </div>
          </div>
          {showChangePasswordPaper && (
            <div className="change-password-card">
              <Card sx={{ maxWidth: 550, zIndex: "1000" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Change Password
                  </Typography>
                  <ChangePasswordForm />
                </CardContent>
              </Card>
            </div>
          )}
          <div className="profile-form-btn">
            <button>Cancel</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function ChangePasswordForm() {
  return (
    <form>
      <div className="change-password-inputs">
        <label>Old Password</label>
        <input type="password" />
      </div>
      <div className="change-password-inputs">
        <label>New Password</label>
        <input type="password" />
      </div>
      <div className="change-password-inputs">
        <label>Confirm Password</label>
        <input type="password" />
      </div>
      <div className="change-password-submit-btn">
        <Button variant="contained" size="small">
          Change Password
        </Button>
      </div>
    </form>
  );
}

export default EditProfile;
