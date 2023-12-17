import { Box, Typography } from "@mui/material";
import BlogPaper from "./blogPaper";

const Blogging = () => {
  return (
    <div
      style={{
        flexGrow: 1,
        maxWidth: "100vw",
        maxHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexGrow: 3,
          "& > :not(style)": {
            m: 1,
            width: {
              xs: 700,
              sm: 700,
              md: 700,
              lg: 700,
              xl: 700,
            },
            height: {
              xs: 500,
              sm: 500,
              md: 500,
              lg: 500,
              xl: 500,
            },
          },
        }}
      >
        <BlogPaper />
        <BlogPaper />
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
