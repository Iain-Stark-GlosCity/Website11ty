---
layout: gcc/policy-page.njk
permalink: /council-tax-2/moving/
title: Moving in or moving out
eyebrow: Council Tax — your guide
summary: >
  Council Tax follows you from address to address. When you move in,
  you become liable from day one. When you move out, you are liable
  until that day. This page explains exactly when your responsibility
  starts and stops, and what you need to tell us.

# ── AI/SEO signal fields ──
description: >
  Moving home and Council Tax in Gloucester. Your liability starts the day
  you move in and ends the day you move out. Find out how to tell us,
  what happens during gaps, and the rules for renting and buying.
canonical: https://www.gloucester.gov.uk/council-tax/moving/
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
    - id: ctax/facts@2.5.7+2.5:/operational_facts/liability#c2d3e4f5
      document: facts
      document_version: "2.5"
      role: primary
      used_for:
        - liability_start_date
        - liability_end_date
        - liability_hierarchy
        - joint_liability
        - special_cases
        - notification_requirement
      path: /operational_facts/liability
      hash: sha256:c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.liability.hierarchy]#d3e4f5a6
      document: rules
      document_version: "2.5"
      role: implementing_logic
      used_for:
        - liability_order_logic
      path: /executable_rule_slices/rules[rule_id=rule.liability.hierarchy]
      hash: sha256:d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4
      lookup_method: CTax:schema_get

    - id: ctax/results@2.5.7+2.5:/publication_control/section_statuses/liability#e4f5a6b7
      document: results
      document_version: "2.5"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/liability
      hash: sha256:e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5
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
  - /council-tax-2/your-bill/
  - /council-tax-2/occupants/living-alone/
  - /council-tax-2/empty-home/
  - /council-tax-2/struggling-to-pay/
---

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/liability#when_liable#c2d3e4f5 -->

## When does Council Tax start?

Your Council Tax liability begins on the **first day you become resident** at a property as your sole or main home. This is normally the date you move in — not the date your tenancy or mortgage starts, and not the date you collect the keys.

**If you buy a property:** liability begins on the date of **completion**, when legal ownership transfers. If you do not move in immediately, you are still liable from completion — the empty property rules then apply for the period before you move in.

**If you rent:** liability begins on the first day of your tenancy, even if you do not physically move in on that day. If there is a gap between your tenancy start and when you actually arrive, Council Tax still runs from day one of the tenancy.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>You may overlap at two addresses.</strong> If your new tenancy starts before your old one ends, you may be liable at both addresses simultaneously for a short period. There is no automatic overlap exemption — you pay for both.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/liability#when_ends#c2d3e4f5 -->

## When does Council Tax stop?

Your liability at your old address ends on the **day you move out** — your last day of residence. If you hand keys back to a landlord, your liability ends on the day you hand them back, not the end of your tenancy period.

**If you sell:** your liability ends on the date of **completion**, when legal ownership transfers to the buyer. The buyer is liable from that date.

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>Do not assume the new resident closes the old account.</strong> Until you tell us you have moved out, we will continue to bill you. Tell us your move-out date as soon as it is confirmed, and give us the forwarding address for any remaining correspondence.</p>
  </div>
</div>

## Who is liable? The liability order

<!-- provenance: ctax/rules@2.5.7+2.5:/executable_rule_slices/rules[rule_id=rule.liability.hierarchy]#d3e4f5a6 -->

When more than one type of person lives at a property, the law sets a strict order. The person highest in this list is liable:

<table class="charge-comparison">
  <caption>The Council Tax liability hierarchy — who pays at a property (Local Government Finance Act 1992, sections 6–9)</caption>
  <thead>
    <tr>
      <th scope="col">Priority</th>
      <th scope="col">Who</th>
      <th scope="col">When this applies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Resident freeholder (owner-occupier)</td>
      <td>You own and live in the property</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Resident leaseholder</td>
      <td>You hold a long lease and live there</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Resident tenant</td>
      <td>You rent from a landlord and live there</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Resident licensee</td>
      <td>You have permission to occupy but no formal tenancy</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Owner (non-resident)</td>
      <td>Nobody lives there — the property is empty</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">If two or more people at the same level of the hierarchy live together, they are <strong>jointly and severally liable</strong> — each is responsible for the full amount, and we can pursue either or both.</td>
    </tr>
  </tfoot>
</table>

### Special cases

**Houses in Multiple Occupation (HMOs):** If your landlord rents rooms individually, the property is likely an HMO. The **owner** is liable — not the tenants. You do not get a personal Council Tax bill. Check with your landlord if you are unsure.

**Properties where no one lives:** The **owner** is liable from the day the property becomes empty. See [empty home rules](/council-tax-2/empty-home/) for what you pay.

<!-- provenance: ctax/facts@2.5.7+2.5:/operational_facts/liability#how_to_notify#c2d3e4f5 -->

## Tell us when you move

You must tell us within **21 days** of moving in or moving out. Telling us promptly means your bill is accurate from the start, and avoids a backdated bill later.

**Online — fastest:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) and update your Council Tax account. You can register for a new account at the same time if you do not already have one.

**By phone:** Call **01452 396 396** (Monday–Friday 9am–5pm, Wednesday from 10am).

**By email:** Email **revenues@gloucester.gov.uk** with your old and new addresses, the move date, and your Council Tax account number (from your old bill).

### What we need when you register at a new address

- Your full name and date of birth
- The address you are moving to
- The date you moved in (or will move in)
- Whether you own or rent, and whether it is a sole tenancy or shared
- The names of any other adults who will live with you

## Common scenarios

### "I'm moving within Gloucester City Council area"

Tell us both: your move-out date at the old address and your move-in date at the new one. We will close your old account from your move-out date and open a new one from your move-in date. You will receive a final bill for the old address and a new bill for the new one.

If you qualify for [Single Person Discount](/council-tax-2/occupants/living-alone/) at the new address, apply again — discounts are linked to your account at each address, not to you as a person.

### "I'm moving out of Gloucester City Council area"

Tell us your move-out date and new address. We will close your Gloucester account and issue a final bill (or refund if you are in credit). Contact your new council to register there.

### "I'm moving into a Gloucester property from elsewhere"

Register at your new address as soon as possible. If you were registered with another council, tell them your move-out date too.

### "I'm a student moving in"

If you are a full-time student, you are disregarded for Council Tax. If all residents at your new address are full-time students, the property is fully exempt. You still need to register and provide your student certificate. See [students in your home](/council-tax-2/occupants/students-in-your-home/).

### "I'm moving into an empty property I've just bought"

Council Tax at the property began running from the date you completed the purchase. If it was already empty before you bought it, you may have inherited any empty property discount or premium that was already in place. Check the current state of the account with us as soon as you can.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Buying an empty property?</strong> Ask the seller's solicitor to confirm the Council Tax history and current account status before completion. If a long-term empty premium is running on the property, you inherit it from the date you take ownership.</p>
  </div>
</div>

## The law

Liability rules are set out in **Part I, Sections 6–9 of the Local Government Finance Act 1992**. The requirement to notify changes within 21 days follows from the **Council Tax (Administration and Enforcement) Regulations 1992 (SI 1992/613)**. Failing to tell us about a move may result in a backdated bill and a civil penalty of up to **£70**.
