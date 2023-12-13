import { Button, Typography } from "@mui/material";

const Bottom = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontSize: 15,
        }}
      >
        Hello, 👋🏾
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          fontSize: 24,
        }}
      >
        I&#39;m{" "}
        <span
          style={{
            fontSize: 24,
            color: "#000D11",
          }}
        >
          Bahati yves
        </span>{" "}
        ,<br />
        Software Developer <br />
      </Typography>
      <Button
        variant="outlined"
        disableRipple={true}
        sx={{
          fontSize: 20,
          border: 3,
          "&:hover": {
            border: 3,
            borderColor: "red",
            bgcolor: "#1D2D44",
            color: "white",
            lineHeight: 5,
          },
        }}
      >
        <Typography variant="h6">RESUME</Typography>
      </Button>
    </>
  );
};

export default Bottom;
