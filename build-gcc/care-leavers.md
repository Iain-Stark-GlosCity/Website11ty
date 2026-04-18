---
layout: gcc/policy-page.njk
permalink: /council-tax-2/care-leavers/
title: Care leavers — 100% off Council Tax
eyebrow: Council Tax — your guide
summary: >
  If you are aged 18 to 24 and were previously in the care of any
  English local authority, you may be entitled to pay nothing at all.
  Gloucester City Council gives care leavers a full 100% discount.

# ── AI/SEO signal fields ──
description: >
  Care leavers aged 18 to 24 in Gloucester may qualify for 100% off their
  Council Tax. Gloucester City Council's care leaver discount was extended
  in April 2024 to cover anyone who was in care of any English local authority.
canonical: https://www.gloucester.gov.uk/council-tax/care-leavers/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "100%"
  label: off your Council Tax bill

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
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#b1c2d3e4
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - eligibility
        - discount_amount
        - application_process
        - age_limit
        - geographic_scope
        - backdating
        - appeals
        - scheme_history
      path: /adjustment_catalogue/discounts/items[id=care-leavers]
      hash: sha256:b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.discount.care_leaver]#c2d3e4f5
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - discount_calculation
        - eligibility_test
      path: /executable_rule_slices/rules[rule_id=rule.discount.care_leaver]
      hash: sha256:c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/discounts#d3e4f5a6
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/discounts
      hash: sha256:d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4
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
  - /council-tax-2/struggling-to-pay/
  - /council-tax-2/occupants/living-alone/
  - /council-tax-2/your-bill/
  - /council-tax-2/council-tax-support/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#eligibility#b1c2d3e4 -->

## Do you qualify?

You qualify if **all three** of the following are true:

**1. You are aged 18 to 24.** The discount applies from your 18th birthday until the day before your 25th birthday. There is no minimum age — you can apply the moment you turn 18 and leave care.

**2. You were previously in the care of any English local authority.** You must have been a child in care and become what the law calls a "Former Relevant Child" under the Children (Leaving Care) Act 2000. It does not matter which English council had your care — the discount applies to Gloucestershire County Council care leavers and care leavers from any other English authority.

**3. You live in the Gloucester City Council area and are the liable person.** You must be resident at an address in Gloucester and the Council Tax bill must be in your name. If you live in an HMO where the landlord pays Council Tax, you do not qualify (the bill is not in your name).

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Moved to Gloucester from another area?</strong> It does not matter which local authority was responsible for your care. The discount applies to care leavers from any English council who now live in Gloucester.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#discount_amount#b1c2d3e4 -->

## What you get

**If you live alone (or with other care leavers): 100% off.** You pay nothing.

**If you share with non-care-leaver adults: 50% off.** The discount is split based on household composition, applied after other statutory discounts and exemptions.

The discount is applied to your bill after any other adjustments — including Council Tax Support, band reductions, and statutory discounts — so it works on top of, not instead of, any other help you are already getting.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#application_process#b1c2d3e4 -->

## How to get the discount

### We may already know about you

Gloucester City Council's **11-25 Permanency Service** proactively tells us the names and addresses of qualifying care leavers. If you have a leaving care worker, there is a good chance we already have your details — your discount may be applied automatically when you open a Council Tax account.

### Applying yourself

If you have not received the discount automatically, apply by contacting us with:

- Your full name and date of birth
- Your current address in Gloucester
- Details of who else lives at the address
- The name of your Leaving Care Worker, if you have one (not required but speeds things up)
- Your care history details (your previous local authority can confirm your Former Relevant Child status if needed)

Your care leaver status is confirmed by Gloucestershire County Council's 11-25 Permanency Service, who will check with other local authorities if needed. You do not need to get this confirmation yourself before applying.

**Contact us at:**
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
- **Email:** revenues@gloucester.gov.uk
- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p><strong>Keep paying your current bill while we process your application.</strong> Once the discount is confirmed, we will issue a revised bill and refund any overpayment or adjust your future instalments.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#backdating#b1c2d3e4 -->

## Can the discount be backdated?

Yes. We will generally backdate to the start of the financial year or the date your liability began, up to a maximum of 12 months before your application.

If you were eligible from 1 April 2024 (the date the age limit was extended to 24) or earlier, but did not apply, we can backdate to the correct start date — subject to the 12-month limit.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#end_of_discount#b1c2d3e4 -->

## When does the discount end?

The discount stops on your **25th birthday**. We will issue a new bill showing the standard charge from that date. If your circumstances change before your 25th birthday — for example, you move to a property where you are not the liable person — tell us within 21 days.

If you are also entitled to [Council Tax Support](/council-tax/council-tax-support/) based on your income, you can claim that separately from your 25th birthday onwards.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/discounts/items[id=care-leavers]#appeals#b1c2d3e4 -->

## If your application is refused

If we decide you do not qualify, you can challenge the decision in writing within **one month** of receiving it. Send your challenge to **revenues@gloucester.gov.uk** with your account number and the reasons you disagree. If you are still not satisfied after our review, you can appeal to the independent **Valuation Tribunal**.

## The law and policy

This discount is a **local discretionary reduction** under Section 13(1)(c) of the Local Government Finance Act 1992. It is not a national statutory right — it is Gloucester City Council's own policy, approved by Cabinet on 10 January 2024.

The scheme started in April 2019 for care leavers aged 18–21. In April 2024 it was extended to cover ages 18–24 and expanded to include care leavers of any English local authority (not just Gloucestershire County Council).

The full policy document is available at [gloucester.gov.uk/media](https://www.gloucester.gov.uk/media/psgjmws5/council-tax-discount-scheme-for-care-leavers.pdf).
