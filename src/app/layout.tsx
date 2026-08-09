import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foddo.app"),
  title: "FODDO | Local-First Smart Grocery & Shopping List",
  description:
    "FODDO is a privacy-focused, local-first smart grocery list app. Designed for 3-second instant utility, offline operation, Bazar Mode goal gradient tracking, and family sync.",
  keywords: [
    "FODDO",
    "Grocery List",
    "Shopping List App",
    "Local-First",
    "Bazar Mode",
    "Smart Grocery App",
    "Privacy Focused",
  ],
  authors: [{ name: "FODDO Team" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "FODDO | Local-First Smart Grocery & Shopping List",
    description:
      "Instant 3-second grocery list manager with local SQLite storage, Bazar Mode goal tracking, and zero account gates.",
    url: "https://foddo.app",
    siteName: "FODDO",
    images: [
      {
        url: "/images/overview.png",
        width: 1200,
        height: 630,
        alt: "FODDO App Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FODDO | Local-First Smart Grocery & Shopping List",
    description:
      "Instant 3-second grocery list manager with local SQLite storage and zero sign-in requirements.",
    images: ["/images/overview.png"],
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
        {children}
      </body>
    </html>
  );
}

