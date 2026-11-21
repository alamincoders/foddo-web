import Image from "next/image";
import Link from "next/link";
import { APP_CONFIG } from "@/lib/constants";
import type { Copy } from "@/lib/site";
import { PlayButton } from "./PlayButton";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-extrabold uppercase tracking-wider text-white/50">{title}</h2>
      <ul className="mt-4 grid gap-3 text-[0.95rem] font-semibold text-white/85">{children}</ul>
    </div>
  );
}

const linkClass = "transition hover:text-accent";

export function Footer({ copy }: { copy: Copy }) {
  const base = copy.path;
  return (
    <footer className="bg-[#082B1D] text-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10">
        <div className="max-w-sm">
          <Link href={base} className="inline-flex items-center gap-3" aria-label="Foddo">
            <Image src="/icon.png" alt="" width={48} height={48} className="rounded-2xl" />
            <span className="font-display text-3xl font-extrabold leading-none">Foddo</span>
          </Link>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-white/70">{copy.footer.about}</p>
          <PlayButton label={copy.nav.get} tone="white" className="mt-6 !gap-2.5 !rounded-xl !px-5 !py-3 !text-sm" />
        </div>

        <Column title={copy.footer.product}>
          <li><a href={`${base}#features`} className={linkClass}>{copy.nav.features}</a></li>
          <li><a href={`${base}#how`} className={linkClass}>{copy.nav.engine}</a></li>
          <li><a href={`${base}#screens`} className={linkClass}>{copy.nav.screens}</a></li>
          <li><a href={`${base}#faq`} className={linkClass}>{copy.nav.faq}</a></li>
        </Column>

        <Column title={copy.footer.legal}>
          <li><Link href="/privacy" className={linkClass}>{copy.footer.privacy}</Link></li>
          <li><Link href="/terms" className={linkClass}>{copy.footer.terms}</Link></li>
        </Column>

        <Column title={copy.footer.contactTitle}>
          <li><a href={`mailto:${APP_CONFIG.supportEmail}`} className={linkClass}>{APP_CONFIG.supportEmail}</a></li>
          <li className="pt-2">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-white/50">{copy.footer.languages}</p>
            <div className="flex gap-2">
              <Link href="/" hrefLang="en" lang="en" className={`rounded-full px-3.5 py-1.5 text-sm font-extrabold ${copy.htmlLang === "en" ? "bg-white text-[#0E4F34]" : "bg-white/10 hover:bg-white/20"}`}>EN</Link>
              <Link href="/bn" hrefLang="bn" lang="bn" className={`rounded-full px-3.5 py-1.5 text-sm font-extrabold ${copy.htmlLang === "bn" ? "bg-white text-[#0E4F34]" : "bg-white/10 hover:bg-white/20"}`}>বাংলা</Link>
            </div>
          </li>
        </Column>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center justify-between gap-2 px-5 py-6 text-center text-sm text-white/55 sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <p>{copy.footer.tagline}</p>
          <p>
            {copy.footer.made}{" "}
            <a href={APP_CONFIG.companyUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white/85 hover:text-accent">
              {APP_CONFIG.company}
            </a>{" "}
            · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
