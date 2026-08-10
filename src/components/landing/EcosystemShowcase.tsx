"use client";

import Image from "next/image";
import { useRef } from "react";
import { Sparkles, Layers, Shield, Zap, Smartphone, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Reveal } from "./motion/Reveal";

export function EcosystemShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-driven parallax and scale calculation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring physics for buttery 60fps scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scale: expands from 0.88 to 1.04 as user scrolls into the section (spread out effect)
  const scale = useTransform(smoothProgress, [0, 0.45, 1], [0.88, 1.03, 0.96]);

  // Parallax Y: moves gracefully upward
  const y = useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -40]);

  // 3D Rotation: tilts upwards slightly on entry, levels out flat, and tilts away on exit
  const rotateX = useTransform(smoothProgress, [0, 0.45, 1], [10, 0, -6]);

  // Ambient glow opacity & blur transform
  const glowOpacity = useTransform(smoothProgress, [0, 0.45, 1], [0.3, 0.85, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 bg-surface/40 border-y border-border/70 overflow-hidden relative perspective-1200"
    >
      {/* Background Ambient Gradient */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-160 w-240 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr from-primary/20 via-primary-soft/15 to-accent/15 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-4">
              <Layers className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Full Application Ecosystem</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.25] lg:leading-[1.2]">
              Everything in One Place. <br className="hidden sm:inline" />
              <span className="text-primary mt-1 inline-block">Plan. Shop. Done.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              Designed from the ground up to replace clunky spreadsheets and slow cloud apps. Seamlessly manage grocery lists, in-store shopping trips, reminders, and household collaboration.
            </p>
          </Reveal>
        </div>

        {/* Panoramic 8-Screen Showcase Card with Scroll-Driven Parallax & Scale */}
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            style={{
              scale,
              y,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className="group relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-3 sm:p-6 shadow-soft-2xl transition-shadow duration-300 hover:shadow-2xl"
          >
            {/* Ambient Soft Border Glow */}
            <div className="absolute -inset-0.5 rounded-3xl bg-linear-to-b from-primary/20 via-transparent to-accent/10 -z-10 opacity-70 blur-xs" />

            {/* Image Container with native ~3:2 ratio */}
            <div className="relative aspect-[1535/1024] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src="/images/overview.png"
                alt="FODDO 8-Screen Application Ecosystem - Plan, Shop, Done"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain sm:object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                priority
              />
            </div>

            {/* Bottom Ambient Badge Bar */}
            <div className="mt-5 pt-4 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
                <Zap className="h-4 w-4 text-primary" />
                <span>100% Local & Offline</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
                <Smartphone className="h-4 w-4 text-accent" />
                <span>1-Handed Bazar Mode</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Private & Free</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                <span>Bangla & English</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
