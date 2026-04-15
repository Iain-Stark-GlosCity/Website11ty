---
layout: gcc/policy-page.njk
permalink: /council-tax/discounts/empty-properties/
title: Second homes and empty properties
eyebrow: Council Tax discounts
summary: >
  Rules on Council Tax for properties that are unoccupied, furnished but
  not used as a main home, or undergoing major repair. Most empty
  properties are now charged the full rate — and long-term empties attract
  a significant premium.

# ── AI/SEO signal fields ──
description: >
  Council Tax on empty and second homes in Gloucester. Most empty properties
  are charged the full rate. Long-term empty properties attract a premium
  of up to 200%; second homes are also charged 200%.
canonical: https://www.gloucester.gov.uk/council-tax/discounts/empty-properties/
schema_type: GovernmentService
dateModified: "2026-04-15"

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
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/empty_properties#d6e5f4a3
      document: facts
      document_version: "2.2"
      role: primary
      used_for:
        - title
        - summary
        - categories
        - how_to_apply
        - change_in_circumstances
        - legal_basis
      path: /adjustment_catalogue/premiums_and_discounts/items/empty_properties
      hash: sha256:d6e5f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.premium.long_term_empty]#f4a3b2c1
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - premium_calculation
        - duration_bands
      path: /executable_rule_slices/rules[rule_id=rule.premium.long_term_empty]
      hash: sha256:f4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9b8c7d6e5f4a3
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
  - council-tax
  - discount

related_pages:
  - /council-tax/discounts/
  - /council-tax/discounts/single-person/
  - /council-tax/discounts/students/
  - /council-tax/discounts/disabled/
  - /council-tax/discounts/mental-impairment/
  - /council-tax/pay/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/empty_properties#categories#d6e5f4a3 -->

## Types of empty property

Different rules apply depending on the property's situation. The key categories are:

| Category | What it means | What you pay |
|---|---|---|
| **Unfurnished, newly empty** | Empty and unfurnished for up to 1 month | **No charge** (exempt) |
| **Unfurnished, 1–6 months** | Empty and unfurnished for 1–6 months | **Full charge** (100%) |
| **Long-term empty** | Unfurnished and unoccupied for 1–5 years | **200%** (double charge) |
| **Long-term empty (5+ years)** | Empty for more than 5 years | **300%** (triple charge) |
| **Long-term empty (10+ years)** | Empty for more than 10 years | **400%** (quadruple charge) |
| **Second home** | Furnished but not main residence, not let | **200%** (double charge) |
| **Major repair / structural work** | Unoccupied, requires substantial work | Up to **12 months** full discount |

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Empty property premiums apply even if you are not using the property.</strong> The premium is intended to bring long-term empty homes back into use. If your property has been empty for more than a year, you are likely already paying a premium — check your bill or <a href="https://gloucester-self.achieveservice.com/">sign in to My Gloucester</a> to confirm.</p>
  </div>
</div>

## Long-term empty premium in detail

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.premium.long_term_empty]#f4a3b2c1 -->

The premium is calculated on the **length of continuous emptiness**. The clock starts from the date the property became unoccupied and unfurnished. Furnishing a property briefly, then emptying it again, does not reset the clock if the total empty period is continuous in substance.

| Years empty | Total charge (% of standard bill) | Premium (extra above 100%) |
|---|---|---|
| Under 1 year | 100% | None |
| 1–5 years | 200% | 100% premium |
| 5–10 years | 300% | 200% premium |
| 10+ years | 400% | 300% premium |

### Second homes

A **second home** is a furnished property that is not anyone's sole or main residence. Since April 2025, Gloucester City Council charges **200% Council Tax** on second homes. There is no exception for properties used occasionally or seasonally.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Job-related second homes.</strong> If you are required to live in a second property for employment purposes — for example, a tied accommodation — you may qualify for a 50% discount rather than a 200% premium. Contact us with details of your employment arrangements.</p>
  </div>
</div>

## Properties undergoing major repair or structural work

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/empty_properties#major_repair#d6e5f4a3 -->

A property that is **unoccupied and requires major structural repair or reconstruction work** may qualify for a temporary exemption of up to **12 months**. To qualify:

- The property must be genuinely uninhabitable (not merely in need of routine maintenance)
- The required work must be structural or major in nature
- A council officer may inspect the property to confirm the condition

This class does not apply once the repair is complete, or 12 months from the start of the exemption — whichever is earlier. After that, the property moves to the standard empty property charge.

## Newly empty — first month exemption

An unfurnished property that has recently become empty is **exempt** for up to **one calendar month** from the date it became vacant. After one month, the full Council Tax charge applies.

## How to notify us

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/empty_properties#application_process#d6e5f4a3 -->

You must tell us when a property becomes empty so we can apply the correct charge from the right date.

**Online:** Sign in to your [My Gloucester account](https://gloucester-self.achieveservice.com/) and select *Notify us of a vacant property*.

**By email:** Contact **revenues@gloucester.gov.uk** with:
- The address of the empty property
- The date it became empty
- Whether it is furnished or unfurnished
- The reason it is empty (if applying for an exemption)
- If applying for major repair exemption, a description of the work required

We may request a site visit to verify the condition for the major repair class.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/empty_properties#change_in_circumstances#d6e5f4a3 -->

## If the property is occupied again

Tell us within **21 days** when a property that was empty becomes occupied. If you fail to notify us, we may raise a backdated bill from the date occupation began, and may apply a penalty of up to **£70**.

You can report the change through your My Gloucester account or by emailing **revenues@gloucester.gov.uk**.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/premiums_and_discounts/items/empty_properties#legal_basis#d6e5f4a3 -->

## The law behind this

The powers to charge premiums on long-term empty properties and second homes are in **Section 11B of the Local Government Finance Act 1992** (as amended by the Rating (Empty Properties) Act 2007 and subsequent regulations). Gloucester City Council resolved to apply these premiums at the rates above. The major repair exemption is Class A of the **Council Tax (Exempt Dwellings) Order 1992**.

## Bringing an empty property back into use

If you own an empty property and want advice on bringing it back into use — including potential grants, loans, or compulsory purchase alternatives — the Council's **Empty Homes Officer** can help. Email **emptyhomes@gloucester.gov.uk** to discuss your options.

## Contact us

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
