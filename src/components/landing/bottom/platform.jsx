import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";

const PlatformIcons = () => {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          bgcolor: "#e9ecef",
          padding: "0 20px",
          borderRadius: 8,
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "-10px",
        }}
      >
        <LinkedInIcon
          sx={{
            fontSize: "clamp(18px, 4vw, 24px)",
          }}
        />
        <GitHubIcon
          sx={{
            fontSize: "clamp(18px, 4vw, 24px)",
          }}
        />
        <MailIcon
          sx={{
            fontSize: "clamp(18px, 4vw, 24px)",
          }}
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/svg"
          sizes="any"
        />
      </Box>
    </>
  );
};

export default PlatformIcons;
