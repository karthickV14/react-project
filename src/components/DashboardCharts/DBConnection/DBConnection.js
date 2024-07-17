import React, { useState } from "react";
import "./DBConnection.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";

const DBConnection = () => {
  const [authType, setAuthType] = useState("");
  const [dbType, setDbType] = useState("");
  const [dbHost, setDbHost] = useState("");
  const [dbName, setDbName] = useState("");
  const [dbUser, setDbUser] = useState("");
  const [dbPassword, setDbPassword] = useState("");

  const handleAuthTypeChange = (event) => {
    setAuthType(event.target.value);
  };

  const handleDbTypeChange = (event) => {
    setDbType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      authType,
      dbType,
      dbHost,
      dbName,
      dbUser,
      dbPassword,
    });
  };

  return (
    <div className="db-container">
      <div className="db-area">
        <div className="db-input-fields">
          <div className="change-btn">
            <h4>Connect With Inputs</h4>
          </div>
          <div className="db-content">
            <div className="db-inputs">
              <label className="lable-auth">Authentication Type :</label>
              <FormControl sx={{ flex: 1 }} size="small">
                <InputLabel id="auth-type-label">
                  Authentication Type
                </InputLabel>
                <Select
                  labelId="auth-type-label"
                  id="auth-type-select"
                  value={authType}
                  onChange={handleAuthTypeChange}
                  label="Authentication Type"
                >
                  <MenuItem value="sql">SQL Authentication</MenuItem>
                  <MenuItem value="windows">Windows Authentication</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="db-inputs">
              <label className="lable-auth">Database Type :</label>
              <FormControl sx={{ flex: 1 }} size="small">
                <InputLabel id="db-type-label">Select Database</InputLabel>
                <Select
                  labelId="db-type-label"
                  id="db-type-select"
                  value={dbType}
                  onChange={handleDbTypeChange}
                  label="Select Database"
                >
                  <MenuItem value="">Select Database</MenuItem>
                  <MenuItem value="mysql">MySQL</MenuItem>
                  <MenuItem value="postgres">PostgresSQL</MenuItem>
                  <MenuItem value="mongodb">MongoDB</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="db-inputs">
              <label className="lable-auth">Database Host :</label>
              <TextField
                variant="outlined"
                size="small"
                value={dbHost}
                onChange={(e) => setDbHost(e.target.value)}
                sx={{ flex: 1 }}
                InputProps={{
                  style: {
                    height: "33px",
                  },
                }}
              />
            </div>
            <div className="db-inputs">
              <label className="lable-auth">Database Name :</label>
              <TextField
                variant="outlined"
                size="small"
                value={dbName}
                onChange={(e) => setDbName(e.target.value)}
                sx={{ flex: 1 }}
                InputProps={{
                  style: {
                    height: "33px",
                  },
                }}
              />
            </div>
            <div className="db-inputs">
              <label className="lable-auth">Database User :</label>
              <TextField
                variant="outlined"
                size="small"
                value={dbUser}
                onChange={(e) => setDbUser(e.target.value)}
                sx={{ flex: 1 }}
                InputProps={{
                  style: {
                    height: "33px",
                  },
                }}
              />
            </div>
            <div className="db-inputs">
              <label className="lable-auth">Database Password :</label>
              <TextField
                type="password"
                variant="outlined"
                size="small"
                value={dbPassword}
                onChange={(e) => setDbPassword(e.target.value)}
                sx={{ flex: 1 }}
                InputProps={{
                  style: {
                    height: "33px",
                  },
                }}
              />
            </div>
          </div>

          <div className="db-submit">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBConnection;
