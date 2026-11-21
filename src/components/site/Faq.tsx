"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/landing/motion/Reveal";
import { cn } from "@/lib/utils";
import type { Copy } from "@/lib/site";

export function Faq({ copy }: { copy: Copy }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-16 border-t border-border bg-surface/60 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mb-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{copy.faq.eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{copy.faq.title}</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{copy.faq.lead}</p>
        </Reveal>

        <div className="grid gap-3">
          {copy.faq.items.map((item, n) => {
            const isOpen = open === n;
            return (
              <div key={item.question} className={cn("rounded-2xl border bg-card transition-colors", isOpen ? "border-primary/40" : "border-border")}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : n)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${n}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-foreground sm:text-lg"
                  >
                    <span className="min-w-0">{item.question}</span>
                    <ChevronDown className={cn("h-5 w-5 shrink-0 text-primary transition-transform duration-300", isOpen && "rotate-180")} />
                  </button>
                </h3>
                <div id={`faq-${n}`} role="region" className={cn("grid transition-[grid-template-rows] duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
