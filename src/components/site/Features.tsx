"use client";

import { ChartColumn, Layers, Mic, Receipt, RefreshCw, Ruler, ShieldCheck, ShoppingBasket, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/landing/motion/Reveal";
import { cn } from "@/lib/utils";
import { shotPath, type Copy, type Lang } from "@/lib/site";
import { Phone } from "./Phone";

const ICONS: Record<string, LucideIcon> = {
  mic: Mic,
  layers: Layers,
  ruler: Ruler,
  basket: ShoppingBasket,
  receipt: Receipt,
  refresh: RefreshCw,
  chart: ChartColumn,
  shield: ShieldCheck,
};

const STEP_MS = 4600;

export function Features({ copy, lang }: { copy: Copy; lang: Lang }) {
  const items = copy.features.items;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true); // walks through the features until the visitor takes over

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((n) => (n + 1) % items.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, auto, items.length]);

  const pick = (n: number) => {
    setAuto(false);
    setActive(n);
  };

  const renderItem = (n: number, side: "left" | "right") => {
    const f = items[n];
    const Icon = ICONS[f.icon];
    const on = n === active;
    return (
      <li key={n} className="min-h-0">
        <button
          type="button"
          onClick={() => pick(n)}
          onMouseEnter={() => pick(n)}
          onFocus={() => pick(n)}
          aria-pressed={on}
          className={cn(
            "relative flex h-full w-full items-center gap-4 overflow-hidden rounded-3xl border p-4 text-left transition-all duration-300 sm:p-5",
            side === "left" && "lg:flex-row-reverse lg:text-right",
            on ? "border-primary/30 bg-white shadow-[0_18px_40px_-22px_rgba(20,80,50,0.5)]" : "border-transparent hover:border-border hover:bg-white/60",
          )}
        >
          <span
            className={cn(
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
              on ? "border-accent bg-accent text-[#2B1706]" : "border-foreground/70 text-foreground",
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className="min-w-0">
            <span className={cn("block text-lg font-extrabold leading-snug transition-colors", on ? "text-primary" : "text-foreground")}>{f.title}</span>
            <span className="mt-1 block text-[0.95rem] leading-relaxed text-muted-foreground">{f.body}</span>
          </span>
          {on && auto && (
            <span
              key={`bar-${active}`}
              aria-hidden="true"
              style={{ animationDuration: `${STEP_MS}ms` }}
              className="absolute bottom-0 left-0 h-[3px] w-full origin-left animate-[grow_linear_forwards] bg-accent"
            />
          )}
        </button>
      </li>
    );
  };

  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{copy.features.eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">{copy.features.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{copy.features.lead}</p>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_380px_minmax(0,1fr)] xl:gap-12">
          <div className="relative order-first mx-auto flex w-full max-w-[280px] items-center justify-center lg:order-none lg:col-start-2 lg:row-start-1 lg:max-w-none">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-muted" />
            <Phone srcs={items.map((f) => shotPath(lang, "light", f.scene))} index={active} alt={items[active].title} sizes="380px" />
          </div>

          <ul className="grid gap-3 lg:col-start-1 lg:row-start-1 lg:grid-rows-4">{[0, 1, 2, 3].map((n) => renderItem(n, "left"))}</ul>
          <ul className="grid gap-3 lg:col-start-3 lg:row-start-1 lg:grid-rows-4">{[4, 5, 6, 7].map((n) => renderItem(n, "right"))}</ul>
        </div>
      </div>
    </section>
  );
}
