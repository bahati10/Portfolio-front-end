import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BlogPaper = () => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        margin: "10px",
        maxWidth: "500px",
      }}
    >
      <CardMedia
        sx={{ height: 300, objectFit: "cover" }}
        image="/empty.jpg"
        title="black sand"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Black sand
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          enim recusandae odio obcaecati odit natus expedita unde nisi eligendi
          ipsa nostrum inventore impedit consequatur, nihil commodi
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPaper;
