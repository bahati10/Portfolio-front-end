import { Box } from "@mui/material";
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
          m: 2,
          // "& > :not(style)": {
          //   m: 2.5,
          //   width: {
          //     xs: 500,
          //     sm: 500,
          //     md: 500,
          //     lg: 500,
          //     xl: 500,
          //   },
          //   height: {
          //     xs: 500,
          //     sm: 500,
          //     md: 500,
          //     lg: 500,
          //     xl: 500,
          //   },
          // },
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
