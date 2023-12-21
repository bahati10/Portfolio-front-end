import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EEE5E9",
    },
    secondary: {
      main: "#78BC61",
    },
  },
  background: {
    primary: {
      main: "#000D11",
    },
  },
  typography: {
    h5: {
      fontFamily: "Righteous",
      color: "#000D11",
    },
    h6: {
      fontFamily: "Poppins",
      color: "#000D11",
      fontSize: 14.5,
      fontWeight: 600,
      wordSpacing: 2,
    },
  },
});

export default theme;
