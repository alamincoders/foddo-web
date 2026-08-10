import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foddo | Local-First Smart Grocery & Shopping List",
    short_name: "Foddo",
    description:
      "Instant 3-second grocery list manager with 100% on-device local storage, Bazar Mode goal tracking, and zero account gates.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF7",
    theme_color: "#2F7D5C",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
