"use client";
import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import React from "react";
import Link from "next/link";
import NavDrawer from "./drawer";

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
    marginTop: "2px",
    width: "100%",
    height: "45px",
    fontSize: "30px",
    "&:hover": {
      backgroundColor: "#EBECEC",
    },
  },
  lists: {
    fontSize: 17,
    textTransform: "none",
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
        height: "60px",
        margin: 5,
        position: "relative",
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
          backdropFilter: "blur(1.2px)",
        }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "clamp(20px, 4vw, 26px)",
              }}
            >
              .bahati
            </Typography>
          </Link>
          <Hidden mdUp>
            <MenuIcon
              sx={{
                fontSize: "clamp(25px, 4vw, 26px)",
              }}
              onClick={handleDrawerOpen}
            ></MenuIcon>
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
        <NavDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          handleDrawerClose={handleDrawerClose}
          handleLightModeClick={handleLightModeClick}
          isLightMode={isLightMode}
        />
      </AppBar>
    </div>
  );
};

export default Navbar;
