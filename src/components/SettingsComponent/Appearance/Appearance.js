import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import "./Appearance.css";
import { FormControl, MenuItem, Select } from "@mui/material";

const Appearance = ({ onThemeChange }) => {
  const [language, setLanguare] = React.useState("english");

  const handleChange = (event) => {
    setLanguare(event.target.value);
  };
  return (
    <div className="appearance-container">
      <div className="appearance-theam">
        <h6>Change Theam</h6>
        <div>
          <CircleIcon
            sx={{ width: 40, height: 40, margin: "4px 10px", color: "#000" }}
          />
          <CircleIcon
            sx={{ width: 40, height: 40, margin: "4px 10px", color: "grey" }}
          />
          <CircleIcon
            sx={{ width: 40, height: 40, margin: "4px 10px", color: "red" }}
          />
          <CircleIcon
            sx={{ width: 40, height: 40, margin: "4px 10px", color: "green" }}
          />
        </div>
      </div>
      <div className="appearance-language">
        <h6>Change Language</h6>
        <div>
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120, margin: "0" }}
          >
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={language}
              onChange={handleChange}
              label="language"
              // sx={{ margin: "0" }}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="arabic">Arabic</MenuItem>
              <MenuItem value="tamil">TAMIL</MenuItem>
              <MenuItem value="japanese">Japanese</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
