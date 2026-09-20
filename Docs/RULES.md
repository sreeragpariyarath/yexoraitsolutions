# Engineering Rules & AI Guardrails

## Absolute Architecture & Quality Rules

1. **NEVER BUILD A FEATURE AS ONE GIANT FILE:** Break every page into logical components under `components/features/<feature>/` and `components/ui/`.
2. **REUSE UI PRIMITIVES FIRST:** Before creating any new `Button`, `Card`, `Badge`, `Input`, `Dialog`, or `Container`, inspect `components/ui/`. Never write raw HTML buttons or inputs with inline Tailwind classes when a design primitive exists.
3. **DESIGN SYSTEM CONSISTENCY:** Use designated CSS design tokens (`--color-ice-blue`, `--color-cobalt`, `--radius-chamfered`, liquid glass parameters).
4. **NO TUTORIAL PATTERNS / NO ANY TYPES:** All TypeScript must be strictly typed. Avoid unnecessary `useEffect` hooks, `any` types, or prop drilling.
5. **SERVER COMPONENTS DEFAULT:** Keep `"use client"` at the lowest possible component boundary.
6. **NO UNVERIFIED CONTENT:** Do not add fake client names, employee numbers, or unsupported claims.
7. **SEO & ACCESSIBILITY MANDATE:** Every page must include metadata, proper heading hierarchy (`h1` -> `h2` -> `h3`), semantic elements (`header`, `nav`, `main`, `section`, `footer`), aria labels, and visible focus rings.
