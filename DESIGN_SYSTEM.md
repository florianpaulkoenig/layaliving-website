# Alpine Quiet — Design System

A warm, editorial design language for web applications. Inspired by Swiss print culture: parchment tones, deep ink, EB Garamond serif headings, Inter body text, and a layout grammar of ruled lines and 12-column grids.

---

## 1. Colour Palette

| Token        | Hex       | Usage                                          |
|--------------|-----------|------------------------------------------------|
| `--bg`       | `#f4f1ea` | Page background (warm off-white)               |
| `--bg-2`     | `#ebe6db` | Secondary bg, subtle panels                   |
| `--ink`      | `#1d1a15` | Primary text, borders, filled buttons          |
| `--ink-2`    | `#4a443a` | Body copy, secondary text                      |
| `--ink-3`    | `#857e72` | Muted text, labels, eyebrows, metadata         |
| `--line`     | `#d9d2c4` | Dividers, borders, ruled lines                 |
| `--accent`   | `#6b6a52` | Italic highlights in headings, italic numbers  |
| `--accent-warm` | `#a6765a` | Warm accent (calendar held/partial states)  |

```css
:root {
  --bg:          #f4f1ea;
  --bg-2:        #ebe6db;
  --ink:         #1d1a15;
  --ink-2:       #4a443a;
  --ink-3:       #857e72;
  --line:        #d9d2c4;
  --accent:      #6b6a52;
  --accent-warm: #a6765a;
}
```

---

## 2. Typography

### Fonts
- **Display / Serif:** EB Garamond — headings, pull quotes, large numbers, italic accents
- **Body / Sans:** Inter — UI text, labels, body copy, buttons
- Load via Google Fonts: `EB Garamond:ital,wght@0,400;1,400` + `Inter:wght@400;500`

```css
:root {
  --serif: "EB Garamond", "Iowan Old Style", Georgia, serif;
  --sans:  "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
```

### Type Scale

| Role             | Font     | Size      | Weight | Tracking      | Notes                            |
|------------------|----------|-----------|--------|---------------|----------------------------------|
| Hero H1          | serif    | 128px     | 400    | −0.035em      | line-height 0.92                 |
| Subpage H1       | serif    | 104px     | 400    | −0.035em      | line-height 0.95                 |
| Section title    | serif    | 56px      | 400    | −0.025em      | line-height 1.02                 |
| Section title SM | serif    | 52px      | 400    | −0.025em      | splits, panels                   |
| Pull quote       | serif    | 48px      | 400    | −0.02em       | line-height 1.12                 |
| Card title       | serif    | 26–38px   | 400    | −0.015–0.02em |                                  |
| Spec value       | serif    | 22px      | 400    | −0.01em       |                                  |
| Section number   | serif    | 18px      | 400    | 0             | italic, `--ink-3`                |
| Body lede        | sans     | 16px      | 400    | 0             | `--ink-2`, max 42–48ch           |
| Body             | sans     | 15px      | 400    | 0             | line-height 1.55                 |
| Small body       | sans     | 14px      | 400    | 0             | `--ink-2`                        |
| Eyebrow / label  | sans     | 11px      | 500    | +0.22em       | uppercase, `--ink-3`             |
| Micro label      | sans     | 10px      | 500    | +0.16–0.20em  | uppercase, calendar headers      |

### Rules
- Headings: `font-weight: 400` always (Garamond at regular weight is already bold optically)
- Italic accent in headings: wrap in `<em>` or `.it-accent`, colour `--accent`
- No bold or heavy weights used anywhere
- `text-wrap: balance` on all headings
- `-webkit-font-smoothing: antialiased` on `body`

```css
h1, h2, h3, h4 {
  font-family: var(--serif);
  font-weight: 400;
  letter-spacing: -0.015em;
  color: var(--ink);
}
h1 { line-height: 0.95; }
h2 { line-height: 1.02; }
h3, h4 { line-height: 1.15; }
```

---

## 3. Layout & Spacing

### Grid
- 12-column grid with `gap: 24px` for image grids
- Max content width: `68rem`
- Page padding (desktop): `56px` left/right
- Page padding (mobile): `20px` left/right
- Section vertical padding: `96px` top/bottom (desktop), `56px` (mobile)

### Section Header Pattern (`sec-head`)
Three-column grid used for every major section:

```css
.sec-head {
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
  gap: 40px;
  align-items: baseline;
  padding-bottom: 56px;
}
/* col 1: section number (e.g. "I — Title") in italic serif */
/* col 2: section title (large serif) */
/* col 3: lede / description / CTA */
```

On mobile: collapse to `grid-template-columns: 1fr`.

### Page Header Pattern (`ph`)
Used on every subpage, sits directly under the global nav:

```css
.ph {
  padding: 96px 56px 72px;
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
  gap: 40px;
  align-items: end;
  border-bottom: 1px solid var(--line);
}
/* col 1: italic serif kicker */
/* col 2: large H1 */
/* col 3: lede paragraph */
```

### Dividers
- Between every section: `border-bottom: 1px solid var(--line)`
- Strong rule (e.g. start of FAQ list): `border-top: 1px solid var(--ink)`
- No box shadows except subtle image shadow: `0 24px 54px 0 rgba(0,0,0,0.1)`

### Pull Quote Layout
```css
.pull {
  padding: 120px 56px;
  display: grid;
  grid-template-columns: 140px 1fr 140px; /* narrow margins, text in col 2 */
  gap: 40px;
}
blockquote {
  grid-column: 2;
  font-family: var(--serif);
  font-size: 48px;
  line-height: 1.12;
  letter-spacing: -0.02em;
}
```

### Two-Column Split
```css
.split {
  display: grid;
  grid-template-columns: 5fr 7fr; /* or 7fr 5fr */
  gap: 56px;
  align-items: stretch;
}
```

---

## 4. Borders & Radius

- **All corners are sharp (0 border-radius) except pill buttons**
- Pill buttons: `border-radius: 999px`
- No cards with rounded corners
- No drop shadows on UI elements — borders and ruled lines do the structural work

---

## 5. Buttons

### Primary (filled)
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 22px;
  font-size: 13px;
  letter-spacing: 0.02em;
  border-radius: 999px;
  border: 1px solid var(--ink);
  background: var(--ink);
  color: var(--bg);
  font-family: var(--sans);
  text-decoration: none;
  transition: background 0.15s;
}
.btn-primary:hover { background: #4a443a; } /* ink-soft */
```

### Ghost (outline)
```css
.btn-ghost {
  /* same as above, but: */
  background: transparent;
  color: var(--ink);
}
.btn-ghost:hover { background: #ebe6db; } /* bg-2 */
```

### On dark backgrounds (CTA band)
```css
/* Primary on dark: */
border-color: var(--bg); background: var(--bg); color: var(--ink);
/* Ghost on dark: */
border-color: var(--bg); background: transparent; color: var(--bg);
```

---

## 6. Dark CTA Band

Full-width dark section, used as a closing CTA:

```css
.cta-band {
  padding: 140px 56px;
  text-align: center;
  background: var(--ink);
  color: var(--bg);
}
.cta-band h2 {
  font-family: var(--serif);
  font-size: 104px;
  line-height: 0.95;
  letter-spacing: -0.03em;
  font-weight: 400;
  margin: 24px auto 40px;
  max-width: 14ch;
  text-wrap: balance;
  color: var(--bg);
}
/* italic accent on dark: */
.cta-band h2 em { color: color-mix(in oklab, var(--bg) 70%, transparent); }
```

---

## 7. Spec / Stats Row

A horizontal row of key-value pairs separated by vertical rules, sitting between the hero and the first content section:

```css
.spec {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* adjust count as needed */
  padding: 0 56px;
  border-bottom: 1px solid var(--line);
}
.spec-cell {
  padding: 24px 24px 22px 20px;
  border-right: 1px solid var(--line);
}
.spec-cell:first-child { padding-left: 0; }
.spec-cell:last-child  { border-right: none; padding-right: 0; }
.spec-k { font-size: 11px; text-transform: uppercase; letter-spacing: 0.22em; color: var(--ink-3); margin-bottom: 6px; }
.spec-v { font-family: var(--serif); font-size: 22px; letter-spacing: -0.01em; }
```

On mobile: collapse to 2-column grid, odd cells carry the right border.

---

## 8. Eyebrow / Kicker Label

Reused everywhere above section titles, cards, and heroes:

```css
.eyebrow {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--ink-3);
}
/* On dark backgrounds: use color-mix(in oklab, var(--bg) 60%, transparent) */
```

---

## 9. Cards

### Image Card (journal / editorial)
```css
.card {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.card .fig {
  aspect-ratio: 4 / 5; /* or 4/3, 3/2 depending on size */
  overflow: hidden;
  position: relative;
}
.card .fig img { transition: transform 0.6s ease; }
.card:hover .fig img { transform: scale(1.02); }

.card .kicker-row {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--ink-3);
}
.card h4 {
  font-family: var(--serif);
  font-size: 26px;
  line-height: 1.18;
  letter-spacing: -0.015em;
  font-weight: 400;
  text-wrap: balance;
}
```

### Testimonial Card
```css
.guest-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  border-top: 1px solid var(--line);
  padding-top: 24px;
}
.guest-quote {
  font-family: var(--serif);
  font-size: 22px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  text-wrap: balance;
}
.guest-cite {
  margin-top: auto;
  font-size: 12px;
  color: var(--ink-3);
  text-transform: uppercase;
  letter-spacing: 0.16em;
}
.guest-cite .who {
  color: var(--ink);
  font-family: var(--serif);
  font-size: 16px;
  letter-spacing: -0.01em;
  text-transform: none;
}
```

---

## 10. Photo Overlay Credit

Used on image grids (e.g. inspiration/mood board):

```css
.item {
  position: relative;
  break-inside: avoid; /* for CSS columns layout */
}
.item-credit {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 32px 10px 7px;
  background: linear-gradient(transparent, rgba(29, 26, 21, 0.58));
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgba(244, 241, 234, 0.82);
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}
.item:hover .item-credit { opacity: 1; }
```

---

## 11. Accordion / FAQ Row

```css
.faq-row {
  border-bottom: 1px solid var(--line);
  padding: 22px 0;
  display: grid;
  grid-template-columns: 80px 1fr 24px;
  gap: 32px;
  align-items: start;
  cursor: pointer;
}
.faq-row .n   { font-family: var(--serif); font-style: italic; font-size: 18px; color: var(--accent); }
.faq-row .q   { font-family: var(--serif); font-size: 24px; letter-spacing: -0.015em; line-height: 1.3; }
.faq-row .a   { grid-column: 2; display: none; font-size: 15px; color: var(--ink-2); max-width: 62ch; }
.faq-row[data-open="true"] .a { display: block; }
.faq-row .toggle { font-family: var(--serif); font-style: italic; font-size: 20px; color: var(--ink-3); text-align: right; }
.faq-row[data-open="true"]  .toggle::before { content: '−'; }
.faq-row[data-open="false"] .toggle::before { content: '+'; }

/* Top border of the whole FAQ list uses strong ink rule, not --line: */
.faq { border-top: 1px solid var(--ink); }
```

---

## 12. Image Grid (Masonry / CSS Columns)

```css
.img-grid {
  columns: 3;
  column-gap: 2px;
  padding: 2px;
}
.img-item {
  break-inside: avoid;
  margin-bottom: 2px;
  position: relative;
}
.img-item img {
  display: block;
  width: 100%;
  height: auto;
}

@media (max-width: 900px) { .img-grid { columns: 2; } }
@media (max-width: 540px) { .img-grid { columns: 1; } }
```

---

## 13. Global Navigation

- Fixed or sticky top bar, full-width, `border-bottom: 1px solid var(--line)`
- Background: `var(--bg)` (or transparent over hero, transitions to solid on scroll)
- Brand name in serif (EB Garamond), nav links in sans 13px
- Hamburger on mobile: three plain lines, no border/background around the icon
- Active link: `border-bottom: 1px solid var(--ink)` or simple colour change

---

## 14. Mobile Breakpoints

| Breakpoint | Width     | Changes                                              |
|------------|-----------|------------------------------------------------------|
| Desktop    | > 768px   | Full layout, 56px side padding                       |
| Tablet     | ≤ 900px   | Some grids reduce columns (e.g. spec 5→3)            |
| Mobile     | ≤ 768px   | 20px side padding, single-column, font sizes reduced |
| Small      | ≤ 540px   | Masonry grids drop to 1 column                       |

Key mobile size changes:
- Hero H1: 128px → 56px
- Subpage H1: 104px → 48px  
- Section title: 56px → 36px
- CTA band H2: 104px → 50px
- Section padding: 96px → 56px
- CTA band padding: 140px → 88px

---

## 15. Design Principles

1. **Flat and editorial.** No rounded corners except pill buttons. No drop shadows on UI. Structure comes from ruled lines and whitespace.
2. **Serif for scale, sans for utility.** Large numbers, headings, and quotes in Garamond. Labels, body, and UI in Inter.
3. **Warm neutrals only.** No pure white or pure black. `--bg` and `--ink` are the endpoints of the palette.
4. **Italic accent as emphasis.** Instead of bold or colour for emphasis in headings, use `font-style: italic` coloured with `--accent`.
5. **Section numbers as navigation.** Roman numerals (I, II, III…) in italic serif at `18px` anchor each section, always in the narrow left column.
6. **Lines do the work of boxes.** Dividers separate content; there are no card shadows, no containers with fill, no framed boxes — just ruled horizontal lines.
7. **text-wrap: balance everywhere.** All headings use `text-wrap: balance` to prevent orphans.
8. **Portrait images preferred.** `4/5` and `3/4` aspect ratios for single-subject photography; `4/3` and `16/9` for landscape/scene.
