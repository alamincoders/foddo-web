"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/landing/motion/Reveal";
import { cn } from "@/lib/utils";
import { shotPath, type Copy, type Lang, type Scene, type Theme } from "@/lib/site";
import { Phone } from "./Phone";

const ORDER: Scene[] = ["empty", "list", "edit", "basket", "receipt", "restock", "history", "settings"];

export function Screens({ copy, lang }: { copy: Copy; lang: Lang }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [dragging, setDragging] = useState(false);
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0 });

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = (card?.getBoundingClientRect().width ?? 280) + 32;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  // Drag with the mouse. Touch already scrolls natively, so it is left alone.
  const down = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    if (!el || e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { down: true, x: e.clientX, left: el.scrollLeft };
    el.style.scrollSnapType = "none";
    el.setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const move = (e: React.PointerEvent<HTMLUListElement>) => {
    const el = track.current;
    if (!el || !drag.current.down) return;
    el.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const up = () => {
    const el = track.current;
    if (!el || !drag.current.down) return;
    drag.current.down = false;
    el.style.scrollSnapType = "";
    setDragging(false);
  };

  return (
    <section id="screens" className="scroll-mt-20 overflow-hidden border-t border-border bg-surface/70 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-wider text-primary">{copy.screens.eyebrow}</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">{copy.screens.title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{copy.screens.lead}</p>
        </Reveal>

        <div className="mb-6 flex items-center justify-center gap-4">
          <button type="button" onClick={() => scroll(-1)} aria-label={copy.screens.prev} className="hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary sm:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div role="tablist" className="inline-flex rounded-full border border-border bg-card p-1">
            {(["light", "dark"] as Theme[]).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={theme === t}
                onClick={() => setTheme(t)}
                className={cn("rounded-full px-6 py-2 text-sm font-extrabold transition-colors", theme === t ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground")}
              >
                {copy.screens[t]}
              </button>
            ))}
          </div>
          <button type="button" onClick={() => scroll(1)} aria-label={copy.screens.next} className="hidden h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary sm:flex">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ul
        ref={track}
        tabIndex={0}
        aria-label={copy.screens.title}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onDragStart={(e) => e.preventDefault()}
        className={cn(
          "flex snap-x snap-mandatory select-none gap-8 overflow-x-auto gutter-x pb-16 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          dragging ? "cursor-grabbing" : "cursor-grab",
        )}
      >
        {ORDER.map((scene) => (
          <li key={scene} className="w-[min(68vw,290px)] shrink-0 snap-center sm:snap-start">
            <Phone
              srcs={[shotPath(lang, "light", scene), shotPath(lang, "dark", scene)]}
              index={theme === "light" ? 0 : 1}
              alt={copy.screens.captions[scene]}
              sizes="290px"
              className="pointer-events-none shadow-[0_22px_40px_-24px_rgba(10,30,20,0.55)]"
            />
            <p className="mt-6 text-center text-base font-extrabold text-foreground">{copy.screens.captions[scene]}</p>
          </li>
        ))}
        <li aria-hidden="true" className="w-px shrink-0" />
      </ul>
    </section>
  );
}
