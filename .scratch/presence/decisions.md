# Proposed decisions: Susan's online presence

Feature: presence
Feature name: Susan's online presence
Last extracted: 8ea23c5

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
- status: answered
- linked: op-020
- image: none
- caption:
- screen: none (structure)
- source: Lee on the approval page 2026-09-14, on op-020: "nope. any cms that might be easy for her that we can implement that is free?"

**Context.** The first proposal was Pages CMS. Lee's note on the approval page read "nope", followed by the question whether any free editor is easy for her. The comparison since then found that Pages CMS invites her by email with no GitHub account, and that it is the only free option that does so with full Jekyll support.

**Question.** Is Pages CMS easy enough for Susan, or is there a free editor Lee prefers?

**Why.** The editor decides whether Susan can actually make changes alone.

**What it touches.** Susan's login, the repo's CMS config, the build.

> 2026-09-14 answered by op-029

## op-024 · Is Susan comfortable ignoring the Stripe email?
- category: Payments
- kind: question
- status: answered
- linked: op-023
- image: none
- caption:
- screen: none (process)
- source: Lee on the approval page 2026-09-14, marking op-023 "ask Susan"

**Context.** Susan asked whether she really needs a Stripe account and whether Substack's payments are enough. The answer is that Substack's payments run through that Stripe account.

**Question.** Now that she knows the account is what Substack uses, is she fine leaving the email unanswered?

**Why.** It is her inbox and her name.

**What it touches.** Nothing on the site.

> 2026-09-14 answered by op-030

## op-063 · The workflow builds from the Gemfile, so the test and the deploy run the same Jekyll
- category: Spec
- status: proposed
- depends: op-048, op-043
- image: none
- caption:
- screen: none (toolchain)
- source: implement ticket 01, 2026-09-14

**Context.** op-048 clause 3 keeps GitHub's `jekyll-build-pages` action and says both builds use Jekyll 4. Ticket 01 found otherwise: the action pins the `github-pages` gem at 232, which is Jekyll 3.10, while the Gemfile, the local build and the test use Jekyll 4.4. Ticket 01 shipped with the mismatch and noted it in `docs/agents/build.md`; the site builds under both today.

**Question.** Should the deploy build with the same Jekyll the test builds with?

**Decision.** 1. The workflow replaces the `jekyll-build-pages` step with `bundle exec jekyll build` from the Gemfile, using the Ruby it already installs for the test. 2. `JEKYLL_ENV=production` and the Pages base path are set the way the action set them. 3. Nothing else in the workflow changes.

**Why.** op-048's own reason: the tests are worthless if the build they run does not match the one that deploys. One build command in three places (Lee's machine, the test, the deploy) means a green test is a safe deploy.

**What else was considered.** Pinning the Gemfile to the `github-pages` gem so the local build drops to Jekyll 3.10; leaving the mismatch.

**What it touches.** `.github/workflows/jekyll.yml`, `docs/agents/build.md`.
