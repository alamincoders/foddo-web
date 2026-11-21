"use client";

import { Ban, Languages, Mic, UserX, WifiOff, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PlayButton } from "./PlayButton";
import { Phone } from "./Phone";
import { shotPath, type Copy, type Lang, type Scene } from "@/lib/site";

const CYCLE: Scene[] = ["list", "basket", "receipt", "restock"];
const FACT_ICONS: LucideIcon[] = [WifiOff, UserX, Ban, Languages];

function Float({ id, className, delay }: { id: string; className: string; delay: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`absolute flex h-[4.5rem] w-[4.5rem] animate-[float_6s_ease-in-out_infinite] items-center justify-center rounded-[1.4rem] bg-white shadow-[0_14px_30px_-12px_rgba(20,60,40,0.35)] sm:h-24 sm:w-24 sm:rounded-3xl ${className}`}
    >
      <Image src={`/images/items/${id}.svg`} alt="" width={64} height={64} unoptimized className="h-10 w-10 sm:h-14 sm:w-14" />
    </div>
  );
}

export function Hero({ copy, lang }: { copy: Copy; lang: Lang }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % CYCLE.length), 3400);
    return () => clearInterval(t);
  }, []);

  const caption = copy.screens.captions[CYCLE[i]];
  // "Say it. Tick it. Done." -> three lines, the last one in green with a hand-drawn underline
  const parts = copy.hero.title.split(/(?<=[.।])\s*/).filter(Boolean);

  return (
    <section className="relative">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[78%] bg-[radial-gradient(60%_70%_at_75%_30%,#E0F1E7_0%,transparent_70%)]" />
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:min-h-[44rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,620px)] lg:gap-6 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="text-center lg:text-left">
          <p className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-extrabold text-primary sm:text-sm lg:mx-0">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="truncate">{copy.hero.eyebrow}</span>
          </p>

          <h1
            className={`mt-7 text-balance font-display text-foreground ${
              lang === "bn"
                ? "text-[2.7rem] font-extrabold leading-[1.35] sm:text-[3.6rem] xl:text-[4.3rem]"
                : "text-[3rem] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[4.1rem] xl:text-[5rem]"
            }`}
          >
            {parts.slice(0, -1).join(" ")}
            <span className="block">
              <span className="relative inline-block px-1 text-primary">
                <span aria-hidden="true" className="absolute inset-x-0 bottom-[0.12em] -z-10 h-[0.34em] rounded-sm bg-accent/45" />
                {parts[parts.length - 1]}
              </span>
            </span>
          </h1>

          <p className="mt-7 text-xl font-extrabold text-foreground sm:text-2xl">{copy.hero.lead}</p>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">{copy.hero.sub}</p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <PlayButton label={copy.hero.cta} className="w-full !py-4 sm:w-auto" />
            <a href="#how" className="px-4 py-3 text-base font-bold text-foreground underline decoration-primary decoration-2 underline-offset-4 hover:text-primary">
              {copy.hero.secondary}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {copy.facts.map((f, n) => {
              const Icon = FACT_ICONS[n];
              return (
                <li key={f.title} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-foreground">
                  <Icon className="h-4 w-4 text-primary" strokeWidth={2.4} />
                  {f.title}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div aria-hidden="true" className="absolute left-1/2 top-[48%] -z-10 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-muted" />
          <div aria-hidden="true" className="absolute left-1/2 top-[48%] -z-10 aspect-square w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-primary/20" />

          <div className="relative mx-auto w-[min(72vw,330px)] sm:w-[340px]">
            <Phone srcs={CYCLE.map((s) => shotPath(lang, "light", s))} index={i} alt={caption} priority sizes="340px" />

            {/* A typed sentence turning into a list item, the way the app does it */}
            <div className="absolute -left-[26%] bottom-[16%] z-10 hidden w-[62%] animate-[float_7s_ease-in-out_infinite] rounded-2xl bg-white p-3 shadow-[0_18px_36px_-14px_rgba(20,60,40,0.4)] sm:block">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                  <Mic className="h-3 w-3" />
                </span>
                {copy.chit.say}
              </div>
              <div className="mt-2 flex items-center justify-between gap-2 rounded-xl bg-surface px-3 py-2">
                <span className="text-sm font-extrabold text-foreground">{copy.chit.name}</span>
                <span className="rounded-full bg-primary-muted px-2.5 py-0.5 text-xs font-extrabold text-primary">{copy.chit.meta}</span>
              </div>
            </div>
          </div>

          <Image
            src="/images/basket.png"
            alt=""
            aria-hidden="true"
            width={192}
            height={192}
            className="absolute -right-1 top-[2%] w-24 animate-[float_6.5s_ease-in-out_infinite] drop-shadow-[0_14px_16px_rgba(20,60,40,0.25)] sm:right-[2%] sm:w-32"
          />
          <Float id="egg" delay="-1s" className="left-[2%] top-[10%] sm:left-[4%]" />
          <Float id="milk" delay="-3s" className="right-[-1%] top-[44%] sm:right-[0%]" />
          <Float id="tomato" delay="-2s" className="bottom-[4%] right-[8%]" />
          <Float id="carrot" delay="-4.5s" className="left-[-7%] top-[38%] hidden sm:flex" />

          <p key={caption} aria-live="polite" className="mt-6 min-h-6 animate-[fadeUp_0.4s_ease] text-center text-sm font-extrabold text-primary">
            {caption}
          </p>
        </div>
      </div>
    </section>
  );
}
