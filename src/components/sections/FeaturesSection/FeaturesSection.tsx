import FeatureCard from "@/components/ui/FeatureCard/FeatureCard";
import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <Section size="3">
      <Box>
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pb="4">
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
          <FeatureCard
            size="large"
            heading="Highlighted Feature 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis, nunc nec pulvinar consequat, erat lectus porta nisi, sed pellentesque ligula nunc in dolor.  Pellentesque maximus augue in odio placerat, non auctor massa aliquam."
            image="/static/images/photo-1479030160180-b1860951d696.jpeg"
          />

          <Grid columns={{ initial: "1", lg: "2" }} gap="4">
            <Box gridColumn={{ initial: "1 / -1", lg: "1 / 2" }}>
              <FeatureCard
                heading="Highlighted Feature 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis, nunc nec pulvinar consequat, erat lectus porta nisi."
                image="/static/images/photo-1479030160180-b1860951d696.jpeg"
              />
            </Box>
            <Box gridColumn={{ initial: "1 / -1", lg: "2 / 3" }}>
              <FeatureCard
                heading="Highlighted Feature 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis, nunc nec pulvinar consequat, erat lectus porta nisi."
                image="/static/images/photo-1479030160180-b1860951d696.jpeg"
              />
            </Box>
          </Grid>
        </Flex>
      </Box>
    </Section>
  );
};

export default FeaturesSection;
