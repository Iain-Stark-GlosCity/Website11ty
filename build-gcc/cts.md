---
layout: gcc/policy-page.njk
permalink: /council-tax-2/council-tax-support/
title: Council Tax Support — help based on your income
eyebrow: Council Tax — your guide
summary: >
  Council Tax Support reduces your bill based on your income and
  circumstances. It can take your bill all the way to zero. It is
  not a discount — it is a means-tested reduction that 83% of
  recipients in Gloucester receive at the full 100% rate.

# ── AI/SEO signal fields ──
description: >
  Council Tax Support in Gloucester. Income-based reduction — up to 100%
  off your bill. Apply via My Gloucester or email benefits@gloucester.gov.uk.
  83% of recipients pay nothing. Savings limit £16,000 for working-age residents.
canonical: https://www.gloucester.gov.uk/council-tax/council-tax-support/
schema_type: GovernmentService
dateModified: "2026-04-18"

key_badge:
  value: "100%"
  label: maximum reduction available

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
    - id: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#f5a6b7c8
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - cts_what_it_is
        - cts_eligibility
        - cts_savings_limit
        - cts_pension_age_rules
        - cts_application_process
        - cts_change_in_circumstances
        - cts_appeals
        - cts_caseload_data
      path: /adjustment_catalogue/council_tax_support
      hash: sha256:f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/council_tax_support#k0f1a2b3
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/council_tax_support
      hash: sha256:k0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1
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
  - /council-tax-2/your-bill/
  - /council-tax-2/occupants/living-alone/
  - /council-tax-2/moving/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#what_it_is#f5a6b7c8 -->

## What is Council Tax Support?

**Council Tax Support (CTS)** — also called Council Tax Reduction — reduces your Council Tax bill if you are on a low income or receiving benefits. The reduction is applied directly to your account. If you qualify for the full 100%, you will receive a bill showing a zero balance.

This is not a discount like Single Person Discount. It is a financial assessment — we look at your income, savings, and household circumstances to work out how much you can afford to pay.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>83% of CTS recipients in Gloucester pay nothing at all.</strong> If you are on a low income or receiving benefits, there is a good chance you qualify for the full reduction. Apply — the worst outcome is we confirm how much you are entitled to.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#eligibility#f5a6b7c8 -->

## Who can apply?

You can apply if you are on a low income or receiving benefits. This includes:

- People in full-time or part-time work on low wages
- People who are unemployed
- People receiving Universal Credit, Jobseeker's Allowance, Income Support, or Employment and Support Allowance
- People receiving Pension Credit
- Homeowners as well as renters
- Working-age and pension-age residents

There is no type of person who is automatically excluded. The question is always whether your income and savings fall within the assessment thresholds.

### Savings limit

**Working-age residents:** You will not normally qualify if your savings or investments exceed **£16,000**. This includes money in bank accounts, cash ISAs, and most investments.

**Pension-age residents:** If you receive **Pension Credit Guarantee Credit**, there is no upper savings limit. Apply regardless of how much you have saved.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p>You cannot claim CTS if your property is already fully exempt from Council Tax — for example, if all residents are full-time students. You also cannot claim both CTS and the student discount at the same time.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#pension_age#f5a6b7c8 -->

## Pension-age residents — different rules apply

The rules for residents of **pension age** are set nationally. We cannot reduce the maximum support or add restrictions locally. Key points:

- The assessment is more generous — more income is disregarded
- No upper savings limit if you receive Pension Credit Guarantee Credit
- The reduction can still reach 100%

If you or your partner are of pension age, contact us for a full assessment. Do not assume you will not qualify because you have savings or pension income — the rules are different from those that apply to working-age residents.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#how_much#f5a6b7c8 -->

## How much will I get?

We assess your income and household to work out your **applicable amount** — what we consider a reasonable minimum income for your circumstances. We then compare this with your actual income.

- If your income is at or below the applicable amount, you get the **maximum support** (up to 100%)
- If your income is above the applicable amount, support tapers down

The exact reduction is individual to your circumstances. The only way to know what you will get is to apply.

**Income that counts in the assessment:**

- Wages and self-employment earnings
- Most benefits (Universal Credit, ESA, JSA, and others)
- Pension income
- Maintenance payments

**Income that is usually ignored:**

- Disability Living Allowance (care component)
- Personal Independence Payment (daily living component)
- Attendance Allowance
- Carer's Allowance
- Child Benefit

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#application_process#f5a6b7c8 -->

## How to apply

**Online — fastest:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) and apply through the Benefits section. You can upload supporting evidence during the application.

**By email:** Email **benefits@gloucester.gov.uk** — note this is the Benefits team, not revenues. Include "CTS application" and your Council Tax account number in the subject line.

### Evidence we need

Gather these before you apply to speed things up:

- Proof of identity (passport, driving licence, or similar)
- Proof of your current address
- Your Council Tax account number (from your bill)
- Recent payslips or a letter from your employer (if working)
- Bank statements for the last 2 months — all accounts you hold
- Benefit award letters (Universal Credit statement, ESA award letter, etc.)
- If self-employed: recent accounts or evidence of earnings

We will tell you if we need anything else. Do not delay applying while waiting for documents — send what you have and supply the rest when you can.

### How long does it take?

We aim to process most applications within 10 working days of receiving all the evidence. We will write to you and update your My Gloucester account once the assessment is complete. If approved, we will issue a revised bill showing the reduced amount.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Keep paying your current bill while we assess your application.</strong> CTS is not backdated automatically. If you stop paying and the reduction is not granted, you will owe arrears. Apply as soon as possible and keep paying in the meantime.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#backdating#f5a6b7c8 -->

## Can it be backdated?

Yes, in some circumstances. If you were eligible before you applied but did not apply at the time, ask us to backdate the reduction. You need to show a good reason — for example, you were unaware of the scheme or were dealing with a serious illness.

Backdating is not automatic. Contact us at **benefits@gloucester.gov.uk** and explain your situation.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#change_in_circumstances#f5a6b7c8 -->

## Tell us when things change

You must tell us within **21 days** if any of these change:

- Your income or your partner's income goes up or down significantly
- You start or stop receiving a benefit
- You move address
- Someone moves into or out of your home
- Your savings go above £16,000
- Your employment status changes

If your income goes up, your CTS may reduce and you could owe money. If your income goes down, you may be entitled to more. Telling us quickly means your account is correct from the right date.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Overpayments must be repaid.</strong> If we paid you too much CTS because you did not tell us about a change in time, we will recover the overpayment from your Council Tax account. Contact us as soon as you realise there is a problem — we can agree a repayment plan if needed.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#appeals#f5a6b7c8 -->

## If you disagree with the decision

Write to us at **benefits@gloucester.gov.uk**. Include your Council Tax account number and the word "appeal" in the subject line, and explain why you think the decision is wrong.

We will review the decision and respond in writing. If you are still not satisfied after our review, you can appeal to the independent **Valuation Tribunal**.

## Can CTS combine with other reductions?

Yes. CTS works on top of other reductions — they are applied in a fixed order:

1. **Disabled Band Reduction** (if your home has a qualifying adaptation) — applied first
2. **Single Person Discount** (25%) — if you are the only counted adult
3. **Council Tax Support** — applied to the already-reduced amount

You can receive all three if you qualify for all three. Tell us about all your circumstances when you apply.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#legal_basis#f5a6b7c8 -->

## The law

Council Tax Support replaced Council Tax Benefit in April 2013. The legal duty on billing authorities to have a Council Tax reduction scheme is set out in **Section 13A of the Local Government Finance Act 1992**. The rules for pension-age residents are nationally prescribed by the **Council Tax Reduction Schemes (Prescribed Requirements) (England) Regulations 2012** and cannot be varied locally. The working-age scheme is Gloucester City Council's own policy, approved by Full Council on 29 January 2026 and effective from 1 April 2026.

## Contact us

- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
- **Email (Benefits team):** benefits@gloucester.gov.uk
- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
