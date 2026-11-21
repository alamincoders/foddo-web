import { Check } from "lucide-react";
import Image from "next/image";
import QRCode from "qrcode";
import { Reveal } from "@/components/landing/motion/Reveal";
import { PLAY_STORE_URL, shotPath, type Copy, type Lang } from "@/lib/site";
import { Phone } from "./Phone";
import { PlayButton } from "./PlayButton";

function Tile({ id, className, delay }: { id: string; className: string; delay: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`absolute z-20 flex h-16 w-16 animate-[float_6s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-white shadow-[0_14px_30px_-10px_rgba(0,0,0,0.5)] sm:h-20 sm:w-20 sm:rounded-3xl ${className}`}
    >
      <Image src={`/images/items/${id}.svg`} alt="" width={64} height={64} unoptimized className="h-9 w-9 sm:h-12 sm:w-12" />
    </div>
  );
}

export async function Download({ copy, lang }: { copy: Copy; lang: Lang }) {
  const qr = await QRCode.toString(PLAY_STORE_URL, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#0E4F34", light: "#FFFFFF" } });

  return (
    <section id="get" className="relative scroll-mt-20 overflow-hidden bg-[#0E4F34] text-white">
      <div aria-hidden="true" className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#17724A]/60" />
      <div aria-hidden="true" className="absolute -bottom-40 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-[#17724A]/40" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:26px_26px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_minmax(0,540px)] lg:gap-10 lg:px-10">
        <Reveal className="text-center lg:text-left">
          <h2 className="text-balance font-display text-5xl font-extrabold leading-[1.1] sm:text-6xl">{copy.download.title}</h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-white/85 lg:mx-0">{copy.download.body}</p>

          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {copy.facts.slice(0, 3).map((f) => (
              <li key={f.title} className="inline-flex items-center gap-2 text-sm font-bold text-white/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[#2B1706]">
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                {f.title}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex flex-col items-center gap-2">
              <PlayButton label={copy.download.cta} tone="white" className="w-full !py-4 sm:w-auto" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">{copy.download.note}</span>
            </div>

            <div className="hidden items-center gap-4 rounded-3xl bg-white/10 p-3 pr-5 ring-1 ring-white/15 sm:flex">
              <div className="h-[104px] w-[104px] rounded-2xl bg-white p-2.5" role="img" aria-label={copy.download.scan} dangerouslySetInnerHTML={{ __html: qr }} />
              <div className="text-left">
                <p className="text-sm font-extrabold">{copy.download.scan}</p>
                <p className="mt-1 max-w-[9rem] text-xs leading-snug text-white/70">{copy.download.scanHint}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto aspect-[540/640] w-full max-w-[540px]">
          <div className="absolute left-[2%] top-[14%] w-[43%] -rotate-[7deg] opacity-95">
            <Phone srcs={[shotPath(lang, "dark", "list")]} alt={copy.screens.captions.list} sizes="240px" />
          </div>
          <div className="absolute right-[2%] top-[17%] w-[43%] rotate-[7deg] opacity-95">
            <Phone srcs={[shotPath(lang, "light", "history")]} alt={copy.screens.captions.history} sizes="240px" />
          </div>
          <div className="absolute left-1/2 top-0 z-10 w-[50%] -translate-x-1/2">
            <Phone srcs={[shotPath(lang, "light", "basket")]} alt={copy.screens.captions.basket} sizes="280px" />
          </div>

          <Image
            src="/images/basket.png"
            alt=""
            aria-hidden="true"
            width={192}
            height={192}
            className="absolute -left-1 bottom-[6%] z-20 w-24 animate-[float_6.5s_ease-in-out_infinite] drop-shadow-[0_16px_18px_rgba(0,0,0,0.4)] sm:w-32"
          />
          <Tile id="milk" delay="-2s" className="right-[-2%] top-[4%]" />
          <Tile id="tomato" delay="-4s" className="bottom-[10%] right-[4%]" />
        </Reveal>
      </div>
    </section>
  );
}
