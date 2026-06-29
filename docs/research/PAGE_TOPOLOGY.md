# Jon Saxton Page Topology

Target: `https://www.jonsaxton.com/?ref=onepagelove`

## Global Layout
- One-page terminal portfolio inside `.terminal-page`.
- Fixed top nav `.term-nav` overlays all content at `top: 0`, `z-index: 1000`, height about `51px` desktop and `48px` mobile.
- Main content order: `#hero`, `#about`, `#projects`, `#contact`, footer.
- Desktop width: `.term-container` is `90%`, `max-width: 1000px`; wide project container is `max-width: 1200px`.
- Sections are vertical terminal panels: `.term-section { padding: 4rem 0; min-height: 100vh; display: flex; justify-content: center; }`.
- Page background is `#0a0a0a` with fixed CRT scanlines and radial vignette overlays.

## Sections
- **Navigation:** static fixed terminal nav with brand `jon@saxton:~$` and hash links `whoami`, `projects`, `contact`.
- **Hero:** full-viewport boot screen with avatar, ASCII art name, status boot lines, and blinking cursor.
- **About:** terminal window titled `jon@saxton: ~/about`; command/output blocks for `whoami`, `skills.txt`, and `background.txt`.
- **Projects:** wide terminal window titled `jon@saxton: ~/projects`; file list with hover previews followed by ten project cards.
- **Contact:** compact terminal window titled `jon@saxton: ~/contact`; social links and project inquiry text.
- **Footer:** thin terminal footer with top border, comment text, and copyright.

## Responsive Topology
- At `max-width: 768px`, terminal font size drops to `14px`, sections become auto-height except hero, prompts stack vertically, hero content stacks column, avatar becomes `120px`.
- At `max-width: 480px`, container width becomes `95%` and ASCII art font clamps smaller.
- File-entry hover preview is hidden at `max-width: 1024px`.

## Evidence
- Desktop reference: `docs/design-references/jonsaxton.com/original-desktop-full.png`
- Mobile reference: `docs/design-references/jonsaxton.com/original-mobile-full.png`
- Extracted original CSS: `docs/research/jonsaxton.com/terminal.css`
- Extracted original JS: `docs/research/jonsaxton.com/terminal.js`
