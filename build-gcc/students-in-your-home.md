---
layout: gcc/policy-page.njk
permalink: /council-tax-2/occupants/students-in-your-home/
title: Students in your home
eyebrow: Discounts based on who lives with you
summary: >
  Whether you are a student yourself or you share with students,
  the rules could significantly reduce — or completely remove —
  your Council Tax bill. The outcome depends on who lives there
  and what their student status is.

# ── AI/SEO signal fields ──
description: >
  Students and Council Tax in Gloucester. If everyone at your address is a
  full-time student, your property is 100% exempt. Mixed households may
  still qualify for a discount depending on your situation.
canonical: https://www.gloucester.gov.uk/council-tax/occupants/students-in-your-home/
schema_type: GovernmentService
dateModified: "2026-04-18"

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
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/exemptions/items[id=class-n]#f1a2b3c4
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - full_exemption_rules
        - student_definition
        - vacation_rules
        - application_process
      path: /adjustment_catalogue/exemptions/items[id=class-n]
      hash: sha256:f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=full-time-students]#f1a2b3c5
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - student_disregard_definition
        - mixed_household_outcome
      path: /adjustment_catalogue/discounts/items[id=full-time-students]
      hash: sha256:f1a2b3c5d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a3
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.exemption.student.all_residents]#d3e4f5a6
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - exemption_test
        - mixed_household_outcome
      path: /executable_rule_slices/rules[rule_id=rule.exemption.student.all_residents]
      hash: sha256:d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.5.7+2.5:/mechanisms[id=exemption]#c3d4e5f6
      document: taxonomy
      document_version: "2.5"
      role: vocabulary
      used_for:
        - exemption_vs_disregard_distinction
      path: /mechanisms[id=exemption]
      hash: sha256:c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/exemptions#d4e5f6a7
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/exemptions
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
  - /council-tax-2/occupants/living-alone/
  - /council-tax-2/occupants/someone-doesnt-count/
  - /council-tax-2/your-bill/
  - /council-tax-2/moving/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/exemptions/items[id=class-n]#your_situation#f1a2b3c4 -->

## What is your situation?

The rules work differently depending on who lives at your address. Find your situation below.

### Everyone at the address is a full-time student

**Your bill: £0** — the property is fully exempt from Council Tax.

A property occupied only by full-time students pays nothing. This is called a **Class N exemption**. It applies for as long as the property is occupied exclusively by qualifying students — including during term-time vacations, as long as the property remains the students' main residence.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>This applies even if you rent from a private landlord.</strong> The exemption belongs to the occupants, not the building. As long as every resident aged 18 or over is a qualifying full-time student, there is no bill.</p>
  </div>
</div>

### You are the only non-student adult

**Your bill: 75% of the standard charge** (you get 25% Single Person Discount).

Students living with you are disregarded — they do not count in the adult total. If the count after excluding students is exactly one (you), you receive [Single Person Discount](/council-tax-2/occupants/living-alone/).

**Example:** You share a house with two full-time students. After disregarding both students, the adult count is 1 — you. Your bill is 75% of the standard charge. For a Band D property outside Quedgeley, that is £1,761.13 per year.

### There are two or more non-student adults

**Your bill: the full standard charge.**

Once there are two or more adults who are not disregarded, no occupant-based discount applies. The students are still not counted — but with two counted adults remaining, no reduction is triggered.

**Example:** You and your partner share with a student. After disregarding the student, the count is 2. Full charge applies.

### You are a student and you live with non-students

**Your bill: depends on the non-students only.**

You are disregarded. The bill is calculated as if you are not there. If only one non-student adult remains after all disregards, they get 25% off. If two or more non-students remain, the full charge applies. As a full-time student, you are not personally liable for Council Tax.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=full-time-students]#student_definition#f1a2b3c5 -->

## Who counts as a full-time student?

To be disregarded, a student must be enrolled on a course that is:

- At least **one academic or calendar year** in duration
- Requiring at least **21 hours of study per week** during term time

These also qualify:
- **Student nurses** on NHS-funded college or university courses
- **Apprentices** on government-approved schemes earning under £195 per week gross, working towards at least NVQ Level 3
- **Youth training trainees** aged under 25

Part-time students do not qualify — they count as adults for Council Tax purposes.

### How we verify student status

We need a **student certificate** from your college or university. It must confirm your name, institution, course, and the start and expected end dates. Most institutions issue these at the start of term. Ask your student services office if you have not received one.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/exemptions/items[id=class-n]#vacation_rules#f1a2b3c4 -->

## Vacations and temporary absence

The exemption and disregards continue during **short vacations** (summer, Christmas, Easter) if:

- The property remains the student's main residence
- The student intends to return at the start of the next term

If a student **permanently leaves** — by finishing, deferring, or withdrawing — the exemption or disregard ends on their leaving date. You must tell us within 21 days.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Gap years and interruptions of study.</strong> A student on an approved interruption of study may no longer qualify during that period. Rules vary depending on how the institution classifies the break. Contact us to check — do not assume the disregard or exemption continues.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/exemptions/items[id=class-n]#application_process#f1a2b3c4 -->

## How to apply

**Online:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) and apply via the Council Tax section. Upload the student certificate during the application.

**By email:** Send the student certificate to **revenues@gloucester.gov.uk** with your Council Tax account number in the subject line. If applying for a full exemption, include certificates for every student at the address.

If your household recently became fully student-occupied — for example, a non-student flatmate moved out — apply straight away. We can apply the exemption from the date the last non-student left.

## If a student moves out — or a non-student moves in

Tell us within **21 days**. The exemption or disregard ends on that date, and the standard charge (or reduced charge) begins. Failure to tell us may result in a backdated bill and a civil penalty of up to **£70**.

## The law behind this

The full exemption for student households is **Class N** of the **Council Tax (Exempt Dwellings) Order 1992 (SI 1992/558)**. The disregard for individual full-time students is in **Schedule 1, paragraph 4 of the Local Government Finance Act 1992**.
