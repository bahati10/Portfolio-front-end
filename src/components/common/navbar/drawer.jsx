import React from "react";
import { Drawer, List, ListItem, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 230,
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
    fontSize: 15,
    textTransform: "none",
  },
}));

const NavDrawer = ({
  open,
  onClose,
  handleDrawerClose,
  handleLightModeClick,
  isLightMode,
}) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListItem onClick={handleDrawerClose}>
          <Link
            href="/about"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              className={classes.listbutton}
              sx={{
                marginTop: -1,
                borderRadius: 5,
                border: "none",
                boxShadow: "none",
              }}
            >
              <Typography variant="h6" className={classes.lists}>
                About
              </Typography>
            </Button>
          </Link>
        </ListItem>
        <ListItem onClick={handleDrawerClose}>
          <Link
            href="/skills"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
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
              <Typography variant="h6" className={classes.lists}>
                Skills
              </Typography>
            </Button>
          </Link>
        </ListItem>
        <ListItem onClick={handleDrawerClose}>
          <Link
            href="/work"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
            {" "}
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
              <Typography variant="h6" className={classes.lists}>
                Work
              </Typography>
            </Button>
          </Link>
        </ListItem>
        <ListItem onClick={handleDrawerClose}>
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              width: "100%",
            }}
          >
            {" "}
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
              <Typography variant="h6" className={classes.lists}>
                Blog
              </Typography>
            </Button>
          </Link>
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
                  className={classes.lists}
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
  );
};

export default NavDrawer;
