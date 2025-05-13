"use client";
import { partnerLogos } from "@/constants/partnerLogos";
import { Box, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Slider from "react-infinite-logo-slider";

/**
 * PartnerSection component displays a section highlighting partnerships with over 50 companies in Europe.
 *
 * It consists of a heading and a slider showcasing partner logos.
 * The layout is responsive, using a grid that adapts to different screen sizes.
 *
 * @component
 * @returns {JSX.Element} The rendered PartnerSection component.
 */

const PartnerSection: React.FC = () => {
  return (
    <Grid columns={{ initial: "1", lg: "6" }} gap="7" align="center">
      <Box gridColumn={{ initial: "1 / -1", lg: "1 / 3" }}>
        <Heading
          as="h2"
          size="4"
          weight="medium"
          align={{ initial: "center", lg: "left" }}
        >
          We are proud to have partnered with more than 50+ companies in Europe
        </Heading>
      </Box>
      <Box gridColumn={{ initial: "1 / -1", lg: "3 / 7" }}>
        <Slider
          width="150px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"var(--color-background)"}
        >
          {partnerLogos.map((logo, index) => (
            <Slider.Slide key={index}>
              <Image src={logo} alt={`logo ${index}`} width="80" height="80" />
            </Slider.Slide>
          ))}
        </Slider>
      </Box>
    </Grid>
  );
};

export default PartnerSection;
