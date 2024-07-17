import React from "react";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";
import "./SchedulePage.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SchedulePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="schedule-container">
      <div className="schedule-header-title">
        <h4 className="h4">Dataset</h4>
        <ProfileSettings />
      </div>
      <div className="schedule-area">
        <div className="schedule-options">
          <div className="row">
            <h3>Schedule</h3>
            <div>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: 224,
                }}
              >
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  <Tab label="Daily" {...a11yProps(0)} />
                  <Tab label="Weekly" {...a11yProps(1)} />
                  <Tab label="Monthly" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <div>
                    <Box
                      sx={{
                        width: 1000,
                      }}
                    ></Box>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div>
                    <Box
                      sx={{
                        width: 1000,
                      }}
                    ></Box>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div>
                    <Box
                      sx={{
                        width: 1000,
                      }}
                    ></Box>
                  </div>
                </TabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
