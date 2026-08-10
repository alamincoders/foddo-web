import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "../styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2F7D5C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://foddo.itechills.com"),
  title: "FODDO — The Smart, Local-First Grocery & Shopping List App | Sub-3s Speed",
  description:
    "FODDO is the smart, privacy-first grocery shopping list app. Designed for sub-3-second speed, 100% on-device offline storage, Bazar Mode goal gradient tracking, and real-time family sync with zero sign-in walls.",
  applicationName: "FODDO",
  keywords: [
    "FODDO",
    "Foddo App",
    "Foddo Grocery List",
    "Foddo Shopping List",
    "Foddo Bazar",
    "Smart Grocery List",
    "Local-First Shopping App",
    "Bazar Mode",
    "Offline Grocery App",
    "Family Grocery Sync",
    "iTechills",
    "ফদ্দো",
    "স্মার্ট বাজার লিস্ট",
  ],
  authors: [{ name: "iTechills", url: "https://itechills.com" }],
  creator: "iTechills",
  publisher: "iTechills",
  category: "Shopping & Productivity",
  alternates: {
    canonical: "https://foddo.itechills.com",
    languages: {
      "en-US": "https://foddo.itechills.com",
      "bn-BD": "https://foddo.itechills.com",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "FODDO — The Smart, Local-First Grocery & Shopping List App",
    description:
      "Instant 3-second grocery list manager with 100% on-device local storage, Bazar Mode goal tracking, and zero account gates.",
    url: "https://foddo.itechills.com",
    siteName: "FODDO by iTechills",
    images: [
      {
        url: "/images/overview.png",
        width: 1200,
        height: 630,
        alt: "FODDO App Overview — 8-Screen Ecosystem",
      },
    ],
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@itechills",
    creator: "@itechills",
    title: "FODDO — The Smart, Local-First Grocery & Shopping List App",
    description:
      "Instant 3-second grocery list manager with 100% on-device local storage and zero sign-in requirements.",
    images: ["/images/overview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
