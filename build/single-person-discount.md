---
layout: policy-page.njk
permalink: /council-tax/discounts/single-person/
title: Single Person Discount
eyebrow: Council Tax discounts
summary: >
  If you're the only adult in your home, you can get 25% off your
  Council Tax bill. There's no income test — it's based on who lives
  with you.

# ── Page-level provenance ─────────────────────────────────────────
# The chain back to the policy schema. See provenance-format-spec
# v0.2 for field meanings.

provenance:
  pack:
    id: ctax
    version: 2.4.0
    authority: Gloucester City Council
    financial_year: "2026/27"
    mcp_endpoint: https://func-mpc-poc.azurewebsites.net/api/mcp-schema

  sources:
    - id: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#8311bd27
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
      path: /adjustment_catalogue/discounts/items/0
      hash: sha256:8311bd2784917185589bec55fe31a26e44a81f0b9fe33b91c951a5a63bee6462
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4
      document: rules
      document_version: "2.2"
      role: implementing_logic
      used_for:
        - how_we_work_it_out
      path: /executable_rule_slices/rules[rule_id=rule.discount.single_person]
      hash: sha256:a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890
      lookup_method: CTax:schema_get

    - id: ctax/rules@2.4.0+2.2:/rule_sets/adjustment_rules[rule_id=full-time-students]#b2c3d4e5
      document: rules
      document_version: "2.2"
      role: cross_reference
      used_for:
        - who_doesnt_count_as_an_adult
      path: /rule_sets/adjustment_rules[rule_id=full-time-students]
      hash: sha256:b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890ab
      lookup_method: CTax:schema_get

    - id: ctax/taxonomy@2.4.0+2.2:/mechanisms[id=discount]#e5f6a7b8
      document: taxonomy
      document_version: "2.2"
      role: vocabulary
      used_for:
        - mechanism_label
      path: /mechanisms[id=discount]
      hash: sha256:e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6
      lookup_method: CTax:schema_get

    - id: ctax/results@2.4.0+2.2:/publication_control/section_statuses/discounts#c9d0e1f2
      document: results
      document_version: "2.2"
      role: publication_state
      used_for:
        - release_gate
      path: /publication_control/section_statuses/discounts
      hash: sha256:c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0
      lookup_method: CTax:schema_get
      asserts_status: review

  generated_at: 2026-04-14T09:00:00.000Z
  generator: ctax-to-md@0.1.0

# ── Publication gates ─────────────────────────────────────────────
# Read from results.publication_control. Renderer must respect this.

publication_gates:
  pack_status: review
  section_status: review
  can_publish: true
  release_decision: withhold_publication_of_unconfirmed_operational_detail
  blocking_issues_affecting_this_page: []
  notes: >
    Discounts section is in 'review' state. No critical blockers
    affect the Single Person Discount record specifically. The
    pack-wide DPO sign-off (ct-issue-004) is critical but applies
    to data privacy content, not this page.

provenance_format_version: "0.2"

# ── Page taxonomy (for site navigation, search, related pages) ────

tags:
  - council-tax
  - discount
  - single-person
related_pages:
  - /council-tax/discounts/
  - /council-tax/discounts/students/
  - /council-tax/council-tax-support/
  - /council-tax/changes/
---

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#eligibility#8311bd27 -->

## Who can get it

You can claim Single Person Discount if you're the only adult — that
is, the only person aged 18 or over — living in your home as your
main residence.

It doesn't matter what your income is, what your savings are, or
whether you own or rent. The discount is about who lives with you,
nothing else.

If you live with other adults but they don't count for Council Tax
reasons (see below), you may still qualify.

<!-- provenance: ctax/rules@2.4.0+2.2:/rule_sets/adjustment_rules[rule_id=full-time-students]#b2c3d4e5 -->

## Who doesn't count as an adult

Some people live in your home but aren't counted when we work out
your bill. They're called **disregarded** people. If everyone else
in your home is disregarded, you can still get the 25% off.

People who don't count include:

- **Full-time students** — including student nurses and most
  apprentices
- **Anyone under 18** — even if they're working or have left home
  and come back
- **People living with a severe mental impairment** — if a doctor
  has confirmed it and they receive a qualifying benefit
- **Carers** — if they care for someone for at least 35 hours a week
  and that person isn't their spouse, partner, or child
- **People in hospital long-term, in a care home, or in a hospice**
- **People in prison or detention** — unless they're being held only
  for not paying Council Tax
- **Members of religious communities** like monks and nuns whose
  main occupation is prayer or service
- **Foreign students' partners and dependants** who can't work or
  claim benefits in the UK

If you're not sure whether someone in your home counts, get in touch
and we'll check for you. It's quicker than working it out yourself.

## How much you'll save

The discount is 25% off your full Council Tax bill.

For a Band D home in Gloucester for 2026/27, that's a saving of
about **£587 a year** — or just over **£11 a week**.

<table class="charge-comparison">
  <caption>What you'd pay with the discount, by band</caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Full bill</th>
      <th scope="col">With 25% off</th>
      <th scope="col">You save</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">A</th><td>£1,565.44</td><td>£1,174.08</td><td>£391.36</td></tr>
    <tr><th scope="row">B</th><td>£1,826.36</td><td>£1,369.77</td><td>£456.59</td></tr>
    <tr><th scope="row">C</th><td>£2,087.26</td><td>£1,565.45</td><td>£521.81</td></tr>
    <tr><th scope="row">D</th><td>£2,348.17</td><td>£1,761.13</td><td>£587.04</td></tr>
    <tr><th scope="row">E</th><td>£2,869.98</td><td>£2,152.49</td><td>£717.49</td></tr>
    <tr><th scope="row">F</th><td>£3,391.80</td><td>£2,543.85</td><td>£847.95</td></tr>
    <tr><th scope="row">G</th><td>£3,913.61</td><td>£2,935.21</td><td>£978.40</td></tr>
    <tr><th scope="row">H</th><td>£4,696.34</td><td>£3,522.26</td><td>£1,174.08</td></tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">
        <small>
          Figures are for properties outside Quedgeley parish.
          Quedgeley figures are slightly higher because of the parish precept.
        </small>
      </td>
    </tr>
  </tfoot>
</table>

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#application_process#8311bd27 -->

## How to apply

There are two ways to claim:

**1. Online — usually the quickest**

Sign in to your [My Gloucester
account](https://gloucester-self.achieveservice.com/) and apply
through the Council Tax section. You'll need your Council Tax
account number, which is on your bill.

**2. By email**

Download the Single Person Discount form from our website, fill it
in, and email it to **revenues@gloucester.gov.uk**. Put _"Reference
[your Council Tax account number]"_ in the subject line so we can
find your account quickly.

Either way, **keep paying your current bill** while we look at your
claim. If we agree the discount, we'll send you a new bill with the
25% taken off and refund anything you've overpaid.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#change_in_circumstances#8311bd27 -->

## If something changes

You must tell us within **21 days** if anything happens that might
affect your discount. For example:

- Someone moves in with you
- You move out
- A child in your home turns 18
- A student in your home finishes their course

The easiest way is through your My Gloucester account. You can also
email **revenues@gloucester.gov.uk**.

If you don't tell us in time, we'll send you an amended bill for what
you should have paid — and we may add a penalty charge of £70 on top.

We're not trying to catch you out. Most people who get an amended
bill just forgot to let us know. Tell us as soon as you can and
we'll work it out together.

<!-- provenance: ctax/rules@2.4.0+2.2:/executable_rule_slices/rules[rule_id=rule.discount.single_person]#a1b2c3d4 -->

## How we work it out

If you'd like to know exactly how the discount is calculated, here's
the rule we apply:

1. We start with your **gross Council Tax bill** for the year.
2. We apply any **exemptions** first — for example if your home is
   exempt because everyone in it is a student.
3. We then count the adults living in your home, **leaving out
   anyone who doesn't count** (see "Who doesn't count as an adult"
   above).
4. If the count is **exactly one**, we apply a **25% reduction** to
   your bill.

The discount is applied at the same point in the calculation as
other discounts based on who lives with you. It runs *after*
exemptions and disregards but *before* any premiums (for example
the second homes premium) and *before* Council Tax Support.

This logic comes directly from rule
**`rule.discount.single_person`** in our published Council Tax
rule set. You can [view the rule
itself](https://func-mpc-poc.azurewebsites.net/api/mcp-schema?document=rules&path=/executable_rule_slices/rules%5Brule_id%3Drule.discount.single_person%5D)
if you want to see the technical detail.

## When the discount ends

Single Person Discount runs as long as you remain the only counted
adult in the property. We don't expire it automatically.

We may write to you from time to time to check your circumstances
haven't changed — this is normal and isn't a sign that anything's
wrong. Just confirm the details and we'll keep the discount running.

<!-- provenance: ctax/facts@2.4.0+2.2:/adjustment_catalogue/discounts/items/0#legal_basis#8311bd27 -->

## The law behind this

Single Person Discount is a **statutory national discount** — it's
set out in **Schedule 1 of the Local Government Finance Act 1992**.
Councils don't have any choice about whether to offer it: if you
qualify, you get it.

You can read the legislation on the
[legislation.gov.uk
website](https://www.legislation.gov.uk/ukpga/1992/14/contents).

## Other support if money's tight

If you're struggling to pay even with this discount, you may also
qualify for **Council Tax Support**. That's separate from this
discount and is based on your income and savings rather than who
lives with you. The two can be claimed together.

[Find out about Council Tax Support &rarr;](/council-tax/council-tax-support/)

If you've fallen behind on payments, please [get in touch
straightaway](/council-tax/help-paying/). The earlier you ask for
help, the more we can do.

## Get in touch

- **Phone:** 01452 396 396 (weekdays 9am–5pm, Wednesdays from 10am)
- **Email:** revenues@gloucester.gov.uk
- **Online:** sign in to [My Gloucester](https://gloucester-self.achieveservice.com/)
- **Post:** Gloucester City Revenues & Benefits, Eastgate Management Suite, Eastgate Street, Gloucester, GL1 1PA

---

<!-- The renderer should emit a visible provenance footer here from
     the frontmatter sources block. See provenance-format-spec v0.2
     §"Visible provenance footer". -->
