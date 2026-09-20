# Design System & Visual Specification

## 1. Official Yexora Brand Color Palette

- **Brand Primary Accent:** `#075399` (Yexora Blue)
- **Primary Dark Hover:** `#054179`
- **Core Background:** `#FFFFFF` (Clean White) / Liquid Glass Highlights
- **Core Contrast Text:** `#000000` (Obsidian Black)

---

## 2. CSS Design Tokens in `app/globals.css`

```css
:root {
  --primary: #075399;
  --primary-hover: #054179;
  --black: #000000;
  --white: #ffffff;
  --background: #ffffff;
  --foreground: #000000;
}
```

---

## 3. UI Component Specs

### A. Liquid Glass Hero & Cards
- Frosted glass containers (`rgba(255, 255, 255, 0.75)` backdrop blur) with subtle Yexora Blue border highlights (`border-[#075399]/20`).
- Chamfered cut corners.
- Pill navigation and button actions powered by `#075399`.
