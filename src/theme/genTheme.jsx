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
    h5: {
      fontFamily: "Righteous",
      color: "#000D11",
    },
    h6: {
      fontFamily: "Poppins",
      color: "#000D11",
      fontSize: 13,
      fontWeight: 550,
      wordSpacing: 4,
    },
  },
});

export default genTheme;
