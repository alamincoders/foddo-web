import { COPY, type Lang } from "@/lib/site";
import { Download } from "./Download";
import { Engine } from "./Engine";
import { Faq } from "./Faq";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Help } from "./Help";
import { Hero } from "./Hero";
import { ItemStrip } from "./ItemStrip";
import { Privacy } from "./Privacy";
import { Screens } from "./Screens";

/** The whole landing page. English at "/", Bangla at "/bn": same layout, different copy and screenshots. */
export function Landing({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Header copy={copy} />
      <main className="flex-1">
        <Hero copy={copy} lang={lang} />
        <ItemStrip copy={copy} lang={lang} />
        <Features copy={copy} lang={lang} />
        <Engine copy={copy} />
        <Screens copy={copy} lang={lang} />
        <Privacy copy={copy} />
        <Faq copy={copy} />
        <Help copy={copy} />
        <Download copy={copy} lang={lang} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
