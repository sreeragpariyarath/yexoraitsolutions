# Waterfall Master Task List

Every step must be verified and approved sequentially before moving to the next.

---

## Phase 1: Foundation & Specs (CURRENT)
- [x] Step 1.1: Git Repository & Remote Setup (`master` tracked to `origin/master`).
- [x] Step 1.2: AI Memory Bank System creation (`PRD.md`, `ARCHITECTURE.md`, `RULES.md`, `DESIGN.md`, `TASKS.md`, `MEMORY.md`).
- [ ] Step 1.3: Commit AI Memory Bank System to Git.

---

## Phase 2: Design System & Primitives
- [ ] Step 2.1: Implement CSS Design Tokens & Liquid Glass Utilities in `app/globals.css`.
- [ ] Step 2.2: Build Reusable UI Primitives (`Button`, `Card`, `Badge`, `Container`, `SectionHeader`, `GlassPanel`).
- [ ] Step 2.3: Build Shared Data Stores (`data/services.ts`, `data/projects.ts`, `data/process.ts`).

---

## Phase 3: Global Layout & Header/Footer
- [ ] Step 3.1: Build Pill Navigation Header & MobileNav in `components/layout/`.
- [ ] Step 3.2: Build Footer & Location Cards (Indore, MP) in `components/layout/`.
- [ ] Step 3.3: Wire Root Layout in `app/layout.tsx` with dynamic font loading and global schemas.

---

## Phase 4: Homepage Development (`app/page.tsx`)
- [ ] Step 4.1: Build Liquid Glass Hero Section with 3D/Canvas visualizer & leader-line annotation badges.
- [ ] Step 4.2: Build Company Intro & Core Capability Matrix Section.
- [ ] Step 4.3: Build VR & 3D Modeling Feature Showcase Sections.
- [ ] Step 4.4: Build Web & Web App Development Feature Sections.
- [ ] Step 4.5: Build Selected Projects & Engineering Process Sections.
- [ ] Step 4.6: Build Contact CTA & Lead Form.

---

## Phase 5: Individual Service & Company Pages
- [ ] Step 5.1: Build `/about` page.
- [ ] Step 5.2: Build `/services` overview page.
- [ ] Step 5.3: Build 4 Individual Service pages (`/services/virtual-reality`, `/services/3d-modeling-visualization`, `/services/website-development`, `/services/web-application-development`).
- [ ] Step 5.4: Build `/work` portfolio showcase page.
- [ ] Step 5.5: Build `/process` engineering workflow page.
- [ ] Step 5.6: Build `/contact`, `/privacy-policy`, and `/terms` pages.

---

## Phase 6: Technical SEO, Verification & Launch
- [ ] Step 6.1: Implement XML Sitemap (`app/sitemap.ts`) & Robots (`app/robots.ts`).
- [ ] Step 6.2: Verify zero TypeScript errors (`npm run build`).
- [ ] Step 6.3: Verify ESLint compliance (`npm run lint`).
- [ ] Step 6.4: Final Git commit & push.
