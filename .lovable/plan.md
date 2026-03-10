

## Plan: Mobile Responsiveness Fix + Flagship Project Card

### 1. Mobile Responsiveness Fixes

The codebase already uses responsive Tailwind classes and has a hamburger menu. The main issue is the hero `h1` with `whitespace-nowrap` which forces horizontal overflow on small screens. Fixes:

**HeroSection.tsx:**
- Remove `whitespace-nowrap` from the `h1` — this is the primary cause of horizontal overflow on mobile
- Adjust `clamp()` min value for smaller screens
- Reduce glow orb sizes on mobile (use responsive width classes)

**ProcessSection.tsx:**
- The 5-column grid (`lg:grid-cols-5`) with `sm:grid-cols-2` leaves an orphan card. Change to `sm:grid-cols-2 lg:grid-cols-5` with `md:grid-cols-3` as intermediate breakpoint for better flow.

**ContactSection.tsx:**
- Social buttons use `px-8` which can cause overflow when stacked horizontally. Ensure `flex-wrap` or reduce padding on mobile.

**Global (index.css):**
- Add `overflow-x: hidden` on `body` as a safety net against any horizontal scroll.

### 2. Featured Flagship Project Card

**ProjectsSection.tsx:**
- Add a new flagship project object at the top of the `projects` array with:
  - `category`: "AI Marketing"
  - `title`: "AI-Driven Marketing & E-commerce Automation System"
  - `description`: The provided description about the comprehensive automated marketing ecosystem
  - `highlight`: Core concept about autonomous brand scaling with n8n + AI
  - `tags`: ["AI", "n8n", "Shopify", "WooCommerce", "Marketing AI"]
  - `location`: "Global"
  - `link`: `https://ai-marketing-solutions.lovable.app/`
  - `flagship`: `true` (flag for special rendering)

- Render the flagship card as a full-width card (`md:col-span-2`) at the top of the grid with:
  - A `Rocket` icon from lucide-react next to the category badge
  - A prominent CTA button "View Live System Dashboard" linking to the provided URL
  - Same visual style (rounded-2xl, bg-card, border, hover effects) for consistency
  - Slightly enhanced styling (e.g., a subtle primary border glow) to distinguish it as the flagship

### Files to modify:
- `src/components/HeroSection.tsx` — remove `whitespace-nowrap`, adjust clamp
- `src/components/ProjectsSection.tsx` — add flagship project + CTA + Rocket icon
- `src/index.css` — add `overflow-x: hidden` to body

