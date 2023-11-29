import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Box,
  ButtonGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F3F4FC",
  },
  appBar: {
    flexDirection: "row",
  },
  title: {
    flexGrow: 1,
  },
  centerButtons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button: {
    "&:not(:last-child)": {
      marginRight: theme.spacing(1),
      flex: 1,
    },
    "&:hover": {
      border: "1px solid #000D11",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isLightMode, setLightMode] = useState(
    localStorage.getItem("isLightMode") === "true"
  );

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
          <div className={classes.centerButtons}>
            <Button
              className={classes.button}
              color="inherit"
              sx={{ borderRadius: 5 }}
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                About
              </Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              sx={{ borderRadius: 5 }}
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                Skills
              </Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              sx={{ borderRadius: 5 }}
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                Work
              </Typography>
            </Button>
            <Button
              className={classes.button}
              color="inherit"
              sx={{ borderRadius: 5 }}
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                Blog
              </Typography>
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ border: "none" }}
              onClick={handleLightModeClick}
            >
              <Typography variant="h6" style={{ textTransform: "none" }}>
                <LightModeIcon
                  sx={{
                    color: isLightMode ? "green" : "#000D11",
                    fontSize: "2rem",
                  }}
                />
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
