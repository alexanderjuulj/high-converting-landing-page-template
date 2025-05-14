import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { socialLinks } from "@/routes/socialLinks";
import { brand } from "@/theme/brand.config";

/**
 * Footer component that displays the site copyright and social media links.
 *
 * @remarks
 * - Uses responsive layout with different paddings and flex directions for initial and large (`lg`) breakpoints.
 * - Displays the current year and a customizable company name.
 * - Renders a list of social media links provided by the `socialLinks` array.
 *
 * @returns The footer section of the page.
 */

const Footer: React.FC = () => {
  return (
    <Box>
      <Container py={{ initial: "6", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex
          direction={{ initial: "column", lg: "row" }}
          align={{ initial: "center", lg: "center" }}
          justify={{ initial: "center", lg: "between" }}
          gap="4"
        >
          {/* Copyright */}
          <Box>
            <Text size="2" color="gray">
              &copy; {new Date().getFullYear()} {brand.company.name}. All rights
              reserved.
            </Text>
          </Box>

          {/* Social Media Links */}
          <Flex gap="4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank">
                <Text size="2" color="gray" highContrast>
                  {link.name}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
