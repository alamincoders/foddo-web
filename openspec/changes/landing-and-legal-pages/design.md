## Context

FODDO is expanding its web footprint with a global English landing page and dedicated legal pages (`/privacy`, `/terms`). The implementation leverages Next.js 16 (App Router), React 19, and Tailwind CSS v4. See `proposal.md` for motivation and background context.

## Goals / Non-Goals

**Goals:**
- Implement FODDO Design System in `src/styles/globals.css` using Tailwind v4 `@theme` directives and exact color codes from the mobile app (`#2F7D5C` primary, `#FAFAF7` background, `#1F2937` foreground).
- Configure standard 4x spacing multipliers (`p-4` = 16px, `pt-5` = 20px, `p-6` = 24px, `p-8` = 32px, etc.) and zero hardcoded px values.
- Setup Google Font `Plus Jakarta Sans` for clean, modern typography.
- Build a global English marketing landing page (`/`) with high-converting Play Store download CTAs, feature breakdowns, and high-res app mockups (`overview.png`, `bazar-mode.png`, `family-bazar.png`, `smart-shopping-breakdown.png`).
- Build responsive Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages formatted for both web browsers and in-app mobile webviews (Settings link-outs).
- Integrate favicons and app icons from native app assets (`icon.png`, `favicon.png`).

**Non-Goals:**
- Creating backend API services or user authentication on the web (FODDO is local-first on mobile).
- Multi-language localization in Phase 1 (Global English is primary).

## Technical Decisions

### Decision 1: Tailwind CSS v4 `@theme` Architecture
- **Choice**: Configure CSS custom properties inside `@theme` in `src/styles/globals.css`.
- **Details**:
  ```css
  @theme {
    --font-sans: 'Plus Jakarta Sans', var(--font-sans), sans-serif;
    --color-primary: #2F7D5C;
    --color-primary-soft: #5A9C80;
    --color-primary-muted: #E8F4EE;
    --color-background: #FAFAF7;
    --color-foreground: #1F2937;
    --color-card: #FFFFFF;
    --color-card-foreground: #1F2937;
    --color-surface: #F4F5F2;
    --color-accent: #F59E0B;
    --color-accent-soft: #FCD68A;
    --color-accent-muted: #FFF7E6;
    --color-muted: #F4F5F2;
    --color-muted-foreground: #6B7280;
    --color-border: #E5E7EB;
  }
  ```
- **Rationale**: Aligns with Tailwind CSS v4 `@theme` directive, producing atomic utility classes like `bg-primary`, `text-primary`, `bg-background`, `border-border`.

### Decision 2: Pure Static Site Generation (SSG) & SEO Optimization
- **Choice**: Render landing page, privacy policy, and terms as static Server Components.
- **Rationale**: Instant page loading (< 200ms TTFB), optimal Core Web Vitals score (100/100 LCP), and search engine indexing.

### Decision 3: Modular Layout & Component Architecture
- **Structure**:
  - `src/components/layout/Navbar.tsx`: Sticky navigation bar with logo, links, and Play Store CTA.
  - `src/components/layout/Footer.tsx`: Global footer with links to `/privacy` and `/terms`.
  - `src/components/landing/HeroSection.tsx`: Hero section with Play Store badge and device mockup.
  - `src/components/landing/TTFVSection.tsx`: Showcase of 3-second instant utility without login walls.
  - `src/components/landing/FeatureGrid.tsx`: Grid highlighting Bazar Mode, Family Sharing, and Smart Categorization.
  - `src/components/landing/PrivacySection.tsx`: Local-first architecture & SQLite privacy guarantee.
  - `src/components/legal/LegalDocLayout.tsx`: Formatted layout for legal documents with TOC navigation and webview support.

## Risks / Trade-offs

- **[Risk]**: App screenshot resolution mismatch on ultra-wide screens.
  - **Mitigation**: Wrap mockups inside responsive device frames with maximum width containers (`max-w-6xl`, `mx-auto`) and smooth aspect ratio control.
- **[Risk]**: Mobile Webview rendering inside App Settings menu.
  - **Mitigation**: Implement `LegalDocLayout` with clean typography, responsive padding (`p-4` to `p-8`), and mobile touch-friendly navigation.
