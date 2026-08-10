## 1. Technical SEO & Indexing Infrastructure

- [x] 1.1 Create `src/app/sitemap.ts` generating dynamic XML sitemaps for all routes and key images
- [x] 1.2 Create `src/app/robots.ts` defining search bot crawler rules and sitemap endpoint
- [x] 1.3 Create `src/app/manifest.ts` delivering PWA web app manifest for Google mobile indexing

## 2. Schema.org Structured Data Engine

- [x] 2.1 Build `src/components/seo/JsonLd.tsx` generating MobileApplication, Organization, WebSite, and BreadcrumbList schemas
- [x] 2.2 Add comprehensive `FAQPage` schema mapping to boost Google rich snippet results
- [x] 2.3 Inject `JsonLd` into `src/app/layout.tsx`

## 3. On-Page SEO & FAQ Section

- [x] 3.1 Build `src/components/landing/FAQSection.tsx` with high-contrast accessible accordion matching the schema
- [x] 3.2 Integrate `FAQSection` into `src/app/page.tsx` before the final CTA
- [x] 3.3 Add canonical URLs, alternate language tags (`en_US`, `bn_BD`), and search verification meta to `layout.tsx`, `privacy/page.tsx`, and `terms/page.tsx`

## 4. Verification & Testing

- [x] 4.1 Validate sitemap, robots, and manifest endpoints in dev/build mode
- [x] 4.2 Run `npm run build` and ensure zero TypeScript or metadata generation errors
