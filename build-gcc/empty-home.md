---
layout: gcc/policy-page.njk
permalink: /council-tax-2/empty-home/
title: Council Tax on an empty home
eyebrow: Property & occupancy
summary: >
  When a property becomes empty, Council Tax does not disappear — it
  changes shape. The charge starts low, rises to the full rate, and
  can climb to four times the normal bill if the property stays empty
  for long enough. Here is exactly what you pay and when.

# ── AI/SEO signal fields ──
description: >
  Council Tax on empty homes in Gloucester. Charges start at zero and rise
  over time, reaching 400% for properties empty ten or more years. Includes
  guidance for selling, probate, renovation, and care placements.
canonical: https://www.gloucester.gov.uk/council-tax/empty-home/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "0 → 400%"
  label: as time passes

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
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/empty_homes_premium#e1f2a3b4
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - title
        - summary
        - charge_timeline
        - premium_levels
        - exceptions
        - special_circumstances
        - how_to_notify
      path: /adjustment_catalogue/property_premiums/empty_homes_premium
      hash: sha256:e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=unoccupied-unfurnished]#e1f2a3b5
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - initial_discount_period
        - major_repair_exemption
      path: /adjustment_catalogue/discounts/items[id=unoccupied-unfurnished]
      hash: sha256:e1f2a3b5c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f3
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.premium.empty_property_long_term]#f4a3b2c1
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - premium_bands
        - clock_rules
      path: /executable_rule_slices/rules[rule_id=rule.premium.empty_property_long_term]
      hash: sha256:f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.5.7+2.5:/mechanisms[id=premium]#a3b2c1d0
      document: taxonomy
      document_version: "2.5"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=premium]
      hash: sha256:a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/property_premiums#c1d0e9f8
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/property_premiums
      hash: sha256:c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0
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
  - /council-tax-2/second-home/
  - /council-tax/discounts/empty-properties/
  - /council-tax/council-tax-support/
  - /council-tax/pay/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/empty_homes_premium#what_counts#e1f2a3b4 -->

## What counts as an empty home

An **empty home** for Council Tax is a property that is:

- Unoccupied — nobody is living there as their sole or main residence
- **Unfurnished** — this is what distinguishes it from a [second home](/council-tax-2/second-home/)

If a property is furnished but unoccupied, it is a second home and different rules apply.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Furnished or unfurnished?</strong> There is no precise legal definition of "furnished" in Council Tax law. In practice, a property with a bed, sofa, and basic kitchen equipment is likely furnished. A bare shell is clearly unfurnished. If you are unsure, contact us — the distinction affects how much you pay.</p>
  </div>
</div>

<!-- provenance: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.premium.empty_property_long_term]#f4a3b2c1 -->

## The charge timeline

The charge changes automatically as time passes. You do not need to apply for the premium stages — they are applied based on how long the property has been empty. The premium applies from **1 April 2025** following the Levelling-up and Regeneration Act 2023.

<table class="charge-comparison">
  <caption>What you pay as an empty unfurnished property ages — Band D example (£2,348.17 full annual charge, outside Quedgeley parish, 2026/27)</caption>
  <thead>
    <tr>
      <th scope="col">Period empty</th>
      <th scope="col">% of full charge</th>
      <th scope="col">Annual bill (Band D)</th>
      <th scope="col">What is happening</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Day 1 to 6 months</th>
      <td><strong>75%</strong></td>
      <td>£1,761.13</td>
      <td>Discretionary empty property discount — 25% reduction for up to 6 months</td>
    </tr>
    <tr>
      <th scope="row">6 months to 1 year</th>
      <td><strong>100%</strong></td>
      <td>£2,348.17</td>
      <td>Full standard charge applies — no discount</td>
    </tr>
    <tr>
      <th scope="row">1 year to 5 years</th>
      <td><strong>200%</strong></td>
      <td>£4,696.34</td>
      <td>Long-term empty premium — 100% surcharge added (from April 2025, was 2+ years previously)</td>
    </tr>
    <tr>
      <th scope="row">5 years to 10 years</th>
      <td><strong>300%</strong></td>
      <td>£7,044.51</td>
      <td>Extended premium — 200% surcharge</td>
    </tr>
    <tr>
      <th scope="row">10 years or more</th>
      <td><strong>400%</strong></td>
      <td>£9,392.68</td>
      <td>Maximum premium — 300% surcharge</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">The premium applies to the whole bill — including the police, county, and city precept portions. Quedgeley parish properties pay slightly more. The 6-month discount period applies from the date furniture is removed; subsequent periods run from the date the property became empty.</td>
    </tr>
  </tfoot>
</table>

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>The clock does not easily reset.</strong> Briefly refurnishing a property, then emptying it again, does not restart the timer if the overall pattern shows the property has not genuinely been brought back into occupation. We look at the substance of occupation, not just the dates.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/empty_homes_premium#exceptions#e1f2a3b4 -->

## Exceptions — when the premium may not apply

Some situations pause or exempt the property from the premium charge. These are **not automatic** — you need to tell us and, in most cases, provide evidence.

<table class="charge-comparison">
  <caption>Situations that may pause or remove the long-term empty premium</caption>
  <thead>
    <tr>
      <th scope="col">Situation</th>
      <th scope="col">What may apply</th>
      <th scope="col">Time limit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Property where occupation is prohibited by law (e.g. demolition order, planning condition)</th>
      <td>Exempt — Class G</td>
      <td>While prohibition continues</td>
    </tr>
    <tr>
      <th scope="row">Property held by a trustee in bankruptcy</th>
      <td>Exempt — Class Q</td>
      <td>While in hands of trustee</td>
    </tr>
    <tr>
      <th scope="row">Deceased owner — before or within 6 months of probate</th>
      <td>Exempt — Class F</td>
      <td>Until probate, then up to 6 months after grant</td>
    </tr>
    <tr>
      <th scope="row">Property repossessed by a mortgage lender</th>
      <td>Exempt — Class L</td>
      <td>While in possession</td>
    </tr>
    <tr>
      <th scope="row">Previous occupant now permanently in a care home or hospital</th>
      <td>Exempt — Class E</td>
      <td>Indefinite while circumstances continue</td>
    </tr>
    <tr>
      <th scope="row">Previous occupant moved elsewhere to receive personal care</th>
      <td>Exempt — Class I</td>
      <td>Indefinite while circumstances continue</td>
    </tr>
    <tr>
      <th scope="row">Armed forces accommodation owned by Ministry of Defence</th>
      <td>Exempt — Class O</td>
      <td>Indefinite</td>
    </tr>
    <tr>
      <th scope="row">Major structural repair or reconstruction (genuine, not cosmetic)</th>
      <td>Discretionary major repair discount</td>
      <td>Up to 12 months</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">All exceptions require evidence and must be applied for. The exemption classes are defined in the Council Tax (Exempt Dwellings) Order 1992 (SI 1992/558).</td>
    </tr>
  </tfoot>
</table>

### Major structural repair

A property that is genuinely **uninhabitable** and undergoing major structural work may qualify for a discretionary discount for up to **12 months**. This does not cover:
- Routine redecoration or cosmetic renovation
- Properties that are empty while on the market
- General refurbishment (new kitchen, bathroom, flooring)

We may inspect the property to confirm the condition. Qualifying works include major roof structural repairs, complete gutting including removal of most internal walls, or making a property habitable after flood, fire, or subsidence damage.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/empty_homes_premium#scenarios#e1f2a3b4 -->

## Common scenarios

### "I am selling my home"

From the day you move out:
1. **First 6 months:** 25% discount — you pay 75% of the standard charge
2. **Months 7 to 12:** Full standard charge (100%)
3. **After 1 year empty:** 200% kicks in

Council Tax runs until completion and the buyer takes possession. If the sale falls through and the property stays empty, the clock continues.

### "I inherited a property"

The 6-month discount begins when the previous occupant moved out or died and the property became empty. If the estate cannot be settled quickly — for example because of a complex will or disputes — speak to us. We cannot waive the charge, but we can sometimes agree a payment plan during probate.

### "I am renovating before moving in"

Cosmetic renovation (decorating, new kitchen) — the standard empty property charge applies. Structural works making the property genuinely uninhabitable — you may qualify for the major repair exception, but you will need to show evidence of the works required.

### "My elderly relative is in a care home and we have not decided what to do with the house"

The property is likely **fully exempt** (Class E) with no time limit, while your relative remains in the care home and was the sole occupant previously living there. Tell us about the situation as soon as possible — the exemption is not applied automatically.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Dealing with a loved one's estate is stressful.</strong> If you are administering a property as an executor and facing mounting Council Tax charges, call us on 01452 396 396. We can discuss realistic options and, where there is genuine hardship, agree a payment plan.</p>
  </div>
</div>

## Bringing an empty home back into use

The best outcome is reoccupation. We have an **Empty Homes Officer** whose job is to help owners explore options. This includes:

- **Interest-free loans** for renovation work, repayable when the property is let or sold
- **Lease and management schemes** — we arrange a tenant, you receive a guaranteed rent
- **Purchase** — in some cases, Gloucester City Council or a housing association will buy the property

Email **emptyhomes@gloucester.gov.uk** or call **01452 396 396** to start a conversation.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/empty_homes_premium#notify#e1f2a3b4 -->

## Tell us about your empty property

You must notify us when a property becomes empty — and again when it is reoccupied. The charge, and the clock for the premium, starts from the date you tell us (or the date we discover the property is empty, if earlier).

**Online:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) — Council Tax — Notify us of a vacant property.

**By phone or email:** Call **01452 396 396** or email **revenues@gloucester.gov.uk**. We will need the address, the date it became empty, and whether it is furnished or unfurnished.

## The law

The power to charge premiums on long-term empty properties comes from **Section 11B of the Local Government Finance Act 1992**, as amended by the **Levelling-up and Regeneration Act 2023**. The 1-year threshold for the first premium band took effect from 1 April 2025. Exemption classes are defined in the **Council Tax (Exempt Dwellings) Order 1992 (SI 1992/558)**. Gloucester City Council resolved the precise premium percentages at Full Council on 7 February 2024.
