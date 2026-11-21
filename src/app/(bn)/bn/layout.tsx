import type { Viewport } from "next";
import { RootShell, siteMetadata, viewportConfig } from "@/lib/shell";
import "../../../styles/globals.css";

export const viewport: Viewport = viewportConfig;
export const metadata = siteMetadata("bn");

export default function BanglaLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="bn">{children}</RootShell>;
}
