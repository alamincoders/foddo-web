"use client";

import Image from "next/image";
import { ArrowDownToLine, Zap, ShieldCheck, ShoppingCart, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";
import { Reveal } from "./motion/Reveal";

export function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-background pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-140 w-220 -translate-x-1/2 rounded-full bg-linear-to-tr from-primary/10 via-primary-soft/10 to-accent/10 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/2 right-[-10%] -z-10 h-96 w-96 rounded-full bg-primary-muted/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & CTAs */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Pill Badge */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-6">
                <Zap className="h-3.5 w-3.5 fill-primary text-primary" />
                <span>Sub-3-Second TTFV • Zero Sign-In Required</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.16] lg:leading-[1.14]">
                The Smart, <span className="text-primary underline decoration-primary/20 underline-offset-8">Local-First</span> Grocery List Built For Speed
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal direction="up" delay={0.3}>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-2xl font-normal">
                Launch, type &quot;Milk&quot;, and you&apos;re done in under 3 seconds. Zero registration walls, 100% on-device privacy, and Bazar Mode goal tracking for frictionless shopping.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal direction="up" delay={0.4} className="w-full sm:w-auto">
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/25 transition-all duration-200 hover:bg-primary/95 hover:shadow-2xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ArrowDownToLine className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                  <span>Get it on Google Play</span>
                </a>

                <a
                  href="#bazar-mode"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-border bg-card/80 backdrop-blur-xs px-6 py-4 text-base font-semibold text-foreground shadow-xs transition-all duration-200 hover:bg-surface hover:border-primary/30 hover:text-primary hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>See Bazar Mode</span>
                </a>
              </div>
            </Reveal>

            {/* Micro Feature Indicators */}
            <Reveal direction="up" delay={0.5} className="w-full max-w-lg">
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/70 pt-6 w-full">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>&lt; 3 Seconds</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-0.5">Time to First Value</span>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>100% Local</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-0.5">On-Device Storage</span>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    <span>Bazar Mode</span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-0.5">Goal Gradient</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Natural Marketing Poster Showcase */}
          <div className="flex justify-center lg:col-span-5 perspective-1200">
            <Reveal direction="none" delay={0.3} duration={0.8} className="relative w-full max-w-[360px] sm:max-w-[400px]">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="group relative cursor-pointer"
              >
                {/* Ambient Soft Glow Behind Card */}
                <div className="absolute -inset-4 rounded-3xl bg-linear-to-b from-primary/20 via-primary-soft/15 to-transparent blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Pre-rendered Card Poster */}
                <div className="relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-2 shadow-soft-2xl transition-transform duration-300">
                  <div className="relative aspect-[941/1672] w-full overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src="/images/empty-screen.png"
                      alt="Foddo Smart Grocery App - Never Forget Your Grocery List"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Highlight Badge 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-5 -left-5 z-30 flex items-center gap-3 rounded-2xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent font-bold text-lg">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Instant Add</div>
                    <div className="text-[11px] text-muted-foreground">Type &apos;Milk&apos; → Done &lt;3s</div>
                  </div>
                </motion.div>

                {/* Floating Highlight Badge 2 */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -top-4 -right-4 z-30 flex items-center gap-2.5 rounded-2xl border border-border/80 bg-card/95 p-3 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-muted text-primary">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">Zero Cloud Gate</div>
                    <div className="text-[10px] text-muted-foreground">100% Private & Local</div>
                  </div>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
