<!-- BEGIN:astro-agent-rules -->
# Astro Project Rules

Use Astro conventions for routing, layouts, static assets, scripts, and styling. When changing framework-level behavior, read the relevant current Astro docs first.
<!-- END:astro-agent-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Astro codebase using AI coding agents. The Astro + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Astro 7 (static-first, file-based routing, TypeScript strict)
- **UI:** Astro components with Tailwind CSS v4 design tokens
- **Icons:** Extracted SVGs or Astro-native assets as needed
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `pnpm run dev` — Start dev server
- `pnpm run build` — Production build
- `pnpm run lint` — ESLint check
- `pnpm run typecheck` — Astro type check
- `pnpm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  pages/            # Astro routes
  layouts/          # Shared Astro page layouts
  components/       # Astro components
  data/             # Structured content/data modules
  styles/           # Global Tailwind/CSS entrypoints
  types/            # TypeScript interfaces
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to validate the instruction source.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to sync the Codex skill copy.

@docs/research/INSPECTION_GUIDE.md
