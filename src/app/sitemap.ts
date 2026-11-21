import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const scenes = ["empty", "list", "basket", "receipt", "restock", "history"];
  const languages = { en: BASE_URL, bn: `${BASE_URL}/bn` };
  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
      images: [`${BASE_URL}/images/og.png`, ...scenes.map((s) => `${BASE_URL}/images/app/en/light-${s}.png`)],
    },
    {
      url: `${BASE_URL}/bn`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages },
      images: [`${BASE_URL}/images/og-bn.png`, ...scenes.map((s) => `${BASE_URL}/images/app/bn/light-${s}.png`)],
    },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "monthly", priority: 0.4 },
  ];
}
