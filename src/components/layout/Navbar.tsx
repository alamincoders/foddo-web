"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sparkles, Zap, ShoppingBag, ShieldCheck, HelpCircle } from "lucide-react";
import { GooglePlayIcon } from "@/components/ui/GooglePlayIcon";
import { PLAY_STORE_URL } from "@/lib/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // When near the top, always show navbar and remove extra shadow
      if (currentScrollY <= 20) {
        setIsVisible(true);
        setIsScrolled(false);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      setIsScrolled(true);

      // Add small buffer to avoid jitter
      const diff = currentScrollY - lastScrollY;
      if (Math.abs(diff) < 8) return;

      if (currentScrollY > lastScrollY && !mobileMenuOpen) {
        // Scrolling DOWN -> Hide navbar
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show navbar
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Features", href: "#features", icon: Sparkles },
    { name: "Smart Parser", href: "#smart-input", icon: Zap },
    { name: "Bazar Mode", href: "#bazar-mode", icon: ShoppingBag },
    { name: "Privacy", href: "#privacy", icon: ShieldCheck },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-md shadow-sm"
          : "border-b border-border/50 bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
        >
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
        <nav className="hidden items-center gap-6 xl:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Play Store CTA */}
        <div className="hidden items-center gap-4 md:flex shrink-0">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:text-white hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <GooglePlayIcon className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
            <span>Get on Google Play</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
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
        <div className="border-b border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:text-white active:scale-[0.98]"
              >
                <GooglePlayIcon className="h-4 w-4 shrink-0" />
                <span>Get on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
