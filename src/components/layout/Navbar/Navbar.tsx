"use client";
import React from "react";
import { Container, Box, Button, Grid, Flex } from "@radix-ui/themes";
import { siteRoutes } from "@/routes/siteRoutes";
import { Nav } from "@/components";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/favicon.ico";

/**
 * Navbar component that renders the main navigation bar for the application.
 *
 * The Navbar includes:
 * - A logo section that links to the home page.
 * - A navigation menu.
 * - A call-to-action (CTA) button.
 *
 * The layout is responsive, adjusting grid columns and alignment for different screen sizes.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */

const Navbar: React.FC = () => {
  return (
    <Box>
      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Grid align="center" columns={{ initial: "3", lg: "6" }} gap="4">
          {/* Logo */}
          <Flex gridColumn={{ initial: "1 / 2", lg: "1 / 3" }} gridRow="1">
            <Link href={siteRoutes.home.path}>
              <Image src={logo} alt="Logo" width={32} height={32} />
            </Link>
          </Flex>

          {/* Nav */}
          <Flex
            justify={{ initial: "end", lg: "center" }}
            gridColumn={{ initial: "3 / 4", lg: "3 / 5" }}
            gridRow="1"
          >
            <Nav />
          </Flex>

          {/* CTA */}
          <Flex
            justify={{ initial: "center", lg: "end" }}
            gridColumn={{ initial: "2 / 3", lg: "5 / 7" }}
            gridRow="1"
          >
            <Button size="2">CTA Title</Button>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
