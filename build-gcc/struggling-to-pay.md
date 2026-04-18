---
layout: gcc/policy-page.njk
permalink: /council-tax-2/struggling-to-pay/
title: I am struggling to pay my Council Tax
eyebrow: Council Tax — your guide
summary: >
  Council Tax is a priority debt — but there is a lot of help available
  before things get serious. This page walks through every option,
  from changing your payment date to formal debt protection, in the
  order you should consider them.

# ── AI/SEO signal fields ──
description: >
  Help paying Council Tax in Gloucester. Options include Council Tax Support,
  payment arrangements, changing instalment dates, Breathing Space debt
  protection, and free local debt advice. Contact us before you miss a payment.
canonical: https://www.gloucester.gov.uk/council-tax/struggling-to-pay/
schema_type: GovernmentService
dateModified: "2026-04-18"

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
        - cts_eligibility
        - cts_maximum_support
        - cts_savings_limit
        - cts_application_process
      path: /adjustment_catalogue/council_tax_support
      hash: sha256:f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/operational_facts/payment/payment_flexibility#g6b7c8d9
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - payment_date_change
        - instalment_spread
        - special_payment_arrangement_pre_summons
        - special_payment_arrangement_post_summons
      path: /operational_facts/payment/payment_flexibility
      hash: sha256:g6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7
      lookup_method: CTax:schema_get

    - id: ctax/facts@2.5.7+2.5:/operational_facts/enforcement#h7c8d9e0
      document: facts
      document_version: "2.5"
      role: supporting
      used_for:
        - escalation_stages
        - post_liability_order_powers
        - breathing_space
        - vulnerability_framework
        - debt_support_signposting
      path: /operational_facts/enforcement
      hash: sha256:h7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.payment.special_arrangement.primary_intervention]#i8d9e0f1
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - payment_arrangement_rules
        - pre_summons_eligibility
      path: /executable_rule_slices/rules[rule_id=rule.payment.special_arrangement.primary_intervention]
      hash: sha256:i8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/payment#j9e0f1a2
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/payment
      hash: sha256:j9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0
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
  - /council-tax-2/council-tax-support/
  - /council-tax-2/occupants/living-alone/
  - /council-tax-2/disabled-band-reduction/
  - /council-tax-2/care-leavers/
---

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Contact us before you miss a payment.</strong> It is always easier to help before a debt builds up. If you are worried about an upcoming payment, call us or use My Gloucester now — do not wait for a reminder letter to arrive.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#step1_check_discounts#f5a6b7c8 -->

## Step 1 — are you getting all your discounts?

Before anything else, make sure you are not overpaying. Many people are entitled to a reduction they have not yet claimed.

**Check these first:**

- **[Single Person Discount](/council-tax-2/occupants/living-alone/)** — 25% off if you are the only adult at your address
- **[Students in your home](/council-tax-2/occupants/students-in-your-home/)** — students do not count as adults; a fully student household pays nothing
- **[Disregards](/council-tax-2/occupants/someone-doesnt-count/)** — someone with severe mental impairment, an unpaid carer, or certain others may not count in the adult total
- **[Disabled Band Reduction](/council-tax-2/disabled-band-reduction/)** — if your home has been adapted for disability, you may pay one band lower
- **[Care leavers](/council-tax-2/care-leavers/)** — if you are aged 18–24 and were previously in care, you may pay nothing at all

If you are missing any of these, the reduction can be backdated. Applying now saves you money from this point forward.

<!-- provenance: ctax/facts@2.5.7+2.5:/adjustment_catalogue/council_tax_support#cts_overview#f5a6b7c8 -->

## Step 2 — Council Tax Support (income-based reduction)

**Council Tax Support (CTS)** reduces your bill based on your income and circumstances. It can reduce your bill by up to **100%** — you may pay nothing at all if your income is low enough.

### Who can apply?

Anyone on a low income or claiming benefits — including:

- People working full-time or part-time on low wages
- People who are unemployed
- People receiving Universal Credit, Jobseeker's Allowance, Income Support, or Pension Credit
- Homeowners as well as renters
- Working age and pension age residents

### What affects how much you get?

We assess your income, savings, and household composition. Key limits:
- **Savings above £16,000:** you will not normally qualify if your savings or investments exceed this (unless you receive Pension Credit Guarantee Credit, in which case there is no upper savings limit)
- **Pension age:** rules are more generous — contact us for a full assessment

### How to apply

**Online:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) and apply through the Benefits section. Upload evidence of your income.

**By email:** Email **benefits@gloucester.gov.uk** (not revenues — the Benefits team handles CTS). Include "CTS" and your Council Tax account number in the subject line.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Keep paying your current bill while we assess your application.</strong> CTS is not backdated automatically. Apply as soon as possible — the longer you wait, the more you pay before the reduction kicks in.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/payment/payment_flexibility#payment_date_change#g6b7c8d9 -->

## Step 3 — change when or how you pay

Even without a reduction in the amount, changing the schedule may help you manage.

### Change your payment date

If you pay by Direct Debit, you can change the date your payment is taken to align with your pay day. Available dates are the **1st, 15th, 22nd, or 28th** of each month. Change this yourself through your [My Gloucester account](https://gloucester-self.achieveservice.com/).

### Switch to 12 monthly instalments

The standard Council Tax year runs as 10 instalments (April to January). You have a **legal right** to ask for 12 instalments instead, spreading payments across the full year including February and March. Each payment is smaller. Contact us to make this change:
- **Phone:** 01452 396 396
- **Email:** revenues@gloucester.gov.uk

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/payment/payment_flexibility#special_payment_arrangement_pre_summons#g6b7c8d9 -->

## Step 4 — if you have already missed a payment

If you have missed one or more payments and received a reminder notice, a second reminder, or a final notice — but have **not yet received a summons** — you can set up a payment arrangement online yourself.

### Self-serve payment arrangement (before summons)

Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) and look for the option to set up a payment arrangement. You can propose a way to clear what you owe and get back on track with your instalments. The arrangement must end by 31 March (the end of the current Council Tax year).

This is **self-serve** — you do not need to call us or explain your finances in detail at this stage. It is the fastest way to stop the account from escalating further.

<div class="gcc-callout gcc-callout--neutral">
  <span class="gcc-callout__icon" aria-hidden="true">📋</span>
  <div class="gcc-callout__body">
    <p>If you set up a payment arrangement and then need to change it, contact us straight away at <strong>revenues@gloucester.gov.uk</strong> or on <strong>01452 396 396</strong>. Missed arrangement payments escalate quickly.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/enforcement#breathing_space#h7c8d9e0 -->

## Step 5 — Breathing Space debt protection

If you are struggling with debt generally — not just Council Tax — you may be able to get **Breathing Space** protection.

**Standard Breathing Space** gives you up to **60 days** free from enforcement action on most debts (including Council Tax), during which interest and penalties are also frozen. To access it, you need to be working with an approved debt adviser.

**Mental Health Crisis Moratorium** gives equivalent protections for the duration of mental health crisis treatment, plus 30 days after.

Breathing Space is not provided by Gloucester City Council — you apply through a debt adviser. Free advice is available from the services listed at the bottom of this page.

---

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/enforcement#escalation_stages#h7c8d9e0 -->

## What happens if you do not pay or engage

We want to help before this point. But if we cannot reach you and payments stop, the account escalates through a fixed legal process:

<table class="charge-comparison">
  <caption>Council Tax enforcement stages — what happens if payments are missed without contact</caption>
  <thead>
    <tr>
      <th scope="col">Stage</th>
      <th scope="col">What we do</th>
      <th scope="col">What you need to do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Reminder notice</th>
      <td>Sent after first missed instalment</td>
      <td>Bring account up to date within 7 days and continue paying</td>
    </tr>
    <tr>
      <th scope="row">Second reminder</th>
      <td>Sent after second missed instalment</td>
      <td>Bring account up to date within 7 days and continue paying</td>
    </tr>
    <tr>
      <th scope="row">Final notice</th>
      <td>Sent if account is not brought up to date after second reminder, or if a further instalment is missed</td>
      <td>Pay the full remaining balance — your right to pay by instalments has ended</td>
    </tr>
    <tr>
      <th scope="row">Summons</th>
      <td>Application to Magistrates Court</td>
      <td>Contact us immediately. Paying in full or agreeing an arrangement before the court date may resolve the matter</td>
    </tr>
    <tr>
      <th scope="row">Liability Order</th>
      <td>Court grants a Liability Order for the full debt plus costs</td>
      <td>Contact us immediately. A payment arrangement may still be possible but requires income information and an upfront payment</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">A partial payment after a reminder does not stop recovery action — the account must be fully brought up to date. Contact us at any stage and we will work with you.</td>
    </tr>
  </tfoot>
</table>

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>After a Liability Order, we have additional powers</strong> including instructing enforcement agents (bailiffs), deducting money from your wages or benefits, and — in serious cases where debt exceeds £5,000 — applying for bankruptcy. These are last resorts, but they are real. Contact us before it reaches this point.</p>
  </div>
</div>

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Beware of scam emails.</strong> We will never ask for your bank details by email or ask you to verify them through a link. Always check your account status through <a href="https://gloucester-self.achieveservice.com/">My Gloucester</a> directly.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/enforcement#vulnerability_framework#h7c8d9e0 -->

## If you are in a vulnerable situation

If you are dealing with serious illness, mental health difficulties, bereavement, relationship breakdown, or another significant life event, tell us. We apply a vulnerability framework that changes how we handle your account. This can mean:

- Pausing enforcement action to give you time to engage
- Referring enforcement agents back to us if they identify a vulnerability
- Working with you on an affordable arrangement based on what you can actually pay
- Considering a discretionary hardship reduction if your situation is exceptional

You do not need to prove your situation in advance. Telling us what is happening is enough to start the right process.

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/enforcement/debt_support#debt_advice#h7c8d9e0 -->

## Free debt advice

These services offer free, confidential, and impartial advice on Council Tax and other debts. They can help you understand your options and negotiate with us on your behalf.

### Local services

- **Citizens Advice Bureau – Gloucester:** [gloscab.org.uk](https://gloscab.org.uk)
- **Gloucester Law Centre:** [gloucesterlawcentre.co.uk](http://www.gloucesterlawcentre.co.uk)
- **GL Communities:** [glcommunities.org.uk](https://www.glcommunities.org.uk)

### National services

- **MoneyHelper** (government-backed): [moneyhelper.org.uk](https://www.moneyhelper.org.uk/en)
- **National Debtline:** [nationaldebtline.org](https://nationaldebtline.org)
- **StepChange Debt Charity:** [stepchange.org](https://www.stepchange.org)

## Contact us

The sooner you contact us, the more options are available.

- **Phone:** 01452 396 396 (Monday–Friday 9am–5pm, Wednesday from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** [My Gloucester account](https://gloucester-self.achieveservice.com/)
