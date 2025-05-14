import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <Section size="3">
      <Box>
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pb="4">
          <Heading as="h2" size="8" align="center" m="0">
            Review Section
          </Heading>
          <Text as="p" size="3" align="center" color="gray">
            This is a placeholder for the testimonials. You can add your content
            here.
          </Text>
        </Flex>
      </Box>
    </Section>
  );
};

export default TestimonialsSection;
