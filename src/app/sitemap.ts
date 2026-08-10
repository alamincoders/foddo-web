import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://foddo.itechills.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [
        `${baseUrl}/images/overview.png`,
        `${baseUrl}/images/empty-screen.png`,
        `${baseUrl}/images/bazar-mode.png`,
        `${baseUrl}/images/lists.png`,
        `${baseUrl}/images/family-explaination.png`,
        `${baseUrl}/images/settings.png`,
        `${baseUrl}/images/smart-shopping-breakdown.png`,
        `${baseUrl}/images/cta.png`,
      ],
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
