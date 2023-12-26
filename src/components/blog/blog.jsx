import React from "react";
import { Box, Grid } from "@mui/material";
import BlogPaper from "./blogPaper";
import SearchBar from "./searchbar/search";
import Link from "next/link";

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
          gap: "30px",
          padding: "16px",
          textDecoration: "none",
        }}
      >
        <Link
          href="/single"
          style={{
            textDecoration: "none",
          }}
        >
          <BlogPaper />
        </Link>
        <Link
          href="/single"
          style={{
            textDecoration: "none",
          }}
        >
          <BlogPaper />
        </Link>
        <Link
          href="/single"
          style={{
            textDecoration: "none",
          }}
        >
          <BlogPaper />
        </Link>
        <Link
          href="/single"
          style={{
            textDecoration: "none",
          }}
        >
          <BlogPaper />
        </Link>
      </Box>
    </div>
  );
};

export default Blogging;
