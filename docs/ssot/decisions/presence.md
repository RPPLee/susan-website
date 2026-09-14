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

## op-013 · Rewrite her headline and About section
- category: LinkedIn
- status: approved
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

## op-026 · The agent may change Susan's accounts without asking first
- category: Process
- status: approved
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

> 2026-09-14 approved by Lee

## op-027 · The Substack paywall stays on
- category: Substack
- status: approved
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

> 2026-09-14 approved by Lee

## op-028 · The Substack address stays metaphase.substack.com for now
- category: Substack
- status: approved
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

> 2026-09-14 approved by Lee

## op-029 · Pages CMS is the editor, proven by Lee's own edit before Susan is invited
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-030 · Leave the Stripe email unanswered
- category: Payments
- status: approved
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

> 2026-09-14 approved by Lee

## op-031 · The personal banner goes up in the dark version
- category: LinkedIn
- status: approved
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

> 2026-09-14 approved by Lee

## op-032 · Pay buttons go on the five firmly priced items first
- category: Payments
- status: approved
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

> 2026-09-14 approved by Lee

## op-033 · The nine service pages split into individuals, groups and organizations
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-034 · The booking link is a Google Calendar appointment schedule
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-035 · The footer signup is Substack's embedded form
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-036 · The Insights page rebuilds once a day from the Substack feed
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-037 · The Insights page shows the ten latest posts and joins the menu
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-038 · The pay button replaces the registration form on Tapestry
- category: Payments
- status: approved
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

> 2026-09-14 approved by Lee

## op-039 · Buyers land on a thank-you page on the site
- category: Payments
- status: approved
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

> 2026-09-14 approved by Lee

## op-040 · The testimonials section stays hidden until a real one is in
- category: Website
- status: approved
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

> 2026-09-14 approved by Lee

## op-041 · Lee drafts the copy in Susan's voice; she edits it in the editor before it goes live
- category: Process
- status: approved
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

> 2026-09-14 approved by Lee

## op-042 · The work runs banner, editor, site additions, Substack branding, payments
- category: Process
- status: approved
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

> 2026-09-14 approved by Lee

## op-043 · One test seam: the built site
- category: Spec
- status: approved
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-043.svg
- screen: none (tests)
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. The spec's Testing Decisions name one seam for everything the repo builds.

**Question.** At what level are the site changes tested?

**Decision.** 1. One seam, the built site: a Node test runs the feed script against a fixture feed, builds the site with Jekyll into a temporary folder with fixture data, and asserts on the pages that come out. 2. It runs locally with `node --test` and in the deploy workflow before the deploy step, so a broken template from any commit, including Susan's editor saves, stops before it reaches metaphasemgt.com. 3. Nothing in a test reaches Substack, Stripe, LinkedIn or Google.

**Why.** The highest seam that exists is the HTML a visitor gets; asserting there covers grouping, buttons, the Insights page and the footer with one runner and no template-level tests to maintain. Running it in the workflow is what makes Susan's own edits safe.

**What else was considered.** Unit tests on Liquid includes; testing only the feed script; no tests, as the site has today.

**What it touches.** A test file under the repo, the deploy workflow, the feed script.

> 2026-09-14 approved by Lee

## op-044 · A script writes the Insights data file before the build
- category: Spec
- status: approved
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-044.svg
- screen: none (build)
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. op-036 rules that the Insights page rebuilds daily from the Substack feed; this card, in the spec's Implementation Decisions, says how the feed becomes page data.

**Question.** How does the feed become something Jekyll can render, and what happens when it is missing?

**Decision.** 1. A Node script in the repo reads the feed from a URL or a local file, keeps the ten newest posts with title, date, link and excerpt, and writes a data file Jekyll reads. 2. The deploy workflow runs it before the build on every push and on the daily schedule. 3. The data file is not committed. 4. When the file is missing or the feed is unreachable, the build succeeds and the Insights page shows the subscribe form and a line saying the posts are on Substack.

**Why.** GitHub's Jekyll action runs no custom plugins, so the fetch has to happen before Jekyll. A file that is never committed keeps Susan's history clean, and a soft failure means one Substack outage cannot take the site down.

**What else was considered.** Committing the data file from the scheduled run; failing the build when the feed is down.

**What it touches.** The feed script, the deploy workflow, the Insights page, the gitignore.

**Details.** Daily run at 06:00 Pacific, 13:00 UTC. Ten posts. Excerpt is the feed's description, trimmed to about 200 characters.

> 2026-09-14 approved by Lee

## op-045 · Services render from the collection, grouped by a front matter field
- category: Spec
- status: approved
- image: none
- caption:
- screen: Homepage, services section
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. The homepage's seven service cards are written by hand in the template today, so an edit in the editor would not reach the homepage. This sits in the spec's Implementation Decisions under services.

**Question.** How does the homepage show the three groups so that Susan's edits reach it?

**Decision.** 1. Each service's front matter gets a `group` field: individuals, groups or organizations. 2. The homepage renders the services from the collection, grouped by that field and ordered by the existing order field. 3. The hand-written cards go.

**Why.** One source for a service's title, tagline and group means Susan's edit in the editor changes the homepage too, and regrouping a service is a dropdown, not a template change.

**What else was considered.** Keeping the hand-written cards and adding group headings around them.

**What it touches.** Service front matter, the homepage, the editor configuration.

> 2026-09-14 approved by Lee

## op-046 · A pay button is a checkout link in the service's front matter
- category: Spec
- status: approved
- image: none
- caption:
- screen: Service page, call to action
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. op-008 and op-032 say which items get a pay button; this card, in the spec's Implementation Decisions under payments, says how a button is put on a page.

**Question.** How does a pay button get onto a service page, and who can put it there?

**Decision.** 1. A service's front matter gets a `checkout` field holding a Stripe checkout link. 2. When it is set, the page shows a pay button with the page's price; when it is not, the page shows today's register-interest and contact buttons. 3. Susan pastes the link into the editor herself; no template knows about Stripe.

**Why.** Susan confirms prices and creates links in Stripe; putting the link in the same form as the price keeps the two together and lets her switch a button on or off without Lee.

**What else was considered.** A list of checkout links in the site settings keyed by service; a Stripe integration in the template.

**What it touches.** Service front matter, the service layout, the editor configuration.

> 2026-09-14 approved by Lee

## op-047 · What the editor exposes to Susan
- category: Spec
- status: approved
- image: none
- caption:
- screen: Pages CMS sidebar
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. op-004 lists what Susan may change and op-020 names the editor; this card, in the spec's Implementation Decisions under the editor, fixes the editor's configuration to that list.

**Question.** Which files and fields does the editor configuration expose?

**Decision.** 1. Services: a collection with title, tagline, price, format, duration, group, checkout link and body. 2. Site settings: the hero's audience line, the intro, her bio, contact details and the booking link. 3. Testimonials: a data file with name, title, organization and quote. 4. The About page body and the Programs page. 5. The images folder as media. 6. Nothing else: layouts, navigation, the workflow and the configuration itself stay with Lee.

**Why.** It is op-004's list turned into fields, with the new fields the grill added (group, checkout, booking link, testimonials). Leaving navigation and layouts out is what keeps her from breaking the site.

**What else was considered.** Exposing every file in the repo.

**What it touches.** The editor configuration, the site settings, the testimonials data file.

> 2026-09-14 approved by Lee

## op-048 · Jekyll 4 runs locally through Bundler on a newer Ruby
- category: Spec
- status: approved
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-048.svg
- screen: none (toolchain)
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. The tests build the site (op-043), and on Lee's machine the build fails today: the system Ruby is 2.6 with Jekyll 3.9, while the site's Gemfile wants Jekyll 4.3 and a Bundler the system Ruby cannot load. This sits at the end of the spec's Implementation Decisions.

**Question.** How does the site build on Lee's machine?

**Decision.** 1. A Ruby newer than the system's, installed once through Homebrew, with Bundler. 2. `bundle exec jekyll build` from the repo's Gemfile is the one local build command, and the tests call it. 3. The workflow keeps GitHub's Jekyll action; both build with Jekyll 4.

**Why.** The tests are worthless if the build they run does not match the one that deploys. One install fixes it for good and touches nothing in the repo but a note.

**What else was considered.** Docker; running the tests only in the workflow.

**What it touches.** Lee's machine, the test runner, a setup note in the repo.

> 2026-09-14 approved by Lee

## op-049 · Account work is verified by a screenshot on its card
- category: Spec
- status: approved
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-049.svg
- screen: none (process)
- source: spec presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. The LinkedIn, Substack, Stripe and Google Calendar work happens in her accounts, where no test can reach. This closes the spec's Testing Decisions.

**Question.** How is work in Susan's accounts checked?

**Decision.** 1. Each change in an account is checked by hand against its decision. 2. A screenshot of the result is attached to that decision's card on the page. 3. A change with no screenshot is not done.

**Why.** A self-report is not verification; the screenshot is the artifact a ratifier can see.

**What else was considered.** A written report in the ticket; no verification beyond the agent's own report.

**What it touches.** LinkedIn profile, company page, Substack settings, the Metaphase Stripe account, Susan's Google Calendar, the decisions page.

> 2026-09-14 approved by Lee
