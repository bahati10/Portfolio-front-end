import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const PlatformIcons = () => {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          bgcolor: "#e9ecef",
          borderRadius: 8,
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "-10px",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/bahati-yves-439aab1a2/"
          target="_black"
          style={{
            display: "flex",
            textAlign: "center",
            color: "#000D11",
          }}
        >
          <LinkedInIcon
            sx={{
              fontSize: "21.5px",
            }}
          />
        </Link>
        <Link
          href="https://github.com/bahati10"
          target="_black"
          style={{
            display: "flex",
            textAlign: "center",
            color: "#000D11",
          }}
        >
          <GitHubIcon
            sx={{
              fontSize: "21.5px",
            }}
          />
        </Link>
        <Link
          href="mailto:bahatiyves10@gmail.com"
          target="_black"
          style={{
            display: "flex",
            textAlign: "center",
            color: "#000D11",
          }}
        >
          <Image src="/gmail.svg" alt="GitHub Icon" width={21} height={21} />
        </Link>
        <Link
          href="https://twitter.com/Bahati____"
          target="_black"
          style={{
            display: "flex",
            textAlign: "center",
            color: "#000D11",
          }}
        >
          <Image src="/x.svg" alt="GitHub Icon" width={21.5} height={21.5} />
        </Link>
      </Box>
    </>
  );
};

export default PlatformIcons;
