"use client";

import Image from "next/image";
import { ShoppingBag, CheckCircle2, Layers, Zap, Sparkles, TrendingUp, Sun, HandMetal } from "lucide-react";
import { Reveal } from "./motion/Reveal";

export function FeatureStickyJourney() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-surface/30 border-y border-border/70 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-4">
              <Sparkles className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Engineered For Real Supermarket Aisle Stress</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.2]">
              Shopping Reimagined for <br className="hidden sm:inline" />
              <span className="text-primary mt-1 inline-block">1-Handed Focus & Speed</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              Grocery shopping while walking requires ergonomic focus, instant progress visibility, and zero cognitive clutter. Explore how Foddo transforms routine grocery trips into satisfying accomplishments.
            </p>
          </Reveal>
        </div>

        {/* Feature 1: Bazar Mode Spotlight (Large Hero Feature) */}
        <div id="bazar-mode" className="mb-20 sm:mb-32 rounded-3xl border border-black/8 dark:border-white/10 bg-card p-6 sm:p-10 lg:p-14 shadow-soft-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Narrative Column: Order 2 on mobile, Order 1 on desktop */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <Reveal direction="left">
                <div className="inline-flex items-center gap-2 rounded-xl bg-accent-muted px-3.5 py-1.5 text-xs font-bold text-accent">
                  <ShoppingBag className="h-4 w-4" />
                  <span>Bazar Mode (Goal Gradient Psychology)</span>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.1}>
                <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl leading-[1.25] sm:leading-[1.2] text-balance">
                  Transform Supermarket Chaos into Satisfying Progress
                </h3>
              </Reveal>

              <Reveal direction="left" delay={0.2}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  When you enter the store, activate <strong className="text-foreground">Bazar Mode</strong>. Designed around behavioral psychology (Goal Gradient & Zeigarnik Effects), it visually highlights items remaining, tracks live expenditure, and celebrates list completion.
                </p>
              </Reveal>

              <Reveal direction="left" delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/50 p-4">
                    <div className="rounded-xl bg-primary-muted p-2 text-primary">
                      <HandMetal className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">48px+ Touch Targets</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Optimized for 1-handed walking & carrying baskets.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/50 p-4">
                    <div className="rounded-xl bg-accent-muted p-2 text-accent">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Live Progress %</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Instant visual momentum as items are checked off.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/50 p-4">
                    <div className="rounded-xl bg-primary-muted p-2 text-primary">
                      <Sun className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Sunlight High-Contrast</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Legible in bright outdoor bazaars & fluorescent stores.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/50 p-4">
                    <div className="rounded-xl bg-accent-muted p-2 text-accent">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">1-Tap Re-Shop</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">Instantly duplicate recurring weekly groceries.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Card Column: Order 1 on mobile (Image First), Order 2 on desktop */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <Reveal direction="right" delay={0.2} className="relative w-full max-w-[320px] sm:max-w-[380px] xl:max-w-[400px]">
                <div className="group relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-2.5 shadow-soft-2xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-[1024/1536] w-full overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src="/images/bazar-mode.png"
                      alt="Foddo Bazar Mode - Shop Smart with Live Progress and Quick Add"
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

        {/* Feature 2: All Your Lists Always Organized (Lists.png) */}
        <div className="rounded-3xl border border-black/8 dark:border-white/10 bg-card p-6 sm:p-10 lg:p-14 shadow-soft-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Card Column: Order 1 on mobile (Image First), Order 1 on desktop */}
            <div className="order-1 lg:col-span-5 flex justify-center">
              <Reveal direction="left" delay={0.2} className="relative w-full max-w-[320px] sm:max-w-[380px] xl:max-w-[400px]">
                <div className="group relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-2.5 shadow-soft-2xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-[1024/1536] w-full overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src="/images/lists.png"
                      alt="Foddo - All Your Lists Always Organized with Clean Simplicity"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Narrative Column: Order 2 on mobile, Order 2 on desktop */}
            <div className="order-2 lg:col-span-7 space-y-6">
              <Reveal direction="right">
                <div className="inline-flex items-center gap-2 rounded-xl bg-primary-muted px-3.5 py-1.5 text-xs font-bold text-primary">
                  <Layers className="h-4 w-4" />
                  <span>List Hierarchy & Spending Insights</span>
                </div>
              </Reveal>

              <Reveal direction="right" delay={0.1}>
                <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl leading-[1.25] sm:leading-[1.2] text-balance">
                  All Your Lists, Always Organized
                </h3>
              </Reveal>

              <Reveal direction="right" delay={0.2}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Never lose track of what needs restocking. Organize active daily groceries, upcoming monthly staples, and overdue items in one intuitive hub. See your monthly shopping totals calculated in real-time.
                </p>
              </Reveal>

              <Reveal direction="right" delay={0.3}>
                <ul className="space-y-3 text-sm text-foreground pt-2">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Clear list separation into Today, Upcoming, and Overdue lists</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Monthly spending summary with automated currency formatting (৳)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Instant filter and search across past grocery records</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
