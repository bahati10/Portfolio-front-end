import { Typography, Box } from "@mui/material";
import Resume from "../landing/bottom/resume";
import Platform from "./platform";
import AboutText from "./aboutText";
import AboutImage from "./image";

const AboutPage = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "700px",
        padding: "50px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AboutImage />
      <Box>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontFamily: "Poppins",
            color: "#ced4da",
            fontWeight: "Bold",
            letterSpacing: "-3px",
            "@media (max-height: 680px)": {
              fontSize: "2rem",
            },
          }}
        >
          Know <span style={{ color: "#6c757d" }}>Me</span>
        </Typography>
        <Box
          sx={{
            width: "200px",
            margin: "0 auto",
            marginBottom: "-5px",
            marginTop: "15px",
          }}
        >
          <Platform />
        </Box>
        <AboutText />
        <Box
          sx={{
            textAlign: "center",
            margin: "20px 0",
            marginTop: "15px",
          }}
        >
          <Resume />
        </Box>
      </Box>
    </div>
  );
};

export default AboutPage;
