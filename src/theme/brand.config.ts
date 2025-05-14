import { ThemeProps } from "@radix-ui/themes";

export const brand = {
  defaultLanguage: "en",
  company: {
    name: "Your Company Name",
    logo: {
      src: "/next.svg",
      alt: "Your Company Logo",
      width: 118.2,
      height: 24,
    },
  },
  theme: {
    appearance: "light",
    accentColor: "blue",
    grayColor: "slate",
    panelBackground: "solid",
    scaling: "100%",
    radius: "full",
  } as ThemeProps,
};
