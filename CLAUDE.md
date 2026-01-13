# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Benoit, built as a static Next.js 16 site with Tailwind CSS 4. The site showcases professional experience, projects, and writings, and is configured for static export and deployment on Vercel.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router with static export)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4.1.18 with custom theme
- **TypeScript**: 5.8.3
- **Fonts**:
  - Display: "Instrument Serif" (for headlines)
  - Body: "Inter" (for content)
- **Deployment**: Vercel (static export via `output: 'export'`)

## Build & Development Commands

```bash
# Install dependencies (Node >= 20.x required)
npm install

# Start development server
npm run dev

# Build for production (generates static HTML in /out directory)
npm run build

# Start production server (for testing locally)
npm start

# Run linter
npm run lint
```

## Project Architecture

### Directory Structure

```
/src
  /app                  # Next.js App Router pages
    /experience         # Experience timeline page
    /projects           # Projects gallery page
    layout.tsx          # Root layout with Header/Footer
    page.tsx            # Home page with hero, "Now" section, and featured projects
    globals.css         # Global styles with Tailwind and custom theme
  /components           # Reusable React components
    Header.tsx          # Client-side navigation with theme toggle
    Footer.tsx          # Footer component
/assets/images          # Static image assets (experience company logos)
/public                 # Public static assets
```

### Key Configuration Files

- **next.config.ts**: Configured for static export (`output: 'export'`) with unoptimized images
- **tsconfig.json**: Path aliases (`@/*` → `./src/*`), strict mode enabled
- **vercel.json**: Custom install command to ensure clean npm install

### Design System

The site uses a custom design system defined in `src/app/globals.css`:

**Color Palette:**
- Primary accent: `#D97757` (coral/terracotta)
- Light mode: Off-white background (`#F5F5F0`), dark text
- Dark mode: Dark background (`#1A1A1A`), light text
- Consistent use of muted colors for secondary text and borders

**Typography:**
- Display font: "Instrument Serif" (italic for emphasis)
- Body font: "Inter" (weights: 300-700)
- Font classes: `.font-display`, `.font-body`

**Theme Toggle:**
- Client-side theme management in Header component
- Theme stored in localStorage
- Respects system preference on first load
- Dark mode class on `<html>` element

### Component Patterns

**Header Component** (`src/components/Header.tsx`):
- Client component (`"use client"`)
- Manages theme toggle and mobile menu state
- Uses Next.js `usePathname` for active link highlighting
- Includes newsletter subscription link

**Page Structure:**
All pages follow a consistent layout pattern:
1. Large display heading with italics/mixed styles
2. Descriptive subtitle paragraph
3. Main content grid/layout
4. Heavy use of flexbox and Tailwind grid utilities

**Data Management:**
- Static data arrays defined inline within page components
- No external CMS or API calls
- Projects and experiences are hardcoded objects with metadata

### Static Export Considerations

Since this is a static site (`output: 'export'` in next.config.ts):
- No server-side rendering or API routes
- Images are unoptimized (`images.unoptimized: true`)
- All pages pre-rendered at build time to `/out` directory
- Client-side navigation and interactivity still work
- Theme toggle uses browser localStorage and effects

### Styling Conventions

- Tailwind CSS 4 with `@theme` directive in globals.css
- Responsive breakpoints: mobile-first, then `md:` and `lg:`
- Dark mode: `dark:` variant on all color classes
- Custom CSS for scrollbar styling and selection colors
- Utility-first approach with minimal custom CSS

## Common Development Workflows

### Adding a New Project

1. Edit `src/app/page.tsx` and `src/app/projects/page.tsx`
2. Add project object to the `projects` array
3. Set `featured: true` for one project to appear in featured section
4. Include title, category, year, description, and tags

### Adding Experience

1. Edit `src/app/experience/page.tsx`
2. Add experience object to `experiences` array
3. Set `current: true` for active role (affects timeline styling)
4. Include company, role, location, period, achievements, and tags

### Updating Theme Colors

1. Edit `src/app/globals.css` in the `@theme` block
2. Update custom CSS properties (e.g., `--color-primary`)
3. Maintain consistency between light/dark mode variants

### Testing Production Build

```bash
npm run build
# Output is in /out directory
# Verify static files generated correctly
```

## Important Notes

- The site requires Node >= 20.x (specified in package.json engines)
- Static export means no dynamic routes or server functions
- All images should be placed in `/public` or `/assets` for static export
- Theme preferences persist across sessions via localStorage
- Mobile-first responsive design throughout
