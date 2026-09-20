# Design System & Visual Specification

## 1. Aesthetic Direction: Liquid Glass & Glassmorphism

The visual identity of Yexora combines **futuristic liquid glass, frosted glassmorphism, crisp ice-cyan gradients, and chamfered geometric precision**.

### Hero Section Liquid Glass Specification:
- **Liquid Glass Hero Banner:** A fluid, light-refracting glass canvas with soft ambient cyan glows, smooth radial light reflections, and layered frosted glass containers.
- **Backdrop Blur:** Multi-layered `backdrop-blur-xl` (16px to 24px blur) combined with subtle inner specular highlight borders (`border-white/50`).
- **Glossy Lighting Effects:** Light sky blue refraction glows (`rgba(112, 200, 255, 0.35)`) combined with deep cobalt typography contrast.

---

## 2. Color Palette & Design Tokens

```css
:root {
  /* Brand Atmospheric Colors */
  --color-bg-light: #f4f9fd;
  --color-bg-card: rgba(255, 255, 255, 0.65);
  --color-cobalt-dark: #0f172a;
  --color-cobalt-muted: #334155;
  
  /* Primary Accent & Liquid Glows */
  --color-ice-cyan: #eaf6ff;
  --color-sky-blue: #70c8ff;
  --color-electric-cyan: #00b4d8;
  --color-glow-blue: rgba(0, 180, 216, 0.25);

  /* Glassmorphism Borders & Shadows */
  --glass-border: rgba(255, 255, 255, 0.6);
  --glass-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
  --glass-inner-glow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  /* Geometry Tokens */
  --radius-pill: 9999px;
  --radius-chamfered: 16px;
}
```

---

## 3. UI Component Specs

### A. Pill Navigation Header
- Floating, glassmorphic pill bar with rounded corners (`rounded-full`), white glass backdrop blur, and active pill hover state.

### B. Hero & Feature Chamfered Cards
- Angled corner cuts (e.g. top-left notch or bottom-right angled clip), liquid glass background, subtle drop shadow, and crisp dark cobalt text.

### C. Floating Leader-Line Annotation Badges
- Interactive pill badges pointing to key technical features (e.g., *WebGL 60FPS*, *Next.js 16*, *Interactive 3D Engine*, *Enterprise Security*) via thin cyan indicator lines.

### D. Action Buttons
- **Primary Pill Button:** Electric Cyan to Sky Blue liquid gradient button with smooth scale & glow on hover.
- **Secondary Glass Button:** Translucent white glass button with subtle dark cobalt border.
