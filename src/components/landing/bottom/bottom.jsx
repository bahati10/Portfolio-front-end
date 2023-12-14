import { Button, Typography } from "@mui/material";

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
          fontSize: 26,
          letterSpacing: "-0.6px",
          marginBottom: "-5px",
        }}
      >
        Hello, 👋🏾
      </Typography>
      <Typography
        variant="h6"
        sx={{
          letterSpacing: "-0.6px",
          fontSize: 26,
          marginBottom: "-5px",
        }}
      >
        I&#39;m{" "}
        <span
          style={{
            fontSize: 26,
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
          letterSpacing: "-0.6px",
          fontSize: 24,
        }}
      >
        Software Developer{" "}
      </Typography>
      <br />
      <Button
        variant="outlined"
        disableRipple={true}
        sx={{
          fontSize: 12,
          color: "#000D11",
          border: 2,
          borderRadius: 20,
          width: 100,
          height: 40,
          "&:hover": {
            border: 2,
          },
        }}
      >
        <Typography variant="h6">RESUME</Typography>
      </Button>
    </div>
  );
};

export default Bottom;
