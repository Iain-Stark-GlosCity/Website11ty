---
layout: gcc/policy-page.njk
permalink: /council-tax-2/occupants/someone-doesnt-count/
title: Someone at my address doesn't count
eyebrow: Discounts based on who lives with you
summary: >
  Some people are "disregarded" for Council Tax — they live at your
  address but are invisible in the adult count. If this leaves only
  one or zero counted adults, your bill is reduced. Knowing who
  is disregarded can make a significant difference to what you pay.

# ── AI/SEO signal fields ──
description: >
  Council Tax disregards in Gloucester. Some adults are not counted for
  Council Tax — including students, apprentices, carers, and people with
  severe mental impairment. Find out if someone at your address is disregarded.
canonical: https://www.gloucester.gov.uk/council-tax/occupants/someone-doesnt-count/
schema_type: GovernmentService
dateModified: "2026-04-15"

breadcrumb:
  - url: /council-tax-2/
    label: Council Tax — your guide
  - url: /council-tax-2/occupants/
    label: Who lives with you

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mcp-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/all#d5e6f7a8
      document: facts
      document_version: "2.2"
      role: primary
      used_for:
        - who_is_disregarded
        - effect_on_bill
        - how_to_apply
        - change_in_circumstances
      path: /adjustment_catalogue/disregards/items/all
      hash: sha256:d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=severe-mental-impairment]#b8c7d6e5
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - smi_two_condition_test
        - qualifying_benefits_list
      path: /rule_sets/disregard_rules[rule_id=severe-mental-impairment]
      hash: sha256:b8c7d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=full-time-students]#b2c3d4e5
      document: rules
      document_version: "2.2"
      role: cross_reference
      used_for:
        - student_disregard_within_disregards_page
      path: /rule_sets/disregard_rules[rule_id=full-time-students]
      hash: sha256:b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890ab
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=disregard]#a9b8c7d6
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - disregard_mechanism_label
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
  - council-tax-2

related_pages:
  - /council-tax-2/occupants/
  - /council-tax-2/occupants/living-alone/
  - /council-tax-2/occupants/students-in-your-home/
  - /council-tax-2/your-bill/
  - /council-tax/discounts/mental-impairment/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/all#what_is_a_disregard#d5e6f7a8 -->

## What "disregarded" means

A disregard is not a discount in itself — it changes the **count of adults** at your address. Some adults are excluded from that count by law. We then look at how many adults remain:

| Counted adults after disregards | Effect on your bill |
|---|---|
| Zero — everyone is disregarded | **50% discount** (treated as if unoccupied) |
| One | That person gets **25% off** (Single Person Discount) |
| Two or more | **No reduction** — the full charge applies |

So a disregard only helps if it brings the count to one or zero. Knowing who is disregarded tells you whether you are paying the right amount.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/all#who_is_disregarded#d5e6f7a8 -->

## Who is disregarded?

### Children and young people under 18

Anyone under 18 is automatically disregarded, regardless of whether they work, earn an income, or have recently turned 18. The day they turn 18 they become a counted adult — unless another disregard applies (for example, if they immediately start a qualifying course of full-time study).

### Full-time students

Full-time students are disregarded during their course, including vacations. For the full definition — including student nurses, apprentices, and the certificate evidence we need — see [students in your home](/council-tax-2/occupants/students-in-your-home/).

### People with a severe mental impairment (SMI)

A person is disregarded if they have **both**:

1. A **severe mental impairment** — confirmed in writing by a registered medical practitioner. The impairment must be severe and permanent, resulting from a condition such as dementia, stroke, severe learning disability, brain injury, or Parkinson's disease (where it has caused cognitive impairment).

2. **Entitlement to a qualifying benefit**, including:

| Benefit | Details |
|---|---|
| Disability Living Allowance | Care component, middle or higher rate |
| Personal Independence Payment | Daily living component, either rate |
| Attendance Allowance | Either rate |
| Employment and Support Allowance | Support group component |
| Universal Credit | With limited capability for work-related activity element |
| Incapacity Benefit | Long-term rate |
| Severe Disablement Allowance | Any rate |
| Armed Forces Independence Payment | Any rate |

Both conditions must be satisfied. Medical certification alone is not enough; benefit entitlement alone is not enough.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Caring for a family member with dementia?</strong> This is one of the most commonly missed disregards. If your spouse or parent has severe dementia and receives a qualifying benefit, they may be disregarded. If you are then the only remaining counted adult, you get 25% off. Contact us — many households are overpaying without knowing it.</p>
  </div>
</div>

### Unpaid carers

A person is disregarded if they:

- Provide care for **at least 35 hours a week**
- To someone who is **not** their spouse, civil partner, or a child under 18
- And the person being cared for receives a qualifying disability benefit (Disability Living Allowance at middle/higher care rate, Personal Independence Payment daily living component, or Attendance Allowance)

Paid carers employed by an agency do not qualify. The carer must be providing unpaid care. The carer does not have to live permanently at the property — but they must be resident there.

### People in certain institutional settings

These people are disregarded for as long as their circumstances apply:

- **Long-term hospital patients** — admitted to hospital and not returning to the property as their main home
- **Residents of care homes, nursing homes, or hostels** — but only if they are not also retaining the property as their main residence
- **People in prison** — unless held only for failure to pay Council Tax or a Council Tax fine

### Members of religious communities

Monks, nuns, and members of other religious orders whose principal occupation is prayer or contemplative service are disregarded.

### Non-British spouses and dependants of foreign students

The spouse, civil partner, or dependant of a foreign student (on a course in the UK) is disregarded if they have no right to work in the UK or claim public funds — provided they are not a British citizen or have not been settled in the UK for more than 5 years.

<!-- provenance: ctax/rules@2.4.0+2.2:/rule_sets/disregard_rules[rule_id=severe-mental-impairment]#b8c7d6e5 -->

## Worked examples

### Example 1 — carer and person with dementia

You live with your spouse who has severe dementia and receives Personal Independence Payment. After disregarding your spouse, the adult count is 1 — you. **Your bill is reduced by 25%.** If your spouse also receives the Disabled Band Reduction (a property adaptation), that is applied separately and can be combined.

### Example 2 — adult child still at home

You live with your 20-year-old, who is not a student and does not fall under any other disregard. The count is 2 — you and your child. **No discount applies.** If your child were to start a full-time course, they would become disregarded and you would then qualify for 25% off.

### Example 3 — shared house, one with SMI

Three adults share a house. One has a severe mental impairment with confirmed diagnosis and receives DLA (higher care rate). After the SMI disregard, the count is 2. **No occupant discount applies.** If a second person were also disregarded (for example, became a full-time student), the count would fall to 1 and the remaining adult would get 25% off.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/all#how_to_apply#d5e6f7a8 -->

## How to apply

Most disregards require evidence. Here is what to prepare:

**For SMI disregard:**
- A letter from a GP or consultant confirming the diagnosis, its severity, and approximate date of onset
- Evidence of entitlement to a qualifying benefit (award letter or DWP confirmation)

**For carer disregard:**
- A letter confirming the care arrangement and hours provided
- Evidence that the person being cared for receives a qualifying benefit

**For other disregards** (hospital, care home, religious community, foreign student dependant):
- A letter or document confirming the relevant circumstance

**Apply online** through [My Gloucester](https://gloucester-self.achieveservice.com/), or email evidence to **revenues@gloucester.gov.uk** with your Council Tax account number in the subject line.

We can often backdate a disregard to the date the conditions were first met, particularly for SMI — providing the date of diagnosis helps us calculate the right figure.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/disregards/items/all#change_in_circumstances#d5e6f7a8 -->

## If circumstances change

Tell us within **21 days** if:

- The disregarded person moves out or dies
- Their benefit entitlement ends
- A carer reduces their hours below 35 per week or their circumstances change
- A student finishes their course

Changes to disregards affect your bill immediately — if a disregard ends and the count rises above one, the discount stops. Report via your My Gloucester account or email **revenues@gloucester.gov.uk**.

## The law

Disregards are set out in **Schedule 1 of the Local Government Finance Act 1992** and the **Council Tax (Discount Disregards) Order 1992**. They are statutory — Gloucester City Council cannot withhold them where the qualifying conditions are met.
