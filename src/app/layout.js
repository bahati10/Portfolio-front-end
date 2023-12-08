import ThemeRegistry from "@/components/theme/ThemeRegistry";

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}