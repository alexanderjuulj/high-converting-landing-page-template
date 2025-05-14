import CTACard from "@/components/ui/CTACard/CTACard";
import HeroActions from "@/components/ui/HeroActions/HeroActions";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <CTACard
      heading="Call to Action Card"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="/static/images/photo-1479030160180-b1860951d696.jpeg"
    >
      <HeroActions />
    </CTACard>
  );
};

export default CTASection;
