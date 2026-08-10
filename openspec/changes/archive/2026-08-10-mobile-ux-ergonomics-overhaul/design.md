## Context

The current desktop landing page is visually rich and effective, but mobile viewports (< 768px) exhibit specific layout defects (badge overlap, excessive vertical scroll, tiny downscaled images, and inverted image/copy ordering). This design establishes a responsive strategy that provides tailored mobile ergonomics while preserving desktop presentation unchanged.

## Goals / Non-Goals

**Goals:**
- Provide image-first visual ordering on mobile screens (`flex-col-reverse` or order utility classes).
- Fix header badge collisions across all cards using responsive flex layouts (`flex-col sm:flex-row`).
- Compress the Smart Input playground into a compact, engaging mobile card with 2x2 pillars.
- Deliver crystal-clear mobile phone imagery for the Ecosystem section instead of microscopic multi-screen downscaling.
- Re-architect Family Sync on mobile to visually highlight the household connection.
- Eliminate broken word wrapping on headings across all viewport widths.

**Non-Goals:**
- Modifying desktop layouts (desktop remains 100% untouched).
- Changing backend, routing, or state architecture.

## Decisions

### 1. Mobile Visual Order Strategy
- **Choice**: Use Tailwind flex order classes (`order-1 lg:order-2` for images, `order-2 lg:order-1` for text copy in 2-column grids) or dedicated mobile-first responsive wrappers.
- **Rationale**: On mobile, users need immediate visual context from the app mockup before reading bullet points.

### 2. Header and Badge Layout Strategy
- **Choice**: Replace fixed horizontal headers (`flex items-center justify-between`) with responsive wrappers (`flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between`).
- **Rationale**: On screens 320px–400px wide, long titles and badges wrap naturally without overlaying text.

### 3. Smart Input Mobile Compression
- **Choice**: Limit visible preset chips on mobile to top 4 popular items, streamline parsed breakdown rows, and arrange the 4 pillar cards into a clean 2x2 grid (`grid-cols-2 lg:grid-cols-4`).
- **Rationale**: Reduces section vertical height from ~2,500px to < 900px on mobile.

### 4. Ecosystem Mobile Presentation
- **Choice**: Maintain the panoramic 8-screen overview on desktop (`hidden md:block`), and render a curated high-resolution phone preview (`md:hidden`) with sharp, readable UI.
- **Rationale**: Downscaling 8 phone screens onto a 360px mobile viewport renders all typography illegible.

## Risks / Trade-offs

- **[Risk]**: Duplicate DOM elements if using separate mobile vs desktop blocks.
  - **Mitigation**: Prefer responsive CSS utility classes (`order-*`, `flex-col sm:flex-row`, `grid-cols-2 lg:grid-cols-4`) on shared components wherever possible.
