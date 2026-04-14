# CLAUDE.md — Build instructions

You are building an Eleventy static site for **Gloucester City Council**.
This is a general-purpose council website, not a Council Tax microsite.
Council Tax is one service area among many. The architecture must
accommodate any service area the council runs.

Schema-derived pages carry end-to-end provenance (schema → markdown →
HTML → deployed page). Hand-authored pages build without provenance.

## Repository layout — do not modify these directories

```
/build/       ← pre-generated markdown (provenance frontmatter)
/schema/      ← ctax schema pack
/provenance/  ← provenance-format-spec-v0.2.md — the contract
```

Read `/provenance/provenance-format-spec-v0.2.md` before starting.

---

## Design system

**No GOV.UK Frontend.** Do not install it. Do not use its class names.
All CSS is hand-written in `src/assets/`.

### Tokens (`src/assets/tokens.css`)

```css
:root {
  /* Colours */
  --gcc-teal:       #00757F;
  --gcc-teal-dark:  #005358;
  --gcc-ink:        #1A1A2E;
  --gcc-surface:    #F7F8F9;
  --gcc-white:      #FFFFFF;
  --gcc-mid:        #6B7280;
  --gcc-border:     #E2E8F0;
  --gcc-amber:      #D97706;
  --gcc-green:      #059669;
  --gcc-red:        #DC2626;

  /* Spacing (8px base) */
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;
  --space-4: 16px; --space-5: 24px;  --space-6: 32px;
  --space-7: 40px; --space-8: 48px;  --space-9: 64px;
  --space-10: 80px;

  /* Type — fluid via clamp() */
  --text-xs:   clamp(0.7rem,  0.65rem + 0.25vw, 0.75rem);
  --text-sm:   clamp(0.8rem,  0.75rem + 0.25vw, 0.875rem);
  --text-base: clamp(0.9rem,  0.85rem + 0.25vw, 1rem);
  --text-lg:   clamp(1rem,    0.95rem + 0.3vw,  1.125rem);
  --text-xl:   clamp(1.1rem,  1rem + 0.5vw,     1.375rem);
  --text-2xl:  clamp(1.3rem,  1.1rem + 1vw,     1.75rem);
  --text-3xl:  clamp(1.6rem,  1.3rem + 1.5vw,   2.25rem);
  --font-heading: 'Sora', sans-serif;
  --font-body:    'Inter', sans-serif;

  /* Misc */
  --radius:     6px;
  --radius-sm:  3px;
  --transition: 150ms ease;
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.08);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.10);
  --focus-ring: 0 0 0 3px var(--gcc-teal), 0 0 0 6px var(--gcc-white);
}
```

### Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Visual character

Modern British civic. Confident, warm, accessible. Sora headings give
sharp geometric authority; Inter body text is screen-optimised. White
page background with off-white (`--gcc-surface`) for secondary zones.
Teal brand colour used purposefully — header bar, card top borders,
active links. No decorative animation; subtle lift on interactive
elements. 6px border-radius throughout.

---

## Content types and layouts

| Layout | Use case |
|---|---|
| `base.njk` | Site chrome — all others extend this |
| `policy-page.njk` | Schema-derived service info (Council Tax, planning, etc.) |
| `landing-page.njk` | Service area home pages with card navigation |
| `article.njk` | News, consultations, announcements |
| `guide.njk` | Multi-step how-to content |

Provenance is **always optional**. Pages without a `provenance`
frontmatter block must build cleanly with no provenance markup.

---

## Files to create

### `package.json`

```json
{
  "name": "gcc-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "prebuild": "node scripts/stage-build.js",
    "build": "eleventy",
    "serve": "eleventy --serve"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0"
  }
}
```

### `.eleventy.js`

- Input `src/`, output `_site/`
- Nunjucks for templates and markdown
- Override markdown-it `html_block` and `html_inline` to return
  `tokens[idx].content` verbatim (preserves `<!-- provenance: … -->` comments)
- Passthrough-copy `src/assets/` → `_site/assets/`
- `setUseGitIgnore(false)` so staged `src/pages/` gets built
- Global data: `currentYear`
- `templateFormats: ["njk", "md", "html", "11ty.js"]`

**Collections**

```js
// All pages that pass their publication gate (or have none)
eleventyConfig.addCollection("publishable", (api) =>
  api.getAll().filter((p) =>
    !p.data.publication_gates || p.data.publication_gates.can_publish !== false
  )
);

// Council Tax subset — repeat this pattern for each service area
eleventyConfig.addCollection("councilTax", (api) =>
  api.getFilteredByTag("council-tax").filter((p) =>
    !p.data.publication_gates || p.data.publication_gates.can_publish !== false
  )
);
```

**Filters:** `readableDate`, `isoDate`, `shortHash`, `readable`,
`urlencode`, `capitalize`. Normalise YAML-coerced Date objects via
`const toDate = (v) => (v instanceof Date ? v : new Date(v))`.

---

### `src/_includes/base.njk`

Site chrome. Exposes `{% block head %}` and `{% block content %}`.

**Header** — teal bar, text wordmark "Gloucester City Council" (Sora
Bold, no logo/crest/crown), primary nav (Council Tax, Planning, Bins &
Recycling, Contact). Mobile toggle via `<details>/<summary>` — no JS.
Force open on desktop with:
```css
@media (min-width: 768px) {
  .gcc-nav-toggle { display: contents; }
  .gcc-nav-toggle > summary { display: none; }
}
```

**Phase bar** — teal-dark strip below header with "beta" badge and
feedback text.

**Footer** — teal-dark background, "© Gloucester City Council
{{ currentYear }}", links: Accessibility statement, Cookies, Privacy.
No Crown Copyright. No OGL. No HMG identity.

**Skip link** to `#main-content`. `<main id="main-content" tabindex="-1">`.

---

### `src/_includes/policy-page.njk`

Extends `base.njk`. Used for all schema-derived service pages across
every service area.

**`{% block head %}`** — emit provenance meta tags only if
`provenance` exists in frontmatter:

```njk
{% if provenance %}
  <meta name="provenance:pack:id" content="{{ provenance.pack.id }}">
  <meta name="provenance:pack:version" content="{{ provenance.pack.version }}">
  <meta name="provenance:pack:authority" content="{{ provenance.pack.authority }}">
  {% for s in provenance.sources %}
    <meta name="provenance:source:{{ loop.index0 }}:id" content="{{ s.id }}">
    <meta name="provenance:source:{{ loop.index0 }}:role" content="{{ s.role }}">
    <meta name="provenance:source:{{ loop.index0 }}:document" content="{{ s.document }}">
    <meta name="provenance:source:{{ loop.index0 }}:hash" content="{{ s.hash }}">
  {% endfor %}
  <meta name="provenance:publication:can-publish" content="{{ publication_gates.can_publish }}">
  <meta name="provenance:publication:pack-status" content="{{ publication_gates.pack_status }}">
  <meta name="provenance:publication:section-status" content="{{ publication_gates.section_status }}">
  <meta name="provenance:generated-at" content="{{ provenance.generated_at | isoDate }}">
  <meta name="provenance:generator" content="{{ provenance.generator }}">
  <meta name="provenance_format_version" content="{{ provenance_format_version }}">
  {% for s in provenance.sources %}
    <link rel="source:{{ s.role | replace('_','-') }}" type="application/json"
          href="{{ provenance.pack.mcp_endpoint }}?document={{ s.document }}&path={{ s.path | urlencode }}">
  {% endfor %}
{% endif %}
```

**`{% block content %}`**

1. **Page hero** — white background, border-bottom: breadcrumb nav
   (from `breadcrumb` frontmatter array of `{url, label}`), optional
   `eyebrow`, `h1`, optional `summary` lede.

2. **Two-column layout** (CSS Grid 1fr + 300px, collapses below 900px):
   - Left: optional review banner if
     `publication_gates.section_status != "current"`, then
     `{{ content | safe }}` in `.gcc-prose`
   - Right: related pages card (`.gcc-related-card`) from
     `related_pages` frontmatter, only if that array has items

3. **Provenance strip** — only if `provenance` exists. A `<details>`
   element collapsed by default. Summary: "Where this page comes from".
   Body: pack info + a table of sources (role, document/path, hash)
   + generated timestamp. The `<details>` keeps it always in the DOM
   for machine inspection but out of the way for residents.

---

### `src/_includes/landing-page.njk`

Extends `base.njk`. Full-width (no sidebar). No provenance.

Hero (slightly teal-tinted background to distinguish from policy pages)
+ card grid from `cards` frontmatter:

```yaml
cards:
  - title: Single Person Discount
    href: /council-tax/discounts/single-person/
    summary: 25% off if you're the only adult at home.
```

Cards rendered as `<a>` elements in `.gcc-card-grid` (CSS Grid,
`auto-fill`, `minmax(280px, 1fr)`). Each card has a teal top border,
white background, title in teal, summary in mid-grey. Subtle lift
on hover (`translateY(-2px)` + heavier shadow).

---

### `src/_includes/article.njk`

Extends `base.njk`. Single column, `max-width: 760px`, centred.
No sidebar. No provenance.

Renders: eyebrow, h1, publication date + optional author, summary
lede, prose body.

---

### `src/_includes/guide.njk`

Extends `base.njk`. Two-column layout (same grid as policy page).

Left: prose content. Right: sticky numbered steps nav built from
`steps` frontmatter (`[{title, href}]`). Current step (from
`step_number` frontmatter) shown in bold teal without a link; other
steps are links.

---

### CSS files

**`src/assets/tokens.css`** — all tokens (defined above).

**`src/assets/base.css`** — reset + element defaults:
- Universal `box-sizing: border-box`
- `body`: `--font-body`, `--gcc-ink`, `--gcc-surface`
- `h1–h6`: `--font-heading`, size hierarchy, `line-height: 1.2`
- `a`: `--gcc-teal`, underline on hover only
- `:focus-visible`: `outline: none; box-shadow: var(--focus-ring)`
- `img, svg, video`: `max-width: 100%; display: block`
- `code, pre`: monospace, translucent `--gcc-border` background, `--radius-sm`
- `.gcc-container`: `max-width: 1140px; margin: 0 auto; padding-inline: var(--space-4)`
- `.skip-link`: visually hidden until `:focus`; then fixed top-left,
  teal background, white text, high z-index

**`src/assets/components.css`** — all component styles in labelled
sections. Key components and their essential characteristics:

- `.gcc-header` — teal background, flex inner, Sora Bold wordmark
- `.gcc-nav-toggle` / `.gcc-nav` — `<details>` toggle pattern; see
  desktop CSS override above
- `.gcc-phase-bar` — teal-dark, "beta" badge (white bg, teal text,
  uppercase, 600 weight)
- `.gcc-breadcrumb` — inline flex, `›` pseudo-element separators
- `.gcc-page-hero` — white, border-bottom, generous padding; eyebrow
  (small, uppercase, `--gcc-mid`), heading (Sora 700, `--text-3xl`,
  tight letter-spacing), lede (`--text-lg`, `--gcc-mid`, `max-width: 60ch`)
- `.gcc-landing-hero` — as page-hero but 6% teal tint on background
- `.gcc-page-layout` — `grid-template-columns: 1fr 300px`, gap
  `--space-8`; single column below 900px
- `.gcc-prose` — `max-width: 65ch`; h2 with teal bottom border; 1.7
  line-height on p/li; `.gcc-prose--wide` removes max-width
- `.gcc-card-grid` / `.gcc-card` — auto-fill grid; card has teal top
  border, `--shadow-sm`, hover lift, title in teal, summary in `--gcc-mid`
- `.charge-comparison` — table: teal thead, alternating row tint,
  `--shadow-sm`, `--gcc-surface` tfoot
- `.gcc-related-card` — white, bordered, sticky, teal-bordered heading,
  list links with hover left-indent animation
- `.gcc-steps-nav` — numbered list, current item bold teal (no link)
- `.gcc-status-banner--review` — amber left border, amber-tinted bg
- `.gcc-article` — `max-width: 760px`, centred, `--gcc-mid` meta text
- `.gcc-provenance-strip` — muted `#F0F4F5` background, `<details>`
  with rotating `::before` triangle; muted palette throughout so it
  reads as technical metadata
- `.gcc-footer` — teal-dark bg, white/translucent text, flex inner,
  copyright left, links right

**`src/assets/site.css`** — one-off overrides. Start with just:
```css
body { font-display: swap; }
```

---

### `src/provenance-index.11ty.js`

Emits `/provenance-index.json`. Walks `collections.publishable`,
skips pages without `provenance`. Groups by pack id → document →
path. Each record: `hash_at_generation`, `pages: [{url, role}]`.
Omits `current_schema_hash` / `in_sync` (staleness checker fills
these separately).

---

### `scripts/stage-build.js`

Recursively copies `/build/` → `src/pages/` at prebuild. Keeps
`/build/` authoritative and `src/pages/` out of version control.

---

### `.github/workflows/build-and-deploy.yml`

```yaml
name: Build and deploy
on:
  push:
    branches: [main]
  workflow_dispatch:
  pull_request:
    branches: [main]
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Azure Static Web Apps
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "_site"
          output_location: ""
          skip_app_build: true
      - name: Upload preview artefact
        if: github.event_name == 'pull_request'
        uses: actions/upload-artifact@v4
        with:
          name: site-preview
          path: _site/
```

### `.gitignore`

```
node_modules/
_site/
src/pages/
```

---

## Validation checklist

`npm run build` must produce:

1. ✅ HTML in `_site/` matching all frontmatter permalinks
2. ✅ GCC CSS loaded from `src/assets/` — no GOV.UK package
3. ✅ Sora + Inter loaded from Google Fonts
4. ✅ Header: "Gloucester City Council" text only — no crown, no crest
5. ✅ Mobile nav toggles via `<details>` without JavaScript
6. ✅ All four layouts present and syntactically valid
7. ✅ Pages with `provenance`: correct `<meta>` + `<link rel="source:*">` in `<head>`
8. ✅ Pages without `provenance`: build cleanly, no provenance markup
9. ✅ `<!-- provenance: … -->` comments preserved in HTML output
10. ✅ Provenance `<details>` rendered only on pages that have a `provenance` block
11. ✅ Pages with `publication_gates.can_publish: false` excluded
12. ✅ `/provenance-index.json` emitted, grouped by pack → document → path
13. ✅ Skip link present; heading hierarchy correct; focus rings visible;
    `<main id="main-content">` present; no empty `alt` attributes
14. ✅ Clean build in CI

---

## What you must NOT do

- Install or reference `govuk-frontend`
- Use GOV.UK class names in templates or CSS
- Include Crown Copyright, OGL text, or HMG visual identity
- Use a CSS framework or utility library
- Modify `/build/`, `/schema/`, or `/provenance/`
- Hard-code service-specific logic into `base.njk`
- Require provenance — it is always optional, all layouts must work without it
- Make runtime MCP calls — this build is a renderer only

---

## Adding a new service area

1. Drop markdown into `/build/` with `layout: policy-page.njk` and
   an optional `provenance:` block
2. Add a tag (e.g. `tags: planning`)
3. Add a named collection in `.eleventy.js` for that tag
4. Add a landing page in `/build/` using `layout: landing-page.njk`
   with `cards:` pointing at the new pages
5. Optionally add a nav link in `base.njk`

No CSS, pipeline, or provenance changes required.
