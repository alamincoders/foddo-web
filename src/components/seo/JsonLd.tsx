export const FAQ_DATA = [
  {
    question: "What makes Foddo different from other grocery list apps?",
    answer:
      "Foddo is built around a local-first architecture with sub-3-second Time-To-First-Value (TTFV). There are zero forced sign-in screens, zero subscription paywalls, and zero network loading delays. Your shopping lists are stored 100% locally and privately on your phone.",
  },
  {
    question: "Is Foddo completely free to use?",
    answer:
      "Yes, Foddo is 100% free to download and use. It contains zero intrusive ads, no subscription tiers, and no hidden paywalls.",
  },
  {
    question: "Does Foddo work without an internet connection?",
    answer:
      "Absolutely. Because Foddo stores all data directly on your device, all features—including instant list creation, smart category auto-sorting, and Bazar Mode—work 100% offline, even inside basement supermarkets with zero signal.",
  },
  {
    question: "How does Family Sync work without a mandatory account?",
    answer:
      "You can link household grocery lists with family members using a simple 6-digit sync code. Once connected, items synchronize in real time without requiring email or password registrations.",
  },
  {
    question: "What is Bazar Mode?",
    answer:
      "Bazar Mode is an ergonomic in-store shopping view designed for 1-handed walking. It features 48px+ thumb-friendly touch targets, sunlight high-contrast readability, and live Goal Gradient progress tracking as you check off items.",
  },
];

export function JsonLd() {
  const baseUrl = "https://foddo.itechills.com";

  // 1. SoftwareApplication / MobileApplication Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Foddo",
    operatingSystem: "Android, iOS",
    applicationCategory: "ShoppingApplication, ProductivityApplication",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Organization",
      name: "iTechills",
      url: "https://itechills.com",
    },
    downloadUrl: "https://play.google.com/store",
    featureList: [
      "Sub-3-Second Time To First Value",
      "100% Local On-Device Storage",
      "Bazar Mode In-Store Goal Gradient",
      "Real-Time Household Family Sync",
      "100% Offline Mode Operation",
      "Bangla and English Bilingual Support",
    ],
    screenshot: `${baseUrl}/images/overview.png`,
    image: `${baseUrl}/icon.png`,
    description:
      "Local-first smart grocery list app built for sub-3-second utility, privacy, offline shopping trips, and seamless household collaboration.",
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iTechills",
    url: "https://itechills.com",
    logo: `${baseUrl}/icon.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@itechills.com",
      contactType: "customer support",
      availableLanguage: ["English", "Bengali"],
    },
  };

  // 3. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Foddo by iTechills",
    url: baseUrl,
  };

  // 4. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 5. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: `${baseUrl}/privacy`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Terms of Service",
        item: `${baseUrl}/terms`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
