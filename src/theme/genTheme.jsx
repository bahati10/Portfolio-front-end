import { createTheme } from "@mui/material";

const genTheme = createTheme({
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
    fontFamily: "Righteous",
    fontWeightLight: 700,
  },
});

export default genTheme;
