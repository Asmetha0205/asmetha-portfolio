# Asmetha Sureshbabu Thoppe — Portfolio

A premium, animated single-page portfolio built with React, Vite, Tailwind CSS,
Framer Motion, GSAP (ScrollTrigger) and Three.js.

## Stack

- **React 18 + Vite** — component architecture, instant dev server
- **Tailwind CSS** — design tokens defined in `tailwind.config.js` (colors, fonts, keyframes)
- **Framer Motion** — entrance animations, page transitions, hover/tap micro-interactions
- **GSAP + ScrollTrigger** — scroll-based parallax on the hero's ambient blobs
- **Three.js** — mouse-reactive wireframe icosahedron + particle field in the hero (the site's signature visual)
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/     # one component per section/UI piece
  data/content.js # all copy, skills, projects, timeline, certs — edit this first
  hooks/          # useTypingEffect, useCounter
  index.css       # Tailwind layers + custom utilities (.glass, .text-gradient, .glow-border)
```

## Customizing

1. **Content** — everything text-based (name, roles, about copy, skills, projects,
   timeline, certifications, achievements, contact links) lives in `src/data/content.js`.
   Update it there rather than inside components.
2. **Resume** — drop your PDF into `public/resume.pdf` (the Download Resume button
   already points at `/resume.pdf`).
3. **Project images** — each project card currently shows a placeholder gradient
   with a number. Swap in real screenshots by replacing the placeholder block in
   `src/components/ProjectCard.jsx` with an `<img>`.
4. **Live demo links** — set a project's `demo` field in `content.js` to a URL to
   enable its "Live Demo" button; leave it `null` to keep it disabled.
5. **Colors/fonts** — all design tokens are centralized in `tailwind.config.js`
   under `theme.extend`.

## Notes on the design

- Dark theme with a blue → purple → cyan accent gradient used consistently for
  headings, buttons, progress bars and hover states.
- The hero's 3D wireframe + particle field is mouse-reactive and doubles as a
  visual nod to neural networks / AI, tying the "signature" visual moment
  directly to the AI/ML focus of the portfolio.
- Respects `prefers-reduced-motion` and keeps visible focus states for
  keyboard navigation.
