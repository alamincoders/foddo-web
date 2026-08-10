## Context

See `proposal.md` for motivation and background. The landing page is built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Lucide React. Pre-rendered 1024x1536 (2:3) and 1535x1024 (3:2) marketing graphics are stored in `public/images/`.

## Goals / Non-Goals

**Goals:**
- Present pre-rendered marketing assets with zero distortion, no double bezels, and full visual fidelity.
- Build Insurity360-style viewport animations (staggered fade-up, scale-in, active tab indicators, animated step pipelines).
- Implement interactive client components (Tab switcher, Interactive 3-second pipeline, Floating 3D card perspective).
- Maintain 60fps scrolling performance on desktop and mobile devices.

**Non-Goals:**
- Heavy three.js / WebGL rendering (unnecessary weight; CSS 3D transforms & SVG gradients are lightweight and fast).
- Modifying backend or database code (foddo-web is a marketing frontend).

## Decisions

### 1. Component Architecture & Separation
- **`HeroSection.tsx`**: Features `empty-screen.png` inside an unconstrained `rounded-3xl` card with subtle hover tilt (`perspective: 1000px`) and floating trust pills.
- **`EcosystemShowcase.tsx`**: New component rendering `overview.png` as a full-width panoramic card with ambient shadow.
- **`FeatureStickyJourney.tsx`**: Pinned left-hand navigation with dynamic step indicators synchronizing with right-hand card progression (`lists.png`, `bazar-mode.png`, `new-bazar.png`).
- **`FamilySyncSection.tsx`**: Interactive tabbed showcase supporting switching between `family-explaination.png`, `family-bazar.png`, and `family-joining-process.png` with smooth Framer-style layout transitions.
- **`TTFVPipelineSection.tsx`**: Connected 4-step pipeline animation (`Launch` -> `Type "Milk"` -> `Auto Sort` -> `Done in <3s`) replacing generic text boxes.
- **`LocalPrivacyBento.tsx`**: Bento grid displaying `settings.png` alongside `smart-shopping-breakdown.png` and local-first SQLite pillars.
- **`FinalCTASection.tsx`**: High-converting footer banner spotlighting `cta.png` with Google Play action buttons.

### 2. Animation Engine Choice: Framer Motion / Motion + Intersection Observer
- **Decision**: Use `framer-motion` (or `@motionone` / React 19 compatible `motion`) or lightweight custom React `useInView` hooks paired with CSS transitions for zero hydration mismatch.
- **Rationale**: Ensures silky-smooth 60fps scroll triggers without blocking SSR hydration or adding runtime lag.

### 3. Aspect Ratio & Responsive Image Presentation
- **Decision**: Wrap portrait posters in `relative aspect-[2/3] w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/10 border border-black/5 dark:border-white/10`.
- **Rationale**: Preserves the complete poster typography, 3D grocery baskets, and status pills without cropping.

## Risks / Trade-offs

- **[Risk] React 19 SSR Hydration Mismatch with Scroll Observers** → **Mitigation**: Use `"use client"` on animated interactive components and attach IntersectionObservers inside `useEffect` or use `framer-motion`'s `whileInView` with `viewport={{ once: true }}`.
- **[Risk] Image load layout shift (CLS)** → **Mitigation**: Specify explicit `width`, `height`, and `priority` on the above-the-fold hero image, and `loading="lazy"` on subsequent section images.
