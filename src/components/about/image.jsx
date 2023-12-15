import { Box } from "@mui/material";
import ProfileImage from "../landing/profile/profileimage";

const AboutImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: 3,
        width: "100%",
        height: "100%",
        maxWidth: "160px",
        maxHeight: "160px",
        position: "relative",
        borderRadius: "50%",
        overflow: "hidden",
        flexShrink: 0,
        "@media (max-height: 680px)": {
          maxWidth: "80px",
          maxHeight: "80px",
        },
      }}
    >
      <ProfileImage
        imagePath="/profile.png"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default AboutImage;
