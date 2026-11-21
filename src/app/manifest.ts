import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Foddo: Shopping List for Bangla & English",
    short_name: "Foddo",
    description:
      "A shopping list you can talk or type to, in Bangla and English. Works offline, no sign-in, no ads.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F7F1",
    theme_color: "#17724A",
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
