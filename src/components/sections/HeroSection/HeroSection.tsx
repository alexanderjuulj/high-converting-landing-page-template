import { HeroActions, HeroImage } from "@/components";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <Section size="3">
      <Box>
        <Grid columns={{ initial: "1", lg: "6" }} gap="9" align="center">
          <Box gridColumn={{ initial: "1 / -1", lg: "1 / 5" }}>
            <Flex direction="column" gap="6">
              {/* Badge */}
              <Flex>
                <Badge
                  size="3"
                  variant="soft"
                  style={{ paddingLeft: ".375rem", paddingRight: "1rem" }}
                >
                  <Badge size="3" variant="solid">
                    Achievement
                  </Badge>
                  Rated amongst some <ArrowRightIcon />
                </Badge>
              </Flex>

              {/* Heading */}
              <Heading size="9" as="h1" m="0">
                High Converting Landing Page built with Next.js
              </Heading>

              {/* Paragraph */}
              <Text as="p" color="gray" size="3" m="0">
                This is a high converting landing page template built with
                Next.js and Radix UI. It is designed to be easy to use and
                customize, so you can get started quickly and start converting
                visitors into customers. The template is fully responsive and
                looks great on all devices.
              </Text>

              {/* Buttons */}
              <HeroActions />

              {/* Avatars */}
              <Flex gap="4" align="center">
                <Flex>
                  <Avatar
                    size="2"
                    variant="solid"
                    color="indigo"
                    fallback="Z"
                  />
                  <Avatar
                    size="2"
                    variant="solid"
                    color="cyan"
                    fallback="Y"
                    ml="-3"
                  />
                  <Avatar
                    size="2"
                    variant="solid"
                    color="orange"
                    fallback="X"
                    ml="-3"
                  />
                </Flex>
                <Text size="2" color="gray" highContrast weight="medium">
                  Join others who are using this template.
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box gridColumn={{ initial: "1 / -1", lg: "5 / 7" }}>
            <HeroImage />
          </Box>
        </Grid>
      </Box>
    </Section>
  );
};

export default HeroSection;
