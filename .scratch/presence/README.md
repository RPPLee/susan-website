# presence: where things stand

Read this first in a fresh session. The record is the truth; this is the story around it.

## Where the record is

- Approved and rejected: `docs/ssot/decisions/presence.md` (42 approved, 3 rejected as of 2026-09-14, after Lee approved all 25 pending cards in the terminal because the page was unreachable on his phone).
- Proposed and open: `.scratch/presence/decisions.md` (0 proposed, 0 open questions).
- The page: the `Artifact:` line in `docs/ssot/decisions/README.md`. Lee and Susan rule there.
- Tooling and rules: `docs/ssot/decisions/README.md`. Skills: `/ssot`, `/grill-with-docs-lee presence`, `/to-spec-lee presence`, `/to-tickets-lee presence`.
- Glossary: `CONTEXT.md`. Research behind the cards: `docs/research/`.

## What Susan asked for (email of 2026-09-11, via Lee)

1. Update her LinkedIn, link it to her Substack, and put up a new banner in Metaphase branding. Lee's plum-and-orange mockup is `Susan Mills LinkedIn Banner.html` in the repo root (untracked). The rebuilt banners in her logo colors are in `assets/social/`.
2. Her Substack is https://metaphase.substack.com. She floated renaming it to susanmills.substack.com "for right now". Ruled: not now (op-028 proposed, op-015 rejected).
3. Redo the site so she can edit it herself. Ruled: evolve the site (op-005), Pages CMS as the editor (op-020), no paid platform (op-009).
4. Make it look professional. The sites she compared are in `docs/research/2026-09-12-comparison-sites.md`; the additions are op-022.
5. Stripe emailed her after an account was created. Answer: Substack made it; no call needed (op-023).

## What is already built

- Four banners rendered at LinkedIn's sizes, `assets/social/linkedin-banner-{personal,company}-{dark,light}.png`. The personal one is approved to upload (op-010) but no version is picked yet.
- Nothing has been changed in any of Susan's accounts. Lee is logged in to LinkedIn, Substack and Stripe via Google in the browser.
- Two earlier notes in `docs/agents/` and the site status in Lee's memory.

## The grill of 2026-09-14

Lee closed op-021 (Pages CMS, op-029) and op-024 (ignore the Stripe email, op-030) and ruled on the rest of the plan: op-031 to op-042 cover the banner version, which items get pay buttons, the service grouping, the booking link, the footer signup, the Insights page and its daily rebuild, the registration form, the thank-you page, testimonials, copy in Susan's voice, and the order of work. Lee's banner mockup moved to `docs/research/2026-09-11-linkedin-banner-mockup.html`; the stale screenshots were deleted. op-011's stray second Approve was applied by the prologue and then reverted on Lee's ruling; the card stays approved.

## Open threads

- Prices on the older service pages date from earlier flyers; Susan has not confirmed them (op-008 and op-032 need that before pay buttons go live).
- The spec is `.scratch/presence/spec.md` (written 2026-09-14). Its seven Spec cards, op-043 to op-049, are approved.
- Lee's machine cannot build the site today (system Ruby 2.6, Jekyll 3.9; the Gemfile wants 4.3). op-048 covers the fix.
