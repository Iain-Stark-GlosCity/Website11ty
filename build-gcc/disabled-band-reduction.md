---
layout: gcc/policy-page.njk
permalink: /council-tax-2/disabled-band-reduction/
title: Disabled Band Reduction — paying a lower band
eyebrow: Council Tax — your guide
summary: >
  If your home has been adapted for a disabled person, you may pay
  Council Tax at one band lower than your actual band. This applies
  to the whole bill and can save a Band D household over £260 a year.

# ── AI/SEO signal fields ──
description: >
  Disabled Band Reduction for Gloucester residents. If your home has been
  adapted for disability, you pay one band lower. Band D pays Band C rates.
  Band A households get a 1/6th reduction. Find out what qualifies and how
  to apply.
canonical: https://www.gloucester.gov.uk/council-tax/disabled-band-reduction/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "1 band"
  label: lower than your actual band

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
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=disabled-band-reduction]#a9b8c7d6
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - eligibility
        - qualifying_features
        - how_reduction_works
        - application_process
        - legal_basis
      path: /adjustment_catalogue/discounts/items[id=disabled-band-reduction]
      hash: sha256:a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.reduction.disabled_band]#b8c7d6e5
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - band_step_down_logic
        - qualifying_feature_test
      path: /executable_rule_slices/rules[rule_id=rule.reduction.disabled_band]
      hash: sha256:b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]#a1b2c3d4
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - savings_table_rates
      path: /charge_schedule/valuation_and_charging/valuation_bands/rate_history[financial_year=2026_27]
      hash: sha256:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/discounts#c7d6e5f4
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/discounts
      hash: sha256:c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6
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
  - /council-tax-2/occupants/someone-doesnt-count/
  - /council-tax-2/your-bill/
  - /council-tax-2/struggling-to-pay/
  - /council-tax/discounts/disabled-reduction/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=disabled-band-reduction]#what_it_is#a9b8c7d6 -->

## What the reduction does

If your home qualifies, you pay Council Tax as if it were in the **band below** your actual band. A Band D property pays at the Band C rate. A Band E property pays at the Band D rate — and so on.

If you are already in **Band A** (the lowest band), you get an equivalent reduction: you pay **1/6th less** than the standard Band A charge. In 2026/27 that means paying £1,304.53 instead of £1,565.44 — a saving of £260.91.

This is a **reduction**, not a discount. It is applied before any other discounts, Council Tax Support, or Single Person Discount. Those are then applied on top.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=disabled-band-reduction]#eligibility#a9b8c7d6 -->

## Does your home qualify?

Two conditions must both be true:

**1. A disabled person lives at the property as their main home.** This can be an adult or a child. The disability does not need to be officially registered.

**2. The property has a qualifying feature that is essential for the disabled person's needs.** The feature must exist primarily because of the disability — not just be generally useful.

### The three qualifying features

Your property qualifies if it has **at least one** of the following:

<table class="charge-comparison">
  <caption>Features that qualify for the Disabled Band Reduction</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">What counts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Extra bathroom or kitchen</th>
      <td>An additional bathroom, shower room, or kitchen specifically for the disabled person's use — not the main household facilities</td>
    </tr>
    <tr>
      <th scope="row">A room used for special medical purposes</th>
      <td>A room (not a bathroom, kitchen, or toilet) that the disabled person needs for their condition — for example, a room adapted for dialysis equipment, or a room the person must use because they cannot manage stairs</td>
    </tr>
    <tr>
      <th scope="row">Extra space for a wheelchair</th>
      <td>Enough space indoors to allow a wheelchair to be used. The property must have been adapted or was built to provide this — a naturally large room alone is unlikely to qualify</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">A council officer will visit to verify that the feature meets the qualifying conditions. General accessibility improvements (wider doorways, grab rails) do not in themselves qualify unless they form part of an adapted room or wheelchair space.</td>
    </tr>
  </tfoot>
</table>

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>The reduction applies to the property, not the person.</strong> If the disabled person moves out, the reduction stops — even if the adaptations remain. If you move to a new adapted property, you need to apply again at that address.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=disabled-band-reduction]#savings#a9b8c7d6 -->

## What you save (2026/27)

<table class="charge-comparison">
  <caption>Annual savings from Disabled Band Reduction, 2026/27 (outside Quedgeley parish)</caption>
  <thead>
    <tr>
      <th scope="col">Your actual band</th>
      <th scope="col">You pay instead</th>
      <th scope="col">Annual charge you pay</th>
      <th scope="col">You save per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A</th>
      <td>Reduced Band A (5/9 of Band D)</td>
      <td>£1,304.53</td>
      <td>£260.91</td>
    </tr>
    <tr>
      <th scope="row">B</th>
      <td>Band A rate</td>
      <td>£1,565.44</td>
      <td>£260.92</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>Band B rate</td>
      <td>£1,826.36</td>
      <td>£260.90</td>
    </tr>
    <tr>
      <th scope="row"><strong>D</strong></th>
      <td>Band C rate</td>
      <td><strong>£2,087.26</strong></td>
      <td><strong>£260.91</strong></td>
    </tr>
    <tr>
      <th scope="row">E</th>
      <td>Band D rate</td>
      <td>£2,348.17</td>
      <td>£521.81</td>
    </tr>
    <tr>
      <th scope="row">F</th>
      <td>Band E rate</td>
      <td>£2,869.98</td>
      <td>£521.82</td>
    </tr>
    <tr>
      <th scope="row">G</th>
      <td>Band F rate</td>
      <td>£3,391.80</td>
      <td>£521.81</td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>Band G rate</td>
      <td>£3,913.61</td>
      <td>£782.73</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Quedgeley parish properties pay slightly more due to the parish precept — the reduction is still applied to the lower band rate including the parish element. Any other discounts (Single Person Discount, Council Tax Support) are then applied to the already-reduced amount.</td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=disabled-band-reduction]#application_process#a9b8c7d6 -->

## How to apply

**Online:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) and apply through the Council Tax section.

**By email:** Download the Disabled Band Reduction application form and email it to **revenues@gloucester.gov.uk** with your Council Tax account number in the subject line.

**By post:** Send the completed form to: Gloucester City Revenues & Benefits, Eastgate Management Suite, Eastgate Street, Gloucester, GL1 1PA.

After you apply, a council officer will arrange to visit the property to verify that the qualifying feature meets the conditions. You do not need to arrange this separately — we will contact you.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p><strong>Keep paying your current bill while we process your application.</strong> If the reduction is granted, we will issue a revised bill and either refund the overpayment or reduce your remaining instalments.</p>
  </div>
</div>

## Can it be combined with other discounts?

Yes. The Disabled Band Reduction is applied first — it reduces the bill to the lower band rate. Other reductions are then applied on top:

- **Single Person Discount** (25%) is applied after the band reduction
- **Council Tax Support** (income-based) is applied after both
- **Severely Mentally Impaired disregard** — if the disabled person is also severely mentally impaired and meets the SMI conditions, the SMI disregard may apply on top too

Tell us about all your circumstances when you apply and we will work out the full picture.

<!-- provenance: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.reduction.disabled_band]#b8c7d6e5 -->

## The law

The Disabled Band Reduction is set out in **Section 13(2) and Schedule 1A of the Local Government Finance Act 1992**. It is a national mandatory reduction — Gloucester City Council must apply it where the qualifying conditions are met. There is no income test and no limit on how long the reduction lasts, as long as the qualifying conditions continue.
