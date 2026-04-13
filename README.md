# Dejavu — Personal Portfolio

A responsive, dark/light-themed portfolio website for Dhanya Elizabath Jose (DEJ), showcasing two decades of engineering leadership experience at Meta, Egencia, and beyond.

**Live:** [dejavu-five.vercel.app](https://dejavu-five.vercel.app)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel (auto-detected Vite preset)

## Project Structure

```
src/
├── App.tsx                      # Root component, section composition
├── main.tsx                     # Entry point
├── index.css                    # Global styles, Tailwind config
├── data/
│   └── content.ts               # All site content (experiences, projects, skills, etc.)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Responsive nav with scroll spy & theme toggle
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx              # Landing section with typewriter animation, summary & key stats
│   │   ├── Experience.tsx        # Career timeline
│   │   ├── Projects.tsx          # Project cards with metrics
│   │   ├── Skills.tsx            # Skill categories with badges
│   │   ├── Education.tsx         # Education & awards
│   │   ├── ComingSoon.tsx        # Learnings from projects (coming soon)
│   │   └── Contact.tsx           # Contact section
│   └── ui/
│       ├── ScrollReveal.tsx      # Intersection Observer scroll animations
│       ├── TypewriterText.tsx    # Typewriter text effect
│       ├── DotGridBackground.tsx # Animated background pattern
│       ├── SectionHeading.tsx    # Reusable section header
│       ├── ProjectCard.tsx       # Project display card
│       ├── SkillBadge.tsx        # Skill tag badge
│       ├── TimelineItem.tsx      # Experience timeline entry
│       └── ThemeToggle.tsx       # Dark/light mode toggle
├── hooks/
│   ├── useTheme.ts              # Dark/light theme management
│   ├── useScrollSpy.ts          # Active section detection
│   └── useTypewriter.ts         # Typewriter animation logic
└── lib/
    └── utils.ts                 # Shared utility functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Deployment

The site is deployed to **Vercel** with zero configuration. Vercel auto-detects the Vite framework preset.

```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod
```

Any push to the main branch (once connected to a Git repo) will trigger an automatic production deployment.

## Design Decisions

- **Content-driven architecture:** All site content lives in `src/data/content.ts`, making it easy to update without touching component code.
- **Component separation:** UI primitives (`src/components/ui/`) are decoupled from page sections (`src/components/sections/`), enabling reuse and independent testing.
- **Scroll animations:** `ScrollReveal` uses Intersection Observer for performant, CSS-driven reveal animations with no runtime library.
- **Theme support:** Dark/light mode persisted to `localStorage`, respects system preference on first visit.
- **Static site:** No backend, no API calls — the entire site is a static SPA, keeping deployment simple and load times fast.
