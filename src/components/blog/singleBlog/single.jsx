import { Box, Container, Typography } from "@mui/material";
import BlogAuthor from "./author";
import SingleBlogImage from "./singleBlogImage";
import BlogParagraph from "./paragraph";
import BlogTitle from "./blogcomponents/Title";

const Single = () => {
  return (
    <Container
      sx={{
        maxWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          width: "600px",
          height: "auto",
          flexWrap: "wrap",
        }}
      >
        <BlogTitle />
        <SingleBlogImage />
        <BlogAuthor />
        <BlogParagraph />
        <BlogParagraph />
        <BlogParagraph />
      </Box>
    </Container>
  );
};

export default Single;
