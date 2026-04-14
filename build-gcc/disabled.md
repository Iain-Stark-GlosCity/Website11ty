---
layout: gcc/policy-page.njk
permalink: /council-tax/discounts/disabled/
title: Disabled person reduction
eyebrow: Council Tax discounts
summary: >
  If your home has been adapted to meet the needs of a disabled resident,
  your Council Tax bill may be reduced to the band below yours — saving
  you the equivalent of one full Council Tax band.

key_badge:
  value: "1 band"
  label: lower charge

breadcrumb:
  - url: /council-tax/
    label: Council Tax
  - url: /council-tax/discounts/
    label: Discounts

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/reductions/items/disabled_band_reduction#a9b8c7d6
      document: facts
      document_version: "2.2"
      role: primary
      used_for:
        - title
        - summary
        - who_qualifies
        - how_to_apply
        - change_in_circumstances
        - legal_basis
      path: /adjustment_catalogue/reductions/items/disabled_band_reduction
      hash: sha256:a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.reduction.disabled_band]#e5f4a3b2
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - how_we_work_it_out
      path: /executable_rule_slices/rules[rule_id=rule.reduction.disabled_band]
      hash: sha256:e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=band_reduction]#f6a5b4c3
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=band_reduction]
      hash: sha256:f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/reductions#b2c1d0e9
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/reductions
      hash: sha256:b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3b2c1
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
  - council-tax
  - discount

related_pages:
  - /council-tax/discounts/
  - /council-tax/discounts/single-person/
  - /council-tax/discounts/mental-impairment/
  - /council-tax/discounts/students/
  - /council-tax/council-tax-support/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/reductions/items/disabled_band_reduction#eligibility#a9b8c7d6 -->

## Who can get it

You may qualify for the Disabled Band Reduction if all of the following apply:

- At least one person living in the property has a **substantial and permanent disability**
- The property is their **main or sole residence**
- The property has one of the qualifying features specifically **because of** the disability (see below)

The disability does not have to be the person's own home — it can be a family member or carer who lives there. The disabled person does not need to be the Council Tax account holder.

### Qualifying property features

The property must have **at least one** of the following adaptations or features:

| Feature | Example |
|---|---|
| An extra bathroom or kitchen | Needed for the disabled person's use |
| A room not used as a bedroom | For example a ground-floor room for physiotherapy or dialysis equipment |
| Sufficient floor space for a wheelchair | Used indoors by the disabled resident |

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>The feature must be essential, not merely convenient.</strong> We will ask about how the feature is used and whether it was provided or adapted specifically to meet the disability need. Standard features that happen to accommodate the disabled person do not qualify.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/reductions/items/disabled_band_reduction#what_you_save#a9b8c7d6 -->

## How much you save

Your property is re-banded **one band lower** than its Valuation Office Agency band for the purpose of calculating your bill. If your property is Band A (the lowest), your bill is reduced by one-sixth.

<table class="charge-comparison">
  <caption>2026/27 effective charge after Disabled Band Reduction — properties outside Quedgeley parish</caption>
  <thead>
    <tr>
      <th scope="col">Actual band</th>
      <th scope="col">Normal charge</th>
      <th scope="col">Charge after reduction</th>
      <th scope="col">Annual saving</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A (billed as A minus ⅙)</th><td>£1,565.44</td><td>£1,304.54</td><td>£260.90</td></tr>
    <tr><th scope="row">B (billed as A)</th><td>£1,826.36</td><td>£1,565.44</td><td>£260.92</td></tr>
    <tr><th scope="row">C (billed as B)</th><td>£2,087.26</td><td>£1,826.36</td><td>£260.90</td></tr>
    <tr><th scope="row">D (billed as C)</th><td>£2,348.17</td><td>£2,087.26</td><td>£260.91</td></tr>
    <tr><th scope="row">E (billed as D)</th><td>£2,869.98</td><td>£2,348.17</td><td>£521.81</td></tr>
    <tr><th scope="row">F (billed as E)</th><td>£3,391.80</td><td>£2,869.98</td><td>£521.82</td></tr>
    <tr><th scope="row">G (billed as F)</th><td>£3,913.61</td><td>£3,391.80</td><td>£521.81</td></tr>
    <tr><th scope="row">H (billed as G)</th><td>£4,696.34</td><td>£3,913.61</td><td>£782.73</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Band E–H savings are larger because the band gaps are wider. Quedgeley figures are slightly higher.</td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/reductions/items/disabled_band_reduction#application_process#a9b8c7d6 -->

## How to apply

**Online — fastest**

Sign in to your [My Gloucester account](https://gloucester-self.achieveservice.com/) and select *Apply for Disabled Band Reduction* in the Council Tax section. We may ask you to confirm:

- The disability and how it affects daily living
- Which qualifying feature your property has and how it is used

**By phone or email**

Call us on **01452 396 396** or email **revenues@gloucester.gov.uk**. We will send you a form to complete. In some cases we may need to carry out a home visit to confirm the qualifying feature.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p>We review the reduction every year. You will be asked to confirm that the qualifying circumstances still apply. Keep your contact details up to date in your My Gloucester account so we can reach you easily.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/reductions/items/disabled_band_reduction#change_in_circumstances#a9b8c7d6 -->

## If your circumstances change

Tell us within **21 days** if:

- The disabled person moves out or passes away
- The qualifying feature is no longer needed or has been removed
- The property changes (for example a major renovation that removes the adapted room)

You can report changes through your My Gloucester account or by emailing **revenues@gloucester.gov.uk**. Failure to report a change may result in a backdated bill and a penalty of up to **£70**.

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.reduction.disabled_band]#e5f4a3b2 -->

## How we work it out

1. We confirm the property has a qualifying disabled resident and a qualifying feature.
2. We identify the property's **VOA band** from the Valuation Office Agency register.
3. We reduce the band by one — for example, a Band D property is billed at the Band C rate.
4. If the property is **Band A**, the charge is reduced by one-sixth of the Band A rate.
5. The reduction applies from the date of your application (or an earlier date if there was a qualifying reason not to apply sooner).

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/reductions/items/disabled_band_reduction#legal_basis#a9b8c7d6 -->

## The law behind this

The Disabled Band Reduction is set out in **Section 13A of the Local Government Finance Act 1992** and the **Council Tax (Reductions for Disabilities) Regulations 1992**. It applies to every billing authority in England — this is not a discretionary local scheme.

## Other discounts that may apply

If a disabled resident also has a severe mental impairment, they may be disregarded entirely when counting adults — see [severe mental impairment](/council-tax/discounts/mental-impairment/). This is separate from and can be combined with the Disabled Band Reduction.

[Council Tax Support](/council-tax/council-tax-support/) is also available if you are on a low income, regardless of whether you receive this reduction.

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
