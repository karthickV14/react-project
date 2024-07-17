import React from "react";
import "./Dashboard.css";
import AddchartIcon from "@mui/icons-material/Addchart";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import MultiSectionDashboard from "../../components/MultiSectionDashboard/MultiSectionDashboard";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";

const Dashboard = ({ dashboardSectionName }) => {
  const navigate = useNavigate();

  const handleCreateChart = () => {
    navigate("/connections");
  };
  return (
    <>
      <div className="dashboard-header-title">
        <h4>Dashboard</h4>
        <ProfileSettings />
        {/* <Avatar
          alt="Remy Sharp"
          sx={{
            width: 30,
            height: 30,
            margin: "4px 10px",
            // backgroundColor: "aliceblue",
          }}
        ></Avatar> */}
      </div>
      {/* --------------------------------------------- */}
      {/* <div className="dashboard-page">
        <div className="dashboard-card">
          <div onClick={handleCreateChart}>
            <AddchartIcon />
          </div>
        </div>
      </div> */}
      <MultiSectionDashboard dashboardSectionName={dashboardSectionName} />
    </>
  );
};

export default Dashboard;
