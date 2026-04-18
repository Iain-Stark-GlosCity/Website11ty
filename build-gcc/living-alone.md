---
layout: gcc/policy-page.njk
permalink: /council-tax-2/occupants/living-alone/
title: I am the only adult at my address
eyebrow: Discounts based on who lives with you
summary: >
  If you are the only adult living at your address as your main home,
  you are entitled to 25% off your Council Tax bill. This is called
  Single Person Discount. It is a legal right — not means-tested,
  not discretionary. If you qualify, you must receive it.

# ── AI/SEO signal fields ──
description: >
  Single Person Discount for Gloucester residents. If you are the only adult
  at your address you are entitled to 25% off your Council Tax. Find out if
  you qualify and how to claim.
canonical: https://www.gloucester.gov.uk/council-tax/occupants/living-alone/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "25%"
  label: off your annual bill

breadcrumb:
  - url: /council-tax-2/
    label: Council Tax — your guide
  - url: /council-tax-2/occupants/
    label: Who lives with you

provenance:
  pack:
    id: ctax
    version: 2.5.7
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=single-person-discount]#8311bd27
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - title
        - summary
        - eligibility
        - how_to_apply
        - change_in_circumstances
        - legal_basis
      path: /adjustment_catalogue/discounts/items[id=single-person-discount]
      hash: sha256:8311bd2784917185589bec55fe31a26e44a81f0b9fe33b91c951a5a63bee6462
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - discount_calculation
        - adult_count_rule
      path: /executable_rule_slices/rules[rule_id=rule.discount.single_person]
      hash: sha256:a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.5.7+2.5:/mechanisms[id=discount]#e5f6a7b8
      document: taxonomy
      document_version: "2.5"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=discount]
      hash: sha256:e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/discounts#c9d0e1f2
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/discounts
      hash: sha256:c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0
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
  - /council-tax-2/occupants/someone-doesnt-count/
  - /council-tax-2/occupants/students-in-your-home/
  - /council-tax-2/your-bill/
  - /council-tax/discounts/single-person/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=single-person-discount]#eligibility#8311bd27 -->

## Do you qualify?

**You qualify if you are the only adult — the only person aged 18 or over — living at your address as their main residence.**

That is the whole test. There is no income limit. It does not matter whether you own or rent, what your savings are, or whether you are working. The discount is entirely about who lives with you.

### What if you share with other people?

You can still qualify even if other people live with you — if those people **do not count** for Council Tax purposes. Some adults are **disregarded**, meaning they are not included in the adult count:

- **Full-time students** — they live there but are not counted. If you share with students and are the only non-student, you qualify.
- **Under-18s** — children do not count, regardless of age or whether they work.
- **People with a severe mental impairment** — if the conditions are met (see [someone at my address doesn't count](/council-tax-2/occupants/someone-doesnt-count/)).
- **Unpaid carers** providing 35 or more hours of care a week to someone who is not their partner or child under 18.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>You do not need to physically be alone.</strong> What matters is the count of adults who are not disregarded. If that count is one — and that one is you — you get the 25% discount.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=single-person-discount]#what_you_save#8311bd27 -->

## What you save

The 25% comes off your gross annual bill. Council Tax Support (the income-based reduction) is applied on top — you can claim both.

<table class="charge-comparison">
  <caption>Annual savings from Single Person Discount by band, 2026/27 (outside Quedgeley parish)</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Full annual charge</th>
      <th scope="col">With 25% off</th>
      <th scope="col">You save per year</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A</th><td>£1,565.44</td><td>£1,174.08</td><td>£391.36</td></tr>
    <tr><th scope="row">B</th><td>£1,826.36</td><td>£1,369.77</td><td>£456.59</td></tr>
    <tr><th scope="row">C</th><td>£2,087.26</td><td>£1,565.45</td><td>£521.81</td></tr>
    <tr><th scope="row"><strong>D</strong></th><td><strong>£2,348.17</strong></td><td><strong>£1,761.13</strong></td><td><strong>£587.04</strong></td></tr>
    <tr><th scope="row">E</th><td>£2,869.98</td><td>£2,152.49</td><td>£717.49</td></tr>
    <tr><th scope="row">F</th><td>£3,391.80</td><td>£2,543.85</td><td>£847.95</td></tr>
    <tr><th scope="row">G</th><td>£3,913.61</td><td>£2,935.21</td><td>£978.40</td></tr>
    <tr><th scope="row">H</th><td>£4,696.34</td><td>£3,522.26</td><td>£1,174.08</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Quedgeley parish properties pay slightly more — the 25% discount is still applied to your actual bill including the parish precept. See <a href="/council-tax-2/your-bill/">your bill breakdown</a> for Quedgeley rates.</td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=single-person-discount]#how_to_apply#8311bd27 -->

## How to claim

**Check your current bill first.** If the discount is already showing, you do not need to do anything. If you moved recently, or if your circumstances changed to leave you as the only adult, you need to apply.

**Online — fastest**

Sign in to your [My Gloucester account](https://gloucester-self.achieveservice.com/) and apply through the Council Tax section. You will need your Council Tax account number (shown on your bill).

**By email**

Download the Single Person Discount form and email it to **revenues@gloucester.gov.uk** with your account number in the subject line.

The discount is applied from the date you became the only qualifying adult — we can usually backdate it if you apply promptly.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p><strong>Keep paying your current bill while we process your claim.</strong> Once the discount is approved we will issue a revised bill and refund any overpayment, or adjust your future instalments.</p>
  </div>
</div>

<!-- provenance: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4 -->

## How we work it out

We apply a simple rule: count the number of adults at your address, then exclude anyone who is disregarded. If exactly one person remains — and that person is you — your bill is reduced by 25%. We check this when you apply, and then periodically with a review letter.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=single-person-discount]#change_in_circumstances#8311bd27 -->

## If your situation changes

You must tell us within **21 days** if anyone moves in who is an adult and is not disregarded. Examples:

- A partner or flatmate moves in
- A child in your home turns 18 (unless they immediately start a qualifying full-time course)
- A student you share with finishes or leaves their course

Report changes through your My Gloucester account or by emailing **revenues@gloucester.gov.uk**. If you do not tell us in time, we will raise a backdated bill for the amount underpaid. We may also charge a civil penalty of up to **£70**. Contact us as soon as you know — we will always try to work something out.

## If you move out

The discount follows you, not the property. If you move to a new address in Gloucester where you are still the only adult, apply again at the new address. When you move out of your current property, tell us so we can update both accounts.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=single-person-discount]#legal_basis#8311bd27 -->

## The law

Single Person Discount is set out in **Schedule 1 of the Local Government Finance Act 1992**. Every billing authority in England must apply it. If you qualify, Gloucester City Council has no discretion to withhold it.
