# Gloucester City Council — Council Tax Pages

An Eleventy 3.x static site that publishes customer-facing Council Tax pages
with end-to-end provenance from schema record to deployed HTML.

## Source of truth

| Directory | Role |
|-----------|------|
| `/build/` | Pre-generated markdown pages. Add or update pages here. |
| `/schema/` | Council Tax schema pack (facts, rules, results, taxonomy). |
| `/provenance/` | Provenance format spec v0.2 — the contract between generator and renderer. |

**Do not edit these directories.** They are inputs only. The markdown in
`/build/` is produced by a separate generator tool and committed to the repo.

## Development

```bash
npm install
npm run build    # stages pages from /build/ then runs Eleventy
npm run serve    # same but with live reload
```

Output goes to `_site/`. This directory is excluded from version control.

## Adding a new page

1. Drop its markdown file into `/build/` — follow the provenance frontmatter
   structure from `/provenance/provenance-format-spec-v0.2.md`.
2. Commit and push to `main`.
3. GitHub Actions rebuilds and deploys automatically.

No other steps required. The layout, styling, and provenance footer are
applied automatically from the templates.

## Layouts

`src/_includes/` contains the only files a developer should need to edit:

- `base.njk` — site chrome: header (Gloucester City Council, no crown),
  phase banner, footer.
- `policy-page.njk` — layout for Council Tax policy pages. Renders the
  two-thirds/one-third grid, provenance meta tags, notification banner
  (if section status is not `current`), related pages sidebar, and the
  visible provenance footer.

## Provenance

Every published page carries:

- `<meta name="provenance:source:N:*">` tags in `<head>` for each source.
- `<link rel="source:{role}">` tags pointing to the MCP endpoint.
- `<!-- provenance: ... -->` HTML comments preserved verbatim in the body.
- A visible "Where this page comes from" summary-list footer.
- `/provenance-index.json` — a reverse index grouping all pages by schema
  pack → document → path.

Pages with `publication_gates.can_publish: false` are excluded from the
build entirely.

## Deployment

GitHub Actions (`.github/workflows/build-and-deploy.yml`) builds on every
push to `main` and deploys to Azure Static Web Apps. Pull requests upload a
`site-preview` artefact for review.

The `AZURE_STATIC_WEB_APPS_API_TOKEN` secret must be set in the repository
settings before deployment will work.
