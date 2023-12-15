import { Typography } from "@mui/material";

const AboutText = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontSize: "clamp(15px, 2vw, 18px)",
          textAlign: "center",
          "@media (max-height: 680px)": {
            fontSize: "11px",
          },
        }}
      >
        Hello, I am Bahati Yves, an enthusiastic Software Developer with
        expertise in both Frontend and Backend development. I demonstrate
        effective teamwork and design solutions.
        <br></br>
        <br></br>
        As a Software Developer with experience, I am well-equipped to create
        user-friendly and visually appealing solutions. Additionally, I am Eager
        to contribute an well-equipped to thrive in dynamic software development
        roles. Feel free to reach out, ✌🏾
      </Typography>
    </>
  );
};

export default AboutText;
