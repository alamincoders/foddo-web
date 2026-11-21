import { BASE_URL, COPY, PLAY_STORE_URL, type Lang } from "@/lib/site";

/** Structured data for search engines. Only things the app really does. */
export function JsonLd({ lang }: { lang: Lang }) {
  const copy = COPY[lang];
  const url = lang === "bn" ? `${BASE_URL}/bn` : BASE_URL;

  const app = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Foddo",
    operatingSystem: "Android",
    applicationCategory: "ShoppingApplication",
    inLanguage: ["en", "bn"],
    offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    author: { "@type": "Organization", name: "iTechills", url: "https://itechills.com" },
    downloadUrl: PLAY_STORE_URL,
    featureList: COPY.en.features.items.map((f) => f.title),
    screenshot: [`${BASE_URL}/images/app/en/light-list.png`, `${BASE_URL}/images/app/en/light-basket.png`, `${BASE_URL}/images/app/en/light-history.png`],
    image: `${BASE_URL}/icon.png`,
    description: copy.seo.description,
    url,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iTechills",
    url: "https://itechills.com",
    logo: `${BASE_URL}/icon.png`,
    contactPoint: { "@type": "ContactPoint", email: "support@itechills.com", contactType: "customer support", availableLanguage: ["English", "Bengali"] },
  };

  const website = { "@context": "https://schema.org", "@type": "WebSite", name: "Foddo by iTechills", url: BASE_URL, inLanguage: lang };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  return (
    <>
      {[app, organization, website, faq].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  );
}
