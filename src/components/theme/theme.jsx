import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEE5E9",
    },
    secondary: {
      main: "#000D11",
    },
  },
  background: {
    primary: {
      main: "#000D11",
    },
  },
  typography: {
    h4: {
      fontFamily: "Roboto",
      color: "#000D11",
      fontSize: 26,
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Roboto",
      fontWeight: 450,
      color: "#000D11",
    },
    h6: {
      fontFamily: "Poppins",
      color: "#000D11",
      fontSize: 14.5,
      fontWeight: 600,
      wordSpacing: 2,
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: 15,
      fontWeight: "regular",
      letterSpacing: -0.3,
    },
  },
});

export default theme;
