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
          maxWidth: "140px",
          maxHeight: "140px",
          textAlign: "center",
          position: "relative",
          borderRadius: "100%",
          overflow: "hidden",
          "@media (max-width: 600px)": {
            maxWidth: "200px",
            maxHeight: "200px",
          },
        }}
      >
        <ProfileImage />
      </Box>
      <Bottom />
    </div>
  );
};

export default Landing;
