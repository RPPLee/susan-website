# Proposed decisions: Susan's online presence

Feature: presence
Feature name: Susan's online presence
Last extracted: 8ea23c5

## op-001 · Susan is the voice, Metaphase is the business
- category: Brand
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-001.svg
- screen: none (structure)
- source: grill 2026-09-12

**Context.** Susan has a personal LinkedIn profile, a Metaphase company page, a website at metaphasemgt.com and a Substack called Experience Matters. The Substack is personal in name and subject: reflections on her travels since 1946. Before this, nothing said which channel spoke as whom.

**Question.** Which channels speak as Susan and which as Metaphase?

**Decision.** The Substack and her personal LinkedIn profile speak as Susan Mills. The website and the company page speak as Metaphase Management Associates. Each links to the other.

**Why.** The Substack is already personal, and a founder with forty years of reputation is the draw. Keeping the firm separate lets her write about anything without it reading as consulting copy.

**What else was considered.** Everything under the Metaphase name; everything under Susan's name with Metaphase as the legal name behind it.

**What it touches.** LinkedIn profile, LinkedIn company page, Substack, website footer and links.

## op-002 · Both LinkedIn banners use the logo colors and keep the site's headline
- category: LinkedIn
- status: proposed
- image: assets/social/linkedin-banner-personal-dark.png
- caption: The personal banner, dark version, at LinkedIn's 1584 by 396 size.
- screen: LinkedIn profile header
- source: grill 2026-09-12

**Context.** Lee's mockup for the personal banner used plum and orange. The Metaphase logo is teal, gold and dark teal. LinkedIn company pages take a shorter banner than personal profiles.

**Question.** What do the banners look like, and how many are there?

**Decision.** 1. Two banners: personal profile at 1584 by 396 and company page at 1512 by 256. 2. Both use the logo's teal, gold and dark teal with the circles mark. 3. The headline stays "Navigate the journey from Idea to Impact", as on the website. 4. Each comes in a dark and a light version; Lee picks on the page.

**Why.** Two matching banners make the personal page and the company page read as one family, and the headline ties both to the site.

**What else was considered.** A personal banner only; plum and orange kept as a separate personal palette for Susan.

**What it touches.** LinkedIn profile, LinkedIn company page, assets/social.

**Details.** Files: assets/social/linkedin-banner-personal-dark.png, linkedin-banner-personal-light.png, linkedin-banner-company-dark.png, linkedin-banner-company-light.png. The left third of the personal banner stays empty for the profile photo.

## op-003 · Every change in Susan's accounts is approved on a page before it is made
- category: Process
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-003.svg
- screen: none (process)
- source: grill 2026-09-12

**Context.** Lee is logged in to Susan's LinkedIn, Substack and Stripe through Google, so the agent can make changes in her accounts through the browser. Those changes are public and appear under her name.

**Question.** How much may the agent do in Susan's accounts on its own?

**Decision.** The agent drafts every change and lists it on a page in plain words, with a picture where there is one and a button for yes or no. Lee presses the button; only then is the change made. Nothing is changed and reported afterwards.

**Why.** Lee wants to approve each step without reading long terminal text, and a public change under Susan's name should not happen on the agent's judgment alone.

**What else was considered.** The agent produces assets and instructions and Susan makes every change herself; the agent changes freely and reports back.

**What it touches.** Every account change; the decisions page.

## op-004 · Susan edits everything on the site herself
- category: Website
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-004.svg
- screen: none (structure)
- source: grill 2026-09-12

**Context.** The site is hand-built Jekyll on GitHub Pages. Nothing on it can be changed without editing code and pushing. Susan wants to make changes without Lee.

**Question.** Which parts of the site should Susan be able to change without Lee?

**Decision.** Service titles, descriptions and prices; program pages and dates; the homepage intro; her bio and photos; testimonials; contact details. Layout, navigation and new page types stay with Lee.

**Why.** Her work plan is words, prices and program announcements, roughly monthly. That list covers it without letting her break the design.

**What else was considered.** A narrower list limited to prices and program dates.

**What it touches.** _services, pages, _data/settings.yml, index.html, assets/images.

## op-005 · The site evolves, it is not redesigned
- category: Website
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-005.svg
- screen: none (structure)
- source: grill 2026-09-12

**Context.** Susan asked to redo the site and make it look professional. A friend she forwarded thought the current site was clear and effective and only wanted more content. A review of four comparable consultant sites found the same brand and structure, with more credibility material.

**Question.** Does "redo" mean a new design or a stronger version of this one?

**Decision.** Keep the structure and brand. Add what the comparable sites have: named testimonials, a line saying who she works with, services grouped into three, one booking link, a newsletter signup and a fuller bio. If the platform changes later, the move is a port with additions, not a fresh design.

**Why.** The current site already represents her well. What it lacks is proof and content, not a new look.

**What else was considered.** A full redesign on a platform she can edit.

**What it touches.** index.html, pages/about.html, _services, _includes/footer.html.

## op-006 · Susan gets paid for three things online
- category: Payments
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-006.svg
- screen: none (structure)
- source: grill 2026-09-12

**Context.** Substack has paid plans switched on and its own Stripe account connected. The website's registration form is an expression of interest only. Coaching is $250 for the first session, $150 an hour, $500 for four sessions.

**Question.** What does Susan want to collect money for online?

**Decision.** Paid Substack subscriptions, program registrations, and coaching packages. All three.

**Why.** Lee's ruling on Susan's behalf, from what she has asked for.

**What else was considered.** Substack only; nothing online, invoicing every client directly.

**What it touches.** Substack, pages/register.html, _services, Stripe.

## op-007 · An Insights page lists her Substack posts, pulled from the feed
- category: Website
- status: proposed
- image: none
- caption:
- screen: Insights page
- source: grill 2026-09-14

**Context.** The site has no blog. Her writing lives on Substack. The comparable sites use a blog or resources page to show they are active.

**Question.** How does the site show her writing?

**Decision.** An Insights page that lists her recent Substack posts, read from the Substack feed when the site builds, with a newsletter signup. She keeps writing in one place.

**Why.** One place to write, and the site shows she is writing, without splitting her readers between two blogs.

**What else was considered.** A link and signup only; republishing the posts on the site.

**What it touches.** A new Insights page, the build workflow, the footer.

## op-008 · Fixed-price items get a checkout; retained work is invoiced
- category: Payments
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-008.svg
- screen: none (structure)
- source: grill 2026-09-14

**Context.** The site publishes prices, which none of the four comparable sites do. Programs, the two blitzes and the coaching package have fixed prices. Strategic planning and performance work are retained engagements.

**Question.** How do public prices and payment fit together?

**Decision.** Prices stay public. Each fixed-price item, meaning the programs, the two blitzes and the coaching package, gets a pay button. Retained work is quoted and invoiced. Susan confirms that the prices from the older flyers still stand before any button goes live.

**Why.** Public prices are a differentiator she already has. Checkout on the fixed items removes a step for the client without forcing a price on work that is scoped in conversation.

**What else was considered.** Prices public with no checkout; prices taken off the public pages and quoted privately.

**What it touches.** _services, pages/register.html, pages/programs.html, Stripe.

## op-009 · No paid website platform
- category: Website
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-009.svg
- screen: none (structure)
- source: grill 2026-09-14

**Context.** Squarespace and Wix would give Susan an editor she can use, at $16 to $40 a month. Lee is a web developer and can build any editing setup himself.

**Question.** May the site move to a paid builder so Susan can edit it?

**Decision.** No. The editing setup is free to run. The site stays on GitHub Pages at metaphasemgt.com.

**Why.** Lee does not want a monthly platform fee for something he can build.

**What else was considered.** Squarespace, Wix, WordPress.com, Framer.

**What it touches.** The whole site, hosting.

## op-010 · Put the new banner on Susan's LinkedIn profile
- category: LinkedIn
- status: proposed
- image: assets/social/linkedin-banner-personal-light.png
- caption: The personal banner, light version.
- screen: LinkedIn profile header
- source: Lee on the approval page 2026-09-14

**Context.** Two versions of the personal banner are rendered, dark and light, per op-002. Lee's note on the approval page read "yes do it but" and stopped there, and no version was picked.

**Question.** Which version goes up, and what was the "but"?

**Decision.** Upload the chosen version to Susan's profile. The version is picked on this page.

**Why.** The banner is the first thing a visitor sees and it currently carries no Metaphase branding.

**What else was considered.** none recorded

**What it touches.** LinkedIn profile.

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

## op-015 · Change her Substack address to susanmills.substack.com
- category: Substack
- status: proposed
- image: none
- caption:
- screen: Substack settings
- source: Lee on the approval page 2026-09-14

**Context.** The Substack lives at metaphase.substack.com. Susan asked for susanmills.substack.com "for right now". Substack can move an address and keep old links working, but only once, ever. Her publication name and her profile handle can be changed freely, any time, without spending that.

**Question.** Does the address change now?

**Decision.** Change the address to susanmills.substack.com using the one-time rename that keeps old links working, once Susan confirms she wants that name for good.

**Why.** The one rename should be spent on a name she will keep. The publication name can change on its own if she only wants the title to say Susan Mills.

**What else was considered.** Rename the publication title only; buy a custom domain such as newsletter.metaphasemgt.com for $50.

**What it touches.** Substack address, every existing link to it.

## op-016 · Does Susan want susanmills.substack.com for good?
- category: Substack
- kind: question
- status: open
- linked: op-015
- image: none
- caption:
- screen: Substack settings
- source: Lee on the approval page 2026-09-14, marking op-015 "ask Susan"

**Context.** Substack allows one address change that keeps old links working. Susan said "for right now", which may mean a trial.

**Question.** Is susanmills.substack.com the name she wants to keep, or does she only want the title to say her name?

**Why.** A trial rename would spend the only link-preserving change Substack allows.

**What it touches.** Substack address.

## op-018 · Keep payments connected but publish free for now
- category: Substack
- status: proposed
- image: none
- caption:
- screen: Substack subscribe page
- source: Lee on the approval page 2026-09-14

**Context.** Readers are asked for $8 a month, $80 a year or $240 as a founding member, against two published posts. Substack keeps a tenth of every payment and Stripe about another three percent.

**Question.** What happens to the paid plans that are already switched on?

**Decision.** Keep Stripe connected and the plans defined, but publish every post free until she has a run of posts. Turn the paywall on then.

**Why.** Asking for money from the second post puts new readers off before there is anything to pay for.

**What else was considered.** Leave the plans on as they are; lower the prices to Substack's minimum of $5 and $30.

**What it touches.** Substack paid settings, every post's audience setting.

**Details.** Plans on 2026-09-11: $8 a month, $80 a year, $240 founding. Substack minimums: $5 a month, $30 a year.

## op-019 · Does Susan want to charge readers now?
- category: Substack
- kind: question
- status: open
- linked: op-018
- image: none
- caption:
- screen: Substack subscribe page
- source: Lee on the approval page 2026-09-14, marking op-018 "ask Susan"

**Context.** Paid plans are switched on. op-018 proposes publishing free until there is a run of posts.

**Question.** Does she want the paywall on now, or free posts until she has more published?

**Why.** It is her income and her readers; the ruling is hers.

**What it touches.** Substack paid settings.

## op-020 · Add a free web editor on top of the current site
- category: Website
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-020.svg
- screen: none (structure)
- source: Lee on the approval page 2026-09-14

**Context.** Per op-004 Susan edits everything and per op-009 no paid platform. Of the free editors that sit on a GitHub repo, Pages CMS is the only one where an editor is invited by email and needs no GitHub account. Sveltia and Decap need a GitHub account with write access; TinaCMS invites by email but caps the free plan at two users and adds build tooling; CloudCannon has no free plan.

**Question.** How does Susan get an editor for the site without a paid platform?

**Decision.** Pages CMS, the free hosted app, on top of the current Jekyll site. Lee installs it on the repo once and invites Susan by email. She opens app.pagescms.org, sees Services, Programs, Site settings and Media in a sidebar, edits fields or a rich-text body, and presses Save. The save commits to the repo and the site rebuilds within a few minutes. There is no draft step; git history is the undo.

**Why.** It keeps the site, the address and the design, and costs nothing to run.

**What else was considered.** TinaCMS free tier (email login, two-user cap, heavier setup); Sveltia and Decap (need a GitHub account for Susan); Notion as the content source with a build that pulls it in.

**What it touches.** `.pages.yml` in the repo, the Pages CMS GitHub App on the repo, Susan's email invite.

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

## op-023 · Skip the sales call from Stripe
- category: Payments
- status: proposed
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-023.svg
- screen: none (process)
- source: Lee on the approval page 2026-09-14

**Context.** A Stripe salesperson emailed Susan after a Stripe account was created for Metaphase. Substack requires a writer's own Stripe account before it can charge readers, so the account exists because her paid plans were switched on.

**Question.** Does Susan need to answer the Stripe email?

**Decision.** No call is needed. The account stays connected to Substack. Nothing else to do.

**Why.** The email is routine outreach to a new account.

**What else was considered.** Taking the call.

**What it touches.** Nothing.

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
