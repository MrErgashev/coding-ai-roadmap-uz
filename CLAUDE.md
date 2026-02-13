# CLAUDE.md

## Project Overview

**Coding + AI Roadmap UZ** — An interactive educational web app in Uzbek that teaches coding fundamentals and responsible AI usage over a 12-week curriculum (3 months). Deployed to GitHub Pages.

## Tech Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS v4 (configured via `@theme` in `index.css`, class-based dark mode with `.dark` selector)
- **Routing**: React Router DOM v7 (HashRouter — required for GitHub Pages)
- **Icons**: react-icons (Lucide set — `Lu` prefix, e.g. `LuCheckCircle`)
- **Deployment**: gh-pages to GitHub Pages

## Commands

- `npm run dev` — Start dev server (localhost:5173)
- `npm run build` — Production build to `dist/`
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build
- `npm run deploy` — Build + deploy to GitHub Pages

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # HashRouter with 4 routes
├── index.css             # Tailwind v4 theme + custom animations
├── data/roadmap.json     # All content data (months, weeks, tasks, resources)
├── hooks/                # useTheme, useProgress, useSearch
├── pages/                # Home, Roadmap, AIRules, Resources
├── components/
│   ├── layout/           # Header, Footer, Layout
│   ├── home/             # Hero, MonthCard, Timeline, ArchitectureDiagram
│   ├── roadmap/          # FilterBar, MonthSection, WeekAccordion
│   ├── ai-rules/         # RuleCard
│   ├── resources/        # ResourceList
│   └── shared/           # ThemeToggle, SearchInput, ScrollToTop, PremiumMindmap, IconMap
```

## Key Architecture Decisions

- **Data-driven**: All curriculum content lives in `src/data/roadmap.json` — edit content there, not in components
- **localStorage**: Used for theme preference (`useTheme`) and task progress tracking (`useProgress`)
- **No Tailwind config file**: Tailwind v4 uses `@theme` directive in `src/index.css` for custom colors, fonts, and design tokens
- **Dark mode**: Class-based (`.dark` on `<html>`), toggled via `useTheme` hook
- **Base path**: Vite configured with `base: '/coding-ai-roadmap-uz/'` for GitHub Pages

## Coding Conventions

- Functional components with hooks (no class components)
- JSX files use `.jsx` extension
- Component files are PascalCase (e.g. `MonthCard.jsx`)
- Hook files are camelCase with `use` prefix (e.g. `useTheme.js`)
- Tailwind utility classes for styling — avoid inline styles
- Uzbek language for all user-facing content

## Common Pitfalls

- **react-icons imports**: Use exact icon names from Lucide set (`LuCheckCircle`, not `LuCheckCircle2`)
- **Tailwind v4**: No `tailwind.config.js` — theme customization is in `src/index.css` via `@theme`
- **GitHub Pages routing**: Must use `HashRouter`, not `BrowserRouter`
- **Base path**: All asset paths must account for the `/coding-ai-roadmap-uz/` base
