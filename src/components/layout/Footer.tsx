import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Mail, Heart, ArrowUpRight, Globe, Zap, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface/70 text-foreground transition-colors relative overflow-hidden">
      {/* Subtle Ambient Background Gradient */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 h-80 w-160 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-border/60">
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-primary shadow-sm shadow-primary/25 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/icon.png"
                  alt="Foddo Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-foreground font-sans">
                  Foddo
                </span>
                <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
                  by iTechills
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Local-first, privacy-focused smart grocery and shopping list application engineered for sub-3-second utility, offline operation, and seamless family collaboration.
            </p>

            {/* Live Local Engine Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted/60 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>100% Local & Private • Zero Cloud Gate</span>
            </div>
          </div>

          {/* Col 2: Product Links (2 cols) */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
              Product & Features
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="#speed" className="text-muted-foreground hover:text-primary transition-colors">
                  Instant Speed (TTFV)
                </Link>
              </li>
              <li>
                <Link href="#smart-input" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Multilingual Parser
                </Link>
              </li>
              <li>
                <Link href="#bazar-mode" className="text-muted-foreground hover:text-primary transition-colors">
                  Bazar Mode & Goal Tracking
                </Link>
              </li>
              <li>
                <Link href="#family" className="text-muted-foreground hover:text-primary transition-colors">
                  Household Family Sync
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Local-First Architecture
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Trust (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
              Legal & Trust
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy#demographics" className="text-muted-foreground hover:text-primary transition-colors">
                  Demographic Data Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy#rights" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Sovereignty
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Support (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-foreground">
              Organization & Support
            </h3>
            <div className="mt-4 space-y-3.5 text-sm">
              <a
                href="mailto:hello@itechills.com"
                className="group inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-3.5 py-2.5 text-xs font-bold text-foreground shadow-xs transition-all hover:border-primary/40 hover:text-primary hover:shadow-sm"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@itechills.com</span>
              </a>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Have questions or need technical support? We reply within 24 business hours.
              </p>

              <div className="pt-1">
                <a
                  href="https://itechills.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline underline-offset-4"
                >
                  <span>An iTechills Product</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Foddo by <a href="https://itechills.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">iTechills</a>. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with precision for effortless, private grocery shopping.
          </p>
        </div>
      </div>
    </footer>
  );
}
