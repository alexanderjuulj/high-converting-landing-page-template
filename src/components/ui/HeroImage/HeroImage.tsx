"use client";
import { AspectRatio } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";

const HeroImage: React.FC = () => {
  return (
    <AspectRatio ratio={9 / 16}>
      <Image
        src="/static/images/photo-1479030160180-b1860951d696.jpeg"
        alt="Hero image"
        fill
        quality={50}
        style={{
          objectFit: "cover",
          borderRadius: "var(--radius-3)",
        }}
      />
    </AspectRatio>
  );
};

export default HeroImage;
