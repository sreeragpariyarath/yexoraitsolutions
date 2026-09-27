# Design System & Visual Specification

## 1. Official Yexora Brand Color Palette

- **Brand Primary Accent:** `#075399` (Yexora Blue)
- **Primary Dark Hover:** `#054179`
- **Core Background:** `#0B1624` (Deep Navy) — dark, full-bleed imagery (neon-blue VR hero)
- **Core Contrast Text:** `#FFFFFF` (White)
- **Accent Glow / Hover:** `#4DA3FF`
- **Display Type:** Inter Tight 800, uppercase, tight tracking (`font-heading`)

---

## 2. CSS Design Tokens in `app/globals.css`

```css
:root {
  --primary: #075399;
  --primary-hover: #054179;
  --black: #000000;
  --white: #ffffff;
  --background: #0b1624;
  --foreground: #ffffff;
}
```

---

## 3. UI Component Specs

### A. Liquid Glass Hero & Cards
- Frosted glass containers (`rgba(255, 255, 255, 0.75)` backdrop blur) with subtle Yexora Blue border highlights (`border-[#075399]/20`).
- Chamfered cut corners.
- Pill navigation and button actions powered by `#075399`.
