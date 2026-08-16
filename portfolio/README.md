# Inderpreet Singh — Portfolio

A modern portfolio website with 3D effects, built from my CV.

## Features

- **Interactive 3D hero** — a morphing metallic blob, floating shapes and a rotating particle field rendered with Three.js (react-three-fiber + drei), with mouse-parallax camera movement.
- **Theme system** — dark/light mode plus 6 selectable accent color themes (Violet, Cyan, Emerald, Amber, Rose, Blue). Choices persist in `localStorage`, and the 3D scene, gradients and UI recolor live.
- **3D tilt project cards** — perspective tilt on hover with layered depth (`translateZ`).
- **Modern UI** — glassmorphism cards, gradient text, ambient glows, grid backdrop, typewriter hero role, scroll-reveal animations, fully responsive.
- Respects `prefers-reduced-motion`.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei)
- Plain CSS with custom properties (design tokens) — no CSS framework

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  data.js              # All CV content (profile, projects, skills, education)
  theme.jsx            # ThemeProvider: dark/light mode + accent palettes
  index.css            # Design tokens + all styles
  components/
    Scene3D.jsx        # Three.js hero scene
    Navbar.jsx         # Nav + theme controls (mode toggle, accent picker)
    Hero.jsx           # Typewriter intro, CTAs, stats
    About.jsx, Services.jsx, Projects.jsx, Skills.jsx,
    Education.jsx, Contact.jsx, Reveal.jsx, Icons.jsx
```

To update content, edit `src/data.js`.
