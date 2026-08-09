## Why

FODDO is a local-first, privacy-focused smart grocery and shopping list application. To publish and promote the mobile application on the Google Play Store and support link-outs from the in-app Settings menu (Privacy Policy & Terms of Service), FODDO requires a global English marketing landing page and dedicated legal compliance pages. Additionally, the web app needs a unified design system in `globals.css` aligned with the FODDO mobile app tokens and Tailwind CSS v4 conventions.

## What Changes

- **Design System Integration**: Configure `src/styles/globals.css` using Tailwind CSS v4 `@theme` directives, matching FODDO mobile brand colors (`#2F7D5C` primary, `#FAFAF7` background, `#1F2937` foreground, `#F59E0B` accent), standard 4x spacing multipliers (`p-4` = 16px, `p-5` = 20px, etc.), and clean modern font setup (Plus Jakarta Sans).
- **Favicon & Brand Assets**: Copy and configure brand icons (`icon.png`, `favicon.png`, `splash.png`) from native app assets into `foddo-web/public`.
- **Global Marketing Landing Page (`/`)**: Build a modern, high-converting landing page highlighting FODDO's local-first architecture (SQLite/Drizzle), sub-3-second TTFV, Bazar Mode features, Family Sharing, and direct Play Store download CTA.
- **Privacy Policy Page (`/privacy`)**: Create a comprehensive privacy policy page detailing local data persistence, zero mandatory registration, optional demographic policy, and user data rights.
- **Terms of Service Page (`/terms`)**: Create a terms of service page outlining app licensing, offline usage, intellectual property, and disclaimers.

## Capabilities

### New Capabilities
- `landing-page`: High-converting global English landing page for FODDO featuring app mockups, feature breakdowns, TTFV highlights, and Play Store download CTAs.
- `legal-pages`: Legal compliance pages (`/privacy` and `/terms`) formatted for web display and mobile app settings integration.

### Modified Capabilities
<!-- None -->

## Impact

- `src/styles/globals.css`: Updated with Tailwind CSS v4 `@theme` design tokens and font system.
- `src/app/layout.tsx`: Updated metadata, favicons, font loading, global header/footer shell.
- `src/app/page.tsx`: Replaced default Next.js template with full FODDO landing page.
- `src/app/privacy/page.tsx`: New route for Privacy Policy.
- `src/app/terms/page.tsx`: New route for Terms of Service.
- `public/`: Brand favicons and mockup image integrations.
