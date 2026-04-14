# Schema-to-Site Provenance Format

**Version:** 0.2 (draft)
**Date:** 14 April 2026
**Author:** Iain Stark, Gloucester City Council
**Status:** Draft for review
**Supersedes:** 0.1 (14 April 2026)

---

## Changes from v0.1

The v0.1 spec assumed a schema was a single document with a single
path space. Examination of the actual Gloucester Council Tax schema
(v2.4.0) revealed that realistic policy schemas are **packs of
multiple documents** with different roles:

- **facts** — descriptive content (what the policy is, who qualifies)
- **rules** — executable logic (typed rules with conditions and effects)
- **results** — audit state (publication gates, blocking issues)
- **taxonomy** — controlled vocabulary (terms, definitions, relationships)

A single generated page may draw content from all four documents. The
v0.1 single-source provenance ID was inadequate. This version:

1. Extends the provenance ID to identify both schema and document
2. Supports compound versioning (pack version + document version)
3. Introduces typed source roles for multi-document pages
4. Treats publication state as a first-class provenance constraint
5. Records cross-document relationships as part of provenance

Changes are backwards-compatible at the concept level but breaking at
the identifier syntax level. Implementations using v0.1 identifiers
must migrate.

---

## Purpose

Unchanged from v0.1. This document specifies how schema-derived
content carries its source identifier through every stage of a
publishing pipeline — from the authoritative schema record, through
generated markdown, through rendered HTML, to the browser of an end
reader. The goal is **end-to-end audit**.

---

## The schema pack model

A schema pack is a set of related documents that together describe a
service. Each document has a distinct role. Documents share a pack
version but carry their own document versions.

### Canonical document types

The following document types are recognised. Implementations may
define additional types, but the core four SHOULD be used where
applicable.

| Document type | Role | Contains |
|---------------|------|----------|
| `facts`       | Descriptive content | Human-readable descriptions, eligibility, process |
| `rules`       | Executable logic | Typed rules with conditions, effects, stage ordering |
| `results`     | Audit state | Release control, blocking issues, coverage scorecard |
| `taxonomy`    | Controlled vocabulary | Mechanisms, categories, statuses, defined terms |

### Pack metadata

Every document in a pack MUST declare:

```json
{
  "document_meta": {
    "document_type": "council_tax_facts",
    "document_version": "2.2",
    "version": "2.4.0",
    "derived_from": "council tax schema v1 2 0.json",
    "derived_from_schema_version": "1.2.0",
    "financial_year": "2026/27",
    "status": "review-ready"
  }
}
```

Where:
- `document_type` identifies which document in the pack (free-form but
  SHOULD align with `{schema}_{role}` convention)
- `document_version` is the individual document's version
- `version` is the pack-wide release version
- `derived_from` / `derived_from_schema_version` maintain traceability
  to any predecessor schema

### Cross-document references

Documents in a pack MAY reference each other. Common patterns:

**Facts-to-rules** (facts declares which rules implement each fact):

```json
"cross_document_index": {
  "high_value_adjustments": [
    {
      "fact_record_id": "single-person-discount",
      "rule_ids": ["rule.discount.single_person"],
      "taxonomy_refs": ["mechanism.discount"],
      "relationship_type": "implements",
      "calc_stage": "discounts"
    }
  ]
}
```

**Rules-to-facts** (rules points back at the fact it implements):

```json
{
  "rule_id": "rule.discount.single_person",
  "source_rule_refs": [
    "facts.adjustment_catalogue.discounts.items[single-person-discount]"
  ]
}
```

**Results-to-facts** (results tracks publication state per section of
facts):

```json
"publication_control": {
  "section_statuses": {
    "discounts": "review",
    "channels": "blocked"
  }
}
```

These cross-references are themselves provenance data and SHOULD be
surfaced in the generated page's provenance record.

---

## The provenance identifier (v0.2)

### Format

```
{schema}/{document}@{schema_version}+{document_version}:{path}#{content_hash_short}
```

### Example

```
ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27
```

### Field definitions

| Field | Required | Description |
|-------|----------|-------------|
| `schema` | Yes | Schema pack short name. Lowercase, alphanumeric and hyphens. |
| `document` | Yes | Document type within the pack (e.g. `facts`, `rules`, `results`, `taxonomy`). |
| `schema_version` | Yes | Pack-wide version (semver). |
| `document_version` | Yes | This document's version within the pack (semver or semver-like). |
| `path` | Yes | JSON Pointer relative to this document's root. |
| `content_hash_short` | Yes | First 8 hex chars of SHA-256 of canonical JSON for this record. |

### Separators

- `/` separates schema from document
- `@` separates identity from versioning
- `+` separates schema version from document version
- `:` separates versioning from path
- `#` separates path from content hash

The `+` separator is deliberate — it signals "additional version
qualifier within the pack" rather than implying a new top-level
version. Compare to how semver pre-release versions use `-`.

### Optional sub-path fragment

For sub-sections of a record, insert a JSON Pointer fragment between
path and hash:

```
ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#eligibility#8311bd27
```

The fragment refers to a sub-path of the record. The hash still
refers to the whole record.

### Array-element addressing

For records identified by a key field rather than array index, use
bracketed key syntax:

```
ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4
```

This is preferable to numeric indices where arrays may be reordered
or have items inserted, since the key binds to content rather than
position.

---

## The full provenance record

The provenance ID is the primary key. The full record in frontmatter
contains the pack, the generator, and one or more typed sources.

### Structure

```yaml
provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27
      document: facts
      document_version: "2.2"
      role: primary
      used_for: [title, summary, eligibility, how_to_apply, change_rules, legal_basis]
      path: /adjustment_catalogue/discounts/items/0
      hash: sha256:8311bd2784917185589bec55fe31a26e44a81f0b9fe33b91c951a5a63bee6462
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for: [calculation_explainer]
      path: /executable_rule_slices/rules[rule_id=rule.discount.single_person]
      hash: sha256:a1b2c3d4...
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=discount]#e5f6a7b8
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for: [mechanism_label]
      path: /mechanisms[id=discount]
      hash: sha256:e5f6a7b8...
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/discounts#c9d0e1f2
      document: results
      document_version: "2.2"
      role: publication_state
      used_for: [release_gate]
      path: /publication_control/section_statuses/discounts
      hash: sha256:c9d0e1f2...
      lookup_method: CTax:schema_get
      asserts_status: review

  generated_at: 2026-04-13T18:07:26.544Z
  generator: ctax-to-md@0.1.0
```

### Pack block

The `pack` block identifies the overall schema pack. It appears once
and applies to all sources for this page.

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Schema pack short name. |
| `version` | Yes | Pack version. |
| `authority` | SHOULD | Human-readable owning body. |
| `financial_year` | Optional | For time-bounded content. |
| `mcp_endpoint` | SHOULD | Primary lookup URL for this pack. |

### Source block roles

The `role` field on each source identifies **why** this source is
used. The following roles are recognised:

| Role | Meaning |
|------|---------|
| `primary` | The main descriptive content of the page. |
| `implementing_logic` | The executable rule or calculation logic cited. |
| `vocabulary` | Controlled term or definition used. |
| `publication_state` | Release gate or publication status. |
| `cross_reference` | Supporting link to related content. |
| `historical` | Archived version included for context. |

Pages SHOULD have exactly one `primary` source and MAY have any
number of other roles.

### `used_for` labels

Opaque string labels identifying which parts of the page draw from
this source. The labels are page-specific and have no global meaning —
they exist so a staleness checker or regenerator can report "the X
section of the page is derived from Y."

### Generator block

| Field | Required | Description |
|-------|----------|-------------|
| `generated_at` | Yes | ISO 8601 UTC timestamp. |
| `generator` | Yes | `name@version` of the generating tool. |

---

## Publication state as provenance

The results document tracks blocking issues and per-section
publication status. Pages derived from schema content MUST respect
this state and carry it forward to frontmatter.

### Publication gates block

```yaml
publication_gates:
  pack_status: review
  section_status: review
  can_publish: true
  release_decision: withhold_publication_of_unconfirmed_operational_detail
  blocking_issues_affecting_this_page:
    - id: ct-issue-004
      title: DPO sign off required before publication
      severity: critical
      status: open
      source: ctax/results@2.4.0+2.2:/open_issues[issue_id=ct-issue-004]
```

### Generator requirements for publication gates

A conforming generator MUST:

1. Resolve the section containing the primary source against
   `results.publication_control.section_statuses`.
2. Emit a `publication_gates` block in the frontmatter.
3. Set `can_publish: false` if any section affecting the page is
   `blocked`, or if any blocking issue affecting the page has
   `blocks_publication: true` and `status: open`.
4. List every relevant blocking issue in
   `blocking_issues_affecting_this_page`.

A conforming renderer MUST:

1. Read the `publication_gates` block.
2. If `can_publish: false`, either:
   - Refuse to build the page, or
   - Render it with a visible draft banner and exclude it from
     production deployment

The renderer's default MUST be "refuse to build." Soft-publish with a
banner should be opt-in and clearly marked as staging only.

---

## Inline markers (v0.2)

Section-level markers use the full v0.2 identifier:

```markdown
## Who qualifies

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#eligibility#8311bd27 -->

Only one adult aged 18 or over in the property as their sole or main residence.

## How the discount is calculated

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4 -->

This discount applies at calculation stage **50 (discounts)**, after
exemptions and disregards. It reduces the gross charge after
exemptions by 25%. It applies only when the count of adult residents —
excluding students, severely mentally impaired persons, and others
disregarded under statute — is exactly one.
```

The rules-sourced section is new content made possible by the
multi-document model. Hand-written council pages don't usually
explain calculation logic because the calculation logic isn't
authored — it's formalised in the rules document. Citing the rule
directly lets the page expose "how this works" without a policy
author having to write it from scratch.

---

## HTML output (v0.2)

### Meta tags

The per-source HTML meta tags use indexed namespacing. For a page
with multiple sources:

```html
<head>
  <meta name="provenance:pack:id"          content="ctax">
  <meta name="provenance:pack:version"     content="2.4.0">
  <meta name="provenance:pack:authority"   content="Gloucester City Council">

  <meta name="provenance:source:0:id"      content="ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27">
  <meta name="provenance:source:0:role"    content="primary">
  <meta name="provenance:source:0:document" content="facts">
  <meta name="provenance:source:0:hash"    content="sha256:8311bd2784917185589bec55fe31a26e44a81f0b9fe33b91c951a5a63bee6462">

  <meta name="provenance:source:1:id"      content="ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4">
  <meta name="provenance:source:1:role"    content="implementing_logic">
  <meta name="provenance:source:1:document" content="rules">
  <meta name="provenance:source:1:hash"    content="sha256:a1b2c3d4...">

  <meta name="provenance:publication:can-publish" content="true">
  <meta name="provenance:publication:pack-status" content="review">
  <meta name="provenance:publication:section-status" content="review">

  <meta name="provenance:generated-at"     content="2026-04-13T18:07:26.544Z">
  <meta name="provenance:generator"        content="ctax-to-md@0.1.0">
  <meta name="provenance_format_version"   content="0.2">

  <link rel="source:primary"
        type="application/json"
        href="https://func-mpc-poc.azurewebsites.net/api/mcp-schema?document=facts&path=/adjustment_catalogue/discounts/items/0">

  <link rel="source:implementing-logic"
        type="application/json"
        href="https://func-mpc-poc.azurewebsites.net/api/mcp-schema?document=rules&path=/executable_rule_slices/rules[rule_id=rule.discount.single_person]">
</head>
```

Using `<link rel="source:{role}">` rather than just `<link
rel="source">` lets multiple sources coexist in the head with
distinct roles.

### Inline DOM attributes

Section-level provenance becomes `data-provenance` attributes. For
multi-document inline markers, the attribute value is the full v0.2
ID:

```html
<section data-provenance="ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#eligibility#8311bd27">
  <h2 id="who-qualifies">Who qualifies</h2>
  <p>Only one adult aged 18 or over in the property.</p>
</section>

<section data-provenance="ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4"
         data-provenance-role="implementing_logic">
  <h2 id="how-calculated">How the discount is calculated</h2>
  <p>This discount applies at calculation stage 50 (discounts)...</p>
</section>
```

The `data-provenance-role` attribute is optional and identifies
non-primary sources visually in DevTools.

### Visible provenance footer (v0.2)

For multi-source pages, the visible footer lists each source with
its role:

```html
<footer class="page-provenance">
  <h2>Where this page comes from</h2>

  <p>
    This page was generated automatically from Gloucester City Council's
    Council Tax schema pack, version 2.4.0. The content draws from the
    following sources:
  </p>

  <dl>
    <dt>Primary source (descriptive content)</dt>
    <dd>
      <code>ctax/facts</code> —
      <a href="{mcp_url_for_path}">/adjustment_catalogue/discounts/items/0</a>
      <br>
      <small>Hash: <code>sha256:8311bd27&hellip;</code></small>
    </dd>

    <dt>Implementing logic (calculation)</dt>
    <dd>
      <code>ctax/rules</code> —
      <a href="{mcp_url_for_path}">rule.discount.single_person</a>
      <br>
      <small>Hash: <code>sha256:a1b2c3d4&hellip;</code></small>
    </dd>

    <dt>Vocabulary</dt>
    <dd>
      <code>ctax/taxonomy</code> —
      <a href="{mcp_url_for_path}">mechanisms/discount</a>
    </dd>

    <dt>Generated</dt>
    <dd><time datetime="2026-04-13T18:07:26Z">13 April 2026</time></dd>
  </dl>
</footer>
```

---

## Reverse index (v0.2)

The reverse index keys by full v0.2 provenance ID. For multi-document
packs, the index groups by document:

```json
{
  "schema_version": "2",
  "generated_at": "2026-04-13T18:30:00.000Z",
  "site_url": "https://www.gloucester.gov.uk",
  "packs": {
    "ctax": {
      "version": "2.4.0",
      "documents": {
        "facts": {
          "version": "2.2",
          "records": {
            "/adjustment_catalogue/discounts/items/0": {
              "hash_at_generation": "sha256:8311bd27...",
              "current_schema_hash": "sha256:8311bd27...",
              "in_sync": true,
              "pages": [
                {
                  "url": "/council-tax/discounts/single-person/",
                  "role": "primary"
                },
                {
                  "url": "/council-tax/discounts/",
                  "role": "cross_reference"
                }
              ]
            }
          }
        },
        "rules": {
          "version": "2.2",
          "records": {
            "/executable_rule_slices/rules[rule_id=rule.discount.single_person]": {
              "hash_at_generation": "sha256:a1b2c3d4...",
              "current_schema_hash": "sha256:a1b2c3d4...",
              "in_sync": true,
              "pages": [
                {
                  "url": "/council-tax/discounts/single-person/",
                  "role": "implementing_logic"
                }
              ]
            }
          }
        }
      }
    }
  }
}
```

This lets the staleness checker report per-document drift. "Single
Person Discount page is in sync with facts but out of sync with rules
— the calculation logic was updated" is a meaningfully different
message from "the page is out of sync with facts."

---

## Verifying the chain (v0.2)

An auditor verifying that a published page faithfully represents its
sources:

### Step 1: read the provenance from the page

Open the page. Either inspect the multi-tag meta block in the head,
read the visible footer, or inspect section-level `data-provenance`
attributes.

### Step 2: fetch each source record

For each source listed, use the `<link rel="source:{role}">` URL or
the MCP endpoint directly:

```
GET {mcp_endpoint}?document=facts&path=/adjustment_catalogue/discounts/items/0
GET {mcp_endpoint}?document=rules&path=/executable_rule_slices/rules[rule_id=rule.discount.single_person]
```

### Step 3: verify each hash

Compute SHA-256 of the canonical serialisation of each returned
record. Compare against the page's per-source hash.

### Step 4: check publication state

Verify that the `publication_gates` block accurately reflects the
current state of `results.publication_control.section_statuses` and
that no blocking issue affects the section.

### Step 5: trace section-level provenance

For sentence-level audit, inspect `data-provenance` attributes on
wrapping sections. Each attribute value is a full v0.2 identifier
that resolves directly to the source record.

---

## Path migration

The v0.1 spec flagged this as an open question. It remains an open
question in v0.2 but now has a clearer shape.

Each document in the pack is independently versioned. When a path
within a document moves, the pack SHOULD publish a migration manifest:

```json
{
  "pack": "ctax",
  "document": "facts",
  "migrations": [
    {
      "from_version": "2.1",
      "to_version": "2.2",
      "renames": [
        {
          "old_path": "/discounts/person_based_discounts/0",
          "new_path": "/adjustment_catalogue/discounts/items/0",
          "reason": "Normalised discounts, disregards and exemptions into flat arrays with canonical record shapes"
        }
      ]
    }
  ]
}
```

Staleness checkers and migration tools consult this manifest to
resolve old provenance references to current paths. The hash remains
the reliable identifier of content identity across path migrations.

---

## Appendix A: example multi-source page end-to-end

### Sources

**Primary (facts):** `ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27`

```json
{
  "id": "single-person-discount",
  "name": "Single Person Discount",
  "category": "person_based",
  "effect": "25%",
  "legal_basis": {
    "type": "statutory",
    "legislation": "Local Government Finance Act 1992, Schedule 1"
  },
  "eligibility": {
    "criteria": "Only one person aged 18 or over lives in the property as their sole or main residence"
  },
  "change_in_circumstances": {
    "tell_us_within": "21 days"
  }
}
```

**Implementing logic (rules):** `ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4`

```json
{
  "rule_id": "rule.discount.single_person",
  "name": "Single Person Discount",
  "stage": "apply_statutory_discounts_and_disregards",
  "mechanism": "discount",
  "conditions": [
    {"fact": "property.occupancy_status", "operator": "equals", "value": "sole_or_main_residence"},
    {"fact": "derived.counted_adults", "operator": "equals", "value": 1}
  ],
  "effect": {
    "effect_type": "percentage_reduction",
    "value": 25,
    "unit": "percent",
    "apply_to": "gross_charge_after_exemptions"
  }
}
```

**Publication state (results):** `ctax/results@2.4.0+2.2:/publication_control/section_statuses/discounts#c9d0e1f2`

Value: `"review"` — not blocked, page can publish.

### Generated markdown

```yaml
---
layout: policy-page.njk
permalink: /council-tax/discounts/single-person/
title: Single Person Discount
eyebrow: Council Tax discounts

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27
      document: facts
      document_version: "2.2"
      role: primary
      used_for: [title, eligibility, change_rules, legal_basis]
      hash: sha256:8311bd2784917185589bec55fe31a26e44a81f0b9fe33b91c951a5a63bee6462

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for: [calculation_explainer]
      hash: sha256:a1b2c3d4...

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/discounts#c9d0e1f2
      document: results
      document_version: "2.2"
      role: publication_state
      used_for: [release_gate]
      asserts_status: review

  generated_at: 2026-04-13T18:07:26.544Z
  generator: ctax-to-md@0.1.0

publication_gates:
  pack_status: review
  section_status: review
  can_publish: true

provenance_format_version: "0.2"
---

## Who qualifies

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#eligibility#8311bd27 -->

Only one adult aged 18 or over lives in the property as their sole or
main residence. Some people are **disregarded** and do not count as
adults for Council Tax purposes — for example full-time students,
apprentices, and people with a severe mental impairment.

## How the discount is calculated

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4 -->

This discount applies at calculation stage **50 (discounts)**, after
exemptions and disregards. It reduces your gross charge (after any
exemptions) by 25%. It applies only when the count of adult
residents — excluding students, severely mentally impaired persons,
and others disregarded under statute — is exactly one.

## If your circumstances change

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#change_in_circumstances#8311bd27 -->

You must tell us within **21 days** if anything changes.

## Legal basis

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#legal_basis#8311bd27 -->

Single Person Discount is a statutory national discount set out in
**Schedule 1 of the Local Government Finance Act 1992**. Councils
have no discretion to refuse it where the eligibility criteria are met.
```

---

## Appendix B: what the multi-document model enables

Beyond the audit chain, the multi-document provenance model unlocks
three capabilities the single-document model could not:

**1. Calculation explanations derived from rules.** A "how this is
calculated" section can be generated directly from the typed rule
definition. The content is authoritative because it cites the rule
that actually runs, not a narrative description.

**2. Publication gates as runtime constraints.** The generator
refuses to produce pages for sections marked `blocked` in results.
The audit chain isn't just reporting state — it's enforcing it.

**3. Schema-driven cross-linking.** A page about Single Person
Discount can link to related rules (the counted-adults definition),
related facts (other discounts), and related taxonomy terms (the
`mechanism.discount` definition) using the cross-document index as
the source of truth. No hand-maintained link lists.

---

## Appendix C: open questions for v0.3

1. **Canonical serialisation across documents.** Each document type
   may need its own canonicalisation rules. Rules contain executable
   conditions with order-sensitive operator semantics; taxonomy
   contains alias lists that should be order-independent. A single
   serialisation spec may not fit all documents.

2. **Fragment addressing for typed rule conditions.** A rule's
   conditions array can be addressed individually for very
   fine-grained provenance ("this sentence explains this specific
   condition of this rule"). Syntax for this not yet defined.

3. **Partial document updates.** If only one document in a pack
   changes (rules updated, facts unchanged), does the pack version
   bump? Current practice in the Gloucester schemas suggests yes
   (pack version bumps to 2.4.0 even though individual documents may
   carry older document versions). This should be formalised.

4. **Cross-pack references.** A procurement page may need to
   reference the ctax schema for "how this relates to Council Tax."
   Cross-pack provenance syntax not yet defined.

5. **Provenance of the provenance.** The generator itself is an
   artefact; its own version and behaviour affect the output. A
   `generator_provenance` block pointing at the generator's source
   code commit would close this meta-loop. Worth specifying?

6. **Cryptographic signing.** Still deferred from v0.1. Remains a
   stretch goal for v1.0.

---

*End of v0.2 specification.*
