# ArcticAir Pro Services

A premium, production-quality marketing website for **ArcticAir Pro Services** — a fictional demo AC/HVAC installation, repair and maintenance company. Built as Demo 3 in a web-development portfolio series, showcasing modern 2026-era Astro + React + Tailwind + Motion frontend techniques.

> **This is a demo/portfolio project.** The business name, address, phone number, pricing, statistics, testimonials, case studies and service coverage are entirely fictional and created for demonstration purposes only. Replace all placeholder content and imagery before using this template for a real client.

---

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Architecture](#project-architecture)
- [Astro vs. React — Why Both](#astro-vs-react--why-both)
- [React Islands](#react-islands)
- [Motion (Animation) Usage](#motion-animation-usage)
- [Astro View Transitions (ClientRouter)](#astro-view-transitions-clientrouter)
- [Replacing Demo Images](#replacing-demo-images)
- [Customizing Business Information](#customizing-business-information)
- [SEO Customization](#seo-customization)
- [Environment Variables](#environment-variables)
- [Accessibility & Responsive Design](#accessibility--responsive-design)
- [GitHub Setup](#github-setup)
- [Deploying to Cloudflare Pages](#deploying-to-cloudflare-pages)

---

## Overview

ArcticAir Pro Services is a fully static, statically-generated (SSG) marketing site covering:

- A content-rich homepage (hero, trust indicators, animated stats, services, interactive service finder, "why choose us", symptom callouts, interactive price estimator, emergency CTA, before/after slider, process timeline, testimonials, service area preview, FAQ, final CTA)
- `/about`, `/services`, `/pricing`, `/service-areas`, `/case-studies`, `/contact`, `/book-service`
- A single **reusable dynamic route** (`/services/[slug]`) that generates every individual service page (AC Installation, AC Repair, AC Servicing, Deep Cleaning, Gas Refill, Duct Cleaning, Commercial HVAC, Emergency Service) from one typed data file — no duplicated per-service markup
- SEO metadata, Open Graph/Twitter cards, `robots.txt`, an auto-generated sitemap, and JSON-LD structured data (`HVACBusiness`, `Service`, `FAQPage`, `BreadcrumbList`)

## Technology Stack

| Purpose | Package | Notes |
|---|---|---|
| Framework | [Astro](https://astro.build) `^7` | Primary framework — static generation, layouts, routing |
| UI islands | [React](https://react.dev) `^19` | Only for meaningful interactive components |
| Styling | [Tailwind CSS](https://tailwindcss.com) `^4` | CSS-first config via `@theme` in `src/styles/global.css`, wired in via the official `@tailwindcss/vite` plugin |
| Animation | [Motion](https://motion.dev) `^13` (`motion/react` + vanilla `motion`) | React hooks/components **and** a framework-agnostic vanilla API for non-React scroll effects |
| Language | TypeScript `^6` (strict) | `astro check` runs as part of `npm run build` |
| Sitemap | `@astrojs/sitemap` | Auto-generated at build time |

All dependency versions are pinned to the latest mutually-compatible majors available at generation time. Tailwind v4 no longer uses the old `@astrojs/tailwind` integration (which only supports Tailwind v3) — this project uses the official `@tailwindcss/vite` plugin instead, wired into `astro.config.mjs`.

## Prerequisites

- Node.js **20+**
- npm 10+ (or pnpm/yarn if you prefer — no npm-specific features are used)

## Installation

```bash
npm install
```

## Available Scripts

```bash
npm run dev       # Start the local dev server (http://localhost:4321)
npm run build      # Type-check (astro check) + build the static site to dist/
npm run preview    # Preview the production build locally
npm run check       # Run astro check on its own
```

## Project Architecture

```
arctic-air-pro-services/
├── public/
│   ├── images/          # Demo SVG illustrations (see "Replacing Demo Images")
│   ├── icons/            # Reserved for standalone icon assets (see icons/README.md)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── astro/        # Static/server-rendered Astro components (Header, Footer, cards, etc.)
│   │   └── react/         # Interactive React islands (see below)
│   ├── config/
│   │   └── business.ts    # SINGLE SOURCE OF TRUTH for name, phone, address, hours, socials…
│   ├── data/               # Typed content: services, pricing, FAQs, testimonials, case studies…
│   ├── layouts/
│   │   ├── Layout.astro         # Base HTML shell: SEO head, header/footer, ClientRouter, WhatsApp FAB
│   │   └── ServiceLayout.astro   # Reusable service-detail page template
│   ├── pages/
│   │   ├── services/
│   │   │   ├── [slug].astro    # Dynamic route — generates every service page from services.ts
│   │   │   └── index.astro
│   │   ├── index.astro, about.astro, pricing.astro, service-areas.astro,
│   │   │   case-studies.astro, contact.astro, book-service.astro
│   ├── scripts/
│   │   └── motion-client.ts  # Vanilla Motion scroll-reveal/parallax, client-only
│   ├── styles/
│   │   └── global.css        # Tailwind v4 entry + design tokens (@theme) + base layer
│   └── utils/
│       ├── cn.ts               # Minimal className joiner
│       └── seo.ts               # JSON-LD structured data builders
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── .gitignore
```

## Astro vs. React — Why Both

Astro is the **primary framework** for this site. Every page, layout and most components (header, footer, cards, hero, pricing, timelines, breadcrumbs…) are plain `.astro` components that render to static HTML with **zero client-side JavaScript by default**. This keeps the site fast and performance-conscious.

React is used **only** where genuine client-side interactivity/state is required — these are "islands" hydrated independently via Astro's `client:*` directives, so the rest of the page stays static. Everywhere else (multi-step booking form, contact form), interactivity is implemented with small vanilla `<script>` blocks directly in the `.astro` file instead of pulling in React, to keep the JS payload minimal.

## React Islands

| Component | Purpose | Client directive used |
|---|---|---|
| `ServiceFinder.tsx` | Symptom → suggested service matcher | `client:visible` |
| `ServiceEstimator.tsx` | AC type / service / condition → demo price range | `client:visible` |
| `BeforeAfterSlider.tsx` | Draggable before/after comparison (mouse, touch, keyboard) | `client:visible` |
| `FAQAccordion.tsx` | Animated, accessible accordion | `client:visible` |
| `ServiceAreaSelector.tsx` | Interactive coverage-zone map/selector | `client:visible` |
| `AnimatedCounter.tsx` | Count-up statistic | `client:visible` (inside `Stats.astro`) |
| `ScrollProgress.tsx` | Top-of-page scroll progress bar | `client:load` (needs to be active immediately) |

## Motion (Animation) Usage

This project uses **Motion** (the unified successor to Framer Motion + Motion One) in two ways:

1. **`motion/react`** inside the React islands above — using `motion`, `AnimatePresence`, `useInView`, `useScroll`, `useTransform`, `useSpring`, `layout` animations and `useReducedMotion`.
2. **Vanilla `motion`** (framework-agnostic core) inside `src/scripts/motion-client.ts` — driving scroll-triggered reveal (`inView` + `animate`) and parallax (`scroll` + `animate`) for the plain Astro components, so most of the site's scroll animation doesn't require shipping React at all.

All animation respects `prefers-reduced-motion`: the vanilla script skips transforms/parallax entirely, and every React island reads `useReducedMotion()` to shorten or disable motion while preserving full functionality.

## Astro View Transitions (ClientRouter)

`src/layouts/Layout.astro` includes Astro's `<ClientRouter />` (the current View Transitions API) for smooth, app-like navigation between pages, including persisted header state and animated swaps. No React Router or client-side routing library is used — navigation is native `<a href>` links, progressively enhanced by the browser's View Transition API where supported, and falling back to standard full-page navigation everywhere else. The site is fully functional with JavaScript disabled or in browsers without View Transition support.

## Replacing Demo Images

All imagery in `public/images/` is **programmatically generated placeholder SVG art** in the site's navy/ice-blue palette (see `scripts/gen-images.py`, kept for reference — not required at runtime). To use real photography:

1. Drop optimized `.jpg`/`.png`/`.webp` files into `public/images/` (or `src/assets/` to take advantage of Astro's build-time image optimization via `astro:assets`).
2. Update the `image` field in `src/data/services.ts` / `src/data/caseStudies.ts`, or the `src=` attributes in `Hero.astro`, `about.astro`, and `contact.astro`.
3. Keep descriptive `alt` text — every image in this project has meaningful alt copy already; update it to match the new photography.

## Customizing Business Information

**Everything contact-related lives in one file: `src/config/business.ts`.** Update the name, tagline, phone, WhatsApp number, email, address, hours, social links and service areas there — the header, footer, CTA buttons, contact page, booking page and JSON-LD structured data all read from this single source, so nothing needs to be updated in multiple places.

Service content (titles, descriptions, pricing, FAQs, process steps) lives in `src/data/services.ts` and drives the dynamic `/services/[slug]` route automatically — add a new object to the array to publish a new service page with zero new files.

## SEO Customization

- Global defaults (site name, description, Open Graph image, Twitter handle, theme color) live in `siteMeta` in `src/config/business.ts`.
- Per-page title/description/canonical/OG image are set via props on `<Layout>` in each page file.
- Structured data helpers (`buildLocalBusinessSchema`, `buildServiceSchema`, `buildFaqSchema`, `buildBreadcrumbSchema`) live in `src/utils/seo.ts` and are composed per page.
- `public/robots.txt` and the sitemap (via `@astrojs/sitemap`, configured in `astro.config.mjs`) are generated automatically at build time.
- Update `site` in `astro.config.mjs` and `siteUrl` in `src/config/business.ts` to your real production domain before deploying.

## Environment Variables

None are required — this is a fully static site with no server-side secrets or API keys. If you later add a real booking backend, form endpoint, or analytics ID, add a `.env` file (already git-ignored) and read values via `import.meta.env`.

## Accessibility & Responsive Design

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, and visible `:focus-visible` states throughout.
- The FAQ accordion, mobile menu, and before/after slider all work with keyboard alone (arrow keys / Tab / Enter / Space); the before/after comparison is a native `<input type="range">` under the hood, so mouse drag, touch drag and keyboard control all come for free.
- The multi-step booking form and contact form use native HTML5 validation with `aria-*` wiring, and never claim a real appointment/message was created — both are clearly labeled demo-only.
- Layouts were built and tested against 375px, 390px, 430px, 768px, 1024px, 1280px and 1440px viewports with no horizontal overflow.
- `prefers-reduced-motion: reduce` is respected globally (see `global.css` and the Motion usage above).

## GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit: ArcticAir Pro Services"
git branch -M main
git remote add origin https://github.com/<your-username>/arctic-air-pro-services.git
git push -u origin main
```

## Deploying to Cloudflare Pages

**Option A — Git integration (recommended):**

1. Push the repository to GitHub (see above).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will rebuild automatically on every push to `main`.

**Option B — Direct upload via Wrangler CLI:**

```bash
npm run build
npx wrangler pages deploy dist --project-name=arctic-air-pro-services
```

Remember to update `site` in `astro.config.mjs` and `siteUrl` in `src/config/business.ts` to your live Cloudflare Pages (or custom) domain so canonical URLs, Open Graph tags, the sitemap and structured data all point to the correct place.

---

Built as a portfolio demonstration piece. All business details are fictional.
