

## Plan: Hero Section Visual Overhaul

### 1. Replace GeometricBackground with Animated Circles + Orange Glow

**File: `src/components/GeometricBackground.tsx`** — Complete rewrite.

- Remove all hexagon/line SVG logic.
- Add a fixed fullscreen container with a highly visible radial gradient background: `bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-200/80 via-orange-50/40 to-white`.
- Add 6+ `motion.div` circles with:
  - Large sizes (`w-64 h-64`, `w-80 h-80`, `w-96 h-96`)
  - Sharp borders: `border-[3px] border-orange-500/60 bg-transparent rounded-full`
  - Framer Motion `animate` with significant x/y translation (±200px), scale oscillation, and rotation over 15-25s infinite loops
  - Each circle at different starting positions (absolute, top/left percentages)

### 2. Redesign the "Available for new projects" Badge

**File: `src/components/HeroSection.tsx`** — Modify the badge div (line 6-9).

- Restyle to a futuristic look: gradient border, dark semi-transparent background (`bg-slate-900/80 text-white`), rounded-full with padding.
- Add animated glowing aura via `box-shadow` with orange/blue pulse (CSS animation or inline style).
- Add a CSS shimmer effect — a `@keyframes shimmer` in `index.css` that sweeps a white highlight across the badge using a pseudo-element or gradient overlay.

### 3. Change "Systems" to Electric Blue

**File: `src/components/HeroSection.tsx`** — Modify the h1 (line 11-12).

- Change from: `We Build <span className="text-gradient">AI Automation Systems</span>`
- Change to: `We Build <span className="text-gradient">AI Automation</span>{" "}<span className="text-[#0052FF]">Systems</span>`
- This keeps "We Build" dark, "AI Automation" in the orange gradient, and "Systems" in electric blue.

### 4. Add Shimmer Keyframes to CSS

**File: `src/index.css`** — Add a `@keyframes shimmer` animation and a `.shimmer-badge` utility class that creates a moving highlight effect.

### Files Modified
- `src/components/GeometricBackground.tsx` (rewrite)
- `src/components/HeroSection.tsx` (badge + headline)
- `src/index.css` (shimmer animation)

