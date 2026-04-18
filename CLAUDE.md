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
/build-gcc/   ← GCC-template markdown (the council-tax-2 journey pages live here)
/schema/      ← ctax schema pack (see § Schema generation below)
/provenance/  ← provenance-format-spec-v0.2.md — the contract
```

Read `/provenance/provenance-format-spec-v0.2.md` before starting.

---

## Schema generation — building `build-gcc/` from the latest schema

This section governs how a build AI turns the authoritative schema
pack in `/schema/` into the user-journey markdown pages that live in
`/build-gcc/`. The renderer (Eleventy) never touches the schema
directly; these instructions are for the **generation** step that
precedes the render step.

### Step 0 — discover the latest schema version

The `/schema/` directory contains versioned files following the
naming convention:

```
council_tax_facts.{version}.json
council_tax_rules.{version}.json
council_tax_results.{version}.json
council_tax_taxonomy.{version}.json
```

Always use the **highest version** present for all four document
types. As of April 2026 the latest version is `v2.5.7.rebuilt`.

Construct the pack version from the `document_meta.version` field
inside any of the four files (e.g. `"version": "2.5.7"`).
Construct the document version from `document_meta.document_version`
in each file — these may differ between documents.

### Step 1 — read all four documents

Load:
- `schema/council_tax_facts.{version}.json` → role `facts`
- `schema/council_tax_rules.{version}.json` → role `rules`
- `schema/council_tax_results.{version}.json` → role `results`
- `schema/council_tax_taxonomy.{version}.json` → role `taxonomy`

These are the only authoritative sources. Do not use previous
`build-gcc/` pages as content sources — they may reference an older
version. Use them only as **structural and formatting references**
(see § Page structure below).

### Step 2 — check publication gates before generating any page

Read `results.publication_control.section_statuses`. For each
section you intend to generate a page for:

- If the section status is `blocked`, do **not** generate that page.
  Instead, create a stub `.md` with `publication_gates.can_publish: false`
  so the renderer's collection filter excludes it.
- If any `open_issues` entry has `blocks_publication: true` for the
  relevant section, set `can_publish: false` in the frontmatter.
- Otherwise set `can_publish: true`.

This mirrors the generator requirements in the provenance spec §
"Publication state as provenance".

### Step 3 — construct provenance IDs for each source

Use the v0.2 format from `/provenance/provenance-format-spec-v0.2.md`:

```
{schema}/{document}@{schema_version}+{document_version}:{path}#{content_hash_short}
```

Example:
```
ctax/facts@2.5.7+2.3:/adjustment_catalogue/discounts/items/0#8311bd27
```

- `schema` = `ctax` (always, for the council tax pack)
- `document` = `facts` | `rules` | `results` | `taxonomy`
- `schema_version` = pack version from `document_meta.version`
- `document_version` = per-document version from `document_meta.document_version`
- `path` = JSON Pointer to the record used (see § Path map below)
- `content_hash_short` = first 8 hex chars of SHA-256 of the record
  at that path, serialised as canonical JSON (sorted keys, no whitespace).
  If you cannot compute a real hash, use a stable placeholder derived
  from the record's `id` or `rule_id` field — do not invent random values.

The `mcp_endpoint` for all source `<link>` tags is:
```
https://func-mpc-poc.azurewebsites.net/api/mcp-schema
```

### Step 4 — generate the markdown pages

For **each page topic** in the council-tax-2 journey, produce a
`.md` file in `/build-gcc/` following the patterns established by
the existing council-tax-2 pages (your-bill.md, living-alone.md,
second-home.md, etc.).

The complete set of council-tax-2 pages and their primary schema
paths is defined in § Page map below.

---

## Page map — council-tax-2 journey

Each row defines: the output file, the permalink, the primary schema
document + path, and any supporting sources.

| Output file | Permalink | Primary source path (facts) |
|---|---|---|
| `council-tax-2.md` | `/council-tax-2/` | landing page — no provenance |
| `your-bill.md` | `/council-tax-2/your-bill/` | `/charge_schedule/annual_rates/{year}` |
| `occupants.md` | `/council-tax-2/occupants/` | landing — no provenance |
| `living-alone.md` | `/council-tax-2/occupants/living-alone/` | `/adjustment_catalogue/discounts/items[id=single-person-discount]` |
| `someone-doesnt-count.md` | `/council-tax-2/occupants/someone-doesnt-count/` | `/adjustment_catalogue/disregards/items` |
| `students-in-your-home.md` | `/council-tax-2/occupants/students-in-your-home/` | `/adjustment_catalogue/disregards/items[id=full-time-student]` |
| `empty-home.md` | `/council-tax-2/empty-home/` | `/empty_property_rules` or `/adjustment_catalogue/premiums` |
| `second-home.md` | `/council-tax-2/second-home/` | `/second_home_rules` or `/adjustment_catalogue/premiums[id=second-home]` |

Where a path above uses bracket syntax to address an array by `id`,
apply the provenance spec's key-field addressing convention:
`/adjustment_catalogue/discounts/items[id=single-person-discount]`.

For each policy page, also pull:
- A `rules` source for any calculation logic cited
- A `results` source for the publication gate
- A `taxonomy` source if vocabulary terms are used (mechanism labels,
  category definitions)

---

## Path map — schema structure reference

Use these as starting points. Actual paths may differ slightly between
schema versions — navigate the loaded JSON to find the correct paths
and record exactly what you used in the provenance frontmatter.

**facts document:**
- `document_meta` — pack and document metadata
- `charge_schedule` — band rates, annual charges, precept breakdown
- `adjustment_catalogue.discounts` — person-based discounts (single person, etc.)
- `adjustment_catalogue.disregards` — who doesn't count (students, carers, SMI, etc.)
- `adjustment_catalogue.exemptions` — full exemptions (student households, etc.)
- `adjustment_catalogue.premiums` — empty property premium, second home premium
- `empty_property_rules` — full empty property regime by duration
- `council_tax_support` — income-based reduction scheme

**rules document:**
- `executable_rule_slices.rules` — typed executable rules with conditions/effects
- `rule_sets` — grouped rules by topic

**results document:**
- `publication_control.section_statuses` — per-section publication state
- `open_issues` — blocking issues with `blocks_publication` flag
- `coverage_scorecard` — completeness metrics (informational only)

**taxonomy document:**
- `mechanisms` — discount, disregard, exemption, premium definitions
- `categories` — property and person categories
- `statuses` — defined status values

---

## Content rules — accessible plain English

Every page generated from schema MUST follow these rules. They apply
on top of the structural requirements above.

### Reading age

Write for a reading age of approximately **11 years**. This means:

- Use short sentences. Aim for an average sentence length under 15 words.
- Use common words. Say "find out" not "ascertain". Say "must" not "are
  required to". Say "25% off" not "a reduction of 25 per centum".
- Use the active voice. "We apply the discount" not "the discount is applied".
- Explain what the rule means for the resident before saying what the
  rule is. Lead with outcome, follow with mechanism.

### User journey framing

Pages answer the resident's question, not the policy's title. The
question is derived from the resident's situation:

| Resident's situation | Page answers |
|---|---|
| Lives alone | "Do I get money off because I live alone?" |
| Has students at home | "Does having a student at home change my bill?" |
| Property is empty | "What do I owe while my property is empty?" |
| Has a second home | "What do I pay on a second home?" |

Start each page with the resident's situation. Confirm what they
get or owe in the first paragraph. Put the conditions, exceptions,
and process after the headline fact.

### Do not use jargon without explanation

The first time you use any technical term, explain it in plain English
immediately after:

> Your Council Tax **band** — the letter (A to H) that decides how much you pay

> **Disregarded** means that person does not count when we work out how many adults live at your address.

### Callout boxes

Use callout divs for: important exceptions, helpful tips, warnings
about penalties, and "check before you apply" nudges. The GCC design
system provides three variants — use the right one:

```html
<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body"><p>…</p></div>
</div>

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body"><p>…</p></div>
</div>

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body"><p>…</p></div>
</div>
```

Use `--info` for neutral helpful information. Use `--warning` for
penalties, deadlines, and things that can go wrong. Use `--neutral`
for process steps ("keep paying while we process your claim").

### Tables

Use `<table class="charge-comparison">` for all charge tables. Always
include a `<caption>`, a `<thead>` with scoped column headers, `<th
scope="row">` for row headers, and a `<tfoot>` with notes if relevant.
This is both an accessibility requirement and a design system rule.

### Include as much schema content as is useful

Do not strip content to keep pages short. If the schema contains
conditions, exceptions, durations, or rates, include them — in plain
English and with the correct provenance marker on each section. A
resident should be able to understand their full position from the
page alone without needing to call the council.

### Inline provenance markers

Every major section drawn from schema data MUST open with an inline
provenance marker comment before the heading:

```markdown
<!-- provenance: ctax/facts@2.5.7+2.3:/adjustment_catalogue/discounts/items[id=single-person-discount]#eligibility#8311bd27 -->

## Do you qualify?
```

The marker must use the full v0.2 identifier including the optional
sub-path fragment (the section name after the second `#`) so that
the `prose_with_provenance` filter wraps the section in
`<section data-provenance="…">` in the rendered HTML.

---

## Page structure — frontmatter contract

Every generated policy page MUST include these frontmatter fields:

```yaml
layout: gcc/policy-page.njk
permalink: /council-tax-2/{slug}/
title: {plain English title answering the resident's question}
eyebrow: {journey section name, e.g. "Council Tax — your guide"}
summary: >
  {One or two sentences. Plain English. Tells the resident what
  they will learn from this page.}

# ── AI/SEO signal fields ──
description: >
  {One sentence SEO description including key facts and rates.}
canonical: https://www.gloucester.gov.uk/council-tax/{slug}/
schema_type: GovernmentService
dateModified: "{YYYY-MM-DD of schema version date}"

breadcrumb:
  - url: /council-tax-2/
    label: Council Tax — your guide
  # add intermediate crumbs for sub-journeys

provenance:
  pack:
    id: ctax
    version: {schema pack version}
    authority: Gloucester City Council
    financial_year: "{financial year from schema, e.g. 2026/27}"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: {full v0.2 provenance ID}
      document: facts
      document_version: "{document version}"
      role: primary
      used_for:
        - {list of content areas this source covers on this page}
      path: {JSON Pointer}
      hash: {sha256:hex or stable placeholder}
      lookup_method: CTax:schema_get

    # add rules, taxonomy, results sources as needed

  generated_at: {ISO 8601 UTC timestamp}
  generator: ctax-to-md@0.2.0

publication_gates:
  pack_status: {from results document}
  section_status: {from results.publication_control.section_statuses}
  can_publish: {true | false}
  release_decision: {approved | withheld | ...}
  blocking_issues_affecting_this_page: []

provenance_format_version: "0.2"

tags:
  - gcc
  - council-tax-2

related_pages:
  - /council-tax-2/{related-slug}/
  # list 2–4 related pages in the journey
```

Optional fields (use where the schema provides the value):

```yaml
key_badge:
  value: "25%"
  label: off your annual bill
```

---

## Landing pages — no provenance

The two landing pages (`council-tax-2.md` and `occupants.md`) use
`layout: gcc/landing-page.njk` and do **not** carry a `provenance:`
block. They draw their `cards:` frontmatter from the page structure
above, not from the schema directly.

Landing page frontmatter pattern:

```yaml
layout: gcc/landing-page.njk
permalink: /council-tax-2/
title: Council Tax — your guide
eyebrow: {section label}
summary: >
  {Plain English summary of what the section covers.}
description: >
  {SEO description.}
canonical: https://www.gloucester.gov.uk/council-tax/
schema_type: GovernmentService
dateModified: "{YYYY-MM-DD}"
breadcrumb: []

actions:
  - label: {primary action label}
    href: /council-tax-2/{slug}/
  # one or two primary actions

stats:
  - value: "8"
    label: valuation bands, A to H
  # two or three key facts from the schema

cards_heading: Where do you want to start?

cards:
  - title: {page title}
    href: /council-tax-2/{slug}/
    summary: >
      {One sentence plain English summary.}

tags:
  - gcc
  - council-tax-2
```

---

## Updating existing pages vs generating new ones

When the schema version increments:

1. Compare the new schema version's content for each page's primary
   source path against the hash recorded in the existing page's
   frontmatter.
2. If the content at that path is unchanged (hash matches), leave the
   page's prose unchanged but update `provenance.pack.version`,
   `provenance.generated_at`, and `dateModified` in the frontmatter.
3. If the content has changed, regenerate the affected sections only.
   Preserve the page's URL structure and navigation.
4. Never change a permalink without adding a redirect.

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
| `gcc/policy-page.njk` | Schema-derived service info (Council Tax, planning, etc.) |
| `gcc/landing-page.njk` | Service area home pages with card navigation |
| `gcc/article.njk` | News, consultations, announcements |
| `gcc/guide.njk` | Multi-step how-to content |

Provenance is **always optional**. Pages without a `provenance`
frontmatter block must build cleanly with no provenance markup.

---

## Files to create

### `package.json`

```json
{
  "name": "gcc-council-tax",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "prebuild":     "node scripts/stage-build.js",
    "build":        "eleventy",
    "postbuild":    "node scripts/patch-css.js",
    "prebuild:gcc": "node scripts/stage-build-gcc.js",
    "build:gcc":    "SITE_OUTPUT=_site-gcc eleventy",
    "serve":        "eleventy --serve"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0",
    "govuk-frontend": "^5.7.0"
  }
}
```

### `.eleventy.js`

- Input `src/`, output `_site/` (or `_site-gcc/` for the GCC build)
- Nunjucks for templates and markdown
- Override markdown-it `html_block` and `html_inline` to return
  `tokens[idx].content` verbatim (preserves `<!-- provenance: … -->` comments)
- Passthrough-copy `src/assets/` → `_site/assets/`
- `setUseGitIgnore(false)` so staged `src/pages/` gets built
- Global data: `currentYear`, `canonical_base`
- `templateFormats: ["njk", "md", "html", "11ty.js"]`

**The `prose_with_provenance` filter** (already implemented):

Converts `<!-- provenance: {id} -->` comments into
`<section data-provenance="{id}">` wrappers. Applied in
`gcc/policy-page.njk` via `{{ content | prose_with_provenance | safe }}`.
This is the mechanism by which inline provenance markers become
queryable DOM attributes for audit tooling.

**Collections**

```js
eleventyConfig.addCollection("publishable", (api) =>
  api.getAll().filter((p) =>
    !p.data.publication_gates || p.data.publication_gates.can_publish !== false
  )
);

eleventyConfig.addCollection("councilTax", (api) =>
  api.getFilteredByTag("council-tax").filter((p) =>
    !p.data.publication_gates || p.data.publication_gates.can_publish !== false
  )
);

eleventyConfig.addCollection("gcc", (api) =>
  api.getFilteredByTag("gcc").filter((p) =>
    !p.data.publication_gates || p.data.publication_gates.can_publish !== false
  )
);
```

**Filters:** `readableDate`, `isoDate`, `shortHash`, `readable`,
`urlencode`, `capitalize`, `dateToFormat`, `prose_with_provenance`.
Normalise YAML-coerced Date objects via
`const toDate = (v) => (v instanceof Date ? v : new Date(v))`.

---

### `src/_includes/gcc/base.njk`

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

### `src/_includes/gcc/policy-page.njk`

Extends `gcc/base.njk`. Used for all schema-derived service pages.

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
   `eyebrow`, `h1`, optional `summary` lede, optional `key_badge`.

2. **Two-column layout** (CSS Grid 1fr + 300px, collapses below 900px):
   - Left: optional review banner if
     `publication_gates.section_status != "current"`, then
     `{{ content | prose_with_provenance | safe }}` in `.gcc-prose`
   - Right: related pages card from `related_pages` frontmatter

3. **Provenance strip** — only if `provenance` exists. A `<details>`
   element collapsed by default. Summary: "Where this page comes from".
   Body: pack info + source table (role, document/path, hash) +
   generated timestamp. Always in DOM, collapsed by default.

---

### `src/_includes/gcc/landing-page.njk`

Extends `gcc/base.njk`. Full-width (no sidebar). No provenance.

Hero (slightly teal-tinted background) + optional `actions` buttons
from frontmatter + optional `stats` strip + card grid from `cards`
frontmatter.

Cards rendered as `<a>` elements in `.gcc-card-grid`. Each card has
a teal top border, white background, title in teal, summary in mid-grey.

---

### CSS files

**`src/assets/gcc/tokens.css`** — all tokens (defined above).

**`src/assets/gcc/base.css`** — reset + element defaults:
- Universal `box-sizing: border-box`
- `body`: `--font-body`, `--gcc-ink`, `--gcc-surface`
- `h1–h6`: `--font-heading`, size hierarchy, `line-height: 1.2`
- `a`: `--gcc-teal`, underline on hover only
- `:focus-visible`: `outline: none; box-shadow: var(--focus-ring)`
- `img, svg, video`: `max-width: 100%; display: block`
- `.gcc-container`: `max-width: 1140px; margin: 0 auto; padding-inline: var(--space-4)`
- `.skip-link`: visually hidden until `:focus`; then fixed top-left,
  teal background, white text, high z-index

**`src/assets/gcc/components.css`** — all component styles. Key:

- `.gcc-callout` + `--info`, `--warning`, `--neutral` variants
- `.charge-comparison` table: teal thead, alternating rows, tfoot notes
- `.gcc-prose` — `max-width: 65ch`; h2 teal bottom border; 1.7 line-height
- `.gcc-card-grid` / `.gcc-card` — auto-fill grid; teal top border
- `.gcc-related-card` — sidebar white card, sticky
- `.gcc-provenance-strip` — muted `#F0F4F5` bg, `<details>` collapsed
- `.gcc-key-badge` — prominent value + label badge for hero stats

---

### `scripts/stage-build-gcc.js`

Recursively copies `/build-gcc/` → `src/pages/` at prebuild.
Keeps `/build-gcc/` authoritative and `src/pages/` out of version control.

---

### `scripts/stage-build.js`

Recursively copies `/build/` → `src/pages/` at prebuild (original
GOV.UK template build).

---

### `src/provenance-index.11ty.js`

Emits `/provenance-index.json`. Walks `collections.publishable`,
skips pages without `provenance`. Groups by pack id → document →
path. Each record: `hash_at_generation`, `pages: [{url, role}]`.

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
      - run: npm run build:gcc
      - name: Deploy to Azure Static Web Apps
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "_site-gcc"
          output_location: ""
          skip_app_build: true
      - name: Upload preview artefact
        if: github.event_name == 'pull_request'
        uses: actions/upload-artifact@v4
        with:
          name: site-preview
          path: _site-gcc/
```

### `.gitignore`

```
node_modules/
_site/
_site-gcc/
src/pages/
```

---

## Validation checklist

`npm run build:gcc` must produce:

1. ✅ HTML in `_site-gcc/` matching all frontmatter permalinks
2. ✅ GCC CSS loaded from `src/assets/gcc/` — no GOV.UK package
3. ✅ Sora + Inter loaded from Google Fonts
4. ✅ Header: "Gloucester City Council" text only — no crown, no crest
5. ✅ Mobile nav toggles via `<details>` without JavaScript
6. ✅ All five layouts present and syntactically valid (base, policy-page, landing-page, article, guide)
7. ✅ Policy pages with `provenance`: correct `<meta>` + `<link rel="source:*">` in `<head>`
8. ✅ Policy pages without `provenance`: build cleanly, no provenance markup
9. ✅ `<!-- provenance: … -->` comments preserved and converted to `data-provenance` section wrappers
10. ✅ Provenance `<details>` rendered only on pages that have a `provenance` block
11. ✅ Pages with `publication_gates.can_publish: false` excluded from all collections
12. ✅ `/provenance-index.json` emitted, grouped by pack → document → path
13. ✅ All provenance IDs in generated pages reference the latest schema version (`v2.5.7` or higher)
14. ✅ All schema-derived content sections cite the exact JSON Pointer path used
15. ✅ Skip link present; heading hierarchy correct; focus rings visible;
    `<main id="main-content">` present; no empty `alt` attributes
16. ✅ Callout boxes use correct variant (`--info`, `--warning`, `--neutral`)
17. ✅ All charge tables use `<table class="charge-comparison">` with `<caption>` and scoped headers
18. ✅ Clean build in CI

---

## What you must NOT do

- Install or reference `govuk-frontend` in GCC-template pages
- Use GOV.UK class names in GCC templates or CSS
- Include Crown Copyright, OGL text, or HMG visual identity
- Use a CSS framework or utility library
- Modify `/build/`, `/schema/`, or `/provenance/`
- Hard-code service-specific logic into `gcc/base.njk`
- Require provenance — it is always optional, all layouts must work without it
- Make runtime MCP calls — this build is a renderer only
- Use an older schema version when a newer one is present in `/schema/`
- Invent provenance hashes — use real SHA-256 or a stable key-field placeholder
- Write content at a reading level above Year 7 (approximately age 12)
- Lead with policy title or legal reference — always lead with the resident's outcome

---

## Adding a new service area

1. Drop markdown into `/build-gcc/` with `layout: gcc/policy-page.njk`
   and an optional `provenance:` block
2. Add a tag (e.g. `tags: planning`)
3. Add a named collection in `.eleventy.js` for that tag
4. Add a landing page in `/build-gcc/` using `layout: gcc/landing-page.njk`
   with `cards:` pointing at the new pages
5. Optionally add a nav link in `gcc/base.njk`

No CSS, pipeline, or provenance changes required.
