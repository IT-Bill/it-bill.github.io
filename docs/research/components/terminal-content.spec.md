# TerminalContent Specification

## Overview
- **Target file:** `src/components/TerminalPortfolio.tsx`
- **Screenshot:** `docs/design-references/jonsaxton.com/original-desktop-y1500.png`
- **Interaction model:** static content with link hovers and reveal animations

## DOM Structure
- Reusable `TerminalWindow`:
  - `.term-window`
  - `.term-window__header`
  - macOS dot spans
  - centered `.term-window__title`
  - `.term-window__body`
- Used by About and Contact sections.

## Computed Styles
- `.term-window`: `background: #0f0f0f`, `border: 1px solid #00aa2a`, `border-radius: 4px`, `box-shadow: 0 0 20px rgba(0,255,65,0.1), inset 0 0 60px rgba(0,0,0,0.3)`, `overflow: hidden`.
- `.term-window__header`: gradient `#1a1a1a` to `#0f0f0f`, `padding: 8px 12px`, `border-bottom: 1px solid #00aa2a`, flex with `gap: 8px`.
- `.term-window__dot`: `12px` circle; red `#ff5f56`, yellow `#ffbd2e`, green `#27ca40`.
- `.term-window__body`: `padding: 24px`, `min-height: 200px`.
- `.prompt`: flex wrap, `align-items: flex-start`, `margin-bottom: 2rem`, `line-height: 1.8`.
- `.output`: `margin-bottom: 1.5em`; indented variant `padding-left: 1em`.
- `.output__line`: display block, `line-height: 1.8`.

## Text Content
- About commands and output are copied verbatim from the original `whoami`, `skills.txt`, and `background.txt`.
- Contact commands and links are copied verbatim from the original `links.txt` output.

## Responsive Behavior
- At `max-width: 768px`, window body padding drops to `16px`, prompts stack column, and section min-height becomes auto.
