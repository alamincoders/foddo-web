## 1. Design System & Assets Pipeline

- [x] 1.1 Update `src/styles/globals.css` with Tailwind CSS v4 `@theme` design tokens matching FODDO mobile colors (`#2F7D5C`, `#FAFAF7`, `#1F2937`, `#F59E0B`), font scale, and standard 4x spacing rules.
- [x] 1.2 Copy native app brand icons (`icon.png`, `favicon.png`, `splash.png`) to `public/` and configure root metadata & font loading in `src/app/layout.tsx`.

## 2. Layout & Shared Components

- [x] 2.1 Create responsive `src/components/layout/Navbar.tsx` with brand logo, section anchors, and Play Store CTA button.
- [x] 2.2 Create `src/components/layout/Footer.tsx` with quick links (`/privacy`, `/terms`), copyright, and support contacts.
- [x] 2.3 Create `src/components/legal/LegalDocLayout.tsx` providing structured section navigation and responsive styling for legal documents.

## 3. Global Marketing Landing Page (`/`)

- [x] 3.1 Implement `HeroSection.tsx` featuring the headline, Play Store badge CTA, and phone mockup showcasing app overview.
- [x] 3.2 Implement `TTFVSection.tsx` demonstrating FODDO's sub-3-second Time-To-First-Value and zero account gate philosophy.
- [x] 3.3 Implement `FeatureGrid.tsx` showcasing Bazar Mode (Goal Gradient), Family Sync, and Smart Categorization with mockups (`bazar-mode.png`, `family-bazar.png`, `smart-shopping-breakdown.png`).
- [x] 3.4 Implement `PrivacySection.tsx` explaining local-first SQLite database storage and zero cloud tracking.
- [x] 3.5 Assemble all sections into `src/app/page.tsx`.

## 4. Legal Compliance Pages (`/privacy` & `/terms`)

- [x] 4.1 Build Privacy Policy page at `src/app/privacy/page.tsx` with complete privacy terms, optional demographic data policy, and contact details.
- [x] 4.2 Build Terms of Service page at `src/app/terms/page.tsx` with licensing terms, offline operation disclaimers, and user agreements.

## 5. Build & Verification

- [x] 5.1 Run Next.js build (`npm run build`) to ensure clean compilation and type safety.
- [x] 5.2 Validate responsive layout and page navigation across all routes.
