import { Box, Container, Typography } from "@mui/material";
import DateofCreation from "./date";
import ProfileImage from "@/components/landing/profile/profileimage";

const BlogAuthor = () => {
  return (
    <Container
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "row",
        marginBottom: -15,
        marginLeft: -20,
      }}
    >
      <Box
        sx={{
          border: 1,
          width: "100%",
          height: "100%",
          maxWidth: "70px",
          maxHeight: "70px",
          position: "relative",
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          marginRight: "10px",
        }}
      >
        <ProfileImage
          imagePath="/profile.png"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            marginTop: 1,
            textAlign: "start",
            fontFamily: "Poppins",
            fontWeight: 500,
          }}
        >
          Bahati Yves <DateofCreation />
        </Typography>
      </Box>
    </Container>
  );
};

export default BlogAuthor;
