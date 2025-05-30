import "@radix-ui/themes/styles.css";
import "@/styles/main.scss";
import { Box, Flex, Theme } from "@radix-ui/themes";
import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import { brand } from "@/theme/brand.config";

export const metadata: Metadata = {
  title: "High Converting Landing Page",
  description:
    "A high converting landing page template built with Next.js and Radix UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={brand.defaultLanguage}>
      <body>
        <Theme {...brand.theme}>
          <Box>
            <Flex direction="column" minHeight="100vh">
              <Navbar />
              <Box flexGrow="1">{children}</Box>
              <Footer />
            </Flex>
          </Box>
        </Theme>
      </body>
    </html>
  );
}
