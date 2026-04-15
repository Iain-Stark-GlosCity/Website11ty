---
layout: gcc/policy-page.njk
permalink: /council-tax-2/your-bill/
title: Understanding your Council Tax bill
eyebrow: Council Tax — your guide
summary: >
  Your annual Council Tax bill is made up of charges from several
  different organisations. This page explains exactly what you are
  paying, why there are two different rates in Gloucester, and what
  to do if you think your band is wrong.

# ── AI/SEO signal fields ──
description: >
  How Gloucester Council Tax bills are calculated for 2026/27. Band D:
  £2,348.17 in Gloucester, £2,393.05 in Quedgeley. See the full breakdown
  between city, county, police, and fire services.
canonical: https://www.gloucester.gov.uk/council-tax/your-bill/
schema_type: GovernmentService
dateModified: "2026-04-15"

breadcrumb:
  - url: /council-tax-2/
    label: Council Tax — your guide

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/charge_schedule/annual_rates/2026_27#a1b2c3d4
      document: facts
      document_version: "2.2"
      role: primary
      used_for:
        - band_table
        - precept_breakdown
        - quedgeley_rates
        - band_definitions
      path: /charge_schedule/annual_rates/2026_27
      hash: sha256:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.band.multiplier]#b2c3d4e5
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - band_ratio_calculation
      path: /executable_rule_slices/rules[rule_id=rule.band.multiplier]
      hash: sha256:b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/charge_components/precepts#c3d4e5f6
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - precept_labels
        - quedgeley_definition
      path: /charge_components/precepts
      hash: sha256:c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/charge_schedule#d4e5f6a7
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/charge_schedule
      hash: sha256:d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5
      lookup_method: CTax:schema_get
      asserts_status: current

  generated_at: 2026-04-14T09:00:00.000Z
  generator: ctax-to-md@0.1.0

publication_gates:
  pack_status: review
  section_status: current
  can_publish: true
  release_decision: approved
  blocking_issues_affecting_this_page: []

provenance_format_version: "0.2"

tags:
  - gcc
  - council-tax-2

related_pages:
  - /council-tax-2/occupants/
  - /council-tax-2/empty-home/
  - /council-tax-2/second-home/
  - /council-tax/pay/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/charge_schedule/annual_rates/2026_27#what_it_is#a1b2c3d4 -->

## What your bill pays for

Council Tax is a local tax on domestic properties. The money funds services in Gloucester and across Gloucestershire. Your bill is not paid to one organisation — it is split between several, each setting its own portion (called a **precept**) independently.

For 2026/27, a **Band D** property in Gloucester (outside Quedgeley parish) pays **£2,348.17** per year. Here is where each pound goes:

<table class="charge-comparison">
  <caption>How a Band D annual Council Tax bill of £2,348.17 is split (outside Quedgeley parish, 2026/27)</caption>
  <thead>
    <tr>
      <th scope="col">Organisation</th>
      <th scope="col">Annual charge (Band D)</th>
      <th scope="col">What it funds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gloucestershire County Council</th>
      <td>£1,639.25</td>
      <td>Schools, roads, social care, libraries, waste disposal</td>
    </tr>
    <tr>
      <th scope="row">Gloucester City Council</th>
      <td>£277.77</td>
      <td>Refuse collection, planning, parks, leisure centres, housing</td>
    </tr>
    <tr>
      <th scope="row">Gloucestershire Constabulary</th>
      <td>£280.44</td>
      <td>Policing across the county</td>
    </tr>
    <tr>
      <th scope="row">Gloucestershire Fire &amp; Rescue</th>
      <td>£150.71</td>
      <td>Fire, rescue, and prevention services across the county</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3"><strong>Total: £2,348.17</strong></td></tr>
  </tfoot>
</table>

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p>Each organisation sets its own precept through its own annual budget process. Gloucester City Council can only control its own portion (£277.77 on a Band D). The county, police, and fire portions are set by their own elected bodies and passed to Gloucester City Council to collect on their behalf.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/charge_schedule/annual_rates/2026_27#quedgeley#a1b2c3d4 -->

## Quedgeley parish — why your bill may be slightly higher

Quedgeley is a civil parish within Gloucester City Council's area. Quedgeley Parish Council levies its own small precept on top of the four charges above. If your property is in Quedgeley, your bill includes a **parish precept of £44.88 (Band D equivalent)** for 2026/27.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p><strong>Am I in Quedgeley?</strong> Your bill states which parish your property is in. Quedgeley parish broadly covers the Quedgeley estate, Kingsway, and St Oswald's retail park area south-west of the city centre. If you are unsure, your bill will confirm it — or <a href="https://gloucester-self.achieveservice.com/">check in My Gloucester</a>.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/charge_schedule/annual_rates/2026_27#band_table#a1b2c3d4 -->

## 2026/27 charges by band

Your Council Tax band is based on a professional assessment of your property's value as at **1 April 1991**, regardless of what properties are worth today.

<table class="charge-comparison">
  <caption>Annual Council Tax charges 2026/27 — all bands, with and without Quedgeley parish precept</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Proportion of Band D</th>
      <th scope="col">Annual charge (Gloucester)</th>
      <th scope="col">Annual charge (Quedgeley)</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A</th><td>6/9</td><td>£1,565.44</td><td>£1,595.37</td></tr>
    <tr><th scope="row">B</th><td>7/9</td><td>£1,826.36</td><td>£1,860.60</td></tr>
    <tr><th scope="row">C</th><td>8/9</td><td>£2,087.26</td><td>£2,125.82</td></tr>
    <tr><th scope="row">D</th><td>9/9</td><td>£2,348.17</td><td>£2,393.05</td></tr>
    <tr><th scope="row">E</th><td>11/9</td><td>£2,869.98</td><td>£2,922.82</td></tr>
    <tr><th scope="row">F</th><td>13/9</td><td>£3,391.80</td><td>£3,452.59</td></tr>
    <tr><th scope="row">G</th><td>15/9</td><td>£3,913.61</td><td>£3,982.36</td></tr>
    <tr><th scope="row">H</th><td>18/9</td><td>£4,696.34</td><td>£4,786.10</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">These are the gross annual charges before any discounts or reductions. If you pay by 10 monthly instalments, divide by 10. If you pay in 12, divide by 12.</td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.band.multiplier]#b2c3d4e5 -->

## How the bands work

Every property in England is assigned to one of eight bands (A–H) by the **Valuation Office Agency (VOA)** — an independent arm of HMRC. The bands are based on estimated market values as at 1 April 1991.

| Band | 1991 value range |
|---|---|
| A | Up to £40,000 |
| B | £40,001 – £52,000 |
| C | £52,001 – £68,000 |
| D | £68,001 – £88,000 |
| E | £88,001 – £120,000 |
| F | £120,001 – £160,000 |
| G | £160,001 – £320,000 |
| H | Over £320,000 |

Each band pays a fixed proportion of the Band D charge — Band A pays 6/9ths, Band H pays 18/9ths (double). Gloucester City Council sets the Band D amount each year and the other bands follow automatically.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Most Gloucester properties are in bands A, B, or C.</strong> The 1991 valuations mean many properties that would sell for £200,000–£300,000 today are still in Band B or C. This is normal — the band does not reflect the current value of your home.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/charge_schedule/annual_rates/2026_27#find_your_band#a1b2c3d4 -->

## Finding and checking your band

Your band is shown on your Council Tax bill. You can also check it (and the band of any property in England) on the **Valuation Office Agency** website — [find your band on GOV.UK](https://www.gov.uk/council-tax-bands).

### If you think your band is wrong

You can challenge your band in two circumstances:

**1. You have recently moved in** and believe the property has been placed in the wrong band. You can ask the VOA to review it, usually within six months of becoming liable for Council Tax at the property.

**2. There has been a "material change"** — a significant change to the property or its surroundings that affects its value. Examples include: the property has been demolished and rebuilt at a smaller size, or a major road has been built nearby.

You cannot challenge your band simply because you think your house is worth less than a neighbour's. The comparison has to be made using 1991 values.

To challenge, contact the VOA directly at [voa.gov.uk](https://www.gov.uk/challenge-council-tax-band). Do not contact Gloucester City Council about band challenges — we do not set or alter bands.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Challenging can go either way.</strong> If the VOA reviews your band, they may agree it is too high — but they may also find it is too low and increase it. Make sure you have good evidence before you challenge.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/charge_schedule/annual_rates/2026_27#paying#a1b2c3d4 -->

## How to pay

Most people pay in **10 monthly instalments**, from April to January. You can also pay in 12 instalments (April to March) — contact us to arrange this.

| Payment method | When it reaches us |
|---|---|
| Direct Debit (recommended) | Automatically on your chosen date |
| Online via My Gloucester | Same day (before 4pm on a working day) |
| Automated phone line | Same day (before 4pm on a working day) |
| PayPoint or Post Office | 2–3 working days |
| Bank transfer (BACS) | 3 working days |
| Cheque by post | Allow 5 working days |

Set up or manage Direct Debit through your [My Gloucester account](https://gloucester-self.achieveservice.com/).

## Does your bill look different to what's shown here?

The figures on this page are **before discounts**. If you receive Single Person Discount, Council Tax Support, or any other reduction, your actual bill will be lower. Go to [discounts based on who lives with you](/council-tax-2/occupants/) to check whether you are paying the right amount.
