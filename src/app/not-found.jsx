import { Typography } from "@mui/material";
import Link from "next/link";

const Notfound = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#F3F4FC",
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
            fontSize: "5rem",
          }}
        >
          4<span style={{ color: "green" }}>0</span>4
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#000D11",
          }}
        >
          Page Not Found{" "}
          <span>
            {" "}
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/"
            >
              {" "}
              Go back Home
            </Link>
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default Notfound;
