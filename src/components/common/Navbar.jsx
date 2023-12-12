"use client";
import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  Hidden,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import React from "react";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 230,
  },
  menubutton: {
    "&:hover": {
      border: "1px solid #000D11",
      transition: "background 1s, color 1s",
    },
  },
  listbutton: {
    width: "100%",
    height: "40px",
    "&:hover": {
      backgroundColor: "#EBECEC",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [isLightMode, setLightMode] = useState(
    typeof window !== "undefined" &&
      window.localStorage.getItem("isLightMode") === "true"
  );

  const handleLightModeClick = () => {
    setLightMode(!isLightMode);
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem("isLightMode", isLightMode);
  }

  return (
    <div
      style={{
        flexGrow: 1,
        weight: "100px",
        height: "100px",
        margin: 5,
        position: "fixed",
        width: "100%",
        top: 0,
        right: 0,
        zIndex: 1100,
        opacity: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F3F4FC",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          backdropFilter: "blur(3px)",
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5">.bahati</Typography>
          <Hidden mdUp>
            <MenuIcon onClick={handleDrawerOpen}></MenuIcon>
          </Hidden>
          <Hidden mdDown>
            <div
              style={{
                border: 4,
                display: "flex",
              }}
            >
              <Button
                color="inherit"
                disableRipple={true}
                sx={{
                  borderRadius: 5,
                  boxShadow: "none",
                  border: "none",
                  width: "84px",
                  height: "33px",
                  "&:hover": {
                    backgroundColor: "#EBECEC",
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  <Link
                    href="/about"
                    style={{
                      textDecoration: "none",
                      color: "#000D11",
                    }}
                  >
                    About
                  </Link>
                </Typography>
              </Button>
              <Button
                size="large"
                color="inherit"
                disableRipple={true}
                sx={{
                  borderRadius: 5,
                  margin: "0 10px 0 10px",
                  boxShadow: "none",
                  width: "84px",
                  height: "33px",
                  "&:hover": {
                    backgroundColor: "#EBECEC",
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  <Link
                    href="/skills"
                    style={{
                      textDecoration: "none",
                      color: "#000D11",
                    }}
                  >
                    Skills
                  </Link>
                </Typography>
              </Button>
              <Button
                size="large"
                color="inherit"
                disableRipple={true}
                sx={{
                  borderRadius: 5,
                  boxShadow: "none",
                  width: "84px",
                  height: "33px",
                  "&:hover": {
                    backgroundColor: "#EBECEC",
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  <Link
                    href="/work"
                    style={{
                      textDecoration: "none",
                      color: "#000D11",
                    }}
                  >
                    Work
                  </Link>
                </Typography>
              </Button>
              <Button
                size="large"
                color="inherit"
                disableRipple={true}
                sx={{
                  borderRadius: 5,
                  margin: "0 10px 0 10px",
                  boxShadow: "none",
                  width: "84px",
                  height: "33px",
                  "&:hover": {
                    backgroundColor: "#EBECEC",
                  },
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  <Link
                    href="/Blog"
                    style={{
                      textDecoration: "none",
                      color: "#000D11",
                    }}
                  >
                    Blog
                  </Link>
                </Typography>
              </Button>
              <span
                onClick={handleLightModeClick}
                style={{
                  paddingLeft: "26px",
                  paddingRight: "26px",
                }}
              >
                {isLightMode ? (
                  <LightModeIcon
                    sx={{
                      borderRadius: "100%",
                      boxShadow: "none",
                      width: "30px",
                      height: "30px",
                      "&:hover": {
                        backgroundColor: "#F3F4FC",
                      },
                    }}
                  />
                ) : (
                  <DarkModeOutlinedIcon
                    sx={{
                      borderRadius: "100%",
                      boxShadow: "none",
                      width: "30px",
                      height: "30px",
                      "&:hover": {
                        backgroundColor: "#F3F4FC",
                      },
                    }}
                  />
                )}
              </span>
            </div>
          </Hidden>
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
                sx={{
                  marginTop: -1,
                  borderRadius: 5,
                  border: "none",
                  boxShadow: "none",
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
                  border: "none",
                  boxShadow: "none",
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
                  borderRadius: 5,
                  border: "none",
                  boxShadow: "none",
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
                  borderRadius: 5,
                  border: "none",
                  boxShadow: "none",
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
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <Typography variant="h6" style={{ textTransform: "none" }}>
                  {isLightMode ? (
                    <LightModeIcon
                      sx={{
                        "&:hover": {
                          backgroundColor: "#EBECEC",
                        },
                      }}
                    />
                  ) : (
                    <DarkModeOutlinedIcon
                      sx={{
                        "&:hover": {
                          backgroundColor: "#EBECEC",
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
