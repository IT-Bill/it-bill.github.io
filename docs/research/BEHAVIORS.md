# Jon Saxton Behavior Notes

## Global
- Native smooth scrolling is enabled on `html`.
- Fixed nav anchor clicks scroll to target sections with offset equal to nav height plus `20px`.
- `Enter`, `y`, and `Y` scroll to the next major section in order: hero, about, projects, contact.
- CRT effects are persistent: fixed scanlines, fixed vignette, blinking cursor, and rare subtle page opacity flicker.
- IntersectionObserver adds `.is-visible` to `.term-section` and `.term-window` using threshold `0.1` and root margin `0px 0px -50px 0px`.

## Hero
- `.hero-boot` fades/slides in with `boot-in 1s ease-out`.
- `.status-line` children start at opacity `0`, then animate with `boot-in 0.5s ease-out forwards`; delays increment from `0.2s` to `1.2s`.
- ASCII art has `glow-pulse 4s ease-in-out infinite`.
- Clicking ASCII art five times within short intervals triggers a `glitch 0.1s 5` animation, then restores glow pulse.

## File List
- Each `.file-entry` has a fixed preview at `right: 5%`, `top: 50%`, width `400px`, `max-width: 40vw`, initially opacity `0`.
- Hover changes row background to `rgba(0, 255, 65, 0.05)` by CSS and `rgba(0, 255, 65, 0.1)` briefly by JS.
- Hover preview appears after about `150ms`; loading text fades out after `0.5s`.
- Preview image uses `glitch-reveal 0.8s ease-out 0.2s forwards` and `rgb-split 0.15s ease infinite`.
- Preview scanlines fade in and drift with `scanline-drift 3s linear infinite`.
- Preview is hidden entirely at widths `<= 1024px`.

## Project Cards
- Default border is `1px solid #00aa2a`, background `rgba(0, 255, 65, 0.02)`.
- Hover border changes to `#00ff41`, background to `rgba(0, 255, 65, 0.05)`, shadow to `0 0 30px rgba(0, 255, 65, 0.1)`.
- Original JS also translates hovered cards `translateX(4px)`, then back to `translateX(0)`.
- Project images brighten on hover from `grayscale(0.2) contrast(1.15) brightness(0.95)` to `grayscale(0.1) contrast(1.2) brightness(1)`.

## Links
- Nav link hover adds visible `>` prefix and bright green glow.
- Project open links invert to amber background with dark text.
- Social `.term-link` changes to bright green with solid underline and glow.
