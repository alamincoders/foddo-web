## Purpose

Provides a high-converting, global English marketing landing page for FODDO highlighting its local-first grocery list features, sub-3-second TTFV, and Play Store download options.

## ADDED Requirements

### Requirement: Global Landing Page Layout & Hero Showcase
The web application SHALL render a global English landing page at route `/` displaying FODDO's brand hero header, feature highlights, app screenshots, and Google Play Store download call-to-action.

#### Scenario: User visits the home page
- **WHEN** a visitor navigates to `/`
- **THEN** the browser displays the FODDO hero section with Play Store badge, feature grid, and app mockups using the brand primary color `#2F7D5C` and clean typography.

### Requirement: Local-First Architecture Feature Highlights
The landing page SHALL explicitly showcase FODDO's zero account gate, 3-second Time-To-First-Value (TTFV), and local-first SQLite database storage.

#### Scenario: Visitor reviews product features
- **WHEN** a visitor scrolls through the feature showcase section
- **THEN** the page displays interactive feature cards highlighting TTFV speed, Bazar Mode goal gradient, category auto-sorting, and offline privacy.

### Requirement: Play Store Conversion Call-To-Action
The landing page SHALL feature clear, persistent links pointing to FODDO's Google Play Store listing.

#### Scenario: User clicks Play Store CTA
- **WHEN** a visitor clicks the "Get it on Google Play" button
- **THEN** the browser opens the official FODDO Google Play Store listing page in a new tab.
