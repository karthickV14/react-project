import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HelpIcon from "@mui/icons-material/Help";
import ContactsIcon from "@mui/icons-material/Contacts";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
// import { Dialog, DialogContent, DialogTitle, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ProfileSettings.css";
// import PropTypes from "prop-types";
// import EditProfile from "../SettingsComponent/EditProfile/EditProfile";
// import Appearance from "../SettingsComponent/Appearance/Appearance";
// import Tab from "@mui/material/Tab";

// const style = {
//   position: "absolute",
//   display: "flex",
//   flexDirection: "columns",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "75%",
//   height: "70%",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function ProfileSettings({ children }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [openModel, setOpenModel] = React.useState(false);
  const navigate = useNavigate();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleLogOut = () => {
    navigate("/");
  };
  const handleAccount = () => {
    navigate("/");
  };

  const handleOpenSettingsPage = () => navigate("/settings-page");

  const settings = [
    {
      path: "/settings-page",
      name: "Settings",
      icon: <SettingsIcon />,
      action: handleOpenSettingsPage,
    },
    {
      path: "/",
      name: "Account",
      icon: <HelpIcon />,
      action: null,
    },
    {
      path: "/",
      name: "About",
      icon: <SettingsIcon />,
      action: null,
    },
    {
      path: "/",
      name: "Support",
      icon: <ContactsIcon />,
      action: null,
    },
    {
      path: "/",
      name: "Logout",
      icon: <LogoutIcon />,
      action: handleLogOut,
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="K" src="/" />
        </IconButton>
      </Tooltip>
      <Menu
        className="profile-menu-items"
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.name}
            onClick={() => {
              setting.action();
              handleCloseUserMenu();
            }}
          >
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
        {/* <Dialog
          className="dialog"
          open={openModel}
          // onClose={handleCloseModel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
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
          </DialogTitle>
          <DialogContent>
            <CustomTabPanel value={value} index={0}>
              <EditProfile />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Appearance />
            </CustomTabPanel>
          </DialogContent>
        </Dialog> */}
      </Menu>
    </Box>
  );
}
