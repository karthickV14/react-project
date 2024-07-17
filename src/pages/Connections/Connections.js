import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import Typography from "@mui/material/Typography";
import "./Connections.css";
import FileUpload from "../../components/DashboardCharts/FileUpload/FileUpload";
import DBConnection from "../../components/DashboardCharts/DBConnection/DBConnection";
import { Avatar } from "@mui/material";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";

const Item = styled(Paper)(({ theme, isActive }) => ({
  backgroundColor: isActive
    ? "#002a6e"
    : theme.palette.mode === "dark"
    ? "#1A2027"
    : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: isActive ? "#fff" : theme.palette.text.secondary,
  cursor: "pointer",
  transition: "background-color 0.3s, color 0.3s, transform 0.3s ease",
  "&:hover": {
    backgroundColor: isActive ? "#002a6e" : "#f0f0f0",
    color: isActive ? "#fff" : "#002f6e",
    transform: "scale(1.03)",
  },
}));

const Connections = () => {
  const cardData = [
    {
      id: 1,
      icon: <CloudUploadIcon style={{ fontSize: 60, margin: "15px" }} />,
      text: "Upload File",
      action: () => {
        setActiveItem(1);
        setActiveFileCard(true);
        setActiveDBCard(false);
      },
    },
    {
      id: 2,
      icon: <StorageIcon style={{ fontSize: 60, margin: "15px" }} />,
      text: "Connect to Database",
      action: () => {
        setActiveItem(2);
        setActiveDBCard(true);
        setActiveFileCard(false);
      },
    },
    {
      id: 3,
      icon: <ApiIcon style={{ fontSize: 60, margin: "15px" }} />,
      text: "Connect to API",
      action: () => {
        setActiveItem(3);
        alert("Connect to API clicked!");
      },
    },
  ];

  const [activeItem, setActiveItem] = React.useState(null);
  const [activeFileCard, setActiveFileCard] = React.useState(false);
  const [activeDBCard, setActiveDBCard] = React.useState(false);

  return (
    <>
      <div className="connection-header-title">
        <h4>Connections</h4>
        <ProfileSettings />
      </div>
      <Box
        sx={{
          flexGrow: 1,
          padding: "20px 75px",
          margin: "15px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cardData.map((card) => (
            <Grid item xs={4} sm={4} md={4} key={card.id}>
              <Item
                onClick={card.action}
                isActive={activeItem === card.id}
                className="three-box"
              >
                {card.icon}
                <Typography
                  variant="h6"
                  component="div"
                  style={{ marginTop: "20px" }}
                >
                  {card.text}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      {activeFileCard ? <FileUpload /> : null}
      {activeDBCard ? <DBConnection /> : null}
    </>
  );
};

export default Connections;
