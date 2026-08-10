"use client";

import { CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./motion/Reveal";

const TABS = [
  {
    id: "sync",
    label: "👨‍👩‍👧 Real-Time Sync",
    tagline: "One List. Everyone Stays in Sync.",
    description: "Whether you're at home or in the market, every change is shared instantly across your entire household. Add, edit, or check off items with live member avatars.",
    image: "/images/family-explaination.png",
    alt: "Foddo Family Sync - One List Everyone Stays In Sync",
    bullets: [
      "Real-time instant item checks with member avatars (Mom, Dad, Sister)",
      "100% offline-resilient sync: updates propagate automatically when connected",
      "Private and encrypted data sharing exclusively within your household",
    ],
  },
  {
    id: "live",
    label: "🛒 Live In Market",
    tagline: "Shop Together, From Anywhere",
    description: "Dad is at the market checking off tomatoes while Mom adds milk from home. Experience zero duplicate purchases and zero forgotten items.",
    image: "/images/family-bazar.png",
    alt: "Foddo Live Family Bazar - Shop Together From Anywhere",
    bullets: [
      "Live status indicators: 'Dad At Market' and 'Sister At Home'",
      "Instant push notifications when urgent groceries are added",
      "Eliminates frantic phone calls and forgotten grocery WhatsApp messages",
    ],
  },
  {
    id: "invite",
    label: "🔑 6-Digit Join Code",
    tagline: "Invite Anyone with a Simple Code",
    description: "No tedious email invites or complicated account configurations. Generate a simple 6-character household code and share it with family in seconds.",
    image: "/images/family-joining-process.png",
    alt: "Foddo Household Invite Code Process",
    bullets: [
      "Simple 1-2-3 join flow: Create → Share Code → Start Shopping Together",
      "Private & protected: Only authorized members with code can access lists",
      "Zero account creation barrier: Family members join in under 5 seconds",
    ],
  },
];

export function FamilySyncSection() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id="family" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-muted px-4 py-1.5 text-xs font-bold text-primary shadow-xs mb-4">
              <Users className="h-3.5 w-3.5 fill-primary text-primary" />
              <span>Seamless Household Collaboration</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-[1.25] sm:leading-[1.2]">
              One Household Grocery List. <br className="hidden sm:inline" />
              <span className="text-primary mt-1 inline-block">Always in Sync.</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed">
              Coordinate shopping trips effortlessly with family members. Say goodbye to forgotten groceries, accidental double purchases, and messy SMS threads.
            </p>
          </Reveal>

          {/* Framer-Style Animated Pill Tabs */}
          <Reveal direction="up" delay={0.3} className="mt-8 sm:mt-10 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl border border-border/80 bg-surface/70 p-1 sm:p-1.5 backdrop-blur-md shadow-xs">
              {TABS.map((tab) => {
                const isActive = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab)}
                    className={`relative rounded-xl px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-primary font-extrabold" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="familyTabPill"
                        className="absolute inset-0 rounded-xl bg-card shadow-sm border border-border/60"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Tab Content Display */}
        <div className="rounded-3xl border border-black/8 dark:border-white/10 bg-card p-5 sm:p-10 lg:p-14 shadow-soft-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
            {/* Narrative Column: Order 2 on Mobile, Order 1 on Desktop */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="inline-flex items-center gap-2 rounded-xl bg-primary-muted px-3.5 py-1.5 text-xs font-bold text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span>{activeTab.label}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl leading-[1.25] sm:leading-[1.2] text-balance">
                    {activeTab.tagline}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{activeTab.description}</p>

                  <ul className="space-y-3 text-xs sm:text-sm text-foreground pt-1 sm:pt-2">
                    {activeTab.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 sm:pt-4 flex items-center gap-2 text-xs font-semibold text-primary">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>Private household encryption • Zero third-party tracking</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Poster Column: Order 1 on Mobile (Image First), Order 2 on Desktop */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
              {/* Mobile Quick Household Context Badge */}
              <div className="flex sm:hidden items-center justify-center gap-2 py-1.5 px-3 rounded-full bg-surface border border-border/70 text-[11px] font-semibold text-foreground mb-4">
                <span className="text-primary font-bold">🛒 Dad (At Market)</span>
                <span className="text-muted-foreground">↔</span>
                <span className="text-accent font-bold">🏠 Mom (At Home)</span>
              </div>

              <div className="relative w-full max-w-[300px] sm:max-w-[360px] xl:max-w-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="group relative rounded-3xl border border-black/8 dark:border-white/12 bg-card p-2.5 shadow-soft-2xl"
                  >
                    <div className="relative aspect-[1024/1536] w-full overflow-hidden rounded-2xl bg-surface">
                      <Image
                        src={activeTab.image}
                        alt={activeTab.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
