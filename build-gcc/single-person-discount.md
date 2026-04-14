---
layout: gcc/policy-page.njk
permalink: /council-tax/discounts/single-person/
title: Single Person Discount
eyebrow: Council Tax discounts
summary: >
  If you are the only adult living in your home, you can get 25% off
  your Council Tax bill. There's no income test — it's purely based
  on who lives with you.

key_badge:
  value: "25%"
  label: off your annual bill

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
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27
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
      path: /adjustment_catalogue/discounts/items/0
      hash: sha256:8311bd2784917185589bec55fe31a26e44a81f0b9fe33b91c951a5a63bee6462
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - how_we_work_it_out
      path: /executable_rule_slices/rules[rule_id=rule.discount.single_person]
      hash: sha256:a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/rule_sets/adjustment_rules[rule_id=full-time-students]#b2c3d4e5
      document: rules
      document_version: "2.2"
      role: cross_reference
      used_for:
        - who_doesnt_count_as_an_adult
      path: /rule_sets/adjustment_rules[rule_id=full-time-students]
      hash: sha256:b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890ab
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=discount]#e5f6a7b8
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=discount]
      hash: sha256:e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/discounts#c9d0e1f2
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/discounts
      hash: sha256:c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0
      lookup_method: CTax:schema_get
      asserts_status: review

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
  - /council-tax/discounts/students/
  - /council-tax/council-tax-support/
  - /council-tax/pay/
  - /council-tax/changes/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#eligibility#8311bd27 -->

## Who can get it

You can claim Single Person Discount if you are the only adult — the only person aged 18 or over — living in your home as your **main residence**.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>No income test.</strong> The discount is based on who lives with you, not on your income, savings, or whether you own or rent your home.</p>
  </div>
</div>

If you share your home with other adults but they are **disregarded** for Council Tax purposes (see below), you may still qualify.

<!-- provenance: ctax/rules@2.4.0+2.2:/rule_sets/adjustment_rules[rule_id=full-time-students]#b2c3d4e5 -->

## Who doesn't count as an adult

Some people are **disregarded** — they live in your home but aren't counted when we work out your bill. If everyone else at your address is disregarded, you qualify for Single Person Discount even if you're not living alone.

Disregarded people include:

- **Full-time students** — including student nurses and most apprentices in full-time education
- **Anyone under 18** — even if they work, pay tax, or have recently turned 18
- **People with a severe mental impairment** — where confirmed by a doctor and they receive a qualifying benefit
- **Unpaid carers** — if they provide at least 35 hours of care per week to someone who isn't their spouse, partner, or child under 18
- **People in hospital long-term, in a care home, or in a hospice**
- **People in prison** — unless held only for non-payment of Council Tax
- **Members of certain religious communities** — monks and nuns whose main occupation is prayer or service
- **Non-British spouses and dependants of foreign students** who have no right to work or claim public funds in the UK

If you're unsure whether someone in your home counts, [contact us](/contact/) — it's quicker than working through the rules yourself.

## How much you'll save

The discount reduces your annual Council Tax bill by **25%**.

<table class="charge-comparison">
  <caption>2026/27 charges with and without Single Person Discount — Band D example is shown for a property outside Quedgeley parish</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Full bill</th>
      <th scope="col">With 25% off</th>
      <th scope="col">Annual saving</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A</th><td>£1,565.44</td><td>£1,174.08</td><td>£391.36</td></tr>
    <tr><th scope="row">B</th><td>£1,826.36</td><td>£1,369.77</td><td>£456.59</td></tr>
    <tr><th scope="row">C</th><td>£2,087.26</td><td>£1,565.45</td><td>£521.81</td></tr>
    <tr><th scope="row">D</th><td>£2,348.17</td><td>£1,761.13</td><td>£587.04</td></tr>
    <tr><th scope="row">E</th><td>£2,869.98</td><td>£2,152.49</td><td>£717.49</td></tr>
    <tr><th scope="row">F</th><td>£3,391.80</td><td>£2,543.85</td><td>£847.95</td></tr>
    <tr><th scope="row">G</th><td>£3,913.61</td><td>£2,935.21</td><td>£978.40</td></tr>
    <tr><th scope="row">H</th><td>£4,696.34</td><td>£3,522.26</td><td>£1,174.08</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Quedgeley parish properties pay slightly more due to the parish precept. Contact us if you're unsure which charge applies to you.</td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#application_process#8311bd27 -->

## How to apply

There are two ways to claim:

**Online — usually fastest**

Sign in to your [My Gloucester account](https://gloucester-self.achieveservice.com/) and apply through the Council Tax section. You'll need your Council Tax account number (printed on your bill).

**By email**

Download the Single Person Discount form, complete it, and email it to **revenues@gloucester.gov.uk**. Include your Council Tax account number in the subject line.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Keep paying your current bill</strong> while your claim is assessed. If the discount is approved we'll issue a revised bill and refund any overpayment.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#change_in_circumstances#8311bd27 -->

## If your circumstances change

You must tell us within **21 days** if anything changes that might affect your entitlement to the discount. Examples include:

- Someone moves into your home
- You move out
- A child at the property turns 18
- A student at the property finishes their course

The quickest way to report a change is through your My Gloucester account. You can also email **revenues@gloucester.gov.uk**.

<div class="gcc-callout gcc-callout--important">
  <span class="gcc-callout__icon" aria-hidden="true">!</span>
  <div class="gcc-callout__body">
    <p>If you fail to report a change in time, we'll issue an amended bill for the amount underpaid. We may also add a <strong>£70 penalty charge</strong>. Tell us as soon as you can and we'll work it out together.</p>
  </div>
</div>

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4 -->

## How we calculate it

1. We start with your **gross Council Tax charge** for the year.
2. We apply any **exemptions** first (for example, a property occupied entirely by students).
3. We count the adults at your address, **excluding disregarded people**.
4. If the count is **exactly one**, we reduce your bill by **25%**.

The discount applies after exemptions and disregards but before any premiums (such as the second homes premium) and before Council Tax Support.

This logic comes directly from rule **`rule.discount.single_person`** in our published Council Tax rule set.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#legal_basis#8311bd27 -->

## The law behind this

Single Person Discount is a **statutory national discount** set out in **Schedule 1 of the Local Government Finance Act 1992**. All councils must offer it — if you qualify, you are entitled to it.

## Other help available

If you're struggling to pay even with this discount, you may also qualify for **Council Tax Support** — an income-related reduction that can be claimed on top of Single Person Discount.

[Find out about Council Tax Support →](/council-tax/council-tax-support/)

If you've fallen behind on payments, [contact us straight away](/council-tax/help-paying/). The earlier you get in touch, the more options are available to you.

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
- **Post:** Gloucester City Revenues & Benefits, Eastgate Management Suite, Eastgate Street, Gloucester GL1 1PA
