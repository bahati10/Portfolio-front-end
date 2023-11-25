import React from "react";
import { AppBar, Toolbar, Typography, Button, Paper, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../theme/theme";
import { green, red } from "@mui/material/colors";
import photo from "../assets/photo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    flexDirection: "row",
  },
  title: {
    flexGrow: 1,
  },
  centerButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  centerUnits: {
    flexDirection: "row",
  },
}));

function Home() {
  const classes = useStyles();

  const test = false;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.centerButtons}>
          <Typography variant="h6" className={classes.title}>
            Bahati
          </Typography>
          <Button
            color="inherit"
            sx={[
              {
                background: (theme) => theme.palette.secondary.main,
                border: 5,
              },
              test && {
                border: 10,
                borderColor: "green",
              },
            ]}
          >
            Login
          </Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        className={classes.centerBox}
        sx={{
          "& > :not(style)": {
            m: 1,
            width: {
              xs: 500,
              sm: 500,
              md: 500,
              lg: 500,
              xl: 500,
            },
            height: {
              xs: 300,
              sm: 300,
              md: 300,
              lg: 300,
              xl: 300,
            },
          },
        }}
      >
        <Paper elevation={4} sx={{ padding: 0.4, borderRadius: 2 }}>
          <img
            src={photo}
            alt="Your Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Paper>

        <Paper elevation={4} sx={{ padding: 0.4, borderRadius: 2 }}>
          <img
            src={photo}
            alt="Your Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Paper>

        <Paper elevation={4} sx={{ padding: 0.4, borderRadius: 2 }}>
          <img
            src={photo}
            alt="Your Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Paper>

        <Paper elevation={4} sx={{ padding: 0.4, borderRadius: 2 }}>
          <img
            src={photo}
            alt="Your Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Paper>

        <Paper elevation={4} sx={{ padding: 0.4, borderRadius: 2 }}>
          <img
            src={photo}
            alt="Your Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Paper>

        <Paper elevation={4} sx={{ padding: 0.4, borderRadius: 2 }}>
          <img
            src={photo}
            alt="Your Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "inherit",
            }}
          />
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
