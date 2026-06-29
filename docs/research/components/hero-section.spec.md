# HeroSection Specification

## Overview
- **Target file:** `src/components/TerminalPortfolio.tsx`
- **Screenshot:** `docs/design-references/jonsaxton.com/original-desktop-y0.png`
- **Interaction model:** time-driven boot animation plus hover/glitch

## DOM Structure
- `section#hero.term-section.term-section--hero`
  - `.term-container`
    - `.hero-boot`
      - `.hero-boot__content`
        - `.hero-avatar` with avatar image and scanline overlay
        - `.hero-ascii-wrapper` with `pre.ascii-art` and hidden `h1`
      - `.hero-status.stagger-in` containing seven `.status-line` rows

## Computed Styles
- Hero section desktop: `height: 1200px` at captured viewport, `padding: 64px 0`, flex column centered.
- `.hero-boot__content`: `display: flex`, `align-items: center`, `gap: 3rem`, wraps on narrow widths.
- `.hero-avatar`: `width: 180px`, `height: 180px`, `border: 2px solid #00aa2a`, `box-shadow: 0 0 20px rgba(0,255,65,0.2), inset 0 0 20px rgba(0,0,0,0.5)`.
- `.ascii-art`: `font-size: clamp(6px, 1.2vw, 14px)`, `line-height: 1.2`, `white-space: pre`, `text-shadow: 0 0 5px #00ff4180, 0 0 10px #00ff4140`.
- `.hero-status`: `display: flex`, `flex-direction: column`, `gap: 0.5em`, `font-size: 0.9em`, `margin-top: 3rem`.
- `.status-label`: desktop `min-width: 200px`, color `#666666`.

## Text Content
- Status rows:
  - `SYSTEM [OK] Portfolio v8.1 loaded`
  - `ROLE [OK] Senior Solutions Architect @ Webflow`
  - `SIDE GIG [OK] Freelance Dev @ Nights & Weekends`
  - `SPECIALTY [OK] Webflow Development`
  - `CERTIFICATION [OK] Certified Webflow Partner`
  - `STATUS [OK] Available for freelance`
  - `System ready. Scroll to explore.`

## Assets
- Avatar: `public/images/jonsaxton/Jon.avif`, natural size `3015x2261`.

## Responsive Behavior
- Mobile: `.hero-boot__content` stacks column, avatar becomes `120px`, ASCII font `clamp(4px, 2vw, 10px)`.
