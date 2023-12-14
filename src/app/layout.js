import Navbar from "@/components/common/navbar/Navbar";
import ThemeRegistry from "@/components/theme/ThemeRegistry";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{backgroundColor: "#F3F4FC"}}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Navbar/>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
