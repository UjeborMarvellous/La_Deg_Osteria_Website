# La DegOsteria — sito vetrina

Premium single-page site for La DegOsteria (Via Pizzecolli 3, Ancona). Static HTML/CSS/JS, no build step.

## Run locally

Any static server works, for example:

```
npx -y serve -l 4173 .
```

Then open http://localhost:4173. Opening `index.html` directly also works (CDN scripts require internet).

## Stack

- **Three.js (r158, CDN)**: fixed WebGL particle field behind the whole page. Half the particles rise like grill embers (amber), half sink like the Adriatic current (verdigris). Each section sets a `data-warm` value, so scrolling morphs the field warm (terra) or cool (mare/cantina). Mouse parallax on desktop; camera dollies and rolls with scroll progress.
- **GSAP + ScrollTrigger (CDN)**: hero entrance, masked line reveals, image curtain reveals, dish-row cascades, signature-dish parallax.
- **Lenis (CDN)**: smooth scroll, desktop pointer devices only.

## Accessibility / fallbacks

- `prefers-reduced-motion`: WebGL field and reveals are disabled, content fully visible.
- No WebGL / CDN failure: `body.no-webgl` falls back to static radial-gradient ambience; content never depends on JS.
- Menu tabs are keyboard accessible (arrow keys, Home/End), Italian `lang`, semantic landmarks.

## Content sources

All business data (menu, prices, hours, founders, contacts) extracted from https://www.ladegosteria.it/ in June 2026. Photography is Unsplash stock placeholder; swap with the restaurant's own photos before going live (same `<img>` tags, keep the `alt` voice).
