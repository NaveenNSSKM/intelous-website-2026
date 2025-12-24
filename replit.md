# Intelous.ai Homepage

## Overview
A high-fidelity, multi-section homepage for Intelous.ai (Universe A: SCALE). Built with React, TypeScript, Vite, and Framer Motion.

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation header with CTA
│   │   ├── Hero.tsx           # Hero section with 3D toggle
│   │   ├── SovereignTriad.tsx # 3-column feature grid
│   │   ├── GTMCanvas.tsx      # Code editor style flow diagram
│   │   ├── CleanRoomTerminal.tsx # Auto-scrolling terminal
│   │   ├── GTMPods.tsx        # Pricing cards
│   │   └── StrategicWaitlist.tsx # Footer CTA section
│   ├── App.tsx                # Main application component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
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
- Obsidian: #050505 (background)
- Strategy Pink: #FF007F
- Logic Blue: #007BFF
- System Green: #39FF14

## Running the Project
```bash
npm run dev
```
Server runs on port 5000.

## Recent Changes
- Initial build: December 24, 2024
- Created all 7 sections as specified
- Implemented Framer Motion scroll-reveal animations
- Added hover states with luminous border glow effects
