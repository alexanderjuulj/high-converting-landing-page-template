import FeatureCard from "@/components/ui/FeatureCard/FeatureCard";
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <Box py="9">
      {/* Heading */}
      <Flex direction="column" gap="2" align="center" pt="9" pb="4">
        <Heading as="h2" size="8" align="center" m="0">
          Features Section
        </Heading>
        <Text as="p" size="3" align="center" color="gray">
          This is a placeholder for the Features Section. You can add your
          content here.
        </Text>
      </Flex>

      {/* Feature Cards */}
      <Flex gap="4" direction="column">
        <FeatureCard size="large" />

        <Grid columns={{ initial: "1", lg: "2" }} gap="4">
          <Box gridColumn={{ initial: "1 / -1", lg: "1 / 2" }}>
            <FeatureCard />
          </Box>
          <Box gridColumn={{ initial: "1 / -1", lg: "2 / 3" }}>
            <FeatureCard />
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default FeaturesSection;
