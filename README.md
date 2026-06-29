# Personal Website

A personal portfolio website. The site presents an English profile, research focus, experience, publications, selected projects, skills, and contact links in a terminal-inspired interface.

## Tech Stack

- **Astro 7** for static site generation
- **TypeScript** with strict checking
- **Tailwind CSS v4** for styling and design tokens
- **ESLint** and `astro check` for quality gates
- **GitHub Actions** CI on `main` pushes and pull requests

## Prerequisites

- Node.js 24+
- pnpm

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
pnpm run lint
pnpm run typecheck
pnpm run check
```

`pnpm run check` runs linting, Astro type checking, and a production build.

## Project Structure

```text
src/
  components/       Astro UI components
  data/             Portfolio content and structured data
  layouts/          Shared page layouts
  pages/            Astro routes
  styles/           Global CSS and Tailwind entrypoint
  types/            Shared TypeScript interfaces
public/
  images/           Avatar and project cover images
  *.pdf             Public documents
  favicon.ico       Site favicon
docs/
  research/         Local research notes retained for development
  design-references/ Visual references retained for development
scripts/
  sync-agent-rules.sh
  sync-skills.mjs
```

## Content Editing

Most visible site content is maintained in `src/data/portfolio.ts`:

- Profile and status lines
- About and research focus
- Tool and skill groups
- Experience entries
- Publications
- Project cards and image metadata
- Contact links

Project images and the avatar live under the public images directory.

## CI

The workflow in `.github/workflows/ci.yml` installs dependencies with pnpm on Node.js 24, then runs:

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
```

## Agent Notes

Agent-facing instructions are kept in `AGENTS.md`. The retained local agent skill directories are:

- `.codex/skills/`
- `.claude/skills/`

Run `bash scripts/sync-agent-rules.sh` after editing `AGENTS.md`.
