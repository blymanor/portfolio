# Pleng — Portfolio

Personal portfolio site — **Frontend Developer** & **UX/UI Designer**.

## Tech Stack

- **Next.js 16** — App Router, static export
- **TypeScript** — strict mode
- **Tailwind CSS v4** — `@theme` tokens, utility-first
- **Framer Motion** — scroll-triggered animations
- **Syne + DM Sans** — Google Fonts

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + font loading
│   ├── page.tsx            # Home (composes all sections)
│   └── globals.css         # Tailwind config + base styles
├── components/
│   ├── Nav.tsx             # Sticky navbar with scroll blur
│   ├── Hero.tsx            # Hero section + animated role ticker
│   ├── Experience.tsx      # Work experience + education cards
│   ├── Skills.tsx          # Skills grid (dark section)
│   ├── Projects.tsx        # Project cards with links
│   ├── Footer.tsx          # Contact CTA
│   └── ui/                 # Shared primitives
│       ├── Container.tsx   # Max-width wrapper
│       ├── FadeUp.tsx      # Scroll-reveal animation
│       ├── SectionEyebrow.tsx
│       └── Tag.tsx
└── lib/
    ├── animations.ts       # Shared motion variants
    └── constants.ts        # Design tokens + content data
```

## Getting Started

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

## Build & Deploy

```bash
npm run build   # Static export → out/
```

Configured for GitHub Pages at `/portfolio` (see `next.config.mjs`).

## Contact

- tipparida.ruji@gmail.com
- [linkedin.com/in/tipparida](http://linkedin.com/in/tipparida-rujisunkuntorn-038103384)
