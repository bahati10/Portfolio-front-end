import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import BlogAuthor from "./author";

const Single = () => {
  return (
    <Container
      sx={{
        maxWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          width: "600px",
          height: "auto",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Lorem Lorem Ipsum Neque porro quisquam est
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "400px",
            marginBottom: 2,
          }}
        >
          <Image
            style={{
              borderRadius: 12,
            }}
            src="/empty.jpg"
            alt="Bahati Yves photo"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <BlogAuthor />
        <Typography variant="body2">
          Հայերեն Shqip ‫العربية Български Català 中文简体 Hrvatski Česky Dansk
          Nederlands English Eesti Filipino Suomi Français ქართული Deutsch
          Ελληνικά ‫עברית हिन्दी Magyar Indonesia Italiano Latviski Lietuviškai
          македонски Melayu Norsk Polski Português Româna Pyccкий Српски
          Slovenčina Slovenščina Español Svenska ไทย Türkçe Українська Tiếng
          Việt Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit..." "There is no one who
          loves pain itself, who seeks after it and wants to have it, simply
          because it is pain..." What is Lorem Ipsum? Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          <br />
          <br />
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Why do we use it? It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          <br />
          <br />
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like). Where does it come from? Contrary to
          popular belief, Lorem Ipsum is not simply random text. It has roots in
          a piece of classical Latin literature from 45 BC, making it over 2000
          years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          <br />
          <br />
          like best, every pleasure is to be welcomed and every pain avoided.
          But in certain circumstances and owing to the claims of duty or the
          obligations of business it will frequently occur that pleasures have
          to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains." help@lipsum.com Privacy Policy ·
          Do Not Sell My Personal Information · Change Consent ·
        </Typography>
      </Box>
    </Container>
  );
};

export default Single;
