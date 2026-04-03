import { MetadataRoute } from "next";

const siteUrl = "https://dhlananh-dev-portfolio.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
