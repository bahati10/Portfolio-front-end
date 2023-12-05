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
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

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
    width: "84px",
    height: "33px",
  },
  listbutton: {
    width: "100%",
    height: "40px",
  },
  hideOnLargerScreens: {
    [theme.breakpoints.up("800")]: {
      display: "none",
    },
  },
  hideOnSmallerScreens: {
    [theme.breakpoints.down("800")]: {
      display: "none",
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
  };

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
              disableRipple={true}
              sx={{
                borderRadius: 5,
                paddingLeft: "20px",
                paddingRight: "20px",
                margin: "0 10px 0 10px",
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textTransform: "none",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                About
              </Typography>
            </Button>
            <Button
              size="large"
              className={classes.button}
              color="inherit"
              disableRipple={true}
              sx={{
                borderRadius: 5,
                paddingLeft: "20px",
                paddingRight: "20px",
                margin: "0 10px 0 10px",
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textTransform: "none",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                Skills
              </Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              disableRipple={true}
              sx={{
                borderRadius: 5,
                paddingLeft: "1px",
                paddingRight: "1px",
                paddingLeft: "20px",
                paddingRight: "20px",
                margin: "0 10px 0 10px",
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textTransform: "none",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                Work
              </Typography>
            </Button>
            <Button
              size="large"
              className={classes.button}
              color="inherit"
              disableRipple={true}
              sx={{
                borderRadius: 5,
                paddingLeft: "20px",
                paddingRight: "20px",
                margin: "0 10px 0 10px",
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textTransform: "none",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                Blog
              </Typography>
            </Button>
            <Button
              size="large"
              color="inherit"
              disableRipple={true}
              onClick={handleLightModeClick}
              sx={{
                "&:hover": {
                  backgroundColor: "#F3F4FC",
                },
              }}
            >
              <Typography
                variant="h6"
                style={{
                  textTransform: "none",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                {isLightMode ? (
                  <LightModeIcon
                    sx={{
                      borderRadius: "100%",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{
                      borderRadius: "100%",
                      boxShadow: "none",
                      width: "30px",
                      height: "30px",
                    }}
                  />
                )}
              </Typography>
            </Button>
          </div>
        </Toolbar>

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
                disableRipple={true}
                sx={{
                  marginTop: -1,
                  borderRadius: 5,
                  boxShadow: "2px transparent",
                  border: "1px solid transparent",
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
                disableRipple={true}
                sx={{
                  marginTop: -1,
                  borderRadius: 5,
                  boxShadow: "none",
                  border: "1px solid transparent",
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
                disableRipple={true}
                sx={{
                  marginTop: -1,
                  boxShadow: "none",
                  borderRadius: 5,
                  border: "1px solid transparent",
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
                disableRipple={true}
                sx={{
                  marginTop: -1,
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "none",
                  borderRadius: 5,
                  border: "1px solid transparent",
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
                disableRipple={true}
                onClick={handleLightModeClick}
                sx={{
                  marginTop: -1,
                  borderRadius: 5,
                  boxShadow: 0,
                  border: "1px solid transparent",
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
        </Drawer>
      </AppBar>
    </div>
  );
};

export default Navbar;
