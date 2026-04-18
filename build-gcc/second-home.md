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
  as a main home are charged at 200% — double the standard rate. Effective
  from 1 April 2025. Limited exceptions including job-related accommodation
  and qualifying holiday lets.
canonical: https://www.gloucester.gov.uk/council-tax/second-home/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "200%"
  label: of the standard annual charge

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
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/second_homes_premium#f2a3b4c5
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - title
        - summary
        - definition
        - charge_amount
        - exceptions
        - change_in_circumstances
        - legal_basis
      path: /adjustment_catalogue/property_premiums/second_homes_premium
      hash: sha256:f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=job-related-second-home]#f2a3b4c6
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - job_related_exception
      path: /adjustment_catalogue/discounts/items[id=job-related-second-home]
      hash: sha256:f2a3b4c6d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a4
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.premium.second_home]#a4b5c6d7
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - definition_test
        - exception_conditions
      path: /executable_rule_slices/rules[rule_id=rule.premium.second_home]
      hash: sha256:a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5
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
  - /council-tax-2/empty-home/
  - /council-tax-2/
  - /council-tax/discounts/empty-properties/
  - /council-tax/pay/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/second_homes_premium#definition#f2a3b4c5 -->

## Is your property a second home?

A property is a **second home** for Council Tax if it is:

1. **Furnished** — it has enough furniture and fittings to be lived in
2. **Not used as anyone's sole or main residence** — no one lives there full-time

Both conditions must be true. A property can fall outside the second-home definition in two ways:
- If it is genuinely unfurnished → it is an [empty property](/council-tax-2/empty-home/) and different rules apply
- If someone lives there as their main home → it is occupied and pays the standard charge

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>"Main residence" is a question of fact, not intention.</strong> We look at where you actually spend the most time, where your post goes, where you are registered to vote, and similar indicators. Declaring a property your main home while rarely using it is unlikely to succeed if the evidence suggests otherwise.</p>
  </div>
</div>

### Common second home situations

<table class="charge-comparison">
  <caption>Examples of whether a property counts as a second home for Council Tax purposes</caption>
  <thead>
    <tr>
      <th scope="col">Situation</th>
      <th scope="col">Second home?</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">Holiday cottage used in summer, furnished year-round</th><td>Yes</td></tr>
    <tr><th scope="row">Flat kept for work trips, furnished</th><td>Yes</td></tr>
    <tr><th scope="row">Property being sold with furniture left in</th><td>Usually yes, until contracts exchange and buyer takes possession</td></tr>
    <tr><th scope="row">Property inherited from a relative, still furnished</th><td>Yes — until occupied by someone as their main home or furniture removed</td></tr>
    <tr><th scope="row">Property where an adult child lives full-time as their main home</th><td>No — they are the liable resident</td></tr>
    <tr><th scope="row">Property let on a commercial tenancy (assured shorthold tenancy)</th><td>No — the tenant is the Council Tax account holder during the tenancy</td></tr>
  </tbody>
</table>

<!-- provenance: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.premium.second_home]#a4b5c6d7 -->

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
    <tr><th scope="row"><strong>D</strong></th><td><strong>£2,348.17</strong></td><td><strong>£4,696.34</strong></td><td><strong>£2,348.17</strong></td></tr>
    <tr><th scope="row">E</th><td>£2,869.98</td><td>£5,739.96</td><td>£2,869.98</td></tr>
    <tr><th scope="row">F</th><td>£3,391.80</td><td>£6,783.60</td><td>£3,391.80</td></tr>
    <tr><th scope="row">G</th><td>£3,913.61</td><td>£7,827.22</td><td>£3,913.61</td></tr>
    <tr><th scope="row">H</th><td>£4,696.34</td><td>£9,392.68</td><td>£4,696.34</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Quedgeley parish properties pay slightly more due to the parish precept. The 200% applies to the whole bill including the county, police, and city precept portions. See <a href="/council-tax-2/your-bill/">the bill breakdown</a> for Quedgeley rates.</td>
    </tr>
  </tfoot>
</table>

## Exceptions that may reduce your bill

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/second_homes_premium#exceptions#f2a3b4c5 -->

These exceptions are **narrow**. If none of them apply, you pay 200%.

### Job-related second home — 50% discount

If you are required by your employment conditions to live in a separate property — for example, a tied cottage or flat that comes with a job — the other property you own may qualify for a **50% discount** rather than the 200% premium.

To qualify:
- You must be required to live in the tied or job-related accommodation as a condition of your employment (not merely for convenience)
- The second property must be furnished and not otherwise occupied as a main home
- You must be the person living in the job-related accommodation (not a family member on your behalf)

This is often relevant to agricultural workers, clergy, and some public sector roles. Contact us at **revenues@gloucester.gov.uk** with details of your employment arrangement.

### Commercially let property

If you let your property **commercially** — through an assured shorthold tenancy or similar — the tenant becomes the Council Tax account holder during the tenancy period. You do not pay Council Tax while a tenant is in residence.

Between tenancies, if the property is furnished it is likely a second home. If it becomes unfurnished, it is an empty property and the [empty home rules](/council-tax-2/empty-home/) apply.

### Holiday lets — switching to business rates

A self-catering property that is **available to let for at least 140 days per year** and **actually let for at least 70 days** switches from Council Tax to **Non-Domestic Rates** (business rates). The Valuation Office Agency assesses this — it is not a Council Tax exemption.

If your holiday let does not meet both thresholds, it remains subject to Council Tax at the 200% second home rate.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Advertising as a holiday let is not enough.</strong> The Valuation Office Agency looks at actual letting evidence — bookings, income records, and availability calendars. Properties that are nominally "available" but rarely actually booked do not meet the threshold. Contact the VOA directly if you believe your property qualifies for business rates.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/second_homes_premium#change_in_circumstances#f2a3b4c5 -->

## If your circumstances change

Tell us within **21 days** if:

- The property becomes your main residence — or anyone else's
- You begin a tenancy agreement and a tenant moves in
- The property becomes unfurnished (it moves to empty property rules)
- You sell the property

Report changes through your [My Gloucester account](https://gloucester-self.achieveservice.com/) or by emailing **revenues@gloucester.gov.uk**.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p>If you fail to tell us and we later determine the property was a second home during that period, we can backdate the 200% charge and charge a civil penalty of up to <strong>£70</strong>.</p>
  </div>
</div>

## Why the 200% charge?

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/second_homes_premium#policy_context#f2a3b4c5 -->

The 200% second home premium was enabled by the **Levelling-up and Regeneration Act 2023** and took effect from April 2025. The policy aims to encourage second home owners to bring properties into permanent residential use or generate additional revenue for local services to meet the pressures that second homes create for communities.

Gloucester City Council resolved to apply the full 200% rate. The decision is reviewed annually as part of the budget-setting process — it was approved by Full Council on 25 January 2024.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/property_premiums/second_homes_premium#legal_basis#f2a3b4c5 -->

## The law

The power to charge a second home premium is in **Section 11B of the Local Government Finance Act 1992**, as amended by the **Levelling-up and Regeneration Act 2023**. The definition of a "dwelling not used as a sole or main residence" follows **Section 6(2)(b)** of the 1992 Act.

The holiday let thresholds that trigger a switch to business rates are set by **Non-Domestic Rating regulations** and assessed by the Valuation Office Agency, not by Gloucester City Council.

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
