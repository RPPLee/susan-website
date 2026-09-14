# Decisions: Susan's online presence

Feature: presence
Feature name: Susan's online presence

## op-001 · Susan is the voice, Metaphase is the business
- category: Brand
- status: approved
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

> 2026-09-14 approved by Lee

## op-002 · Both LinkedIn banners use the logo colors and keep the site's headline
- category: LinkedIn
- status: approved
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

> 2026-09-14 approved by Lee

## op-003 · Every change in Susan's accounts is approved on a page before it is made
- category: Process
- status: rejected
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

> 2026-09-14 rejected by Lee: it is fine to go ahead and change

## op-004 · Susan edits everything on the site herself
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-005 · The site evolves, it is not redesigned
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-006 · Susan gets paid for three things online
- category: Payments
- status: approved
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

> 2026-09-14 approved by Lee

## op-007 · An Insights page lists her Substack posts, pulled from the feed
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-008 · Fixed-price items get a checkout; retained work is invoiced
- category: Payments
- status: approved
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

> 2026-09-14 approved by Lee

## op-009 · No paid website platform
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-010 · Put the new banner on Susan's LinkedIn profile
- category: LinkedIn
- status: approved
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

> 2026-09-14 approved by Lee

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

## op-015 · Change her Substack address to susanmills.substack.com
- category: Substack
- status: rejected
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

> 2026-09-14 rejected by Lee: nope we will do that later if we need to

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

## op-018 · Keep payments connected but publish free for now
- category: Substack
- status: rejected
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

> 2026-09-14 rejected by Lee: nope we need to have payments

## op-020 · Add a free web editor on top of the current site
- category: Website
- status: approved
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

## op-023 · Skip the sales call from Stripe
- category: Payments
- status: approved
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
