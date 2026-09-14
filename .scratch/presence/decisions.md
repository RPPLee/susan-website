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

## op-029 · Pages CMS is the editor, proven by Lee's own edit before Susan is invited
- category: Website
- status: proposed
- image: none
- caption:
- screen: Pages CMS at app.pagescms.org
- source: grill 2026-09-14
- linked: op-021

**Context.** op-020 approved Pages CMS and op-021 asked whether it is easy enough for Susan or whether Lee prefers another free editor. The research compared seven editors; Pages CMS is the only free one that invites her by email with no GitHub account and supports Jekyll collections, front matter, images and settings data. Lee said to go with it and see if it works with Jekyll.

**Question.** Is Pages CMS easy enough for Susan, or is there a free editor Lee prefers?

**Decision.** 1. Pages CMS is the editor. 2. Lee installs it on the live repo and makes the first edit himself, a service price, and the change must appear on metaphasemgt.com within minutes without touching GitHub. 3. Only then is Susan invited by email.

**Why.** It is the only free option with an email login and full Jekyll support. Saves commit straight to the live site, so Lee proves the round trip before she sees it; git history undoes any mistake, so a copy of the repo is not worth the setup.

**What else was considered.** Sveltia with a GitHub account for Susan; Tina's free two-seat cloud with a heavier build; a trial on a copy of the repo; Susan trying it from day one.

**What it touches.** Susan's login, the repo's `.pages.yml`, the build.

## op-030 · Leave the Stripe email unanswered
- category: Payments
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-030.svg
- screen: none (process)
- source: grill 2026-09-14
- linked: op-024

**Context.** Stripe emailed Susan after the account Substack created for her. op-023 approved that no call is needed; op-024 asked whether Susan is comfortable leaving the email unanswered now that she knows the account is what Substack charges through.

**Question.** Now that she knows the account is what Substack uses, is she fine leaving the email unanswered?

**Decision.** Yes. The email is ignored. The Substack Stripe account stays connected and nobody replies.

**Why.** Lee ruled it on her behalf: forget about the Stripe email.

**What else was considered.** Replying to decline the call.

**What it touches.** Nothing on the site.

## op-031 · The personal banner goes up in the dark version
- category: LinkedIn
- status: proposed
- image: assets/social/linkedin-banner-personal-dark.png
- caption: The dark personal banner at 1584 by 396.
- screen: LinkedIn profile header
- source: grill 2026-09-14

**Context.** op-010 approved uploading the new banner to Susan's profile with the version picked on the page, and no version was ever picked. Both versions share the layout: headline, gold rule, tagline line and the logo top right. Dark is deep teal with cream type; light is off-white with dark teal type.

**Question.** Which version of the personal banner goes up, dark or light?

**Decision.** The dark version.

**Why.** It matches the site's hero and reads as the brand at a glance. The profile photo overlaps the lower left of the banner, where the dark version has clear space.

**What else was considered.** The light version.

**What it touches.** LinkedIn profile.

## op-032 · Pay buttons go on the five firmly priced items first
- category: Payments
- status: proposed
- image: none
- caption:
- screen: Service pages, price block
- source: grill 2026-09-14

**Context.** op-008 approved a pay button on each fixed-price item and named the programs, the two blitzes and the coaching package. On the site today the blitzes and Turning Point Tenders say "contact for pricing", and Tapestry is priced per person by group size. Five items carry a firm published price.

**Question.** Which items get a pay button first, given that some have no published price?

**Decision.** 1. Buttons on the coaching initial session, the four-session coaching package, Peer Circles formation, Team Building initial planning, and Tapestry. 2. Tapestry is a per-seat button at the group-of-five price; the group-of-ten rate is invoiced. 3. The blitzes get a button once Susan names a price. 4. Susan confirms the five prices before any button goes live, as op-008 requires.

**Why.** A button needs a price. Waiting for the whole list would hold the items that are ready.

**What else was considered.** Hold every button until the whole price list is confirmed; buttons only on the coaching package and Tapestry.

**What it touches.** Service pages, the Metaphase Stripe account.

**Details.** Coaching $250 initial, $150 an hour after, $500 for four sessions. Peer Circles $500 formation and planning. Team Building $500 initial planning. Tapestry $400 a person in a group of five, $300 a person in a group of six to ten.

## op-033 · The nine service pages split into individuals, groups and organizations
- category: Website
- status: proposed
- image: none
- caption:
- screen: Homepage, services section
- source: grill 2026-09-14

**Context.** op-022 approved grouping the services into individuals, groups and organizations. The site has seven services and two programs, each with a service page, and a separate Programs page that lists the enrolling programs.

**Question.** Which service goes in which group, and where do the programs sit?

**Decision.** 1. Individuals: Coaching & Mentoring, Turning Point Tenders. 2. Groups: Peer Circles, Tapestry. 3. Organizations: BizBlitz, VizBlitz, Team Building, Strategic Planning, Performance. 4. The programs are listed in their group and the Programs page stays as the enrolling view.

**Why.** A first-time visitor should find Tapestry under Groups without knowing the word "program".

**What else was considered.** Grouping only the seven services and leaving the programs on their own page.

**What it touches.** Homepage services section, service front matter, Programs page.

## op-034 · The booking link is a Google Calendar appointment schedule
- category: Website
- status: proposed
- image: none
- caption:
- screen: Homepage hero and Contact page
- source: grill 2026-09-14

**Context.** op-022 approved one booking link for a first conversation. Susan runs LinkedIn, Substack and Stripe through her Google account.

**Question.** Which tool is behind the booking link, and where does it appear?

**Decision.** 1. A Google Calendar appointment schedule in Susan's account. 2. It is the hero button and sits at the top of the Contact page. 3. It is not in the menu.

**Why.** Free, in the account she already uses, and Lee can set it up while logged in as her.

**What else was considered.** Calendly's free tier; a plain mailto link; the booking link in the menu.

**What it touches.** Homepage hero, Contact page, Susan's Google Calendar.

## op-035 · The footer signup is Substack's embedded form
- category: Website
- status: proposed
- image: none
- caption:
- screen: Site footer
- source: grill 2026-09-14

**Context.** op-022 approved a newsletter signup in the footer. Her list lives on Substack, where the paid plans are.

**Question.** Where do footer signups go?

**Decision.** Substack's embedded subscribe form, so every signup lands in her Substack list and nowhere else.

**Why.** One list, hers, and it feeds the paywall.

**What else was considered.** A link to the Substack subscribe page; a separate mailing list on the site.

**What it touches.** Site footer, Substack subscriber list.

## op-036 · The Insights page rebuilds once a day from the Substack feed
- category: Website
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-036.svg
- screen: none (build)
- source: grill 2026-09-14

**Context.** op-007 approved an Insights page that reads the Substack feed when the site builds. The site builds on GitHub's Jekyll action, which cannot run a custom plugin. Substack has no webhook, so nothing can tell the site the instant she publishes; every option polls the public feed. Lee asked for it to be automatic and settled on once a day.

**Question.** How do new Substack posts reach the Insights page without Susan doing anything?

**Decision.** 1. The deploy workflow gains a daily schedule. 2. A step before the Jekyll build downloads the feed into a data file, and the page renders from it. 3. Nothing is committed; a post shows on the site within a day of publishing.

**Why.** Posts become real HTML for search engines, and a schedule means Susan never triggers anything. GitHub pauses schedules after 60 days with no commits; Susan's editor saves are commits, so it keeps running.

**What else was considered.** Reading the feed in the browser, which needs a proxy and hides posts from search engines; Zapier or IFTTT as the trigger, which poll too and add an account; hourly or 15-minute polling.

**What it touches.** `.github/workflows/jekyll.yml`, the Insights page, a feed data file.

## op-037 · The Insights page shows the ten latest posts and joins the menu
- category: Website
- status: proposed
- image: none
- caption:
- screen: Insights page
- source: grill 2026-09-14

**Context.** op-007 approved the Insights page with a newsletter signup. The feed carries each post's title, date and a short excerpt.

**Question.** What does the Insights page show, and where is it in the site?

**Decision.** 1. The ten most recent posts, each with title, date, the feed's excerpt and a link that opens the post on Substack. 2. The subscribe form at the top. 3. Insights joins the menu after Services.

**Why.** Readers and the paywall stay on Substack; the site shows she is writing.

**What else was considered.** Full post text on the site; titles only; Insights only in the footer.

**What it touches.** Insights page, site menu in `_data/settings.yml`.

## op-038 · The pay button replaces the registration form on Tapestry
- category: Payments
- status: proposed
- image: none
- caption:
- screen: Tapestry service page
- source: grill 2026-09-14

**Context.** Programs today point to a registration form at /register/ that records interest and takes no money. Tapestry now gets a pay button (op-032).

**Question.** Does the registration form stay next to a pay button?

**Decision.** 1. On Tapestry the pay button replaces the form. 2. The form stays for Turning Point Tenders and anything custom-priced.

**Why.** A form and a pay button side by side make people wonder which one commits them.

**What else was considered.** Both, register first then pay; dropping the form everywhere.

**What it touches.** Tapestry page, Programs page, the registration form.

## op-039 · Buyers land on a thank-you page on the site
- category: Payments
- status: proposed
- image: none
- caption:
- screen: Thank-you page
- source: grill 2026-09-14

**Context.** A Stripe checkout link ends on Stripe's own confirmation page unless told where to send the buyer.

**Question.** What happens after someone pays?

**Decision.** 1. The buyer is sent to a thank-you page on the site that says what happens next. 2. Susan learns of the payment from Stripe's own email. 3. Nothing else is built on the site's side.

**Why.** One page to write, and Stripe already tells her.

**What else was considered.** Stripe's own confirmation page; a separate notification from the site.

**What it touches.** A new thank-you page, each checkout link's success address.

## op-040 · The testimonials section stays hidden until a real one is in
- category: Website
- status: proposed
- image: none
- caption:
- screen: Homepage, testimonials section
- source: grill 2026-09-14

**Context.** op-022 approved three to five named testimonials. None exist in the repo yet.

**Question.** What does the site show for testimonials until Susan supplies them?

**Decision.** 1. The section is built and reads from a data file Susan edits in Pages CMS. 2. It stays hidden until the first real testimonial is entered. 3. No placeholders.

**Why.** Susan pastes them in herself when they arrive, and nothing invented ever goes live.

**What else was considered.** Lee asks Susan for names now and the section waits; launch with placeholders.

**What it touches.** Homepage, a testimonials data file, the editor config.

## op-041 · Lee drafts the copy in Susan's voice; she edits it in the editor before it goes live
- category: Process
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-041.svg
- screen: none (process)
- source: grill 2026-09-14

**Context.** The "who she works with" hero line and the fuller About page (op-022) need words in Susan's voice. The profile document in the repo root has the raw material. op-026, pending, says copy in her voice goes to Lee or Susan first.

**Question.** Who writes the hero line and the About page, and when does Susan see them?

**Decision.** 1. Lee drafts both from the profile document. 2. Susan reads and edits them in Pages CMS before they go live.

**Why.** It matches the rule that copy in her voice goes to her first, and the editor trial gives her a real thing to edit.

**What else was considered.** Susan writes them herself; Lee drafts and publishes and she edits afterwards.

**What it touches.** Homepage hero, About page, the editor.

## op-042 · The work runs banner, editor, site additions, Substack branding, payments
- category: Process
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-042.svg
- screen: none (plan)
- source: grill 2026-09-14

**Context.** Five tracks are approved and ready. Only the payments track waits on Susan, for confirmed prices and the second Stripe account.

**Question.** In what order do the tracks get done?

**Decision.** 1. Upload the dark banner to the profile, the company banner to the company page, and complete the company page. 2. The Pages CMS trial. 3. The site additions: grouping, booking link, footer signup, Insights, testimonials section, About. 4. Substack branding (op-017). 5. Pay buttons, last.

**Why.** Susan's visible asks land first, and the only track blocked on her is last.

**What else was considered.** none recorded

**What it touches.** LinkedIn profile, company page, the editor, the site, Substack, Stripe.
