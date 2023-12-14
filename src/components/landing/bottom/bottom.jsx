import { Typography } from "@mui/material";
import PlatformIcons from "./platform";

const Bottom = () => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: "clamp(20px, 4vw, 26px)",
          letterSpacing: "-0.6px",
          marginTop: "10px",
          marginBottom: "-5px",
          fontWeight: "semibold",
        }}
      >
        Hello, 👋🏾
      </Typography>
      <Typography
        variant="h6"
        sx={{
          letterSpacing: "-0.6px",
          fontSize: "clamp(20px, 4vw, 26px)",
          marginBottom: "-5px",
          fontWeight: "semibold",
        }}
      >
        I&#39;m{" "}
        <span
          style={{
            fontSize: "clamp(20px, 4vw, 26px)",
            color: "#039BBD",
          }}
        >
          Bahati Yves
        </span>
        ,
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: "clamp(20px, 4vw, 26px)",
          letterSpacing: "-0.6px",
          fontWeight: "semibold",
          marginBottom: "7px",
        }}
      >
        Software Developer{" "}
      </Typography>
      <br />
      <PlatformIcons />
    </div>
  );
};

export default Bottom;
