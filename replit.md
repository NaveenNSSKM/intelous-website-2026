# Intelous Multi-Universe Website

## Overview
A comprehensive multi-page website for Intelous featuring a "Physical Interface" operating system with a Sovereign Toggle that hot-swaps between two complete experiences:
- **Universe A: SCALE** (Intelous.ai) - Managed GTM services
- **Universe B: BUILD** (Intelous Labs) - Venture building services

Built with Next.js 14 App Router, Swiss Architectural Minimalism styling with light theme throughout, and designed for future CMS integration (Strapi).

## Project Structure
```
├── app/
│   ├── layout.tsx              # Root layout with UniverseProvider
│   ├── page.tsx                # Homepage with Hero and sections
│   ├── globals.css             # Global styles and CSS variables
│   ├── managed-lead-gen/       # SCALE: Managed Lead Gen page
│   ├── intelous-os/            # SCALE: Intelous OS Platform page
│   ├── discovery-hub/          # SCALE: IntelousABM page
│   ├── byx-studio/             # SCALE: BYX Creative Studio page
│   ├── services/               # SCALE: Services & Use Cases page
│   ├── venture-services/       # BUILD: Venture Services page
│   ├── success-stories/        # BUILD: Success Stories page
│   ├── articles/               # BUILD: Articles & Insights page
│   └── paign-ai/               # BUILD: Paign.ai R&D project page
├── components/
│   ├── Header.tsx              # Hot-swappable header with universe-aware nav
│   ├── Header.module.css
│   ├── Hero.tsx                # Hero with Sovereign Toggle
│   ├── Footer.tsx              # Universe-aware footer
│   ├── Footer.module.css
│   └── sections/               # Homepage section components
│       ├── TrustCrisis.tsx
│       ├── DiscoveryHub.tsx
│       ├── GTMPods.tsx
│       └── DiagnosticCTA.tsx
├── context/
│   └── UniverseContext.tsx     # Global state for universe switching
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

## Tech Stack
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Framer Motion** - Animations and transitions
- **CSS Modules** - Scoped styling

## Navigation Structure

### Universe A: SCALE (Intelous.ai)
- Managed Lead Gen → `/managed-lead-gen`
- Intelous OS → `/intelous-os`
- IntelousABM → `/discovery-hub`
- BYX Studio → `/byx-studio`
- Services → `/services`

### Universe B: BUILD (IntelousLabs)
- Venture Services → `/venture-services`
- Success Stories → `/success-stories`
- Paign.ai → `/paign-ai`
- Articles → `/articles`

## Brand Colors
- Architectural White: #FAFAFA (background)
- Strategy Pink: #FF007F (BUILD accent)
- System Green: #39FF14 (SCALE accent)
- Obsidian: #050505 (text)

## Design System
- Swiss Architectural Minimalism
- Light theme for both universes
- 1px blueprint grid overlay on entire site
- IBM Plex Mono for code/specs
- Inter for headlines and body
- Sovereign Toggle in hero section (centered, after headline)

## Key Features
- **Sovereign Toggle**: Hot-swaps entire site experience between SCALE and BUILD
- **Universe-aware Navigation**: Header links change based on active universe
- **Automatic Universe Detection**: BUILD pages automatically switch context
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **CMS-Ready**: Architecture designed for future Strapi integration

## Running the Project
```bash
npm run dev
```
Server runs on port 5000.

## Recent Changes
- December 26, 2024: Complete content implementation
  - All SCALE pages now call setUniverse('scale') on mount for proper universe-aware navigation
  - All BUILD pages call setUniverse('build') on mount
  - Added EventEngine component for homepage SCALE sections
  - Added BuildHomeSections component for BUILD universe home content
  - Success Stories page with 3 detailed case studies and results
  - Articles page with featured article and 6 article cards
  - Paign.ai page with agentic workflow architecture and technical details
  - Full interactive storytelling with Framer Motion animations on all pages
  - Terminal/code previews, stats grids, and CTAs throughout
- December 26, 2024: Multi-page routing implementation
  - Created all 9 page routes (5 SCALE + 4 BUILD)
  - Fixed Hero component rendering with inline styles
  - BUILD pages auto-switch universe context on mount
  - All navigation links now functional
  - Footer with universe-aware content
- December 24, 2024: Migrated from Vite to Next.js 14
  - App Router file-based routing
  - UniverseContext for global state
  - Header with hot-swappable navigation
  - Hero with centered Sovereign Toggle
  - Swiss Architectural Minimalism styling
