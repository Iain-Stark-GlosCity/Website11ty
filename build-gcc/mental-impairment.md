---
layout: gcc/policy-page.njk
permalink: /council-tax/discounts/mental-impairment/
title: Severe mental impairment disregard
eyebrow: Council Tax discounts
summary: >
  People with a severe mental impairment are disregarded when counting
  adults for Council Tax. If everyone else at the property is also
  disregarded, the bill can be reduced by 25% — or more, depending on
  who lives there.

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
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/severe_mental_impairment#c7d6e5f4
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
      path: /adjustment_catalogue/disregards/items/severe_mental_impairment
      hash: sha256:c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=severe-mental-impairment]#b8c7d6e5
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - how_we_work_it_out
        - qualifying_benefits
      path: /rule_sets/disregard_rules[rule_id=severe-mental-impairment]
      hash: sha256:b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=disregard]#a9b8c7d6
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=disregard]
      hash: sha256:a9b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/disregards#e5f4a3b2
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/disregards
      hash: sha256:e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4
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
  - /council-tax/discounts/disabled/
  - /council-tax/discounts/students/
  - /council-tax/discounts/empty-properties/
  - /council-tax/council-tax-support/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/severe_mental_impairment#eligibility#c7d6e5f4 -->

## What is a disregard

A **disregard** means a person is not counted as an adult when we calculate your Council Tax. The bill is worked out as if that person does not live at the address. The person with severe mental impairment (SMI) is still a resident — they are simply excluded from the adult count.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>A disregard is not a discount in itself</strong> — it changes the number of adults counted, which may then trigger a discount. If a disregarded person leaves only one counted adult at the property, that adult qualifies for <a href="/council-tax/discounts/single-person/">Single Person Discount</a> (25% off).</p>
  </div>
</div>

## Who qualifies for the SMI disregard

A person qualifies if they meet **both** of the following conditions:

**Condition 1 — severe mental impairment**

A registered medical practitioner (a doctor) has certified that they have a severe impairment of intelligence and social functioning resulting from a condition such as:

- Alzheimer's disease or another form of dementia
- Stroke
- Severe learning disability
- Parkinson's disease (where it has caused cognitive impairment)
- Multiple sclerosis
- Brain injury

The impairment must be **severe and permanent** (or expected to be permanent). A note or letter from a GP or consultant confirming the diagnosis and its permanent nature is required.

**Condition 2 — qualifying benefit**

The person must be entitled to (or in receipt of) at least one of the following:

| Benefit | Notes |
|---|---|
| Incapacity Benefit | Long-term rate |
| Severe Disablement Allowance | Any rate |
| Disability Living Allowance | Care component at middle or higher rate |
| Personal Independence Payment | Daily living component at either rate |
| Attendance Allowance | Either rate |
| Constant Attendance Allowance | Paid with Industrial Injuries or War Pensions benefit |
| Employment and Support Allowance | Support group component |
| Universal Credit | With a limited capability for work-related activity element |
| Armed Forces Independence Payment | Any rate |
| Unemployability Supplement | Paid with Industrial Injuries or War Pensions benefit |

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Both conditions must be met.</strong> A diagnosis alone is not sufficient — the benefit entitlement condition must also be satisfied. Similarly, receiving a qualifying benefit does not automatically trigger the disregard without medical certification of SMI.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/severe_mental_impairment#effect#c7d6e5f4 -->

## What discount you may receive

The disregard itself does not produce a fixed discount — the effect depends on who else lives at the property:

| Household | Effect |
|---|---|
| Only the person with SMI lives there | **50% discount** (property treated as unoccupied by counted adults) |
| Person with SMI lives with one counted adult | That adult gets **25% Single Person Discount** |
| Person with SMI lives with two or more counted adults | **No discount** — the count of adults still exceeds one |
| All residents are disregarded (for various reasons) | **50% discount** |

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/severe_mental_impairment#application_process#c7d6e5f4 -->

## How to apply

To apply you will need to provide:

1. A **letter from a doctor or consultant** confirming:
   - The nature of the condition
   - That the impairment is severe and permanent (or expected to be permanent)
   - The approximate date the impairment began (to allow us to backdate if appropriate)

2. Evidence of **entitlement to a qualifying benefit** — this can be a current award letter, a DWP entitlement letter, or confirmation from the Universal Credit online journal

**Apply online** through your [My Gloucester account](https://gloucester-self.achieveservice.com/).

**By email** to **revenues@gloucester.gov.uk** with both documents attached. Include your Council Tax account number in the subject line.

We can usually apply the disregard from the date the conditions were first met, even if you are applying later. Providing the earliest date of diagnosis and benefit entitlement helps us calculate the correct backdating.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/severe_mental_impairment#change_in_circumstances#c7d6e5f4 -->

## If circumstances change

Tell us within **21 days** if:

- The person with SMI moves out, enters a care home permanently, or passes away
- Their benefit entitlement changes or ends
- Their condition improves to the point where the SMI no longer applies (rare)

Use your My Gloucester account or email **revenues@gloucester.gov.uk**.

<!-- provenance: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=severe-mental-impairment]#b8c7d6e5 -->

## How we work it out

1. We verify the medical certification and benefit entitlement.
2. We mark the qualifying person as **disregarded** in the adult count.
3. We count the remaining adults at the property.
4. If **zero** counted adults remain, a **50% discount** applies.
5. If **one** counted adult remains, [Single Person Discount](/council-tax/discounts/single-person/) of **25%** applies to their bill.
6. If **two or more** counted adults remain, the count is unchanged and no discount applies.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/severe_mental_impairment#legal_basis#c7d6e5f4 -->

## The law behind this

The SMI disregard is set out in **Schedule 1, paragraph 2 of the Local Government Finance Act 1992** and the **Council Tax (Discount Disregards) Order 1992**. It is a statutory national disregard — Gloucester City Council has no discretion to refuse it where the qualifying conditions are met.

## Related help

- [Disabled person reduction](/council-tax/discounts/disabled/) — if your home has been adapted, you may also qualify for a band reduction
- [Council Tax Support](/council-tax/council-tax-support/) — income-related support that can be claimed on top of any disregard discount
- [Single Person Discount](/council-tax/discounts/single-person/) — may apply to the counted adult remaining after the SMI disregard

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
