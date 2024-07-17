import React, { useState } from "react";
import "./GenerateChart.css";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import {
  Avatar,
  Menu,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function GenerateChart({
  dashboardSection,
  onAddToSection,
  // ---------------
  openInput,
  anchorEl,
  open,
  onOpenInput,
  onCloseInput,
  handleCloseInput,
  onHandleClick,
  onHandleCloce,
  onCreateDashboardSection,
}) {
  const [sectionName, setSectionName] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="Generate-chart-header">
        <h4>Create Chart</h4>
        <ProfileSettings />
      </div>
      <div className="chart-generate-area">
        <div className="chart-area-top">
          <span className="chart-inputs">
            <label>Chart Type</label>
            <div className="input-outline">
              <FormControl sx={{ m: 1, minWidth: 140, padding: 0 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ margin: 0 }}
                >
                  <MenuItem value={10}>Bar Chart</MenuItem>
                  <MenuItem value={20}>Line Chart</MenuItem>
                  <MenuItem value={30}>Scatter Chart</MenuItem>
                </Select>
              </FormControl>
            </div>
          </span>
          <span className="chart-inputs">
            <label>X Column</label>
            <div className="input-outline">
              <FormControl sx={{ m: 1, minWidth: 140, padding: 0 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ margin: 0 }}
                >
                  <MenuItem value={10}>Column X</MenuItem>
                  <MenuItem value={20}>Column Y</MenuItem>
                  <MenuItem value={30}>Column Z</MenuItem>
                </Select>
              </FormControl>
            </div>
          </span>
          <span className="chart-inputs">
            <label>Y Column</label>
            <div className="input-outline">
              <FormControl sx={{ m: 1, minWidth: 140, padding: 0 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ margin: 0 }}
                >
                  <MenuItem value={10}>Column X</MenuItem>
                  <MenuItem value={20}>Column Y</MenuItem>
                  <MenuItem value={30}>Column Z</MenuItem>
                </Select>
              </FormControl>
            </div>
          </span>
          <span className="chart-inputs">
            <label>Filter</label>
            <div className="input-outline">
              <FormControl sx={{ m: 1, minWidth: 140, padding: 0 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ margin: 0 }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </span>
          <span className="chart-inputs">
            <label>row Limit</label>
            <div className="input-outline">
              <FormControl sx={{ m: 1, minWidth: 140, padding: 0 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  sx={{ margin: 0 }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </span>
        </div>
        <div className="chart-customize-area">
          <div className="customize-options">
            <br />
            <h6>Customize Options</h6>
            <div className="top-options">
              <div>
                <label>Color Scheme </label>
                <input></input>
              </div>
              <div>
                <label>Column : </label>
                <input></input>
              </div>
              <div>
                <label>Column : </label>
                <input></input>
              </div>
            </div>
            <h6>Lable Actions</h6>

            <div className="mid-options">
              <div className="lable-checkbox">
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{
                    color: blue[400],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
                <label>Show Lable</label>
              </div>
              <div className="lable-checkbox">
                <Checkbox
                  {...label}
                  sx={{
                    color: blue[400],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
                <label>Lable Outside</label>
              </div>
              <div className="lable-checkbox">
                <Checkbox
                  {...label}
                  sx={{
                    color: blue[400],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
                <label>Show Total</label>
              </div>
              <div className="lable-checkbox">
                <Checkbox
                  {...label}
                  sx={{
                    color: blue[400],
                    "&.Mui-checked": {
                      color: blue[200],
                    },
                  }}
                />
                <label>Show Legend</label>
              </div>
            </div>
            <div className="final-options">
              <button>Create</button>
            </div>
          </div>
          <div className="generated-chart">
            <div>
              <div
                className="generated-chart-demo"
                onSubmit={onCreateDashboardSection}
              >
                <div></div>
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => onHandleClick(event)}
                  >
                    Add To Dashboard
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={onHandleCloce}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {dashboardSection.map((section) => (
                      <MenuItem
                        // onClick={onOpenInput}
                        style={{ position: "relative" }}
                      >
                        {section}
                      </MenuItem>
                    ))}

                    <MenuItem
                      onClick={onOpenInput}
                      style={{ position: "relative" }}
                    >
                      Create New
                    </MenuItem>
                  </Menu>
                  {openInput && (
                    <div style={{ position: "absolute", right: "1%" }}>
                      <FormAddChartSectionName
                        setSectionName={setSectionName}
                        sectionName={sectionName}
                        onAddToSection={onAddToSection}
                        onCloseInput={onCloseInput}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FormAddChartSectionName({
  onAddToSection,
  setSectionName,
  sectionName,
  onCloseInput,
}) {
  const navigate = useNavigate();

  // const onCloseInput=>()
  function handleAddChartSection(e) {
    e.preventDefault();

    const newSectionName = [sectionName];

    onAddToSection(newSectionName);
    setSectionName("");
    onCloseInput(false);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={(e) => handleAddChartSection(e)}>
      <label></label>
      <input
        type="text"
        value={sectionName}
        onChange={(e) => setSectionName(e.target.value)}
      />
      <button>Create And Add</button>
    </form>
  );
}

export default GenerateChart;
