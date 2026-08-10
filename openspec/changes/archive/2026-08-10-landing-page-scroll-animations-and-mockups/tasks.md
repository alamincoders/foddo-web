## 1. Animation Foundation & Motion Setup

- [x] 1.1 Install and configure animation dependencies (`framer-motion` / `motion` or lightweight viewport transition hooks)
- [x] 1.2 Add reusable scroll-reveal animation wrapper components (`RevealOnScroll.tsx`, `StaggerContainer.tsx`)
- [x] 1.3 Configure 3D perspective, tilt, and ambient shadow utilities in Tailwind / CSS

## 2. Hero Section & Panorama Ecosystem Banner

- [x] 2.1 Refactor `HeroSection.tsx` to display the full 2:3 `empty-screen.png` poster with 3D tilt and floating trust badges (removing artificial phone bezels)
- [x] 2.2 Create `EcosystemShowcase.tsx` featuring `overview.png` in a panoramic 3:2 layout with ambient depth and scroll scale-in

## 3. Sub-3s TTFV Pipeline Section

- [x] 3.1 Build `TTFVPipelineSection.tsx` with animated 4-step connecting line (`Launch` -> `Type "Milk"` -> `Auto Sort` -> `Done in <3s`)
- [x] 3.2 Update speed comparison metrics to reflect authentic local SQLite benefits

## 4. Sticky Feature Journey & Bazar Mode Spotlight

- [x] 4.1 Create `FeatureStickyJourney.tsx` with pinned navigation on desktop and scroll-synchronized card progression (`lists.png`, `bazar-mode.png`, `new-bazar.png`)
- [x] 4.2 Build deep-dive spotlight for Bazar Mode with Goal Gradient progress checklist

## 5. Interactive Household Sync Tabs

- [x] 5.1 Build `FamilySyncSection.tsx` with animated Framer-style pill tabs
- [x] 5.2 Implement smooth transitions between `family-explaination.png`, `family-bazar.png`, and `family-joining-process.png`

## 6. Local-First Bento Grid & Final CTA Banner

- [x] 6.1 Build `LocalPrivacyBento.tsx` presenting `settings.png` alongside `smart-shopping-breakdown.png` and SQLite pillars
- [x] 6.2 Redesign `FinalCTASection.tsx` with `cta.png`, 3D grocery basket visuals, and Google Play download triggers

## 7. Main Page Assembly & Verification

- [x] 7.1 Assemble all revamped components in `src/app/page.tsx`
- [x] 7.2 Verify responsive layout and 60fps animations across mobile, tablet, and desktop viewports
- [x] 7.3 Run Next.js build / lint checks to ensure zero errors and clean bundle
