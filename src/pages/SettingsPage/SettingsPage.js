import React, { useState } from "react";
import "./SettingsPage.css";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import EditProfile from "../../components/SettingsComponent/EditProfile/EditProfile";
import Appearance from "../../components/SettingsComponent/Appearance/Appearance";

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

const SettingsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="settings-page-container">
      <div className="settings-page-header-title">
        <h4 className="h4">Settings</h4>
        <ProfileSettings />
      </div>
      <div>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Profile Settings" {...a11yProps(0)} />
            <Tab label="Appearance Settings" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <EditProfile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Appearance />
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default SettingsPage;
