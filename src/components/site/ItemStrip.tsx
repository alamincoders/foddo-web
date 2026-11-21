import Image from "next/image";
import { Reveal } from "@/components/landing/motion/Reveal";
import { ITEM_STRIP, type Copy, type Lang } from "@/lib/site";

const TINTS = ["#E4F2DA", "#FBE7D2", "#DCE9FA", "#F8E3E1", "#EFE7F8", "#FBF0C9"];

export function ItemStrip({ copy, lang }: { copy: Copy; lang: Lang }) {
  const row = (suffix: string, hidden: boolean) => (
    <ul className="flex shrink-0 items-start gap-5 pr-5" aria-hidden={hidden || undefined}>
      {ITEM_STRIP.map((item, n) => (
        <li key={`${item.id}${suffix}`} className="flex w-24 shrink-0 flex-col items-center gap-2.5 sm:w-28">
          <span className="flex h-20 w-20 items-center justify-center rounded-[1.6rem] sm:h-24 sm:w-24" style={{ background: TINTS[n % TINTS.length] }}>
            <Image src={`/images/items/${item.id}.svg`} alt="" width={64} height={64} unoptimized className="h-12 w-12 sm:h-14 sm:w-14" />
          </span>
          <span className="text-center text-sm font-bold text-foreground">{item[lang]}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label={copy.items.title} className="border-y border-border bg-white py-14 sm:py-20">
      <Reveal className="mx-auto mb-10 max-w-2xl px-5 text-center">
        <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{copy.items.eyebrow}</p>
        <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">{copy.items.title}</h2>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{copy.items.lead}</p>
      </Reveal>
      <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="flex w-max animate-[marquee_70s_linear_infinite] group-hover:[animation-play-state:paused]">
          {row("a", false)}
          {row("b", true)}
        </div>
      </div>
    </section>
  );
}
