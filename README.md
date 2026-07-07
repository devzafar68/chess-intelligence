# Chess Intelligence — Static Front-End

Award-winning cinematic homepage for **chess-intelligence**, a fictional
AI-powered search engine that crawls the internet for chess PGN files.

This is a fully static, framework-free build. Just open `index.html` in a browser.

## Project structure

```
chess-intelligence/
├── index.html          # Semantic HTML5 page
├── style.css           # Single design-token driven stylesheet
├── script.js           # Minimal vanilla JS (menu, board, ticker, reveal)
├── README.md
└── assets/
    ├── fonts/          # (Google Fonts loaded via <link>)
    └── images/
        ├── logo.svg
        ├── favicon.svg
        ├── favicon-16.png     (add / export)
        ├── favicon-32.png     (add / export)
        ├── favicon-48.png     (add / export)
        ├── apple-touch-icon.png (add / export)
        ├── logo-knight.png
        ├── background.jpg      (cinematic evidence room)
        ├── mascot-hero.png
        ├── mascot-search.png
        ├── mascot-ai.png
        ├── mascot-report.png
        ├── mascot-footer.png
        └── icons/
            ├── knight.svg
            ├── search.svg
            ├── target.svg
            ├── arrow.svg
            ├── binocular.svg
            ├── folder.svg
            └── file.svg
```

## Fonts

Loaded from Google Fonts via `<link>` in `index.html`:

- **Cormorant Garamond** — editorial serif headings
- **Inter** — UI / body text

## Design tokens

All color, radius, shadow and transition values are defined as CSS custom
properties in `style.css` under `:root`. Change them there to re-skin the
entire site.

```css
--background: #080808;
--surface:    #131313;
--card:       #181818;
--gold:       #C8A35F;
--gold-soft:  #E8C98A;
--text:       #ffffff;
--text-muted: #A7A7A7;
```

## Sections

1. Floating glass **Header / Navbar**
2. Cinematic **Hero** with backdrop (photo, chess notation, red strings, grain, particles, spotlight)
3. Premium unified **Investigation Panel** (Player search + Position board)
4. **Live Database Ticker** — recent indexed PGN games
5. **Classified Dossier** — paper-textured intelligence file (TOP SECRET stamp, wax seal, portrait, mini-board, PGN, win-rate, evidence tags, barcode)
6. **How it Works** — three connected cards with animated dashed timeline
7. **Final CTA**
8. **Footer** with detective mascot walking away + quote

## Accessibility

- Semantic tags (`<header> <nav> <main> <section> <article> <aside> <footer>`)
- Proper heading hierarchy (single `<h1>`, `<h2>` per section, `<h3>` per card)
- ARIA labels on interactive controls, `aria-hidden` on decorative art
- Alt text on all meaningful images
- Full keyboard support; ⌘K / Ctrl+K focuses the player search
- `prefers-reduced-motion` disables animations

## Performance

- SVG for icons, logo, favicon
- Compressed JPG/PNG for photographic assets
- `loading="lazy"` on decorative below-the-fold images
- No dependencies, no build step, no npm

## Favicons

Export `favicon-16.png`, `favicon-32.png`, `favicon-48.png` and
`apple-touch-icon.png` (180×180) from `assets/images/favicon.svg` and
place them alongside it.

## License

Design + code delivered for handoff — © Chess Intelligence.
