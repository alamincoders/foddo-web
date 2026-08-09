import Image from "next/image";
import { ArrowDownToLine, Zap, ShieldCheck, ShoppingCart, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 rounded-full bg-linear-to-tr from-primary/10 via-primary-soft/10 to-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & CTAs */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-sm mb-6">
              <Zap className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Sub-3-Second TTFV • Zero Sign-In Required</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.15]">
              The Smart, <span className="text-primary">Local-First</span> Grocery List Built For Speed
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl">
              Launch, type &quot;Milk&quot;, and you&apos;re done in under 3 seconds. Zero registration walls, total SQLite privacy, and Bazar Mode goal tracking for frictionless shopping.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-primary/95 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <ArrowDownToLine className="h-5 w-5" />
                <span>Get it on Google Play</span>
              </a>

              <a
                href="#speed"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-base font-semibold text-foreground shadow-sm transition-all hover:bg-surface hover:border-primary/30"
              >
                <span>See How It Works</span>
              </a>
            </div>

            {/* Micro Feature Indicators */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/80 pt-6 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-sm font-bold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>&lt; 3 Seconds</span>
                </div>
                <span className="text-xs text-muted-foreground mt-0.5">Time to First Value</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-sm font-bold text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>100% Local</span>
                </div>
                <span className="text-xs text-muted-foreground mt-0.5">SQLite Database</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-sm font-bold text-foreground">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  <span>Bazar Mode</span>
                </div>
                <span className="text-xs text-muted-foreground mt-0.5">Goal Gradient</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup Frame */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              {/* Phone Frame Outer Shadow Glow */}
              <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-b from-primary/30 to-accent/20 blur-2xl opacity-70" />

              {/* Mobile Device Container */}
              <div className="relative rounded-[40px] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Speaker Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 h-4 w-28 rounded-full bg-slate-950 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-slate-800" />
                </div>

                {/* Screenshot Image */}
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[32px] bg-slate-900">
                  <Image
                    src="/images/overview.png"
                    alt="FODDO App Overview Screenshot"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating Highlight Badge 1 */}
              <div className="absolute -bottom-4 -left-6 z-30 flex items-center gap-2.5 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/20 text-accent font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Instant Add</div>
                  <div className="text-[11px] text-muted-foreground">Type &apos;Milk&apos; → Added</div>
                </div>
              </div>

              {/* Floating Highlight Badge 2 */}
              <div className="absolute -top-4 -right-6 z-30 flex items-center gap-2 rounded-2xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground font-sans">Zero Cloud Gate</div>
                  <div className="text-[10px] text-muted-foreground">100% Private Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
