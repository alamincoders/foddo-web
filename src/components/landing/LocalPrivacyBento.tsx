"use client";

import { DownloadCloud, HardDrive, Layers, Lock, ShieldCheck, UserX } from "lucide-react";
import Image from "next/image";
import { Reveal, StaggerContainer, StaggerItem } from "./motion/Reveal";

export function LocalPrivacyBento() {
  return (
    <section id="privacy" className="py-20 sm:py-32 bg-surface/40 border-y border-border/70 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-4">
              <ShieldCheck className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Local-First & Data Sovereignty</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight sm:leading-[1.2] text-balance">
              Your Grocery Lists Stay <br className="hidden sm:inline" />
              <span className="text-primary mt-1 inline-block">100% Private & In Your Control</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              Foddo is architected from the ground up as a local-first application. We do not sell your grocery habits, lock your data behind central cloud walls, or force mandatory account creation.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Bento Showcase with Settings & Smart Breakdown */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 mb-16">
          {/* Card 1: Settings & Data Control */}
          <Reveal direction="left" delay={0.2}>
            <div className="rounded-3xl border border-black/8 dark:border-white/10 bg-card p-6 sm:p-8 shadow-soft-2xl h-full flex flex-col justify-between">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-xl bg-primary-muted px-3 py-1 text-xs font-bold text-primary mb-3">
                  <HardDrive className="h-4 w-4" />
                  <span>Device-Level Storage</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Your Data, Your Way, Always Safe</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Export offline JSON backups to local storage, toggle haptic feedback, switch light/dark themes, and choose between English and Bangla anytime.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <div className="relative w-full max-w-[320px] sm:max-w-90 rounded-2xl overflow-hidden border border-border/70 shadow-md">
                  <div className="relative aspect-1024/1536 w-full bg-surface">
                    <Image src="/images/settings.png" alt="Foddo App Settings - Local Backup, Theme, Language, Privacy" fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Smart Shopping Breakdown */}
          <Reveal direction="right" delay={0.2}>
            <div className="rounded-3xl border border-black/8 dark:border-white/10 bg-card p-6 sm:p-8 shadow-soft-2xl h-full flex flex-col justify-between">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-xl bg-accent-muted px-3 py-1 text-xs font-bold text-accent mb-3">
                  <Layers className="h-4 w-4" />
                  <span>8 Core Features Hub</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Everything You Need For Smarter Shopping</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Quick Add, Multilingual Smart Parsing, Family Mode, Re-Shop, Spending History, Reminders, and Dark Mode designed for everyday simplicity.
                </p>
              </div>

              <div className="flex justify-center pt-2">
                <div className="relative w-full max-w-[320px] sm:max-w-90 rounded-2xl overflow-hidden border border-border/70 shadow-md">
                  <div className="relative aspect-1024/1536 w-full bg-surface">
                    <Image
                      src="/images/smart-shopping-breakdown.png"
                      alt="Foddo - Everything You Need For Smarter Shopping Feature Map"
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Core Pillars Grid (2x2 on mobile, 4-cols on lg) */}
        <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 items-stretch">
          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-3.5 sm:p-5 xl:p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-2.5 sm:mb-3.5 xl:mb-4 shrink-0">
                <HardDrive className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm xl:text-base font-bold text-foreground">100% Local Storage</h4>
              <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">All lists and prices written directly to your phone. Zero cloud tracking.</p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-3.5 sm:p-5 xl:p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-2.5 sm:mb-3.5 xl:mb-4 shrink-0">
                <UserX className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm xl:text-base font-bold text-foreground">Zero Account Gate</h4>
              <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">No sign-in, email validation, or phone OTP required for unlimited lists.</p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-3.5 sm:p-5 xl:p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-2.5 sm:mb-3.5 xl:mb-4 shrink-0">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm xl:text-base font-bold text-foreground">Optional Demographics</h4>
              <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">Gender/age are 100% optional—used only for smart household tips.</p>
            </div>
          </StaggerItem>

          <StaggerItem className="h-full flex">
            <div className="h-full w-full flex flex-col justify-start rounded-2xl border border-border/70 bg-card p-3.5 sm:p-5 xl:p-6 shadow-xs hover:shadow-md hover:border-primary/40 transition-all duration-200">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 xl:h-11 xl:w-11 items-center justify-center rounded-xl bg-primary-muted text-primary mb-2.5 sm:mb-3.5 xl:mb-4 shrink-0">
                <DownloadCloud className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-xs sm:text-sm xl:text-base font-bold text-foreground">JSON Export & Backup</h4>
              <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">You own your data. Export, backup, or restore shopping history anytime.</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
