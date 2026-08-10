## ADDED Requirements

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
