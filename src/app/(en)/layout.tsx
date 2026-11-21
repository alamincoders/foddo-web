import type { Viewport } from "next";
import { RootShell, siteMetadata, viewportConfig } from "@/lib/shell";
import "../../styles/globals.css";

export const viewport: Viewport = viewportConfig;
export const metadata = siteMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
