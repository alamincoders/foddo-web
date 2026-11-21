import { Mail } from "lucide-react";
import { Reveal } from "@/components/landing/motion/Reveal";
import { APP_CONFIG } from "@/lib/constants";
import type { Copy } from "@/lib/site";

export function Help({ copy }: { copy: Copy }) {
  return (
    <section className="border-t border-border py-14 sm:py-20">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-muted text-[#9A5A12]">
          <Mail className="h-6 w-6" />
        </span>
        <h2 className="text-balance font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">{copy.help.title}</h2>
        <p className="max-w-md text-base text-muted-foreground">{copy.help.body}</p>
        <a
          href={`mailto:${APP_CONFIG.supportEmail}`}
          className="inline-flex items-center justify-center rounded-2xl border-2 border-foreground px-6 py-3 text-base font-bold text-foreground transition hover:bg-foreground hover:text-background"
        >
          {copy.help.button}
        </a>
        <p className="text-sm font-semibold text-muted-foreground">{APP_CONFIG.supportEmail}</p>
      </Reveal>
    </section>
  );
}
