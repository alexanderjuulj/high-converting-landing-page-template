import {
  CTASection,
  FAQSection,
  FeaturesSection,
  HeroSection,
  PartnerSection,
  TestimonialsSection,
  USPSection,
} from "@/components";
import { Box, Container, Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box>
      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9">
          <HeroSection />
          <PartnerSection />
          <FeaturesSection />
          <USPSection />
        </Flex>
      </Container>

      {/* Fullwidth Testimonials Section */}
      <Flex direction="column" py="9">
        <TestimonialsSection />
      </Flex>

      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9">
          <FAQSection />
          <CTASection />
        </Flex>
      </Container>
    </Box>
  );
}
