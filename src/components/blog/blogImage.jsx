import { Box, Hidden } from "@mui/material";
import Image from "next/image";

const BlogImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        objectPosition: "center",
      }}
    >
      <Image
        src="/crystals.jpg"
        alt="Bahati Yves photo"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default BlogImage;
