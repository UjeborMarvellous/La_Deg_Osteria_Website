# Design

## Theme

Scene: a couple in Ancona at 19:00, phone in hand, deciding where to book tonight; the site should feel like stepping off Via Pizzecolli into the osteria at dusk. Dark, but not neutral charcoal: a deep bottle-green ink, like the inside of a Verdicchio bottle held to candlelight.

Color strategy: Committed. The green-black drench carries the brand; candle-amber is the working accent (CTAs, embers, prices); Adriatic verdigris is the sea counterpoint. No pure black, no pure white.

## Palette

- `--ink`: oklch(20% 0.02 170) — bottle-green black, page ground
- `--ink-2`: oklch(24% 0.025 175) — raised surfaces
- `--cream`: oklch(95% 0.015 90) — primary text, warm paper
- `--cream-dim`: oklch(78% 0.02 95) — secondary text
- `--ember`: oklch(75% 0.13 65) — candle amber, accent / terra
- `--ember-deep`: oklch(62% 0.14 50) — hover, depth
- `--sea`: oklch(70% 0.09 185) — Adriatic verdigris / mare
- `--wine`: oklch(45% 0.12 25) — sparse tertiary (wine list, small marks)

## Typography

- Display: "Young Serif" — chunky, warm, hand-set feel; osteria signage, not luxury hotel.
- Body / UI: "Figtree" — humanist, quiet, excellent at small sizes.
- Labels: Figtree, uppercase, tracked +0.18em, small.
- Scale: fluid clamp, ratio ≥1.3. Hero display up to ~9rem on desktop.

## Motion

- One fixed WebGL particle field (Three.js) behind the page: curl-noise drift, embers (amber) and sea current (verdigris) interleaved; hue and flow shift with scroll progress so terra sections burn warm and mare/cantina sections cool. Mouse parallax on desktop.
- GSAP + ScrollTrigger: masked image reveals (clip-path), staggered line reveals, pinned horizontal moments kept minimal.
- Lenis smooth scroll on desktop only.
- Easing: expo/quart out. No bounce.
- prefers-reduced-motion: static gradient instead of WebGL, instant reveals.

## Components

- Buttons: pill, 1px cream/20% border, amber fill on primary; generous padding.
- Menu tabs: text tabs with animated underline ember bar; keyboard accessible.
- Dish rows: name + dotted leader + price, hover warms the row. No cards-with-icons.
- Imagery: Unsplash, moody low-light food and coastal photography; duotone-friendly.

## Layout

- Full-bleed hero, asymmetric editorial sections after; alternate left/right anchoring, avoid centered-stack monotony.
- Fluid spacing clamp(4rem → 12rem) between sections; tight inside groups.
- Max text measure 65ch.
