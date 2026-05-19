import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl =
    "https://ps-finance-dashboard.vercel.app";

  const routes = [

    "",

    "/sip",

    "/lumpsum",

    "/fire",

    "/swp",

    "/goal-planner",

    "/dividend",

    "/compare",

    "/xirr",

    "/rebalancer",

    "/networth",

    "/montecarlo",

    "/cagr",

    "/tax",

    "/realestate-vs-sip",

    "/emi",

    "/retirement-stress",

    "/wealth-stories",

    "/about",

    "/privacy-policy",

    "/contact",
  ];

  return routes.map((route) => ({

    url: `${baseUrl}${route}`,

    lastModified: new Date(),

    changeFrequency: "weekly",

    priority: route === ""
      ? 1
      : 0.8,
  }));
}