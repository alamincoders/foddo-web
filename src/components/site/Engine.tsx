"use client";

import { Mic } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/landing/motion/Reveal";
import type { Copy } from "@/lib/site";

export function Engine({ copy }: { copy: Copy }) {
  const [i, setI] = useState(0);
  const [hold, setHold] = useState(false);
  const examples = copy.engine.examples;

  useEffect(() => {
    if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % examples.length), 4600);
    return () => clearInterval(t);
  }, [hold, examples.length]);

  const ex = examples[i];

  return (
    <section id="how" className="scroll-mt-16 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{copy.engine.eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{copy.engine.title}</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{copy.engine.lead}</p>
        </Reveal>

        <Reveal>
          <div
            className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-4 sm:p-7"
            onMouseEnter={() => setHold(true)}
            onMouseLeave={() => setHold(false)}
          >
            <div className="flex min-h-[4.5rem] items-center gap-3 rounded-2xl border border-primary/30 bg-background px-3 py-3 sm:px-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <Mic className="h-5 w-5" />
              </span>
              <p key={`say-${i}`} className="min-w-0 animate-[fadeUp_0.35s_ease] text-base font-semibold leading-snug text-foreground sm:text-lg">
                {ex.say}
              </p>
            </div>

            <ul key={`out-${i}`} className="mt-4 grid gap-2 sm:grid-cols-2">
              {ex.items.map((item, n) => (
                <li
                  key={item.name}
                  style={{ animationDelay: `${120 + n * 110}ms` }}
                  className="flex animate-[fadeUp_0.4s_ease_both] items-center justify-between gap-3 rounded-2xl bg-surface px-4 py-3"
                >
                  <span className="truncate text-base font-bold text-foreground">{item.name}</span>
                  {item.meta && <span className="shrink-0 rounded-full bg-primary-muted px-3 py-1 text-sm font-bold text-primary">{item.meta}</span>}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Examples">
              {examples.map((_, n) => (
                <button
                  key={n}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  aria-label={`${n + 1}`}
                  onClick={() => setI(n)}
                  className={`h-2 rounded-full transition-all ${n === i ? "w-7 bg-primary" : "w-2 bg-border hover:bg-primary/40"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {copy.engine.steps.map((s, n) => (
            <Reveal key={s.title} delay={n * 0.08}>
              <li className="list-none">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-base font-extrabold text-[#2B1706]">{n + 1}</span>
                <h3 className="mt-3 text-lg font-extrabold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">{copy.engine.note}</p>
      </div>
    </section>
  );
}
