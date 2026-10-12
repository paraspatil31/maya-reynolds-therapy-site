# Dr. Maya Reynolds, PsyD — Practice Homepage

A therapist homepage clone and redesign built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, faithfully reproducing the layout, typography hierarchy, image bleed/offset motifs, and tone of the reference practice website.

---

## 🛠 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript (`strict` mode)
- **Styling**: Tailwind CSS v4 (`@theme inline` design tokens)
- **Typography**: `next/font/google`
  - *Headings*: **Cormorant Garamond** (light 300, 400, italic)
  - *Body*: **Nunito Sans** (300, 400, 600)
  - *Script Accents*: **Mrs Saint Delafield** (cursive accent font)
- **Icons & Primitives**: Semantic HTML5 (`<details>/<summary>` for accessible FAQ)
- **Structured Data**: JSON-LD (`Psychologist`, `LocalBusiness`, `FAQPage`)
- **SEO & Discoverability**: Native `sitemap.ts` and `robots.ts`

---

## 🎨 Design System & Tokens

All colors are strictly mapped to design tokens defined in `app/globals.css`. No hardcoded hex values are used in components:

| Token | Hex | Role |
|---|---|---|
| `primary` | `#3F5B4C` | Deep muted sage green for accents, buttons, and dark banner overlay |
| `secondary` | `#E8DCC8` | Warm sand / linen background for "About / How I work" section and placeholders |
| `accent` | `#A94E33` | Terracotta / rust for cursive script accents (`{{word}}`) |
| `surface` | `#F8F4ED` | Soft cream / off-white primary page background |
| `text-base` | `#2B2A26` | Deep espresso / charcoal primary reading text |
| `text-muted` | `#5E5B53` | Muted neutral for secondary body copy, eyebrows, and dividers |

---

## 📁 Repository Structure

```text
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design tokens (@theme inline) & typography utility classes
│   ├── layout.tsx           # Root layout loading Google fonts and rendering Header & Footer
│   ├── page.tsx             # Homepage assembling all 11 sections + JSON-LD
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky header with serif wordmark + mobile hamburger
│   │   └── Footer.tsx       # Semantic footer with brand blurb, nav, address, copyright
│   ├── sections/
│   │   ├── HeroSection.tsx        # 1. Left full-bleed tall image + H1 + right peek image
│   │   ├── IntroSection.tsx       # 2. Large H2 + two-column lead + right bleed image offset
│   │   ├── WhoIHelpSection.tsx    # 3. 4-column grid (heading col 1, 3 cards in cols 2-4)
│   │   ├── BannerSection.tsx      # 4. Full-width image with dark primary overlay & quote
│   │   ├── ExpertiseSection.tsx   # 5. Heading left + 2-col list with 1px dividers
│   │   ├── AboutSection.tsx       # 6. Secondary bg + Maya portrait bleed + two-column copy
│   │   ├── SplitSection.tsx       # 7. Left bleed image + H2 with script "&"
│   │   ├── SpecialtiesSection.tsx # 8. Heading + 2x2 grid (3 services + soft CTA cell)
│   │   ├── OfficeSection.tsx      # 9. Office copy & details list + office1/office2 photo grid
│   │   ├── FaqSection.tsx         # 10. Accessible details/summary accordion with thin dividers
│   │   └── CtaSection.tsx         # 11. Schedule CTA with pill button & bleed/crop images
│   └── ui/
│       ├── image-slot.tsx        # Next.js Image wrapper with fallback placeholder
│       ├── mobile-sticky-bar.tsx # Floating mobile 'Book now' bar with safe-area
│       ├── primitives.tsx        # Container, Section, Eyebrow, Heading, Button
│       └── reveal.tsx            # Smooth scroll-reveal wrapper with prefers-reduced-motion
├── content/
│   └── site.ts              # Single source of truth for all copy and metadata
├── lib/
│   ├── rich-text.tsx        # Helper converting {{word}} -> script and {{em:text}} -> italic
│   └── utils.ts             # cn() class utility
├── public/
│   └── images/
│       └── maya/            # Local photography (maya.jpeg, office1.jpeg, office2.jpeg)
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Typecheck
```bash
npm run build
npm run lint
```

---

## 📋 Quality Assurance Checklist

- [x] **Section order**: Faithfully follows 1 to 11 (Hero → Intro → Who I help → Banner → Areas of expertise → About → Split → Specialties → Our Office → FAQ → Schedule CTA).
- [x] **Bleed & offset motifs**: Tall full-bleed images, downward offset image containers, and edge-peeking elements matching reference layout.
- [x] **Tokens only**: Zero hardcoded hex values in UI components; all colors reference the CSS tokens.
- [x] **Single source of copy**: All text renders directly from `content/site.ts`. No fabricated credentials or stats.
- [x] **Typography & Script accents**: `Cormorant Garamond` headings, `Nunito Sans` body, `Mrs Saint Delafield` script accents via `{{word}}` and script `&`.
- [x] **Responsive**: Mobile-first design adapting seamlessly across 360px, 768px, 1024px, and 1440px+ without horizontal overflow.
- [x] **Accessibility**: Single `<h1>` tag, keyboard-navigable and screen-reader accessible FAQ accordion (`<details>`/`<summary>`), ARIA labels on navigation and dialogs.
- [x] **SEO**: Metadata, Open Graph, dynamic Sitemap & Robots, and JSON-LD schema (`Psychologist`, `LocalBusiness`, `FAQPage`).
- [x] **Build & Lint**: Both `npm run build` and `npm run lint` pass with 0 errors and 0 warnings.
