import { Box } from "@mui/material";
import Bottom from "../bottom/bottom";
import ProfileImage from "../profile/profileimage";

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
          border: 3,
          width: "100%",
          height: "100%",
          maxWidth: "120px",
          maxHeight: "120px",
          textAlign: "center",
          position: "relative",
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <ProfileImage imagePath="/tiny.png" />
      </Box>
      <Bottom />
    </div>
  );
};

export default Landing;
