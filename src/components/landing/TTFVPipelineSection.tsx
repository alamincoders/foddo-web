"use client";

import Image from "next/image";
import { Zap, Clock, ShieldCheck, Check, X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem } from "./motion/Reveal";

const PIPELINE_STEPS = [
  {
    step: "01",
    time: "0.2s",
    title: "1. Instant Launch",
    description: "App opens straight to your list. No splash delay or mandatory sign-up screens.",
    icon: "⚡",
  },
  {
    step: "02",
    time: "1.2s",
    title: "2. Quick Type",
    description: "Type 'Milk' in the bottom 40% thumb zone with instant auto-suggestions.",
    icon: "✍️",
  },
  {
    step: "03",
    time: "2.1s",
    title: "3. Smart Parsing",
    description: "Item name, quantity, and unit extracted automatically without manual dropdowns.",
    icon: "✨",
  },
  {
    step: "04",
    time: "< 3.0s",
    title: "4. Instant Save",
    description: "Saved locally on your phone in instant on-device storage. Ready for shopping.",
    icon: "💾",
  },
];

export function TTFVPipelineSection() {
  return (
    <section id="speed" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-4 py-1.5 text-xs font-bold text-accent shadow-xs mb-4">
              <Zap className="h-3.5 w-3.5 fill-accent text-accent" />
              <span>Time-To-First-Value Standard</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.2]">
              From Launch to &quot;Milk&quot; in Under <span className="text-primary">3 Seconds</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              Most shopping apps make you register with email, confirm passwords, and fill out surveys before you can write a single item. Foddo eliminates every barrier so you can shop immediately.
            </p>
          </Reveal>
        </div>

        {/* 4-Step Pipeline Flow Animation (Insurity 360 Style) */}
        <Reveal direction="up" delay={0.3} className="mb-20">
          <div className="relative rounded-3xl border border-border/80 bg-surface/50 p-6 sm:p-10 shadow-xs">
            {/* Header pill */}
            <div className="flex items-center justify-between border-b border-border/60 pb-5 mb-8">
              <div className="flex items-center gap-2 font-bold text-foreground text-sm sm:text-base">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>The Sub-3-Second Execution Journey</span>
              </div>
              <span className="rounded-full bg-primary-muted px-3 py-1 text-xs font-extrabold text-primary">
                Total Elapsed: &lt; 3.0s
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {PIPELINE_STEPS.map((item, index) => (
                <div
                  key={item.step}
                  className="relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-1 group"
                >
                  {/* Top Bar with Number & Time Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="rounded-lg bg-primary-muted px-2.5 py-1 text-xs font-mono font-bold text-primary">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Step indicator footer */}
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-semibold text-muted-foreground">
                    <span>Step {item.step}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary opacity-80" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Side-by-Side Comparison Grid with New Bazar Card */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Side-by-Side Comparison Boxes */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="left">
              {/* Traditional Grocery App (Slow & Frustrating) */}
              <div className="rounded-3xl border border-red-200/80 dark:border-red-950/80 bg-card p-6 sm:p-7 shadow-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                    <Clock className="h-4 w-4" />
                    <span>Other Grocery & Cloud Apps</span>
                  </div>
                  <span className="rounded-full bg-red-100 dark:bg-red-900/40 px-3 py-1 text-xs font-bold text-red-600 dark:text-red-400">
                    Avg. ~120 Seconds
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Forced Sign-In Wall:</strong> Email validation, OAuth redirects, and password setups.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Demographic Surveys:</strong> Mandatory questions on household income & zip codes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Cloud Network Latency:</strong> Remote spinner wait every time an item is saved.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">No Offline Mode:</strong> Freezes inside basement supermarket aisles.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              {/* Foddo Local-First Standard */}
              <div className="rounded-3xl border-2 border-primary bg-card p-6 sm:p-7 shadow-xl ring-1 ring-primary/20 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <Zap className="h-4 w-4 fill-primary" />
                    <span>Foddo Local-First Standard</span>
                  </div>
                  <span className="rounded-full bg-primary-muted px-3 py-1 text-xs font-extrabold text-primary">
                    &lt; 3 Seconds Total
                  </span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-foreground">
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-primary">Instant Active List:</strong> Opens directly to grocery input. Zero loading screens.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-primary">Zero Account Gates:</strong> No sign-in, no passwords, no forced data collection.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-primary">Instant On-Device Storage:</strong> Sub-millisecond reads/writes right on your phone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong className="text-primary">100% Offline Always:</strong> Works seamlessly everywhere with zero connectivity.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Natural 2:3 Marketing Card for New Bazar Creation */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="right" delay={0.2} className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div className="group relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-2.5 shadow-soft-2xl transition-all duration-300 hover:shadow-2xl">
                <div className="relative aspect-[1024/1536] w-full overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src="/images/new-bazar.png"
                    alt="Foddo - Create a Bazar List in Seconds with Smart Reminders"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
