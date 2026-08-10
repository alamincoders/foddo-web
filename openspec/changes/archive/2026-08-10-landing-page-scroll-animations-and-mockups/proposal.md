## Why

The current FODDO web landing page wraps pre-rendered marketing cards into artificial CSS phone frames with fake notch cutouts, cropping out over 50% of the graphic details, typography, and 3D artwork. Additionally, the page lacks modern interactive scroll triggers, resulting in a generic "AI template" aesthetic instead of a polished, high-converting consumer product website (similar to Insurity360 / Apple / Things 3). This change redesigns the landing page architecture to properly present all 12 pre-rendered 2:3 and 3:2 marketing assets, introduces Framer-grade scroll-driven reveal animations, interactive feature tabs, and a sticky product journey.

## What Changes

- **Marketing Poster Showcase Architecture**: Eliminate artificial CSS phone bezels (`border-[8px]`, fake speaker notches, hardcoded `aspect-[9/19.5]` cropping) and render all 12 pre-rendered marketing assets (`empty-screen.png`, `bazar-mode.png`, `overview.png`, `family-*.png`, `lists.png`, `new-bazar.png`, `settings.png`, `smart-shopping-breakdown.png`, `cta.png`) in their native 2:3 and 3:2 aspect ratios with subtle ambient depth.
- **Scroll-Triggered Reveal Animations**: Implement Insurity360-style viewport animations (`opacity: 0, y: 24px` -> `opacity: 1, y: 0`) using spring-physics transitions and staggered card entries.
- **Panoramic 8-Screen App Ecosystem Bar**: Introduce an ambient full-width showcase bar highlighting `overview.png` with smooth scale-up on scroll.
- **Sticky Feature Journey (Insurity360-style)**: Pinned left-hand narrative navigation with dynamic step indicators synchronizing with right-hand card progression (`lists.png`, `bazar-mode.png`, `new-bazar.png`).
- **Interactive Household Sync Tabs**: Framer-style sliding pill tabs allowing visitors to switch between Household Sync (`family-explaination.png`), Live In Market (`family-bazar.png`), and Instant 6-Digit Join Code (`family-joining-process.png`).
- **Sub-3s Pipeline Flow Animation**: Connected step flow with an animated gradient track illustrating the sub-3-second Time-to-First-Value (`Launch` -> `Type "Milk"` -> `Auto Sort` -> `Done`).
- **Local-First Privacy & Feature Bento Grid**: Responsive grid displaying SQLite data sovereignty (`settings.png`) and the 8-feature hub (`smart-shopping-breakdown.png`).
- **High-Impact CTA Showcase**: Polished conversion banner featuring `cta.png` with official Google Play action buttons and zero-gate trust metrics.

## Capabilities

### New Capabilities
- `landing-showcase-and-animations`: Complete responsive landing page with full-aspect marketing mockup presentations, Insurity360-inspired scroll-driven animations, interactive tab switchers, and elimination of generic AI template aesthetics.

### Modified Capabilities
<!-- None -->

## Impact

- **UI Components**: Overhaul of `HeroSection.tsx`, `FeatureGrid.tsx`, `TTFVSection.tsx`, `PrivacySection.tsx`, and addition of interactive tab/animation components.
- **Styling**: Integration of smooth scroll transitions, subtle ambient shadows, and 3D card perspective utilities in Tailwind CSS.
- **Dependencies**: Uses React 19 / Next.js 16 with lightweight CSS/Intersection Observer or Framer Motion hooks for 60fps animations without performance degradation.
