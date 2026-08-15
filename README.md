# Personal Website

Zhanwei Zhang's bilingual personal portfolio, presented in a terminal-inspired interface. The site includes research interests, experience, publications, selected projects, skills, contact links, and downloadable CVs.

## Tech Stack

- Astro 7
- TypeScript with strict checking
- Tailwind CSS v4
- ESLint and `astro check`
- Typst for CV generation

## Prerequisites

- Node.js 24+
- pnpm
- Typst, when rebuilding the CVs

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
pnpm run lint
pnpm run typecheck
pnpm run check
pnpm run cv:build
```

`pnpm run check` runs linting, Astro type checking, and a production build.

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
  images/            Avatar and project cover images
  *.pdf              Published CVs and reports
resume/              Typst CV sources
scripts/             CV build script
```

## Content Editing

Most visible content lives in `src/data/portfolio.ts`, including profile details, research interests, experience, publications, projects, skills, and contact links. Shared data interfaces live in `src/types/portfolio.ts`.

Project images and the avatar live in `public/images/`. The Typst sources in `resume/` generate the public CV PDFs through `pnpm run cv:build`.
