import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

  return {

    rules: {

      userAgent: "*",

      allow: "/",
    },

    sitemap:
      "https://ps-finance-dashboard.vercel.app/sitemap.xml",
  };
}