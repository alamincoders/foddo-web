"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlayButton } from "./PlayButton";
import type { Copy } from "@/lib/site";

/** EN | বাংলা as a switch: the current language is filled, the other one is a link to it. */
function LanguageSwitch({ copy }: { copy: Copy }) {
  const onBangla = copy.htmlLang === "bn";
  const options = [
    { label: "EN", name: "English", href: "/", lang: "en", active: !onBangla },
    { label: "বাংলা", name: "বাংলা", href: "/bn", lang: "bn", active: onBangla },
  ];
  return (
    <div role="group" aria-label={copy.langLabel} className="inline-flex rounded-full border border-border bg-card p-1">
      {options.map((o) => (
        <Link
          key={o.lang}
          href={o.href}
          hrefLang={o.lang}
          lang={o.lang}
          aria-label={o.name}
          aria-current={o.active ? "true" : undefined}
          className={cn(
            "rounded-full px-3.5 py-1.5 text-sm font-extrabold leading-none transition-colors",
            o.active ? "bg-primary text-white" : "text-muted-foreground hover:text-primary",
          )}
        >
          {o.label}
        </Link>
      ))}
    </div>
  );
}

export function Header({ copy }: { copy: Copy }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: copy.nav.features, href: `${copy.path}#features` },
    { label: copy.nav.engine, href: `${copy.path}#how` },
    { label: copy.nav.screens, href: `${copy.path}#screens` },
    { label: copy.nav.faq, href: `${copy.path}#faq` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href={copy.path} className="flex items-center gap-3" aria-label="Foddo">
          <Image src="/icon.png" alt="" width={40} height={40} className="rounded-xl" priority />
          <span className="font-display text-[1.7rem] font-extrabold leading-none text-foreground">Foddo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.95rem] font-bold text-muted-foreground transition hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitch copy={copy} />
          <PlayButton label={copy.nav.get} className="hidden !gap-2 !rounded-xl !px-4 !py-2.5 !text-sm lg:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={copy.nav.menu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-surface md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-bold text-foreground hover:bg-surface">
                {l.label}
              </a>
            ))}
          </nav>
          <PlayButton label={copy.nav.get} className="mt-3 w-full" />
        </div>
      )}
    </header>
  );
}
