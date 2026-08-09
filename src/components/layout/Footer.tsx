import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface/50 text-foreground transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-primary shadow-sm shadow-primary/20">
                <Image
                  src="/icon.png"
                  alt="FODDO Logo"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-foreground font-sans">
                FODDO
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Local-first, privacy-focused smart grocery and shopping list application designed for ultra-fast shopping trips.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>100% Local SQLite Data • Zero Tracking</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="#speed" className="text-muted-foreground hover:text-primary transition-colors">
                  Instant Speed (TTFV)
                </Link>
              </li>
              <li>
                <Link href="#bazar-mode" className="text-muted-foreground hover:text-primary transition-colors">
                  Bazar Mode & Goal Gradient
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Local-First Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Legal & Compliance
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
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
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Support
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:support@foddo.app"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                <span>support@foddo.app</span>
              </a>
              <p className="text-xs text-muted-foreground">
                Need help or have questions? Contact our support team for prompt assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/60 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} FODDO. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" /> for fast, frictionless shopping.
          </p>
        </div>
      </div>
    </footer>
  );
}
