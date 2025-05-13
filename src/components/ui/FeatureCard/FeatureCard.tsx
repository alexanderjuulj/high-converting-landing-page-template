"use client";
import { AspectRatio, Box, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import { FeatureCardProps } from "./FeatureCard.types";

const FeatureCard: React.FC<FeatureCardProps> = ({ size }) => {
  const isLarge = size === "large";

  return (
    <Box className="feature-card">
      <Grid columns={{ initial: "1", lg: "6" }} gap="4">
        <Box
          gridColumn={{ initial: "1 / -1", lg: "1 / 5" }}
          gridRow={isLarge ? "1" : "1"}
          py="3"
        >
          <Heading as="h3" size="7" weight="bold">
            Quick start
          </Heading>
          <Text as="p" color="gray" size="3">
            Get started with Radix UI and Tailwind CSS in just a few minutes.
            This template provides a solid foundation for your next project.
          </Text>
        </Box>
        <Box
          gridColumn={
            isLarge
              ? { initial: "1 / -1", lg: "5 / 7" }
              : { initial: "1 / -1", lg: "2 / 6" }
          }
          gridRow={isLarge ? { initial: "2", lg: "1" } : "2"}
        >
          <AspectRatio ratio={isLarge ? 4 / 5 : 4 / 3}>
            <Image
              src="/static/images/photo-1479030160180-b1860951d696.jpeg"
              alt="Hero image"
              fill
              quality={50}
              style={{
                objectFit: "cover",
                borderRadius: "var(--radius-3) var(--radius-3) 0 0",
              }}
            />
          </AspectRatio>
        </Box>
      </Grid>
    </Box>
  );
};

export default FeatureCard;
