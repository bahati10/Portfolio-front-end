import { Typography } from "@mui/material";
import Link from "next/link";

const Not = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#000D11",
            fontSize: 65,
            fontFamily: "Righteous",
          }}
        >
          <span style={{ color: "#1D2D44" }}>4</span>
          <span style={{ color: "#005FA2" }}>0</span>
          <span style={{ color: "#1D2D44" }}>4</span>
        </Typography>
        <Typography
          sx={{
            color: "#1D2D44",
            fontSize: "1rem",
            fontWeight: "bold",
            wordSpacing: 3,
          }}
        >
          Page Not found
        </Typography>
      </div>
    </div>
  );
};

export default Not;
