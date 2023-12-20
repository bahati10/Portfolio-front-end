import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import colors from "@/constants/colors/colors";

const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: "20ch",
        },
      }}
      noValidate
      autoComplete="off"
      display="flex"
      justifyContent="center"
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{
          fontSize: "40px",
        }}
      />
    </Box>
  );
};

export default SearchBar;
