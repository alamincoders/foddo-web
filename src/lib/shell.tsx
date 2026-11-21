import { Baloo_Da_2, Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BASE_URL, COPY, type Lang } from "./site";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });
const baloo = Baloo_Da_2({ variable: "--font-baloo", subsets: ["latin", "bengali"], weight: ["600", "700", "800"], display: "swap" });
const notoBn = Noto_Sans_Bengali({ variable: "--font-noto-bn", subsets: ["bengali"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

export const viewportConfig: Viewport = { themeColor: "#17724A", width: "device-width", initialScale: 1, maximumScale: 5 };

/** The <html> and <body> for one language. Each language has its own root layout so `lang` is right in the HTML. */
export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${jakarta.variable} ${baloo.variable} ${notoBn.variable} ${lang === "bn" ? "lang-bn" : ""} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
        <JsonLd lang={lang} />
        {children}
      </body>
    </html>
  );
}

export function siteMetadata(lang: Lang): Metadata {
  const copy = COPY[lang];
  const path = lang === "bn" ? "/bn" : "";
  const ogImage = lang === "bn" ? "/images/og-bn.png" : "/images/og.png";
  return {
    metadataBase: new URL(BASE_URL),
    title: copy.seo.title,
    description: copy.seo.description,
    applicationName: "Foddo",
    keywords: copy.seo.keywords,
    authors: [{ name: "iTechills", url: "https://itechills.com" }],
    creator: "iTechills",
    publisher: "iTechills",
    category: "Shopping",
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: { en: BASE_URL, bn: `${BASE_URL}/bn`, "x-default": BASE_URL },
    },
    icons: { icon: "/favicon.png", shortcut: "/icon.png", apple: "/icon.png" },
    openGraph: {
      title: copy.seo.ogTitle,
      description: copy.seo.ogDescription,
      url: `${BASE_URL}${path}`,
      siteName: "Foddo by iTechills",
      images: [{ url: ogImage, width: 1200, height: 630, alt: copy.seo.ogTitle }],
      locale: lang === "bn" ? "bn_BD" : "en_US",
      alternateLocale: lang === "bn" ? ["en_US"] : ["bn_BD"],
      type: "website",
    },
    twitter: { card: "summary_large_image", site: "@itechills", creator: "@itechills", title: copy.seo.ogTitle, description: copy.seo.ogDescription, images: [ogImage] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  };
}
