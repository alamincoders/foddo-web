## Why

On mobile smartphones (< 768px), several sections of `foddo-web` suffer from severe visual friction: overlapping badges colliding with titles ("Other Grocery & Cloud Apps"), giant multi-screen vertical scrolling in the Smart Input playground (~2,500px height), text-heavy layouts pushing visual mockups far below the fold, microscopic 8-screen images in the Ecosystem showcase, and broken/wrapped headings. This change re-architects the mobile experience to be image-first, hyper-compact, crystal-clear, and ergonomically seamless while keeping the desktop layout 100% intact.

## What Changes

- **Image-First Hierarchy on Mobile**: Reorder 2-column feature sections on mobile so high-resolution visual app mockups appear FIRST at the top, immediately followed by the concise feature benefits and metrics.
- **Header & Badge Collision Fixes**: Convert all card header bars to responsive flex layouts (`flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between`) to eliminate badge overlap on narrow screens.
- **Compact Mobile Smart Input Playground**: Streamline the Smart Input section on mobile by reducing input padding, featuring top preset pills, a clean single-row live token breakdown, and converting the 4 pillar cards into a compact 2x2 grid.
- **Mobile-Optimized Ecosystem Showcase**: Provide a dedicated, high-resolution mobile showcase/slider for the Ecosystem section (`md:hidden`) so mobile visitors see sharp, readable phone mockups instead of a squeezed, microscopic 8-screen grid.
- **Household Collaboration Narrative on Mobile**: Reorganize the Family Sync section on mobile with a visual household connection story (`Dad At Market 🛒 ↔ Mom At Home 🏠`) placed directly alongside the active UI mockup.
- **Zero Broken Text & Responsive Headings**: Apply fluid typography scaling and `text-wrap: balance` to prevent orphan words and awkward line breaks across all section headings.

## Capabilities

### Modified Capabilities
- `landing-showcase-and-animations`: Add mobile-first visual ordering, header collision prevention, compact mobile interactive playground, and high-resolution mobile showcase rendering.

## Impact

- **Affected Components**:
  - `src/components/landing/TTFVPipelineSection.tsx`
  - `src/components/landing/SmartInputSection.tsx`
  - `src/components/landing/EcosystemShowcase.tsx`
  - `src/components/landing/FamilySyncSection.tsx`
  - `src/components/landing/FeatureStickyJourney.tsx`
  - `src/components/landing/FinalCTASection.tsx`
  - `src/components/landing/LocalPrivacyBento.tsx`
- **Dependencies**: No external dependency changes required.
