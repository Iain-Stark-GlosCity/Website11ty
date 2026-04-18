---
layout: gcc/policy-page.njk
permalink: /council-tax-2/your-bill/
title: Understanding your Council Tax bill
eyebrow: Council Tax — your guide
summary: >
  Your annual Council Tax bill is made up of charges from several
  organisations. This page explains what you are paying, why Quedgeley
  residents pay slightly more, and what to do if you think your band
  is wrong.

# ── AI/SEO signal fields ──
description: >
  How Gloucester Council Tax bills are calculated for 2026/27. Band D:
  £2,348.17 in Gloucester, £2,393.99 in Quedgeley. Full breakdown
  between city, county, and police. All bands A to H listed.
canonical: https://www.gloucester.gov.uk/council-tax/your-bill/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "£2,348.17"
  label: Band D annual charge 2026/27

breadcrumb:
  - url: /council-tax-2/
    label: Council Tax — your guide

provenance:
  pack:
    id: ctax
    version: 2.5.7
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]#a1b2c3d4
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - band_table
        - precept_breakdown
        - quedgeley_rates
        - band_definitions
        - payment_methods
      path: /charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]
      hash: sha256:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/valuation_ranges_1991#a1b2c3d5
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - band_value_ranges
      path: /charge_schedule/valuation_and_charging/valuation_bands/valuation_ranges_1991
      hash: sha256:a1b2c3d5e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b3
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.5.7+2.5:/mechanisms[id=discount]#e5f6a7b8
      document: taxonomy
      document_version: "2.5"
      role: vocabulary
      used_for:
        - precept_labels
        - quedgeley_definition
      path: /mechanisms[id=discount]
      hash: sha256:e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/charge_schedule/valuation_and_charging#d4e5f6a7
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /charge_schedule/valuation_and_charging
      hash: sha256:d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5
      lookup_method: CTax:schema_get
      asserts_status: review

  generated_at: 2026-04-18T12:00:00.000Z
  generator: ctax-to-md@0.2.0

publication_gates:
  pack_status: review
  section_status: review
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

<!-- provenance: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]#what_it_is#a1b2c3d4 -->

## What your bill pays for

Council Tax is a local tax on domestic properties. The money funds services in Gloucester and across Gloucestershire. Your bill is not paid to one organisation — it is split between several, each setting its own portion (called a **precept**) independently.

For 2026/27, a **Band D** property in Gloucester (outside Quedgeley parish) pays **£2,348.17** per year. Here is where each pound goes:

<table class="charge-comparison">
  <caption>How a Band D annual Council Tax bill of £2,348.17 is split (outside Quedgeley parish, 2026/27). Source: Full Council resolution 26 February 2026.</caption>
  <thead>
    <tr>
      <th scope="col">Organisation</th>
      <th scope="col">Annual charge (Band D)</th>
      <th scope="col">What it funds</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gloucestershire County Council<br><small>(includes Gloucestershire Fire &amp; Rescue Service)</small></th>
      <td>£1,763.46</td>
      <td>Schools, roads, social care, libraries, waste disposal, fire and rescue</td>
    </tr>
    <tr>
      <th scope="row">Gloucestershire Police</th>
      <td>£340.58</td>
      <td>Policing across the county</td>
    </tr>
    <tr>
      <th scope="row">Gloucester City Council</th>
      <td>£244.13</td>
      <td>Refuse collection, planning, parks, leisure centres, housing</td>
    </tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3"><strong>Total: £2,348.17</strong> &mdash; a 2.99% increase on 2025/26 for the Gloucester City Council element.</td></tr>
  </tfoot>
</table>

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p>Each organisation sets its own precept through its own annual budget process. Gloucester City Council can only control its own portion (£244.13 on a Band D). The county and police portions are set by their own elected bodies and passed to Gloucester City Council to collect on their behalf.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]#quedgeley#a1b2c3d4 -->

## Quedgeley — why your bill may be slightly higher

Quedgeley is a civil parish within Gloucester City Council's area. Quedgeley Town Council levies its own small precept on top of the charges above. If your property is in Quedgeley, your bill includes a **parish precept of £45.82 (Band D equivalent)** for 2026/27.

A Band D property in Quedgeley pays **£2,393.99** per year — £45.82 more than elsewhere in Gloucester.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p><strong>Am I in Quedgeley?</strong> Your bill states which parish your property is in. Quedgeley parish broadly covers the Quedgeley estate, Kingsway, and St Oswald's retail park area south-west of the city centre. If you are unsure, your bill will confirm it — or <a href="https://gloucester-self.achieveservice.com/">check in My Gloucester</a>.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]#band_table#a1b2c3d4 -->

## 2026/27 charges by band

Your Council Tax band is based on a professional assessment of your property's value as at **1 April 1991**, regardless of what properties are worth today.

<table class="charge-comparison">
  <caption>Annual Council Tax charges 2026/27 — all bands, with and without Quedgeley parish precept. Monthly figures based on 10-instalment plan (April to January).</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Proportion of Band D</th>
      <th scope="col">Annual (Gloucester)</th>
      <th scope="col">Annual (Quedgeley)</th>
      <th scope="col">Monthly (10 instalments)</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A</th><td>6/9</td><td>£1,565.44</td><td>£1,595.99</td><td>£156.54</td></tr>
    <tr><th scope="row">B</th><td>7/9</td><td>£1,826.36</td><td>£1,862.00</td><td>£182.64</td></tr>
    <tr><th scope="row">C</th><td>8/9</td><td>£2,087.26</td><td>£2,127.99</td><td>£208.73</td></tr>
    <tr><th scope="row"><strong>D</strong></th><td>9/9</td><td><strong>£2,348.17</strong></td><td><strong>£2,393.99</strong></td><td><strong>£234.82</strong></td></tr>
    <tr><th scope="row">E</th><td>11/9</td><td>£2,869.98</td><td>£2,925.98</td><td>£287.00</td></tr>
    <tr><th scope="row">F</th><td>13/9</td><td>£3,391.80</td><td>£3,457.99</td><td>£339.18</td></tr>
    <tr><th scope="row">G</th><td>15/9</td><td>£3,913.61</td><td>£3,989.98</td><td>£391.36</td></tr>
    <tr><th scope="row">H</th><td>18/9</td><td>£4,696.34</td><td>£4,787.98</td><td>£469.63</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="5">These are the gross annual charges before any discounts or reductions. Monthly figures are approximate — your bill will show the exact instalment amounts. You can also pay in 12 monthly instalments (April to March) — contact us to arrange this.</td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/valuation_ranges_1991#band_ranges#a1b2c3d5 -->

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

<!-- provenance: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands#find_your_band#a1b2c3d4 -->

## Finding and checking your band

Your band is shown on your Council Tax bill. You can also check it (and the band of any property in England) on the **Valuation Office Agency** website — [find your band on GOV.UK](https://www.gov.uk/council-tax-bands).

### If you think your band is wrong

You can challenge your band in two circumstances:

**1. You have recently moved in** and believe the property has been placed in the wrong band. You can ask the VOA to review it, usually within six months of becoming liable for Council Tax at the property.

**2. There has been a "material change"** — a significant change to the property or its surroundings that affects its value. Examples include: the property has been substantially extended or made smaller, or a major road has been built nearby affecting the value.

You cannot challenge your band simply because you think your house is worth less than a neighbour's. The comparison must use 1991 values.

To challenge, contact the VOA directly at [voa.gov.uk](https://www.gov.uk/challenge-council-tax-band). Do not contact Gloucester City Council about band challenges — we do not set or change bands.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Challenging can go either way.</strong> If the VOA reviews your band, they may agree it is too high — but they may also find it is too low and increase it. Make sure you have good evidence before you challenge.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]#paying#a1b2c3d4 -->

## How to pay

Most people pay in **10 monthly instalments**, from April to January. You have the right to ask for **12 monthly instalments** (April to March) instead — contact us to arrange this.

| Payment method | When it reaches us |
|---|---|
| Direct Debit (recommended) | Automatically on your chosen date |
| Online via My Gloucester | Same day (before 4pm on a working day) |
| Automated phone line | Same day (before 4pm on a working day) |
| PayPoint or Post Office | 2–3 working days |
| Bank transfer (BACS) | Allow 3 working days |
| Cheque by post | Allow 5 working days |

Set up or manage Direct Debit through your [My Gloucester account](https://gloucester-self.achieveservice.com/).

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>You have a legal right to pay in 12 instalments.</strong> If paying in 10 monthly payments is difficult, ask us to switch to 12. This reduces each payment and spreads the cost across the full year. Contact us at <a href="mailto:revenues@gloucester.gov.uk">revenues@gloucester.gov.uk</a> or on 01452 396 396.</p>
  </div>
</div>

## Does your bill look different to what's shown here?

The figures on this page are **before discounts**. If you receive Single Person Discount, Council Tax Support, or any other reduction, your actual bill will be lower. Go to [discounts based on who lives with you](/council-tax-2/occupants/) to check whether you are paying the right amount.
