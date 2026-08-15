# Personal Portfolio

## Project

This repository contains Zhanwei Zhang's bilingual personal portfolio. It is a static Astro site with English at `/` and Chinese at `/zh/`.

## Tech Stack

- Astro 7 with file-based routing
- TypeScript in strict mode
- Astro components
- Tailwind CSS v4 through Vite
- Static assets served from `public/`

## Commands

- `pnpm run dev` — start the development server
- `pnpm run build` — create the production build
- `pnpm run preview` — preview the production build
- `pnpm run lint` — run ESLint
- `pnpm run typecheck` — run Astro type checking
- `pnpm run check` — run lint, typecheck, and build
- `pnpm run cv:build` — rebuild both CV PDFs with Typst

## Code Style

- Use Astro conventions for routes, layouts, assets, scripts, and styling.
- Use TypeScript strict mode and avoid `any`.
- Use named exports, PascalCase components, and camelCase utilities.
- Use two-space indentation and mobile-first responsive styles.
- Keep content in `src/data/portfolio.ts` and shared interfaces in `src/types/portfolio.ts`.
- Preserve the existing terminal-inspired visual language unless a redesign is requested.

## Project Structure

```text
src/
  components/       Astro UI components
  data/             Bilingual portfolio content
  layouts/          Shared page layouts
  pages/            English and Chinese routes
  styles/           Global styles and Tailwind entrypoint
  types/            Shared TypeScript interfaces
public/
  fonts/             Local font assets and licenses
  images/            Avatar and project images
  *.pdf              Published CVs and reports
resume/              Typst CV sources
scripts/             CV build script
```
