## Context

The web application is built on Next.js 16 (App Router) deployed at `https://foddo.itechills.com`. We need to maximize search engine discoverability, brand keyword authority for "FODDO", and rich knowledge snippet indexing using Next.js native metadata conventions without introducing external overhead.

## Goals / Non-Goals

**Goals:**
- Implement Next.js native `app/sitemap.ts`, `app/robots.ts`, and `app/manifest.ts`.
- Create a dedicated `JsonLd.tsx` SEO component injecting 5 Schema.org schemas (`MobileApplication`, `Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`).
- Add an on-page interactive `FAQSection.tsx` component designed to match the `FAQPage` schema to trigger Google search rich FAQ accordions.
- Set up canonical URLs, multilingual tags (`en_US`, `bn_BD`), and search console verification slots across all routes.

**Non-Goals:**
- Paid Google Ads or search engine advertising.
- Server-side dynamic blog CMS system (current scope focuses on core landing, legal, and product pages).

## Decisions

### 1. Native Next.js Dynamic Metadata over Static XML Files
- **Rationale**: Next.js App Router provides typed `MetadataRoute.Sitemap` and `MetadataRoute.Robots` which automatically compute absolute URLs, lastModified dates, and correct HTTP content-type headers.
- **Alternatives Considered**: Static `.xml` and `.txt` files in `public/` (harder to maintain, no dynamic timestamps).

### 2. Multi-Schema JSON-LD Injection via `<script type="application/ld+json">`
- **Rationale**: Google's Structured Data guidelines prefer unified JSON-LD in the document `<head>` or root layout.
- **Alternatives Considered**: Microdata HTML attributes (clutters markup, harder to validate).

### 3. Native React State Accordion for On-Page FAQs
- **Rationale**: Clean, lightweight accessible disclosure widgets using Tailwind and Lucide icons without external UI libraries.
- **Alternatives Considered**: Third-party accordion libraries (unnecessary bundle bloat).

## Risks / Trade-offs

- **[Risk] Schema Validation Errors**: Search engines may ignore invalid schema formats.
  - **Mitigation**: Ensure strict adherence to Schema.org standards and validate JSON structure against Google's Rich Results Test tool specifications.
- **[Risk] Duplicate URL Indexing**: Search engines indexing `/` and `/?ref=...` separately.
  - **Mitigation**: Add explicit canonical link tag `https://foddo.itechills.com` in metadata.
