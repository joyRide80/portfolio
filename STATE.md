# STATE

**Current Step:** `Phase 4: Handoff Completed`

## Decisions Log
- **Workflow:** GSD methodology natively.
- **Design:** Ingested via Figma MCP. Extracted fonts, spacing, layout logic.
- **Tech Stack:** Astro, Vanilla CSS.
- **GSAP:** Installed `gsap`. Registered `ScrollTrigger`.
- **Animations Added:**
  1. **Entrance:** `header-title`, `header-meta`, and `category-header` stagger gracefully from `y: 60` with `power3.out` easing.
  2. **ScrollTriggers:** `.project-item` content nodes (`project-meta`, `.project-name-container`, `.project-image-container`, `.floating-card`) fade and move up upon entering viewport (`top 85%`).
  3. **Parallax Image:** The images inside the custom `.mockup-mask` masks are scaled up `1.15` and scrubbed along `yPercent: 15` on scroll to give a beautiful depth effect.
  4. **Parallax Card:** The floating desert card moves up `-50px` on a scrubbed timeline.
  5. **Mouse Interactions:** Added GSAP `mouseenter`/`mouseleave` to push non-active Sidebar links right by `8px` and change color smoothly.
- **Template Abstraction:** Added Astro Content Collections to `src/content/projects` with custom schema properties (`maskImage`, `floatingCardImage`, etc.) to replicate the complex layouts. `index.astro` is now fully dynamic.

## Next Actions
- Project complete. Final visual check in production build.