import { Box } from "@mui/material";
import Image from "next/image";
import Bottom from "./bottom";

const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          border: 4,
          width: "100%",
          height: "100%",
          maxWidth: "150px",
          maxHeight: "150px",
          textAlign: "center",
          position: "relative",
          borderRadius: "100%",
          overflow: "hidden",
          "@media (max-width: 600px)": {
            maxWidth: "200px",
            maxHeight: "200px",
          },
          //   "@media (min-width: 960px)": {
          //     maxWidth: "200px",
          //     maxHeight: "200px",
          //   },
        }}
      >
        <Image
          src="/tiny.png"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Bottom />
    </div>
  );
};

export default Landing;
