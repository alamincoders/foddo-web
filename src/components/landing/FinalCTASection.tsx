"use client";

import Image from "next/image";
import { ArrowDownToLine, Sparkles, ShieldCheck, Heart, Zap, WifiOff } from "lucide-react";
import { Reveal } from "./motion/Reveal";

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="pointer-events-none absolute -bottom-30 left-1/2 -z-10 h-120 w-200 -translate-x-1/2 rounded-full bg-linear-to-tr from-primary/15 via-primary-soft/10 to-accent/15 blur-3xl opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/8 dark:border-white/10 bg-card p-6 sm:p-10 lg:p-14 shadow-soft-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: CTAs & Conversion Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Reveal direction="down">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs">
                  <Heart className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span>Free to Download • Made for Everyday Families</span>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.2]">
                  Ready to Upgrade Your <br className="hidden sm:inline" />
                  <span className="text-primary mt-1 inline-block">Grocery Shopping?</span>
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Experience sub-3-second list creation, Bazar Mode focus, and effortless household collaboration today. Free forever with zero annoying ads.
                </p>
              </Reveal>

              {/* Download Action Buttons */}
              <Reveal direction="up" delay={0.3} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/30 transition-all duration-200 hover:bg-primary/95 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ArrowDownToLine className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  <span>Get FODDO on Google Play</span>
                </a>

                <a
                  href="#speed"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-base font-semibold text-foreground shadow-xs transition-all duration-200 hover:bg-surface hover:border-primary/30"
                >
                  <span>Explore Features</span>
                </a>
              </Reveal>

              {/* Trust Metric Badges */}
              <Reveal direction="up" delay={0.4} className="pt-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-border/70 pt-6">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-xs font-bold text-foreground">100% Free</span>
                    <span className="text-[11px] text-muted-foreground">No hidden fees</span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-xs font-bold text-foreground">No Ads</span>
                    <span className="text-[11px] text-muted-foreground">Clean experience</span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-xs font-bold text-foreground">Works Offline</span>
                    <span className="text-[11px] text-muted-foreground">Anywhere, anytime</span>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="text-xs font-bold text-foreground">Family Ready</span>
                    <span className="text-[11px] text-muted-foreground">Sync with code</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Full 2:3 CTA Marketing Poster */}
            <div className="lg:col-span-5 flex justify-center">
              <Reveal direction="right" delay={0.2} className="relative w-full max-w-[360px] sm:max-w-[400px]">
                <div className="group relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-2.5 shadow-soft-2xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-[1024/1536] w-full overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src="/images/cta.png"
                      alt="FODDO - Never Forget Another Grocery Item CTA"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
