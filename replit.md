# Intelous Labs Homepage

## Overview
A high-fidelity, long-form homepage for Intelous Labs (Universe B: BUILD). Built with Swiss Architectural Minimalism blended with vibrant, illustrative energy. React, TypeScript, Vite, and Framer Motion.

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Architectural header with green CTA
│   │   ├── Hero.tsx           # Hero with 3D toggle and anti-failure headline
│   │   ├── Roadmap.tsx        # 10-Week vertical timeline with pink arrows
│   │   ├── BOTModule.tsx      # Build-Operate-Transfer section
│   │   ├── RDLabs.tsx         # R&D Labs bento grid showcase
│   │   └── VentureCTA.tsx     # Venture strategy CTA footer
│   ├── App.tsx                # Main application component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles with blueprint grid
│   └── main.tsx               # Entry point
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

## Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations

## Brand Colors
- Architectural White: #FAFAFA (background)
- Strategy Pink: #FF007F
- System Green: #39FF14
- Obsidian: #050505

## Design System
- Swiss Architectural Minimalism
- 1px blueprint grid overlay on entire site
- Hand-drawn pink arrows for timeline
- IBM Plex Mono for code/specs
- Inter for headlines and body

## Running the Project
```bash
npm run dev
```
Server runs on port 5000.

## Recent Changes
- December 24, 2024: Complete redesign for Intelous Labs (Universe B: BUILD)
  - Swiss Architectural Minimalism styling with light background
  - New header with Venture Services, Success Stories, Paign.ai, Articles nav
  - Hero: "THE ANTI-FAILURE VENTURE PARTNER" headline with 3D toggle
  - 10-Week Roadmap vertical timeline with scroll-reveal animations
  - Build-Operate-Transfer (BOT) module with handover visualization
  - R&D Labs bento grid (Paign.ai code, 3D render, whitepaper)
  - Venture Strategy CTA with gradient headline
  - Blueprint grid overlay across entire site
  - Hover effects reveal technical specs in monospace
