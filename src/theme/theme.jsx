import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEE5E9",
    },
    secondary: {
      main: "#ffffff",
      odd: "#000",
    },
  },
  background: {
    primary: {
      main: "#000D11",
    },
  },
  typography: {
    fontFamily: "Righteous, sans-serif",
  },
});

export default theme;
