import { Button, Typography } from "@mui/material";
import Link from "next/link";

const Resume = () => {
  return (
    <>
      <Link href="/Resume.pdf" target="_blank">
        <Button
          variant="outlined"
          disableRipple={true}
          sx={{
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
          {" "}
          <Typography
            variant="h6"
            sx={{
              fontSize: 11.7,
              fontWeight: "semibold",
            }}
          >
            RESUME
          </Typography>
        </Button>
      </Link>
    </>
  );
};

export default Resume;
