---
name: SiteMarket Clean Tech
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#4b4e50'
  on-tertiary: '#ffffff'
  tertiary-container: '#636668'
  on-tertiary-container: '#e2e4e6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system embodies a **Clean Tech** aesthetic—a fusion of modern minimalism and high-end digital craftsmanship. It is designed to position the marketplace as a premium, reliable destination for turnkey digital assets. The visual narrative centers on clarity, precision, and "breathing room," ensuring that the complex visual data of website previews remains the focal point without UI clutter.

The emotional response should be one of immediate trust and efficiency. By utilizing expansive whitespace and a structured "gallery" approach, the interface acts as a sophisticated frame for the products it hosts. It borrows from **Corporate Modernism** for its reliability and **Minimalism** for its aesthetic purity, resulting in a professional yet vibrant user experience.

## Colors
The palette is built on a foundation of "Crisp White" to maximize light and perceived speed. 

- **Primary (Action Blue):** A high-vibrancy blue used exclusively for primary actions, progress indicators, and critical brand accents. It provides the necessary energy to an otherwise neutral environment.
- **Secondary (Slate):** Used for supporting text and icons, providing a softer alternative to pure black to maintain the "clean tech" feel.
- **Neutrals:** A range of cool-toned grays are used for borders, subtle backgrounds, and dividers.
- **Semantic Colors:** Success (Emerald), Warning (Amber), and Error (Rose) should follow the same saturation levels as the Primary Blue to ensure systemic harmony.

## Typography
**Inter** is selected for its exceptional legibility and neutral, systematic character. The hierarchy relies on significant scale contrasts and weight shifts rather than color changes.

Large display headings use a tighter letter-spacing to feel "locked-in" and authoritative. Body text maintains standard tracking and generous line heights (1.5x) to ensure readability during long browsing sessions. Labels and small metadata use a medium or semi-bold weight to remain legible against photography or gray backgrounds.

## Layout & Spacing
The design system utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

- **The "Device Frame" Philosophy:** Layouts are designed to accommodate 16:9 (Laptop) and 9:19 (Mobile) aspect ratios. Grid units should be calculated to allow these frames to sit side-by-side with balanced "air" between them.
- **Rhythm:** An 8px linear scale is the standard, though a 4px "half-step" is permitted for tight component internals (like icon-to-label spacing).
- **Margins:** Desktop pages use 64px lateral margins to create a focused content column, while mobile reduces this to 16px to maximize the preview area of the website screenshots.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows** to create a sense of organized depth without looking heavy.

- **Level 0 (Base):** The #FFFFFF background.
- **Level 1 (Cards):** Uses a subtle 1px border (#E2E8F0) and a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)).
- **Level 2 (Hover/Active):** When a user interacts with a website preview, the shadow deepens and the element lifts slightly (Y-offset), emphasizing the "object" quality of the device mockups.
- **Glassmorphism:** Reserved exclusively for navigation bars and overlays. Use a `backdrop-blur` of 12px and a 70% white opacity to maintain a sense of context.

## Shapes
A **Rounded** (Level 2) shape language is applied to humanize the "tech" aesthetic. 

- **Components:** Standard buttons and input fields use a 12px (rounded-lg) radius. 
- **Containers:** Large marketplace cards and device mockup frames use a 16px (rounded-xl) radius. 
- **Iconography:** Icons should feature rounded caps and corners to match the UI container language.
- **Consistency:** Avoid pill-shapes for primary buttons to maintain the professional structure; reserve the "pill" style only for small status tags or badges.

## Components
- **Buttons:** Primary buttons are solid "Action Blue" with white text. Secondary buttons use a subtle gray border with slate text. Always include a subtle scale-down effect (0.98) on click.
- **Marketplace Cards:** The hero of the system. Each card consists of a light gray header area for the device mockup (Laptop/Phone), followed by a white content area with title, price, and a "View Demo" action.
- **Device Mockups:** Simplified, vector-style silhouettes of laptops and phones. They should not be hyper-realistic but rather serve as a clean container for site screenshots.
- **Input Fields:** Large 48px height fields with a 1px soft border that transitions to "Action Blue" on focus.
- **Chips/Badges:** Small, low-contrast indicators (e.g., "E-commerce", "SaaS") using `label-sm` typography and 4px rounded corners.
- **Navigation:** A sticky top bar with a glassmorphic background and a subtle bottom border to separate the browse experience from the content.