# Proposed decisions: Susan's online presence

Feature: presence
Feature name: Susan's online presence
Last extracted: 8ea23c5

## op-013 · Rewrite her headline and About section
- category: LinkedIn
- status: proposed
- image: none
- caption:
- screen: LinkedIn profile, intro and About
- source: Lee on the approval page 2026-09-14

**Context.** Her profile says what she does, not who she helps. The website hero now names the journey from idea to impact. Lee marked this "not yet" on the approval page.

**Question.** Does the profile copy get rewritten to match the site?

**Decision.** Draft a headline and About text that match the website and say who she helps. Show both to Lee before anything is saved.

**Why.** A profile that names its audience converts better, and it should say the same thing as the site.

**What else was considered.** Leave the copy as it is.

**What it touches.** LinkedIn profile.

## op-016 · Does Susan want susanmills.substack.com for good?
- category: Substack
- kind: question
- status: answered
- linked: op-015
- image: none
- caption:
- screen: Substack settings
- source: Lee on the approval page 2026-09-14, marking op-015 "ask Susan"

**Context.** Substack allows one address change that keeps old links working. Susan said "for right now", which may mean a trial.

**Question.** Is susanmills.substack.com the name she wants to keep, or does she only want the title to say her name?

**Why.** A trial rename would spend the only link-preserving change Substack allows.

**What it touches.** Substack address.

> 2026-09-14 answered by op-028

## op-019 · Does Susan want to charge readers now?
- category: Substack
- kind: question
- status: answered
- linked: op-018
- image: none
- caption:
- screen: Substack subscribe page
- source: Lee on the approval page 2026-09-14, marking op-018 "ask Susan"

**Context.** Paid plans are switched on. op-018 proposes publishing free until there is a run of posts.

**Question.** Does she want the paywall on now, or free posts until she has more published?

**Why.** It is her income and her readers; the ruling is hers.

**What it touches.** Substack paid settings.

> 2026-09-14 answered by op-027

## op-021 · Which free editor is easy enough for Susan?
- category: Website
- kind: question
- status: open
- linked: op-020
- image: none
- caption:
- screen: none (structure)
- source: Lee on the approval page 2026-09-14, on op-020: "nope. any cms that might be easy for her that we can implement that is free?"

**Context.** The first proposal was Pages CMS. Lee's note on the approval page read "nope", followed by the question whether any free editor is easy for her. The comparison since then found that Pages CMS invites her by email with no GitHub account, and that it is the only free option that does so with full Jekyll support.

**Question.** Is Pages CMS easy enough for Susan, or is there a free editor Lee prefers?

**Why.** The editor decides whether Susan can actually make changes alone.

**What it touches.** Susan's login, the repo's CMS config, the build.

## op-024 · Is Susan comfortable ignoring the Stripe email?
- category: Payments
- kind: question
- status: open
- linked: op-023
- image: none
- caption:
- screen: none (process)
- source: Lee on the approval page 2026-09-14, marking op-023 "ask Susan"

**Context.** Susan asked whether she really needs a Stripe account and whether Substack's payments are enough. The answer is that Substack's payments run through that Stripe account.

**Question.** Now that she knows the account is what Substack uses, is she fine leaving the email unanswered?

**Why.** It is her inbox and her name.

**What it touches.** Nothing on the site.

## op-026 · The agent may change Susan's accounts without asking first
- category: Process
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-026.svg
- screen: none (process)
- source: Lee on the page 2026-09-14, rejecting op-003: "it is fine to go ahead and change"

**Context.** op-003 proposed that every change in Susan's LinkedIn, Substack and Stripe accounts waits for a yes on a page. Lee rejected it and said it is fine to go ahead and change. This card reverses op-003.

**Question.** How much may the agent do in Susan's accounts on its own?

**Decision.** The agent makes approved kinds of change (banners, links, profile details, Substack branding) directly, and reports what it changed afterwards. Copy that speaks in Susan's voice, prices, and anything that cannot be undone still go to Lee or Susan first.

**Why.** Lee does not want to press a button for every small change. The exceptions cover what a reversal cannot fix.

**What else was considered.** A yes on the page before every change (op-003, rejected).

**What it touches.** LinkedIn profile, LinkedIn company page, Substack settings.

## op-027 · The Substack paywall stays on
- category: Substack
- status: proposed
- image: none
- caption:
- screen: Substack subscribe page
- source: Lee on the page 2026-09-14, rejecting op-018: "nope we need to have payments"
- linked: op-019

**Context.** op-018 proposed publishing free until Susan has a run of posts. Lee rejected it: she needs payments. Paid plans are on at $8 a month, $80 a year and $240 founding. This card reverses op-018 and answers op-019 on Susan's behalf.

**Question.** What happens to the paid plans that are already switched on?

**Decision.** The plans stay on at their current prices. Each post's audience is Susan's choice per post; the default stays "everyone" so new readers see something before they are asked to pay.

**Why.** Susan wants to be paid for her writing now, not after a run of posts.

**What else was considered.** Free posts until there is a run of them (op-018, rejected); lower prices to Substack's minimum.

**What it touches.** Substack paid settings, each post's audience setting.

## op-028 · The Substack address stays metaphase.substack.com for now
- category: Substack
- status: proposed
- image: none
- caption:
- screen: Substack settings
- source: Lee on the page 2026-09-14, rejecting op-015: "nope we will do that later if we need to"
- linked: op-016

**Context.** op-015 proposed spending Substack's one link-preserving rename on susanmills.substack.com. Lee rejected it: later, if needed. This card answers op-016 on Susan's behalf.

**Question.** Does the address change now?

**Decision.** No. The address stays as it is. The publication title can say Susan Mills without touching the address. A rename is revisited only if she asks for it again.

**Why.** The one rename should not be spent on a maybe.

**What else was considered.** Rename now (op-015, rejected); a custom domain.

**What it touches.** Substack settings.
