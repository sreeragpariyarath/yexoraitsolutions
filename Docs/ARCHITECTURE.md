# Technical Architecture & Blueprint

## 1. Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Core:** React 19, TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`), CSS custom properties
- **Icons:** `lucide-react`
- **Animation & Motion:** `framer-motion` (isolated client motion boundaries)
- **3D / Canvas:** HTML5 Canvas & lightweight WebGL (isolated client components with static 2D image/SVG fallbacks)
- **Deployment Target:** Static & Serverless Cloudflare Pages / Vercel compatible

---

## 2. Directory & Component Boundaries

```text
app/
├── layout.tsx (Root layout with fonts, design system tokens, Header, Footer)
├── page.tsx (Homepage composed of clean feature components)
├── about/page.tsx
├── services/
│   ├── page.tsx
│   ├── virtual-reality/page.tsx
│   ├── 3d-modeling-visualization/page.tsx
│   ├── website-development/page.tsx
│   └── web-application-development/page.tsx
├── work/page.tsx
├── process/page.tsx
├── contact/page.tsx
├── privacy-policy/page.tsx
├── terms/page.tsx
├── sitemap.ts
└── robots.ts

components/
├── ui/ (Design Primitives: Button, Card, Badge, Input, Textarea, Modal, Container, SectionHeader, GlassPanel)
├── layout/ (Header, Navbar, Footer, MobileNav, PageHeader)
├── 3d/ (HeroCanvas, Interactive3DViewer, TechMesh - client-side lazy-loaded with static fallbacks)
└── features/
    ├── home/ (HeroSection, IntroSection, ServicesOverview, ProjectShowcase, ProcessPreview, ContactCta)
    ├── about/ (CompanyStory, TechStackGrid, LocationCard)
    ├── services/ (ServiceDetailHero, CapabilityList, UseCasesGrid)
    ├── work/ (ProjectGrid, ProjectCard)
    ├── process/ (ProcessTimeline)
    └── contact/ (ContactForm, LocationMapCard)

lib/
├── constants.ts (Company information, nav links, social media)
├── metadata.ts (Dynamic SEO metadata generator)
└── schema.ts (JSON-LD structured data generators)

data/
├── services.ts (Confirmed capabilities data)
├── projects.ts (Curated digital showcases)
└── process.ts (Development workflow)
```

---

## 3. Rendering Strategy & Boundaries

- **Server Components by Default:** All page routes, text content, metadata, and schemas render server-side for maximum SEO crawlability.
- **Isolate Client Boundaries:** Mark `"use client"` only on interactive primitives (e.g., mobile nav menu toggle, form submission, motion animations, canvas renderers).
- **3D & Canvas Isolation:** 3D scripts are loaded asynchronously. If WebGL is unavailable or reduced-motion is requested, render crisp 2D SVG visuals seamlessly.
