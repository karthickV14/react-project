import React from "react";
import AddchartIcon from "@mui/icons-material/Addchart";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import SwipeableTextMobileStepper from "./TailViewDashboard/TailViewDashboard";
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MultiSectionDashboard({ dashboardSectionName }) {
  const [value, setValue] = React.useState(0);
  const [view, setView] = React.useState("list");
  const navigate = useNavigate();

  const handleCreateChart = () => {
    navigate("/dataset");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <div className="multi-section-dashboard-container">
      <div
        style={{
          padding: "0 10px",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button
          onClick={handleCreateChart}
          variant="outlined"
          sx={{
            // width: "6%",
            margin: "3px 5px",
            color: "#000000",
            border: "1px solid #ffffff22",
            borderRadius: "0.2rem",
            boxShadow: "0 1px 45px 3px #00000028",
            "&:hover": {
              border: "1px solid #ffffff44",
              boxShadow: "0 5px 80px 5px #00000038",
              transform: "scale(1.02)",
              transition: "1s all",
              filter: "brightness(1.3)",
              "&::before": {
                filter: "brightness(0.5)",
                top: "-100%",
                left: "200%",
              },
            },
          }}
        >
          <AddchartIcon />
        </Button>
        <ToggleButtonGroup
          // orientation="vertical"
          value={view}
          exclusive
          onChange={handleToggleChange}
          sx={{ padding: "0 10px", margin: "3px 5px" }}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          {/* <ToggleButton value="quilt" aria-label="quilt">
                <ViewQuiltIcon />
              </ToggleButton> */}
        </ToggleButtonGroup>
      </div>
      {view === "list" ? (
        <TabViewDashboard
          dashboardSectionName={dashboardSectionName}
          value={value}
          handleChange={handleChange}
        />
      ) : (
        <TailViewDashboard dashboardSectionName={dashboardSectionName} />
      )}
    </div>
  );
}

function TailViewDashboard({ dashboardSectionName }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "5",
        margin: "5px 10px",
        justifyContent: "space-between",
        width: "99%",
      }}
    >
      {dashboardSectionName.map((section, index) => (
        <SwipeableTextMobileStepper section={section} key={index} />
      ))}
    </div>
  );
}

function TabViewDashboard({ dashboardSectionName, handleChange, value }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
          margin: "3px 5px",
          width: "99%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            margin: "0 20px",
            bgcolor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {dashboardSectionName.map((section, index) => (
              <Tab label={section} {...a11yProps(index)} key={index} />
            ))}
          </Tabs>
        </Box>
      </div>

      <div>
        {dashboardSectionName.map((section, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            {section}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 258,
                  height: 258,
                },
              }}
            >
              <Paper elevation={0} />
              <Paper elevation={0} />
              <Paper elevation={0} />
            </Box>
          </CustomTabPanel>
        ))}
      </div>
    </>
  );
}
