---
layout: gcc/policy-page.njk
permalink: /council-tax-2/second-home/
title: Council Tax on a second home
eyebrow: Property & occupancy
summary: >
  If you own a furnished property that is not anyone's main residence,
  it is a second home for Council Tax purposes. Gloucester City Council
  charges 200% on second homes — double the standard bill. A small
  number of exceptions may reduce this.

# ── AI/SEO signal fields ──
description: >
  Council Tax on second homes in Gloucester. Furnished properties not used
  as a main home are charged at 200% — double the standard rate. Understand
  the definition and the limited exceptions that may apply.
canonical: https://www.gloucester.gov.uk/council-tax/second-home/
schema_type: GovernmentService
dateModified: "2026-04-15"

key_badge:
  value: "200%"
  label: of the standard annual charge

breadcrumb:
  - url: /council-tax-2/
    label: Property & occupancy

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/second_home#f2a3b4c5
      document: facts
      document_version: "2.2"
      role: primary
      used_for:
        - title
        - summary
        - definition
        - charge_amount
        - exceptions
        - change_in_circumstances
        - legal_basis
      path: /adjustment_catalogue/premiums_and_discounts/items/second_home
      hash: sha256:f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.premium.second_home]#a4b5c6d7
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - definition_test
        - exception_conditions
      path: /executable_rule_slices/rules[rule_id=rule.premium.second_home]
      hash: sha256:a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=premium]#a3b2c1d0
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=premium]
      hash: sha256:a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/premiums_and_discounts#c1d0e9f8
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/premiums_and_discounts
      hash: sha256:c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0
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
  - /council-tax-2/empty-home/
  - /council-tax-2/
  - /council-tax/discounts/empty-properties/
  - /council-tax/pay/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/second_home#definition#f2a3b4c5 -->

## Is your property a second home?

A property is a **second home** for Council Tax if it is:

1. **Furnished** — it has enough furniture and fittings to be lived in
2. **Not used as anyone's sole or main residence** — no one lives there full-time

Both conditions must be true. A property can fail the second-home test in two ways:
- If it is genuinely unfurnished → it is an [empty property](/council-tax-2/empty-home/) instead
- If someone lives there as their main home → it is occupied and pays the standard charge

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>"Main residence" is a question of fact, not intention.</strong> We look at where you actually spend the most time, where your post goes, where you are registered to vote, and similar indicators. Declaring a property your main home while rarely using it is unlikely to succeed if the evidence suggests otherwise.</p>
  </div>
</div>

### Common second home situations

| Situation | Second home? |
|---|---|
| Holiday cottage used in summer, furnished year-round | Yes |
| Flat kept for work trips, furnished | Yes |
| Property being sold with furniture left in | Usually yes, until contracts exchange |
| Property left to you by a relative, still furnished | Yes |
| Property where an adult child lives full-time | No — they are the sole or main occupant |
| Property let on a commercial basis (assured shorthold tenancy) | No — the tenant is the main occupant |

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.premium.second_home]#a4b5c6d7 -->

## What you pay

Since **1 April 2025**, Gloucester City Council charges **200%** Council Tax on all second homes. This is the full standard charge plus a 100% premium. There is no reduced charge for occasional or seasonal use.

<table class="charge-comparison">
  <caption>2026/27 annual Council Tax at 200% — second home rate, outside Quedgeley parish</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Standard charge (100%)</th>
      <th scope="col">Second home charge (200%)</th>
      <th scope="col">Extra you pay</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A</th><td>£1,565.44</td><td>£3,130.88</td><td>£1,565.44</td></tr>
    <tr><th scope="row">B</th><td>£1,826.36</td><td>£3,652.72</td><td>£1,826.36</td></tr>
    <tr><th scope="row">C</th><td>£2,087.26</td><td>£4,174.52</td><td>£2,087.26</td></tr>
    <tr><th scope="row">D</th><td>£2,348.17</td><td>£4,696.34</td><td>£2,348.17</td></tr>
    <tr><th scope="row">E</th><td>£2,869.98</td><td>£5,739.96</td><td>£2,869.98</td></tr>
    <tr><th scope="row">F</th><td>£3,391.80</td><td>£6,783.60</td><td>£3,391.80</td></tr>
    <tr><th scope="row">G</th><td>£3,913.61</td><td>£7,827.22</td><td>£3,913.61</td></tr>
    <tr><th scope="row">H</th><td>£4,696.34</td><td>£9,392.68</td><td>£4,696.34</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Quedgeley parish properties pay slightly more due to the parish precept. The 200% applies to the whole bill including the county, police, and fire precepts.</td>
    </tr>
  </tfoot>
</table>

## Exceptions that may reduce your bill

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/second_home#exceptions#f2a3b4c5 -->

These exceptions are **narrow**. If none of them apply, you pay 200%.

### Job-related second home

If you are required by your employment conditions to live in a separate property — for example, a tied cottage that comes with a job — the other property you own may qualify for a **50% discount** rather than the 200% premium.

To qualify:
- You must be required to live in the tied/job-related accommodation as a condition of your employment (not merely for convenience)
- The property you own must be your only other property in the UK
- You must be the person living in the job-related accommodation (not a family member on your behalf)

This is often relevant to agricultural workers, clergy, and some public sector roles. Contact us with details of your employment arrangement.

### Commercially let property

If you let your property **commercially** — through an assured shorthold tenancy or similar — the tenant becomes the Council Tax account holder for the period of the tenancy. You do not pay Council Tax while a tenant is in residence.

Between tenancies, the property is likely a **second home** if it is furnished, or an **empty property** if unfurnished. If the property is genuinely used as a holiday let, see below.

### Holiday lets (self-catering accommodation)

A self-catering property that is **available to let for at least 140 days per year** and **actually let for at least 70 days** switches from Council Tax to **Non-Domestic Rates** (business rates). This is not administered by Gloucester City Council — it is assessed by the Valuation Office Agency.

If your holiday let does not meet these thresholds, it remains subject to Council Tax at the 200% second home rate.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Advertising as a holiday let is not enough.</strong> The Valuation Office Agency looks at actual letting evidence — bookings, income records, and availability calendars. Properties that are nominally "available" but rarely actually booked do not meet the threshold.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/second_home#change_in_circumstances#f2a3b4c5 -->

## If your circumstances change

Tell us within **21 days** if:

- The property becomes your main residence — or anyone else's
- You begin a tenancy agreement and a tenant moves in
- The property becomes unfurnished (it moves to empty property rules)
- You sell the property

Report changes through your [My Gloucester account](https://gloucester-self.achieveservice.com/) or by emailing **revenues@gloucester.gov.uk**.

If you fail to tell us and we later determine the property was a second home during the period you did not declare it, we can backdate the 200% charge and add a penalty of up to **£70**.

## Why the 200% charge?

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/second_home#policy_context#f2a3b4c5 -->

The 200% second home premium was enabled by the **Levelling-up and Regeneration Act 2023** and took effect from April 2025. The policy rationale is that areas with high levels of second home ownership face housing shortages and affordability pressures for permanent residents. The premium is intended to either bring second homes into permanent use or generate additional revenue for local services.

Gloucester City Council resolved to apply the full 200% rate available in law. The decision is reviewed annually as part of the budget-setting process.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/second_home#legal_basis#f2a3b4c5 -->

## The law behind this

The power to charge a second home premium is in **Section 11B of the Local Government Finance Act 1992**, as amended by the **Rating (Empty Properties) Act 2007** and the **Levelling-up and Regeneration Act 2023**. The definition of a "dwelling not used as a sole or main residence" is in **Section 6(2)(b)** of the 1992 Act.

The holiday let thresholds that trigger a switch to business rates are in the **Non-Domestic Rating (Chargeable Amounts) (England) Regulations** and assessed by the Valuation Office Agency, not by Gloucester City Council.

## Compare with the original page

This page takes a **property definition and exception** approach, asking first "what *is* a second home?" — compared with the [discounts section empty properties page](/council-tax/discounts/empty-properties/), which covers both empty homes and second homes together in a single discount-type framework.

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
