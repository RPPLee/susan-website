# Decisions: Susan's online presence

Feature: presence
Feature name: Susan's online presence

## op-011 · Put the matching banner on the Metaphase company page
- category: LinkedIn
- status: approved
- image: assets/social/linkedin-banner-company-dark.png
- caption: The company banner, dark version, at LinkedIn's 1512 by 256 size.
- screen: LinkedIn company page header
- source: Lee on the approval page 2026-09-14

**Context.** The company page takes a shorter banner than a profile. A shorter version of the same design is rendered in dark and light.

**Question.** Does the company page get the matching banner?

**Decision.** Yes. Upload the company banner in the same version as the personal one.

**Why.** Keeping them a family is what makes the two pages read as one business.

**What else was considered.** none recorded

**What it touches.** LinkedIn company page.

> 2026-09-14 approved by Lee

## op-012 · Feature her Substack on her profile
- category: LinkedIn
- status: approved
- image: none
- caption:
- screen: LinkedIn profile, Featured section
- source: Lee on the approval page 2026-09-14

**Context.** LinkedIn's Featured section shows a link as a preview card near the top of a profile. Contact details can list websites. A custom button such as "View my newsletter" needs a paid LinkedIn plan.

**Question.** How does her profile point to the Substack?

**Decision.** Add Experience Matters to the Featured section, and list both the Substack and metaphasemgt.com in her contact details. No paid custom button.

**Why.** Free, reversible, and it puts the Substack where profile visitors look first.

**What else was considered.** A paid LinkedIn plan for the custom button.

**What it touches.** LinkedIn profile.

> 2026-09-14 approved by Lee

## op-014 · Fill in the Metaphase company page
- category: LinkedIn
- status: approved
- image: none
- caption:
- screen: LinkedIn company page
- source: Lee on the approval page 2026-09-14

**Context.** The company page is thin: little description, no tagline, and the details do not match the site.

**Question.** Does the company page get completed?

**Decision.** Yes. Tagline, website link, location, specialties and a full description, taken from the site's settings.

**Why.** The profile links to the company page; a thin page undercuts that link.

**What else was considered.** none recorded

**What it touches.** LinkedIn company page, _data/settings.yml as the source of the text.

> 2026-09-14 approved by Lee

## op-017 · Give the Substack her own look
- category: Substack
- status: approved
- image: none
- caption:
- screen: Substack home page
- source: Lee on the approval page 2026-09-14

**Context.** The Substack uses the default orange theme, a personal photo as its logo, no wordmark and no About page.

**Question.** How is the Substack branded?

**Decision.** A logo, colors, a real About page and named sections, built from Susan's own palette rather than the Metaphase logo, since the writing is personal. Drafts go to Lee first.

**Why.** Per op-001 the Substack speaks as Susan. A default theme reads as unfinished.

**What else was considered.** Metaphase branding on the Substack.

**What it touches.** Substack theme, About page, sections.

> 2026-09-14 approved by Lee

## op-022 · Add the credibility material the comparable sites have
- category: Website
- status: approved
- image: none
- caption:
- screen: Home page
- source: Lee on the approval page 2026-09-14

**Context.** Four comparable consultant sites all carry named testimonials, a clients or "who we work with" section, a stated audience, one repeated call to action and services grouped into three or four. metaphasemgt.com has none of these.

**Question.** What content does the site add?

**Decision.** 1. Three to five named testimonials with title and organization. 2. A line in the hero saying who she works with. 3. The seven services grouped into three: individuals, groups, organizations. 4. One booking link for a first conversation. 5. A newsletter signup in the footer. 6. A fuller About page.

**Why.** This is what "professional" means on the sites Susan pointed to. Testimonials need real names and permission, which only Susan can get.

**What else was considered.** A full redesign (rejected in op-005).

**What it touches.** index.html, pages/about.html, _services, _includes/footer.html.

> 2026-09-14 approved by Lee

## op-025 · A second Stripe account for coaching and program payments
- category: Payments
- status: approved
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-025.svg
- screen: none (structure)
- source: Lee on the approval page 2026-09-14

**Context.** Substack can only sell subscriptions to itself; it cannot take a program registration or a coaching fee. Substack advises keeping its Stripe account separate from other business. Stripe allows several accounts under one login, paying into the same bank.

**Question.** How are coaching and program payments taken?

**Decision.** A second Stripe account under Susan's existing login, for Metaphase. Each fixed-price item on the website gets a Stripe checkout link (op-008). The Substack account stays as it is.

**Why.** Two accounts keep "Experience Matters" and "Metaphase" from mixing on a client's card statement, and checkout links need no code and no monthly fee.

**What else was considered.** Reusing the Substack Stripe account for everything.

**What it touches.** Stripe, pages/register.html, _services.

**Details.** Stripe card fee 2.9% plus 30 cents; no extra fee for checkout links.

> 2026-09-14 approved by Lee
