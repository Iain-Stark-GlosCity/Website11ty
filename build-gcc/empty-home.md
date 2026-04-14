---
layout: gcc/policy-page.njk
permalink: /council-tax-2/empty-home/
title: Council Tax on an empty home
eyebrow: Property & occupancy
summary: >
  When a property becomes empty, Council Tax doesn't disappear — it
  changes shape. The charge starts at zero, rises to the full rate, and
  can climb to four times the normal bill if the property stays empty
  for long enough. Here is exactly what you'll pay and when.

key_badge:
  value: "0 → 400%"
  label: as time passes

breadcrumb:
  - url: /council-tax-2/
    label: Property & occupancy

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/empty_property/items/vacant_unfurnished#e1f2a3b4
      document: facts
      document_version: "2.2"
      role: primary
      used_for:
        - title
        - summary
        - charge_timeline
        - special_circumstances
        - how_to_notify
      path: /adjustment_catalogue/empty_property/items/vacant_unfurnished
      hash: sha256:e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.premium.long_term_empty]#f4a3b2c1
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - premium_bands
        - clock_rules
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

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/empty_property#c1d0e9f8
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/empty_property
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
  - council-tax-2

related_pages:
  - /council-tax-2/second-home/
  - /council-tax/discounts/empty-properties/
  - /council-tax/council-tax-support/
  - /council-tax/pay/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/empty_property/items/vacant_unfurnished#what_counts#e1f2a3b4 -->

## What counts as an empty home

An **empty home** for Council Tax purposes is a property that is:

- Unoccupied — nobody is living there as their sole or main residence
- **Unfurnished** — this is what distinguishes it from a [second home](/council-tax-2/second-home/)

If a property is furnished but unoccupied, it is a second home — different rules apply.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Furnished or unfurnished?</strong> There is no precise legal definition of "furnished" in Council Tax law. In practice, a property with a bed, sofa, and basic kitchen equipment is likely furnished. An empty shell is clearly unfurnished. If you are unsure, contact us — the distinction matters for how much you pay.</p>
  </div>
</div>

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.premium.long_term_empty]#f4a3b2c1 -->

## The charge timeline

The charge changes automatically as time passes. You do not need to apply for the premium stages — they are applied based on how long the property has been empty.

<table class="charge-comparison">
  <caption>What you pay as an empty unfurnished property ages — Band D example (£2,348.17 full annual charge, outside Quedgeley parish)</caption>
  <thead>
    <tr>
      <th scope="col">Period empty</th>
      <th scope="col">% of full charge</th>
      <th scope="col">Annual bill (Band D)</th>
      <th scope="col">What is happening</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Day 1 to 1 month</th>
      <td><strong>0%</strong></td>
      <td>£0</td>
      <td>Class C exemption — one-month grace period</td>
    </tr>
    <tr>
      <th scope="row">1 month to 1 year</th>
      <td><strong>100%</strong></td>
      <td>£2,348.17</td>
      <td>Full standard charge applies</td>
    </tr>
    <tr>
      <th scope="row">1 year to 5 years</th>
      <td><strong>200%</strong></td>
      <td>£4,696.34</td>
      <td>Long-term empty premium — 100% surcharge added</td>
    </tr>
    <tr>
      <th scope="row">5 years to 10 years</th>
      <td><strong>300%</strong></td>
      <td>£7,044.51</td>
      <td>Extended premium — 200% surcharge</td>
    </tr>
    <tr>
      <th scope="row">10 years or more</th>
      <td><strong>400%</strong></td>
      <td>£9,392.68</td>
      <td>Maximum premium — 300% surcharge</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">The premium applies to the whole bill — including the police, fire, and county precept portions. Quedgeley parish properties pay slightly more.</td>
    </tr>
  </tfoot>
</table>

<div class="gcc-callout gcc-callout--warning">
  <span class="gcc-callout__icon" aria-hidden="true">⚠</span>
  <div class="gcc-callout__body">
    <p><strong>The clock does not easily reset.</strong> Briefly refurnishing a property, then emptying it again, does not restart the timer if the overall pattern of use shows the property has not genuinely been brought back into occupation. We look at the substance, not just the dates.</p>
  </div>
</div>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/empty_property/items/vacant_unfurnished#special_circumstances#e1f2a3b4 -->

## Special circumstances

Some situations pause or change the charge. These are not automatic — you need to tell us and, in most cases, provide evidence.

### Major structural repair or reconstruction

A property that is genuinely **uninhabitable** and undergoing, or requiring, major structural work may be exempt for up to **12 months**.

This exemption does not apply to:
- Routine redecoration or cosmetic renovation
- Properties that are merely empty while on the market

We may inspect the property to confirm the condition. The exemption ends as soon as the work is complete or 12 months elapses — whichever is first.

### The property is involved in probate

There is no automatic exemption for a property left by someone who has died. However:

- While the property is **in probate** (the estate is being administered), the executor or administrator becomes liable for Council Tax
- If the property becomes occupied — even temporarily — by a beneficiary, different rules may apply
- Once the estate is settled and the property transfers, the new owner is liable from that date

The one-month Class C exemption applies from the date the previous occupant died and the property became empty, if it was not immediately reoccupied.

<div class="gcc-callout gcc-callout--info">
  <span class="gcc-callout__icon" aria-hidden="true">ℹ</span>
  <div class="gcc-callout__body">
    <p><strong>Dealing with a loved one's estate is stressful.</strong> If you are administering a property as an executor and facing mounting Council Tax charges, call us on 01452 396 396. We can discuss realistic options and, where there is genuine hardship, agree a payment schedule.</p>
  </div>
</div>

### The occupant has moved into a care home or hospital

If a property is empty because the person who lived there has moved permanently into:

- A **residential or nursing care home**
- A **hospital** (long-term)
- A **hostel** for the homeless

Then the property may be **fully exempt** — 0% — for as long as that situation continues, with no time limit. The person must have been the sole or main occupant and must not be subletting the property.

### The property is owned by a charity

Properties owned by a registered charity and that have been empty for up to **6 months** are exempt. After 6 months, the full charge applies.

### You are in the armed forces

If you own a property in Gloucester but your main residence is service accommodation — in the UK or abroad — the property may qualify for a 50% discount or exemption depending on your circumstances. Contact us with your service details.

---

## Scenarios: what do I actually owe?

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/empty_property/items/vacant_unfurnished#scenarios#e1f2a3b4 -->

### "I'm selling my home"

From the day you move out:
1. **Month 1:** No charge (Class C exemption)
2. **Months 2–12:** Full standard charge (100%)
3. **If it takes more than a year to sell:** 200% kicks in

If you receive an offer and exchange contracts, there is no automatic reduction — Council Tax runs until completion and the buyer takes possession. If the sale falls through and the property remains empty, the clock continues.

### "I inherited a property"

The one-month exemption begins when the previous occupant died and the property became empty. After that, the full charge applies to the estate. If the estate cannot be settled quickly — for example because of a complex will or disputes — speak to us. We cannot waive the charge, but we can sometimes agree a payment plan.

### "I'm renovating before moving in"

If the renovation is cosmetic (decorating, new kitchen), the standard empty property charge applies. If the property is structurally uninhabitable and requires major work, you may qualify for the major repair exemption — but you will need to demonstrate this with evidence of the work required.

### "My elderly relative is in a care home and we haven't decided what to do with the house"

The property is likely **fully exempt** with no time limit while your relative remains in the care home and is the sole occupant who was previously living there. Tell us about the situation as soon as possible — the exemption is not applied automatically and we will need details of the care home placement.

---

## Bringing an empty home back into use

The best outcome for everyone — including you — is reoccupation. We have an **Empty Homes Officer** whose job is to help owners of empty properties explore options. This includes:

- **Interest-free loans** for renovation work, repayable when the property is let or sold
- **Lease and management schemes** — we arrange a tenant, you receive a guaranteed rent
- **Purchase** — in some cases, Gloucester City Council or a housing association will buy the property

Email **emptyhomes@gloucester.gov.uk** or call **01452 396 396** to start a conversation.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/empty_property/items/vacant_unfurnished#notify#e1f2a3b4 -->

## Tell us about your empty property

You must notify us when a property becomes empty — and again when it is reoccupied. The charge, and the clock for the premium, starts from the date you tell us (or the date we discover the property is empty, if earlier).

**Online:** Sign in to [My Gloucester](https://gloucester-self.achieveservice.com/) → Council Tax → Notify us of a vacant property.

**By phone or email:** Call **01452 396 396** or email **revenues@gloucester.gov.uk**. We will need the address, the date it became empty, and whether it is furnished or unfurnished.

## The law behind empty property charges

The empty property exemptions are set out in the **Council Tax (Exempt Dwellings) Order 1992**. The power to charge premiums on long-term empty properties comes from **Section 11B of the Local Government Finance Act 1992**, as amended. Gloucester City Council resolves the precise premium percentages annually.

## Compare with the original page

This page takes a **timeline and scenario** approach to the same rules covered in the [discounts section empty properties page](/council-tax/discounts/empty-properties/), which organises the information by discount type. Neither is wrong — they suit different readers.
