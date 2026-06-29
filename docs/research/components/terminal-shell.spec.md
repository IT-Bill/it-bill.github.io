# TerminalShell Specification

## Overview
- **Target files:** `src/app/layout.tsx`, `src/app/globals.css`, `src/components/TerminalPortfolio.tsx`, `src/components/TerminalEffects.tsx`
- **Screenshot:** `docs/design-references/jonsaxton.com/original-desktop-full.png`
- **Interaction model:** scroll, keyboard, hover, and time-driven CRT effects

## DOM Structure
- `.terminal-page`
  - `nav.term-nav`
    - `.term-container.term-nav__inner`
    - brand anchor and three hash nav anchors
  - `main`
    - `HeroSection`
    - `AboutSection`
    - `ProjectsSection`
    - `ContactSection`
    - footer
  - client effect component for scroll/keyboard/easter-egg behavior

## Computed Styles
- `.terminal-page`: `background-color: #0a0a0a`, `color: #00ff41`, `font-family: JetBrains Mono, Fira Code, SF Mono, Consolas, monospace`, `font-size: 16px`, `line-height: 1.6`, `min-height: 100vh`, `position: relative`, `overflow-x: hidden`.
- `.terminal-page::before`: fixed full-screen repeating scanlines, `z-index: 9999`, `pointer-events: none`.
- `.terminal-page::after`: fixed full-screen radial vignette, `z-index: 9998`, `pointer-events: none`.
- `.term-nav`: fixed full width, `z-index: 1000`, `background: rgba(10,10,10,0.95)`, `border-bottom: 1px solid #00aa2a`, `backdrop-filter: blur(10px)`, `padding: 0.75rem 0`.
- `.term-container`: `width: 90%`, `max-width: 1000px`, `margin: 0 auto`; wide variant `max-width: 1200px`.
- `.term-section`: `padding: 4rem 0`, `min-height: 100vh`, `display: flex`, `flex-direction: column`, `justify-content: center`.

## States & Behaviors
- Anchor scroll: hash links scroll with nav offset.
- Keyboard: `Enter`, `y`, `Y` move to the next major section.
- IntersectionObserver: adds `.is-visible` to terminal sections/windows.
- CRT flicker: rare opacity change to `0.99` for about `30ms`.

## Responsive Behavior
- Desktop `1440px`: nav inner width `1000px`, projects inner width `1200px`.
- Mobile `390px`: nav remains one line, container width `95%`, base font `14px`.
