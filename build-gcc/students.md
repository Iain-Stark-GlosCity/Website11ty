---
layout: gcc/policy-page.njk
permalink: /council-tax/discounts/students/
title: Student exemption
eyebrow: Council Tax discounts
summary: >
  Properties occupied only by full-time students are completely exempt
  from Council Tax. Individual full-time students living with non-students
  are disregarded when counting adults — which may entitle you to Single
  Person Discount.

key_badge:
  value: "100%"
  label: exempt if all students

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
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/exemptions/items/student_household#f1a2b3c4
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
      path: /adjustment_catalogue/exemptions/items/student_household
      hash: sha256:f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.exemption.student_household]#d4e5f6a7
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - how_we_work_it_out
      path: /executable_rule_slices/rules[rule_id=rule.exemption.student_household]
      hash: sha256:d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=full-time-students]#b2c3d4e5
      document: rules
      document_version: "2.2"
      role: cross_reference
      used_for:
        - individual_student_disregard
      path: /rule_sets/disregard_rules[rule_id=full-time-students]
      hash: sha256:b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890ab
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=exemption]#c3d4e5f6
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=exemption]
      hash: sha256:c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/exemptions#d4e5f6a7
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/exemptions
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
  - council-tax
  - discount

related_pages:
  - /council-tax/discounts/
  - /council-tax/discounts/single-person/
  - /council-tax/discounts/disabled/
  - /council-tax/discounts/mental-impairment/
  - /council-tax/discounts/empty-properties/
  - /council-tax/council-tax-support/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/exemptions/items/student_household#eligibility#f1a2b3c4 -->

## Who qualifies

A property is **fully exempt** from Council Tax when everyone living there as their main residence is a full-time student. There is no charge at all — you do not need to pay anything for the period the property is occupied exclusively by students.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Mixed households.</strong> If you share with someone who is not a student, the property is not exempt — but each full-time student is <strong>disregarded</strong> when counting adults. If only one non-student adult remains after disregards, they may qualify for <a href="/council-tax/discounts/single-person/">Single Person Discount</a>.</p>
  </div>
</div>

### What counts as a full-time student

To qualify you must be:

- Enrolled on a **full-time course** at a university, college, or other educational institution
- On a course that lasts at least **one academic or calendar year** and involves at least **21 hours of study per week** during term time

The following also count as full-time students for Council Tax purposes:

- **Student nurses** on an NHS-funded course at a college or university
- **Apprentices** on a Government-approved scheme who earn less than £195 per week (gross) and whose course leads to a qualification at least equivalent to NVQ Level 3
- **Youth training trainees** aged under 25

<!-- provenance: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=full-time-students]#b2c3d4e5 -->

### Student certificates

To claim the exemption or disregard, we will need a **student certificate** issued by your college or university. The certificate must confirm:

- Your name
- The name of the institution
- The course name and level
- The start and expected end date of the course
- That you are a full-time student

Most institutions issue these automatically at the start of term. Ask your student services office if yours has not been issued.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/exemptions/items/student_household#vacation_rules#f1a2b3c4 -->

## Vacations and gaps in study

The exemption continues during **short vacations** (summer, Christmas, Easter) as long as:

- The property is still the student's main residence
- The student intends to return at the start of the next term

If a student **permanently leaves** before the end of their course — whether through finishing early, deferring, or withdrawing — the exemption ends on the date they leave. Tell us within 21 days if this happens.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Gap years and interruptions.</strong> If a student takes a gap year or interrupts their studies, they may no longer qualify during that period. Contact us to check whether the exemption can continue.</p>
  </div>
</div>

## How to apply

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/exemptions/items/student_household#application_process#f1a2b3c4 -->

You can apply in two ways:

**Online — fastest**

Sign in to your [My Gloucester account](https://gloucester-self.achieveservice.com/) and select *Apply for student exemption* in the Council Tax section. Upload your student certificate during the application.

**By post or email**

Send a copy of your student certificate to **revenues@gloucester.gov.uk** or to Gloucester City Revenues & Benefits, Eastgate Management Suite, Eastgate Street, Gloucester GL1 1PA. Include your Council Tax account number.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p>If you are moving into a new property that is entirely occupied by students, apply as soon as you move in. The exemption runs from the date of your application or the date the property became fully student-occupied, whichever is later.</p>
  </div>
</div>

## If your circumstances change

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/exemptions/items/student_household#change_in_circumstances#f1a2b3c4 -->

You must tell us within **21 days** if:

- A student at your property finishes or interrupts their course
- Someone moves in who is not a full-time student
- You move out

The easiest way to report a change is through your My Gloucester account. You can also email **revenues@gloucester.gov.uk**.

Failure to notify us may result in backdated Council Tax charges and a penalty of up to **£70**.

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.exemption.student_household]#d4e5f6a7 -->

## How we work it out

1. We check whether **every person aged 18 or over** at the property is a qualifying full-time student.
2. If yes, the property is **Class N exempt** — zero charge applies.
3. If one or more adults are not students, we count the non-student adults, **excluding anyone else who is disregarded** (for example, a person with a severe mental impairment).
4. If only **one non-student adult** remains, [Single Person Discount](/council-tax/discounts/single-person/) (25% off) applies to their bill.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/exemptions/items/student_household#legal_basis#f1a2b3c4 -->

## The law behind this

Student exemptions are set out in the **Council Tax (Exempt Dwellings) Order 1992 (SI 1992/558)**, Class N. The disregard for individual full-time students is in **Schedule 1 of the Local Government Finance Act 1992**, paragraph 4. Both are statutory — every council in England must apply them.

## Other discounts that may apply

- [Single Person Discount](/council-tax/discounts/single-person/) — 25% off if one non-student adult remains after disregards
- [Council Tax Support](/council-tax/council-tax-support/) — income-related help if you are on a low income
- [Disabled person reduction](/council-tax/discounts/disabled/) — if your home has been adapted for a disabled resident

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
