"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowDownToLine, ShieldCheck, Zap, ShoppingBag } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02] shrink-0">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary shadow-sm shadow-primary/20">
            <Image
              src="/icon.png"
              alt="Foddo Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-foreground font-sans">
              Foddo
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-primary uppercase">
              Local-First
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-3.5 xl:gap-6 2xl:gap-7 lg:flex">
          <Link
            href="#features"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="#speed"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            Instant Speed
          </Link>
          <Link
            href="#smart-input"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            Smart Parser
          </Link>
          <Link
            href="#bazar-mode"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            Bazar Mode
          </Link>
          <Link
            href="#privacy"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            href="#faq"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="text-[13px] xl:text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-primary"
          >
            Legal
          </Link>
        </nav>

        {/* Play Store CTA */}
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-semibold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] xl:gap-2 xl:px-4 xl:py-2.5 xl:text-sm"
          >
            <ArrowDownToLine className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
            <span>Get on Play Store</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-surface hover:text-foreground focus:outline-none"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col space-y-3">
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              <ShoppingBag className="h-5 w-5 text-primary" />
              Features
            </Link>
            <Link
              href="#speed"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              <Zap className="h-5 w-5 text-accent" />
              Instant Speed (TTFV)
            </Link>
            <Link
              href="#smart-input"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              <Zap className="h-5 w-5 text-primary" />
              Smart Parser (Multilingual)
            </Link>
            <Link
              href="#bazar-mode"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              <ShoppingBag className="h-5 w-5 text-primary" />
              Bazar Mode
            </Link>
            <Link
              href="#privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              <ShieldCheck className="h-5 w-5 text-primary" />
              Local Privacy
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              <ShieldCheck className="h-5 w-5 text-accent" />
              FAQ
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
            >
              Legal & Terms
            </Link>
            <div className="pt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-primary/20"
              >
                <ArrowDownToLine className="h-4 w-4" />
                <span>Get on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
