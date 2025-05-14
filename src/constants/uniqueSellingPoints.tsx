import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { USPItemProps } from "@/components/ui/USPItem/USPItem.types";

export const uniqueSellingPoints: USPItemProps[] = [
  {
    heading: "Fast and Reliable",
    description:
      "Experience lightning-fast performance and reliability with our service.",
    icon: <MagnifyingGlassIcon width="28" height="28" />,
  },
  {
    heading: "User-Friendly",
    description:
      "Navigate easily with our intuitive and user-friendly interface.",
    icon: <MagnifyingGlassIcon width="28" height="28" />,
  },
  {
    heading: "Customer Support",
    description: "Get assistance anytime with our 24/7 customer support team.",
    icon: <MagnifyingGlassIcon width="28" height="28" />,
  },
  {
    heading: "Secure and Private",
    description:
      "Your data is safe with us. We prioritize your security and privacy.",
    icon: <MagnifyingGlassIcon width="28" height="28" />,
  },
];
