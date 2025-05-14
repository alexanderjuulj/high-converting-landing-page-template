import USPItem from "@/components/ui/USPItem/USPItem";
import { uniqueSellingPoints } from "@/constants/uniqueSellingPoints";
import { Flex, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

const USPSection: React.FC = () => {
  return (
    <Section size="1">
      <Flex gap="6" direction="column">
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pt="9" pb="4">
          <Heading as="h2" size="8" align="center" m="0">
            Why Choose Us Section
          </Heading>
          <Text as="p" size="3" align="center" color="gray">
            This is a placeholder for the Why Choose Us Section. You can add
            your content here.
          </Text>
        </Flex>

        {/* USP Items */}
        <Flex
          direction={{ initial: "column", lg: "row" }}
          gap="6"
          justify="between"
        >
          {uniqueSellingPoints.map((usp, index) => (
            <USPItem
              key={index}
              heading={usp.heading}
              description={usp.description}
              icon={usp.icon}
            />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default USPSection;
