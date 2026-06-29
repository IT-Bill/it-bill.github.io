# ProjectsSection Specification

## Overview
- **Target file:** `src/components/TerminalPortfolio.tsx`
- **Screenshot:** `docs/design-references/jonsaxton.com/original-desktop-y2700.png`
- **Interaction model:** hover-driven previews/cards, anchor-driven scrolling

## DOM Structure
- `section#projects.term-section`
  - `.term-container.term-container--wide`
    - `.term-window`
      - `.term-window__header`
      - `.term-window__body`
        - prompt for `ls -la`
        - output row `total 10 featured projects`
        - `.file-list` with ten `.file-entry` anchors
        - ten `.project-card` detail cards

## Computed Styles
- Project section desktop: `padding: 64px 0`, `min-height: 1200px`, projects container `width: 1200px`.
- File list: `font-size: 14px`, `margin-bottom: 48px`.
- `.file-entry`: grid columns `auto 180px 1fr`, `gap: 1em`, `padding: 0.3em 0`, border bottom `1px solid rgba(0,255,65,0.1)`.
- `.file-entry__preview`: `position: fixed`, `right: 5%`, `top: 50%`, `transform: translateY(-50%)`, `width: 400px`, `max-width: 40vw`, `opacity: 0`.
- `.project-card`: border `1px solid #00aa2a`, background `rgba(0,255,65,0.02)`, margin bottom `2em`.
- `.project-card__header`: `padding: 1em`, flex row with space-between, border bottom `1px solid #00aa2a`.
- `.project-card__body`: `padding: 1.5em`.
- `.project-card__image-container`: width `100%`, border `1px solid #00aa2a`, black background, green glow shadow.

## Project Data
- TED Conferences, 2025, image `TED.avif`, link `https://conferences.ted.com/`.
- Global Leadership Network, 2025, image `f19f1fb61387b2e694d3d4b81617d0e4_685c1e5446d677e5cd68ba99_full_bleed-p-1600.webp`, link `https://www.globalleadership.org/`.
- The Oasis at Dreamforce, 2025, image `Dreamforce.svg`, link `https://captivateiq.com/dreamforce`.
- State of ICM Report, 2025, image `SOIC.avif`, link `https://stateoficmreport.captivateiq.com/`.
- Christmas Eve 2024, 2024, image `PCC.avif`, link `https://pcc-christmas-eve-24.webflow.io/`.
- The Multiplier, 2024, image `The-Multiplier.avif`, link `https://multiplier.captivateiq.com/`.
- Harness, 2024, image `Harness.avif`, link `https://www.goharness.com/`.
- Kalderos Annual Report, 2023, image `Kalderos-AR.avif`, link `https://www.kalderos.com/2023-annual-report`.
- Beefree SDK, 2023, image `Beefree-bg.avif`, link `https://developers.beefree.io/`.
- Martha & Mary, 2025, image `Martha-and-Mary-Background.webp`, link `https://www.marthaandmary.org/`.

## Responsive Behavior
- At `max-width: 1024px`, file previews are hidden.
- At `max-width: 768px`, `.file-entry` becomes one column and group/date spans are hidden.
