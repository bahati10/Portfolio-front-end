import React from "react";
import { Box, Grid } from "@mui/material";
import BlogPaper from "./blogPaper";
import SearchBar from "./searchbar/search";

const Blogging = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <SearchBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px", // Adjust the space between cards
          padding: "16px", // Add padding for space on the sides
        }}
      >
        <BlogPaper />
        <BlogPaper />
        <BlogPaper />
        <BlogPaper />
        <BlogPaper />
      </Box>
    </div>
  );
};

export default Blogging;
