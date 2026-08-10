## Why

FODDO is launching publicly at `https://foddo.itechills.com`. To ensure when users search for "FODDO", "Foddo App", "Foddo Grocery", or related search intents on Google, Bing, DuckDuckGo, and other search engines, FODDO ranks #1 with rich search knowledge snippets, high CTR OpenGraph previews, and fast crawlability.

## What Changes

- **Technical SEO & Indexing**: Dynamic `sitemap.ts` (covering routes and preview images), dynamic `robots.ts` with explicit host and sitemap directives, and `manifest.ts` PWA metadata.
- **Schema.org Structured Data (JSON-LD)**: 5-in-1 rich schema component injecting `MobileApplication`, `Organization`, `WebSite`, `FAQPage`, and `BreadcrumbList`.
- **On-Page SEO & Metadata**: Canonical URLs, high-CTR titles, bilingual search keywords (English & Bengali), and Google/Bing search console verification tags.
- **On-Page Interactive FAQ Section**: High-converting accordion answering top user questions that matches the `FAQPage` JSON-LD schema 1-to-1 to earn Google search rich snippet accordions.

## Capabilities

### New Capabilities
- `search-engine-optimization-and-indexing`: Comprehensive Technical SEO, Schema.org JSON-LD structured data, sitemap generation, bot crawling configuration, and on-page FAQ rich snippet architecture.

### Modified Capabilities

## Impact

- **Affected Code**:
  - `src/app/sitemap.ts` [NEW]
  - `src/app/robots.ts` [NEW]
  - `src/app/manifest.ts` [NEW]
  - `src/components/seo/JsonLd.tsx` [NEW]
  - `src/components/landing/FAQSection.tsx` [NEW]
  - `src/app/layout.tsx` [MODIFY]
  - `src/app/page.tsx` [MODIFY]
  - `src/app/privacy/page.tsx` [MODIFY]
  - `src/app/terms/page.tsx` [MODIFY]
- **APIs/Dependencies**: Zero external heavy libraries required; native Next.js Metadata and Schema.org standards.
