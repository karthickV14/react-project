import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import ForgotPassword from "./pages/login/ForgotPassword/EnterMail/ForgotPassword";
import GetOTP from "./pages/login/ForgotPassword/GetOTP/GetOTP";
import CreateNewPassword from "./pages/login/ForgotPassword/CreateNewPassword/CreateNewPassword";
import DataAndAI from "./pages/DataAndAI/DataAndAI";
import Dataset from "./pages/Dataset/Dataset";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Connections from "./pages/Connections/Connections";
import GenerateChart from "./pages/GenerateChart/GenerateChart";
import { useState } from "react";
import SignUp from "./pages/SignUp/SignUp";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";

function App() {
  // ----------------------------------- For Theme change-----------------------------------

  const [theme, setTheme] = useState(
    createTheme({
      palette: {
        primary: {
          main: "#grey", // Default theme color
        },
      },
    })
  );

  const handleThemeChange = (color) => {
    setTheme(
      createTheme({
        palette: {
          primary: {
            main: color,
          },
        },
      })
    );
  };
  // -------------------------------------------- for Dashboard -----------------------------------
  const [dashboardSection, setDashboardSection] = useState([
    "one",
    "two",
    "three",
  ]);

  function handleAddToSection(newSectionName) {
    setDashboardSection((dashboardSection) => [
      ...dashboardSection,
      newSectionName,
    ]);
  }

  // -------------------------------------------- for chart Generate -----------------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [openInput, setOpenInput] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenInput = () => {
    setOpenInput(true);
    setAnchorEl(null);
  };
  const handleCloseInput = () => {
    setOpenInput(false);
  };

  function handleCreateDashboardSection(e) {
    e.preventDefault();
  }
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <div className="app-page">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route
            path="/home"
            element={
              <Home>
                <Dashboard dashboardSectionName={dashboardSection} />
              </Home>
            }
          /> */}
          <Route
            path="/dashboard"
            element={
              <Home>
                <Dashboard dashboardSectionName={dashboardSection} />
              </Home>
            }
          />
          <Route
            path="/connections"
            element={
              <Home>
                <Connections />
              </Home>
            }
          />
          <Route
            path="/generate-charts"
            element={
              <Home>
                <GenerateChart
                  openInput={openInput}
                  onOpenInput={handleOpenInput}
                  onCloseInput={handleCloseInput}
                  onHandleClick={handleClick}
                  onHandleCloce={handleClose}
                  anchorEl={anchorEl}
                  open={open}
                  onCreateDashboardSection={handleCreateDashboardSection}
                  dashboardSection={dashboardSection}
                  onAddToSection={handleAddToSection}
                />
              </Home>
            }
          />
          <Route
            path="/dataset"
            element={
              <Home>
                <Dataset />
              </Home>
            }
          />
          <Route
            path="/data-ai"
            element={
              <Home>
                <DataAndAI />
              </Home>
            }
          />
          <Route
            path="/settings-page"
            element={
              <Home>
                <SettingsPage onThemeChange={handleThemeChange} />
              </Home>
            }
          />
          <Route
            path="/schedule"
            element={
              <Home>
                <SchedulePage />
              </Home>
            }
          />

          {/* Logins */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/get-otp" element={<GetOTP />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />

          {/* Signup */}
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
    // </ThemeProvider>
  );
}

export default App;
