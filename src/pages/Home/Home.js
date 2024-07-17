import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    maxWidth: 220,
    width: "100%",
    height: "40px",
    // padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    border: "1px solid #dadde9",
  },
}));

// ------------------------------------------------------------------------------------------------

const menuItems = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  // {
  //   path: "/generate-charts",
  //   name: "Charts",
  //   icon: <InsertChartIcon />,
  // },
  {
    path: "/dataset",
    name: "Dataset",
    icon: <DescriptionIcon />,
  },
  {
    path: "/data-ai",
    name: "Data / AI",
    icon: <AutoAwesomeIcon />,
  },
];
const Home = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleSidebarControl = () => {
    setIsOpen(!isOpen);
  };

  const classes = useStyles();

  return (
    <div className="dashboard-container">
      <div
        className="dashboard-section-one"
        style={{ minWidth: isOpen ? "5%" : "13%" }}
      >
        <nav className="slider-bar">
          <div className="slider-header">
            <div>
              {isOpen ? (
                <h5
                  style={{
                    margin: "0 auto",
                    padding: "4px",
                    fontSize: "xx-large",
                  }}
                >
                  D{/* <img src="../../../../assets/Logo.png" alt="" /> */}
                  {/* <img src="../../../../assets/Logo.png" alt="Logo" /> */}
                </h5>
              ) : (
                <h5
                  style={{
                    margin: "0 auto",
                    padding: "4px",
                    fontSize: "larger",
                  }}
                >
                  Data Info Sight
                </h5>
              )}
            </div>
            <span
              className="sidebar-control"
              style={{ left: isOpen ? "3.1%" : "11%" }}
            >
              {isOpen ? (
                <ArrowRightIcon
                  sx={{ fontSize: "50px", color: "#25599F" }}
                  onClick={handleSidebarControl}
                />
              ) : (
                <ArrowLeftIcon
                  sx={{ fontSize: "50px", color: "#25599F" }}
                  onClick={handleSidebarControl}
                />
              )}
            </span>
          </div>
          <div className="navbar-link">
            <div className="navbar-list">
              {menuItems.map((item, index) =>
                item.path ? (
                  <Tooltip
                    key={index}
                    title={item.name}
                    placement="right"
                    disableHoverListener={!isOpen}
                    arrow
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <NavLink to={item.path} className="link" active>
                      <div className="icon">{item.icon}</div>
                      <div style={{ display: !isOpen ? "block" : "none" }}>
                        {item.name}
                      </div>
                    </NavLink>
                  </Tooltip>
                ) : (
                  <div
                    key={index}
                    className="link"
                    onClick={item.handleClick}
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                  >
                    <div className="icon">{item.icon}</div>
                    <div style={{ display: isOpen ? "block" : "none" }}>
                      {item.name}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </nav>
      </div>

      <main
        className="dashboard-section-two"
        style={{ width: isOpen ? "95%" : "87%" }}
      >
        <div className="main-content">
          {/* style={{ overflowY: "auto", height: "calc(100vh - 64px)" }} */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default Home;
