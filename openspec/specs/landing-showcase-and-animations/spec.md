# landing-showcase-and-animations Specification

## Purpose
Provides a responsive marketing landing page that presents pre-rendered application mockups in their natural aspect ratios with smooth scroll-driven animations, interactive feature tabs, and a cohesive product narrative.

## Requirements
### Requirement: Native Marketing Mockup Rendering
The landing page SHALL render all marketing imagery (`empty-screen.png`, `overview.png`, `bazar-mode.png`, `family-*.png`, `lists.png`, `new-bazar.png`, `settings.png`, `smart-shopping-breakdown.png`, `cta.png`) in their native 2:3 and 3:2 aspect ratios without clipping, artificial black outer bezels, or simulated phone speaker notches.

#### Scenario: Viewing the hero showcase card
- **WHEN** a user visits the homepage
- **THEN** the hero section displays the complete `empty-screen.png` card with all typography and 3D basket artwork visible without horizontal or vertical cropping

#### Scenario: Viewing feature posters
- **WHEN** a user scrolls to the Bazar Mode or List Management sections
- **THEN** the marketing posters display with full left-hand feature tags and right-hand device previews without distortion

### Requirement: Scroll-Triggered Reveal Animations
The landing page SHALL animate components into view as they enter the browser viewport using smooth fade-up and scale-in spring transitions.

#### Scenario: Scrolling down to a section
- **WHEN** a section enters the viewport threshold (e.g. 15% visible)
- **THEN** its text headers, cards, and images smoothly transition from `opacity: 0, translateY(24px)` to `opacity: 1, translateY(0px)`

#### Scenario: Staggered list and grid items
- **WHEN** a bento grid or feature checklist enters the viewport
- **THEN** individual cards and list items animate sequentially with a 50ms-100ms stagger delay

### Requirement: Interactive Household Sync Tabs
The landing page SHALL provide an interactive tab switcher for the Family Collaboration section allowing visitors to switch between Household Sync, Live Market updates, and 6-Digit Invite Code flows.

#### Scenario: Switching tabs in Family Sync
- **WHEN** the user clicks on the "Live In Market" tab
- **THEN** the active indicator slides to the tab and the showcase image smoothly transitions to `family-bazar.png`

#### Scenario: Switching to Join Process
- **WHEN** the user clicks on the "Invite Code" tab
- **THEN** the active indicator slides to the tab and the showcase image smoothly transitions to `family-joining-process.png`

### Requirement: Sub-3-Second TTFV Pipeline Animation
The landing page SHALL visualize the sub-3-second Time-to-First-Value with a step-by-step pipeline connecting `Launch` to `Milk Saved`.

#### Scenario: Viewing the TTFV Pipeline
- **WHEN** a user scrolls to the speed comparison section
- **THEN** the four pipeline steps (`Launch (0s)`, `Type "Milk" (1.2s)`, `Auto Sort (2.1s)`, `Saved in SQLite (<3s)`) illuminate sequentially along an animated connecting track

### Requirement: Full Ecosystem Panorama Bar
The landing page SHALL feature an ambient full-width panorama showcase displaying `overview.png` with subtle card depth and hover perspective.

#### Scenario: Viewing the overview showcase
- **WHEN** a user scrolls past the hero section
- **THEN** the 8-screen panoramic ecosystem banner renders cleanly across desktop and tablet viewports with subtle drop shadows

### Requirement: Mobile Image-First Layout Hierarchy
On mobile viewports (< 768px), feature showcases and comparison sections SHALL display high-resolution visual application mockups before detailed text descriptions and metric lists.

#### Scenario: Viewing TTFV Comparison on mobile
- **WHEN** a user views the TTFV section on a mobile viewport
- **THEN** the `new-bazar.png` phone mockup is displayed above the comparison cards ("Other Grocery & Cloud Apps" vs "Foddo Local-First")

#### Scenario: Viewing Bazar Mode on mobile
- **WHEN** a user scrolls to the Bazar Mode showcase on mobile
- **THEN** the `bazar-mode.png` phone mockup appears at the top of the feature block followed by the bullet points and action links

### Requirement: Zero-Collision Header and Badge Layouts
Card and section headers containing badges SHALL arrange child elements using responsive wrapping layouts that prevent badge overlapping or text clipping on screens down to 320px width.

#### Scenario: Viewing the comparison card on 360px viewport
- **WHEN** viewing the "Other Grocery & Cloud Apps" card on a narrow smartphone
- **THEN** the "Avg. ~120 Seconds" badge renders cleanly without colliding with or obscuring the title text

#### Scenario: Viewing the smart parser header on mobile
- **WHEN** viewing the Smart Input playground header on mobile
- **THEN** the icon, title, and "100% On-Device Engine" badge wrap neatly without overlapping

### Requirement: Compact Mobile Smart Input Playground
The Smart Input playground SHALL adapt into a compact, thumb-friendly card on mobile viewports (< 768px) with reduced vertical height and a 2x2 grid for core pillars.

#### Scenario: Interacting with smart input on mobile
- **WHEN** a user enters or taps preset phrases on mobile
- **THEN** the input, presets, and parsed breakdown fit within a single compact card without excessive vertical scrolling

### Requirement: High-Resolution Mobile Ecosystem Presentation
The Ecosystem Showcase section SHALL present crisp, readable phone mockups on mobile devices (< 768px) rather than downscaling the full 8-screen panoramic desktop composite.

#### Scenario: Viewing ecosystem on smartphone
- **WHEN** a user visits the ecosystem section on a mobile viewport
- **THEN** a focused high-resolution mobile phone showcase is rendered where all screen text and UI elements remain 100% sharp and readable
