## Purpose

Provides dedicated legal compliance pages for Privacy Policy (`/privacy`) and Terms of Service (`/terms`) for Google Play Store verification and in-app settings integration.

## ADDED Requirements

### Requirement: Privacy Policy Route
The web application SHALL render a Privacy Policy page at route `/privacy` detailing FODDO's local-first privacy policy, zero sign-in requirement, and optional demographic data handling.

#### Scenario: User opens Privacy Policy
- **WHEN** a user or mobile app settings link navigates to `/privacy`
- **THEN** the system displays the complete Privacy Policy document formatted with readable typography, section navigation, and support contact details.

### Requirement: Terms of Service Route
The web application SHALL render a Terms of Service page at route `/terms` defining licensing terms, offline operation responsibilities, and user agreements.

#### Scenario: User opens Terms of Service
- **WHEN** a user or mobile app settings link navigates to `/terms`
- **THEN** the system displays the full Terms of Service document with structured legal sections and contact details.

### Requirement: Responsive In-App & Web Accessibility
The legal pages SHALL be fully responsive, supporting seamless viewing both inside mobile app webview containers (from app settings) and standard desktop/mobile web browsers.

#### Scenario: App user views policy from settings
- **WHEN** the page is rendered inside a mobile webview
- **THEN** the layout adjusts padding, font size, and navigation header for clear readability without horizontal scrolling.
