# CLAUDE.md — Build instructions

You are building an Eleventy static site in this repository. The site
publishes customer-facing Council Tax pages generated from schema.
Every page carries end-to-end provenance from schema record → markdown
→ HTML → deployed page.

## Repository layout (already in place — do not move)

```
/build/         ← pre-generated markdown pages with provenance frontmatter
/schema/        ← ctax schema pack (facts, rules, results, taxonomy)
/provenance/    ← provenance format spec (v0.2) — the contract you must honour
```

These three directories are your inputs. Do not modify them.

You will create everything else.

## What you must build

A working Eleventy 3.x site in this repository that:

1. Reads markdown from `/build/` and renders each file to a deployed page
2. Preserves the provenance chain end to end (frontmatter → HTML meta,
   inline comment markers → DOM attributes, visible provenance footer)
3. Applies publication gates (pages with `can_publish: false` are
   excluded from the build)
4. Uses GOV.UK Design System styling (colours, typography, grid,
   components) but **without Crown Copyright branding** — no crown
   logo, no HMG footer, no "GOV.UK" wordmark in the header
5. Deploys to Azure Static Web Apps via GitHub Actions on every push to
   `main`

Read `/provenance/` first. The spec there is authoritative. The
markdown files in `/build/` conform to it. Your job is to render them
faithfully.

## Files you must create

### `package.json`

```json
{
  "name": "gcc-council-tax",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "eleventy",
    "serve": "eleventy --serve"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0",
    "govuk-frontend": "^5.7.0"
  }
}
```

### `.eleventy.js`

Configure Eleventy to:

- Use `src/` as input (you will copy markdown from `/build/` into
  `src/pages/` at build time — see build script below)
- Use `_site/` as output
- Use Nunjucks for templating and markdown processing
- Preserve HTML comments during markdown rendering (required for
  inline provenance markers to survive)
- Passthrough-copy the GOV.UK Frontend CSS and fonts into the output
- Expose a `publishable` filter that excludes pages where
  `data.publication_gates.can_publish === false`
- Build a collection `collections.publishable` from all pages with
  `tags: council-tax` that pass the filter
- Emit `/provenance-index.json` as a build artefact (see template below)

Preserve HTML comments by overriding markdown-it's default block/inline
HTML renderers to return `tokens[idx].content` verbatim.

### `src/_includes/base.njk`

The site chrome, based on GOV.UK Design System.

Required structure:

- `<html lang="en-GB" class="govuk-template">`
- `<head>`: standard meta, GOV.UK Frontend CSS link, then a
  `{% block head %}` for per-page provenance meta tags
- `<body class="govuk-template__body">`
- A skip link (`.govuk-skip-link`) to `#main-content`
- A **modified header**: use the `.govuk-header` component structure
  but replace the Crown / GOV.UK wordmark with the text
  "Gloucester City Council" only. No crown SVG. No HMG logotype.
  Keep the header's black background and white text.
- A phase banner (`.govuk-phase-banner`) with tag "beta" and text
  "This is a new service — your feedback will help us improve it."
- `<main id="main-content" class="govuk-main-wrapper">` containing
  `{% block content %}`
- A footer using `.govuk-footer` but strip: the Crown Copyright
  notice, the OGL licence link, and the HMG visual identity.
  Keep the layout and colours. Replace with a simple "© Gloucester
  City Council {{ currentYear }}" and a link to the council's
  accessibility statement.

Load GOV.UK Frontend CSS from `/assets/govuk-frontend.min.css` (you
will copy this in via passthrough).

### `src/_includes/policy-page.njk`

The layout for Council Tax policy pages. Extends `base.njk`.

**In the `head` block:**

Emit one `<meta>` tag per provenance field from frontmatter:

```njk
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
<meta name="provenance:generated-at" content="{{ provenance.generated_at }}">
<meta name="provenance:generator" content="{{ provenance.generator }}">
<meta name="provenance_format_version" content="{{ provenance_format_version }}">

{% for s in provenance.sources %}
  <link rel="source:{{ s.role | replace('_', '-') }}"
        type="application/json"
        href="{{ provenance.pack.mcp_endpoint }}?document={{ s.document }}&path={{ s.path | urlencode }}">
{% endfor %}
```

**In the `content` block:**

Use GOV.UK Design System two-thirds / one-third layout:

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <span class="govuk-caption-l">{{ eyebrow }}</span>
    <h1 class="govuk-heading-xl">{{ title }}</h1>
    <p class="govuk-body-l">{{ summary }}</p>

    {% if publication_gates.section_status != "current" %}
      <div class="govuk-notification-banner" role="region"
           aria-labelledby="banner-title"
           data-module="govuk-notification-banner">
        <div class="govuk-notification-banner__header">
          <h2 class="govuk-notification-banner__title" id="banner-title">
            Important
          </h2>
        </div>
        <div class="govuk-notification-banner__content">
          <p class="govuk-notification-banner__heading">
            This page is currently in
            <strong>{{ publication_gates.section_status }}</strong> —
            content is accurate but may be subject to final sign-off.
          </p>
        </div>
      </div>
    {% endif %}

    <div class="govuk-body">
      {{ content | safe }}
    </div>
  </div>

  <div class="govuk-grid-column-one-third">
    <aside class="govuk-related-items" role="complementary">
      <h2 class="govuk-heading-m">Related</h2>
      <nav role="navigation">
        <ul class="govuk-list govuk-!-font-size-16">
          {% for page in related_pages %}
            <li><a class="govuk-link" href="{{ page }}">{{ page | readable }}</a></li>
          {% endfor %}
        </ul>
      </nav>
    </aside>
  </div>
</div>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

<section class="govuk-grid-row page-provenance" aria-labelledby="provenance-heading">
  <div class="govuk-grid-column-two-thirds">
    <h2 class="govuk-heading-m" id="provenance-heading">
      Where this page comes from
    </h2>
    <p class="govuk-body">
      This page was generated automatically from
      {{ provenance.pack.authority }}'s
      <strong>{{ provenance.pack.id }}</strong> schema pack
      (version {{ provenance.pack.version }}). The content draws from
      the following sources:
    </p>

    <dl class="govuk-summary-list">
      {% for s in provenance.sources %}
        <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">
            {{ s.role | replace("_", " ") | capitalize }}
            <span class="govuk-hint govuk-!-font-size-14">{{ s.document }}</span>
          </dt>
          <dd class="govuk-summary-list__value">
            <code class="govuk-!-font-size-14">{{ s.path }}</code><br>
            <span class="govuk-hint govuk-!-font-size-14">
              Hash: <code>{{ s.hash | truncate(20) }}</code>
            </span>
          </dd>
        </div>
      {% endfor %}
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Generated</dt>
        <dd class="govuk-summary-list__value">
          <time datetime="{{ provenance.generated_at }}">
            {{ provenance.generated_at | readableDate }}
          </time>
          by <code>{{ provenance.generator }}</code>
        </dd>
      </div>
    </dl>
  </div>
</section>
```

### `src/_includes/filters`

Add filters in `.eleventy.js`:

- `readableDate` — formats an ISO timestamp as "14 April 2026"
- `readable` — converts a URL path like
  `/council-tax/council-tax-support/` to "Council Tax Support" for
  nav menus
- `urlencode` — standard URL encoding for the `<link rel="source">`
  href

### `src/provenance-index.njk`

A JSON-emitting template that walks the publishable collection and
produces `/provenance-index.json` per the v0.2 spec §"Reverse index".

Structure: group by pack → document → path. For each record include
`hash_at_generation`, the list of pages citing it, and each page's
role. Since this build doesn't call the MCP, omit `current_schema_hash`
and `in_sync` — those are filled in by a separate staleness checker
that runs against live schema.

### `src/assets/site.css`

A thin stylesheet that extends GOV.UK Frontend. Minimum:

```css
/* Hide anything we don't want from the base GOV.UK theme */
.govuk-header__logotype-crown { display: none !important; }

/* Page provenance block styling */
.page-provenance {
  background: #f3f2f1;
  padding: 2em 0;
  margin-top: 3em;
}

.page-provenance dt code,
.page-provenance dd code {
  word-break: break-all;
}

/* Related items aside */
.govuk-related-items {
  border-top: 2px solid #1d70b8;
  padding-top: 1em;
  margin-top: 0;
}
```

### Build script: `scripts/stage-build.js`

Before Eleventy runs, copy markdown files from `/build/` into
`src/pages/` preserving directory structure. This keeps `src/` clean
in version control and makes `/build/` authoritative as the source of
truth for pages.

```js
const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

copyDir("build", "src/pages");
console.log("Staged markdown from /build into src/pages/");
```

Add to `package.json` scripts:

```json
"prebuild": "node scripts/stage-build.js",
"build": "eleventy"
```

Also copy the GOV.UK Frontend CSS to passthrough:

```js
// in .eleventy.js
eleventyConfig.addPassthroughCopy({
  "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css":
    "assets/govuk-frontend.min.css"
});
eleventyConfig.addPassthroughCopy({
  "node_modules/govuk-frontend/dist/govuk/assets":
    "assets/govuk"
});
eleventyConfig.addPassthroughCopy("src/assets");
```

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

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

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

      - name: Upload build artefact (on PR)
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

`src/pages/` is staged from `/build/` at build time — never commit it.

### `README.md`

Short repo-level README explaining:

- Source of truth for content is `/build/` (generated markdown)
- Source of truth for schema is `/schema/`
- Contract for provenance is `/provenance/`
- `src/_includes/` contains Eleventy layouts — these are the only
  things a developer needs to edit
- To add a new page: drop its markdown file into `/build/`, commit,
  push. GitHub Actions handles the rest.

## Validation checklist — the build must satisfy all of these

When you've finished, a `npm run build` locally (or in CI) must:

1. ✅ Produce HTML files in `_site/` matching the permalinks declared
   in each markdown file's frontmatter
2. ✅ Include GOV.UK Frontend CSS loaded from `/assets/govuk-frontend.min.css`
3. ✅ Render the header as "Gloucester City Council" with no crown and
   no GOV.UK wordmark
4. ✅ For each page, emit `<meta name="provenance:source:N:*">` tags in
   the head for every source declared in frontmatter
5. ✅ For each page, emit `<link rel="source:{role}">` tags pointing to
   the MCP endpoint
6. ✅ Preserve `<!-- provenance: ... -->` HTML comments in rendered
   output (verify by grep on a built HTML file)
7. ✅ Render the visible "Where this page comes from" provenance
   footer at the bottom of every policy page, using the GOV.UK
   summary-list component
8. ✅ Exclude any markdown file whose frontmatter declares
   `publication_gates.can_publish: false` from the build output
9. ✅ Emit `/provenance-index.json` in `_site/` listing every
   published page grouped by pack → document → path
10. ✅ Produce a valid build with no errors when run in CI

## What you must NOT do

- Do not modify anything in `/build/`, `/schema/`, or `/provenance/`.
  These are inputs only.
- Do not inline the GOV.UK Frontend source into the repo — install it
  via npm and reference it from `node_modules`.
- Do not include the GOV.UK crown logo, HMG wordmark, or Crown
  Copyright footer text anywhere.
- Do not hard-code page-specific logic into the layouts — everything
  must come from frontmatter.
- Do not build anything that calls the MCP at runtime. This build is
  rendering only. Schema fetching is a separate concern handled
  outside this build.

## Scope boundary

This build **renders** the site. It does not **generate** the
markdown from the schema. The markdown in `/build/` is produced by a
separate tool (not in scope here) and committed to the repo. When
that tool updates the markdown, the GitHub Actions workflow rebuilds
and redeploys automatically.

Read `/provenance/provenance-format-spec-v0.2.md` before starting.
The format there is the contract between this renderer and the
upstream generator.

## Deliverable

A single commit, or a single branch, containing every file listed
above, passing `npm run build` without error, with a valid
`.github/workflows/build-and-deploy.yml` that will execute on merge
to `main`.
