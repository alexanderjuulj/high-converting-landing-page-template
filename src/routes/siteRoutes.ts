import { Route } from "@/models/Routes";

export const siteRoutes = {
  // Home
  home: {
    path: "/",
    label: "Home",
  } as Route,

  // Nav
  nav: {
    features: {
      path: "/",
      label: "Features",
    } as Route,
    usp: {
      path: "/",
      label: "How It Works",
    } as Route,
    reviews: {
      path: "/",
      label: "Reviews",
    } as Route,
    faq: {
      path: "/",
      label: "FAQs",
    } as Route,
  },
};
