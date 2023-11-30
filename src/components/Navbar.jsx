import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F3F4FC",
    weight: "100vw",
    height: "100vh",
  },
  appBar: {
    flexDirection: "row",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: 230,
  },
  menubutton: {
    "&:hover": {
      border: "1px solid #000D11",
      transition: "background 1s, color 1s",
    },
  },
  button: {
      flex: 1,
    },
    "&:hover": {
      border: "1px solid #000D11",
    },
  },
  listbutton: {
    width: "100%",
    height: "40px",
  },
  hideOnLargerScreens: {
    [theme.breakpoints.up("700")]: {
      display: "none",
    },
  },
  hideOnSmallerScreens: {
    [theme.breakpoints.down("700")]: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isLightMode, setLightMode] = useState(
    localStorage.getItem("isLightMode") === "true"
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);


  const handleLightModeClick = () => {
    setLightMode(!isLightMode);
  };

  useEffect(() => {
    localStorage.setItem("isLightMode", isLightMode);
  }, [isLightMode]);

  return (
    <div className={classes.root} style={{ height: "100vh" }}>
      <AppBar
        position="static"
        className={classes.appBar}
        sx={{ backgroundColor: "#F3F4FC" }}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            .bahati
          </Typography>
          <div className={classes.hideOnLargerScreens}>
            <MenuIcon onClick={handleDrawerOpen}></MenuIcon>
          </div>
          <div className={classes.hideOnSmallerScreens}>
            <Button
              className={classes.button}
              color="inherit"
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                About
              </Typography>
            </Button>
            <Button
              size="large"
              className={classes.button}
              color="inherit"
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                Skills
              </Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                Work
              </Typography>
            </Button>
            <Button
              size="large"
              className={classes.button}
              color="inherit"
              sx={{ borderRadius: 5, paddingLeft: "1px", paddingRight: "1px" }}
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                Blog
              </Typography>
              <Typography variant="h6" style={{ textTransform: "none" }}>
                <LightModeIcon
                  sx={{
                    color: isLightMode ? "green" : "#000D11",
                    p: 6,
                    fontSize: "2rem",
                    border: 1,
                  }}
                />
              </Typography>
            </Button>
          </div>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerClose}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            <ListItem onClick={handleDrawerClose}>
              <Button
                variant="outlined"
                className={classes.listbutton}
                color="inherit"
                size="medium"
                sx={{
                  marginTop: -1,
                  borderRadius: 5,
                  boxShadow: "2px transparent",
                  border: "1px solid transparent",
                  transition: "boxShadow 0.5s ease-in 0.6s",
                  "&:hover": {
                    boxShadow: 2,
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  About
                </Typography>
              </Button>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Button
                variant="outlined"
                className={classes.listbutton}
                color="inherit"
                size="medium"
                sx={{
                  marginTop: -1,
                  borderRadius: 5,
                  boxShadow: "none",
                  border: "1px solid transparent",
                  transition: "boxShadow 0.2s ease-in 0.2s",
                  "&:hover": {
                    boxShadow: 2,
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  Skills
                </Typography>
              </Button>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Button
                variant="outlined"
                className={classes.listbutton}
                size="medium"
                color="inherit"
                elevation={8}
                sx={{
                  marginTop: -1,
                  boxShadow: "none",
                  borderRadius: 5,
                  border: "1px solid transparent",
                  transition: "boxShadow 0.6s ease-in 0.5s",
                  "&:hover": {
                    boxShadow: 2,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  style={{ textTransform: "none" }}
                  sx={{
                    m: 1,
                    justifyContent: "flex-start",
                  }}
                >
                  Work
                </Typography>
              </Button>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Button
                variant="outlined"
                className={classes.listbutton}
                size="medium"
                color="inherit"
                elevation={8}
                sx={{
                  marginTop: -1,
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "none",
                  borderRadius: 5,
                  border: "1px solid transparent",
                  transition: "boxShadow 0.6s ease-in 0.5s",
                  "&:hover": {
                    boxShadow: 2,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  style={{ textTransform: "none" }}
                  sx={{
                    m: 1,
                    justifyContent: "flex-start",
                  }}
                >
                  Blog
                </Typography>
              </Button>
            </ListItem>
            <ListItem onClick={handleDrawerClose}>
              <Button
                className={classes.listbutton}
                color="inherit"
                size="medium"
                variant="outlined"
                onClick={handleLightModeClick}
                sx={{
                  marginTop: -1,

                  borderRadius: 5,
                  boxShadow: 0,
                  border: "1px solid transparent",
                  transition: "border 0.6s ease-in 0.2s",
                  "&:hover": {
                    boxShadow: 2,
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  {isLightMode ? (
                    <LightModeIcon
                      sx={{
                        "&:hover": {
                          backgroundColor: "#fff",
                        },
                      }}
                    />
                  ) : (
                    <DarkModeOutlinedIcon
                      sx={{
                        "&:hover": {
                          backgroundColor: "#fff",
                        },
                      }}
                    />
                  )}
                </Typography>
              </Button>
            </ListItem>
          </List>
      </AppBar>
    </div>
  );
};

export default Navbar;
