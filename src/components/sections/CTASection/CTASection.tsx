import { Flex, Heading, Section, Text, Card } from "@radix-ui/themes";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <Section size="3">
      <Card size="5" variant="surface">
        {/* Heading */}
        <Flex
          direction="column"
          gap="2"
          gridColumn={{ initial: "1 / -1", lg: "1 / 3" }}
        >
          <Heading as="h2" size="8" m="0">
            CTA Heading
          </Heading>
          <Text as="p" size="3" color="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Flex>
      </Card>
    </Section>
  );
};

export default CTASection;
