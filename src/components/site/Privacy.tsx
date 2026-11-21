import { HardDrive, Mic, ShieldCheck, Download, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/landing/motion/Reveal";
import type { Copy } from "@/lib/site";

const ICONS: LucideIcon[] = [HardDrive, ShieldCheck, Mic, Download];

export function Privacy({ copy }: { copy: Copy }) {
  return (
    <section id="privacy" className="scroll-mt-16 border-t border-border py-16 sm:py-24">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{copy.privacy.eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{copy.privacy.title}</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{copy.privacy.lead}</p>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {copy.privacy.cards.map((c, n) => {
            const Icon = ICONS[n];
            return (
              <Reveal key={c.title} delay={n * 0.06}>
                <li className="h-full list-none rounded-3xl border border-border bg-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-muted text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold leading-snug text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
