import { Box, Paper } from "@mui/material";
import Image from "next/image";

const SingleBlogImage = () => {
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          margin: "20px 0px",
          borderRadius: 12,
        }}
      >
        <Image
          style={{
            borderRadius: 12,
          }}
          src="/empty.jpg"
          alt="Bahati Yves photo"
          layout="fill"
          objectFit="cover"
        />
      </Paper>
    </>
  );
};

export default SingleBlogImage;
