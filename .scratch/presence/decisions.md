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

## op-050 · Ticket 01: The site builds locally and every push is tested before deploy
- category: Tickets
- status: proposed
- ticket: 01
- depends: op-048, op-043
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-050.svg
- screen: none (toolchain)
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the first of thirteen slices, the prefactor everything else stands on: nothing after it can be tested until the site builds on Lee's machine and the workflow runs the tests.

**Question.** Is one ticket for the toolchain and the test harness the right first slice, with no blockers?

**Decision.** Lee runs one documented setup and `bundle exec jekyll build` succeeds on his machine. A Node test builds the site into a temporary folder and asserts the homepage renders. The deploy workflow runs that test before the deploy step, so a push that breaks the build never reaches metaphasemgt.com.

**Why.** Every later slice adds an assertion to this harness; without it they cannot be verified. It is small enough to finish in one sitting and demoable: the test passes, the workflow shows a test step.

**What else was considered.** Folding the harness into the first site slice; running the tests only in the workflow.

**What it touches.** .github/workflows/jekyll.yml, test, package.json, docs/agents/build.md

**Details.** 
- [ ] A setup note says how to install the Ruby and run the build
- [ ] `bundle exec jekyll build` succeeds locally
- [ ] `node --test` builds the site to a temp folder and passes one assertion on the homepage
- [ ] The workflow runs `node --test` before deploying and fails the run when it fails

## op-051 · Ticket 02: Banners up and the company page completed
- category: Tickets
- status: proposed
- ticket: 02
- depends: op-002, op-010, op-011, op-012, op-014, op-031, op-026, op-049
- image: assets/social/linkedin-banner-personal-dark.png
- caption: The dark personal banner that goes up.
- screen: LinkedIn profile header and company page
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the second of thirteen slices and the first track in the order of work; it touches only Susan's LinkedIn accounts, not the repo.

**Question.** Is all the approved LinkedIn work one slice, with no blockers?

**Decision.** Susan's profile carries the dark banner, Experience Matters in Featured, and both the Substack and metaphasemgt.com in contact details. The company page carries the dark company banner, tagline, website, location, specialties and description from the site settings. Each change has a screenshot on its decision card.

**Why.** Five approved decisions, one login, one afternoon; splitting them would only add tickets that each take minutes.

**What else was considered.** One ticket per LinkedIn decision.

**What it touches.** docs/ssot/decisions/images/presence/op-031.png, docs/ssot/decisions/images/presence/op-011.png, docs/ssot/decisions/images/presence/op-012.png, docs/ssot/decisions/images/presence/op-014.png

**Details.** 
- [ ] Profile banner is the dark version at 1584 by 396
- [ ] Company page banner is the dark version at 1512 by 256
- [ ] Featured shows Experience Matters; contact details list the Substack and the site
- [ ] Company page tagline, website, location, specialties and description match the site settings
- [ ] Screenshots attached to op-031, op-011, op-012 and op-014

## op-052 · Ticket 03: LinkedIn headline and About drafted for Lee
- category: Tickets
- status: proposed
- ticket: 03
- depends: op-013, op-001, op-041
- image: none
- caption:
- screen: LinkedIn profile, intro and About
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the third of thirteen slices. It produces copy in Susan's voice, which goes to Lee before anything is saved on LinkedIn.

**Question.** Is the profile copy its own slice, separate from the banner work?

**Decision.** A draft headline and About text that match the site and say who Susan helps, written to a file for Lee. Nothing is saved to LinkedIn until Lee says yes; then the profile carries the approved text and a screenshot goes on op-013.

**Why.** The banner work is mechanical and can go live at once; the copy waits on a person, so it must not hold the banners.

**What else was considered.** Folding it into ticket 02.

**What it touches.** .scratch/presence/linkedin-copy.md, docs/ssot/decisions/images/presence/op-013.png

**Details.** 
- [ ] Draft headline under 220 characters and About text in the file
- [ ] Both name who she helps and use the site's "idea to impact" line
- [ ] Saved to LinkedIn only after Lee's yes, with a screenshot on op-013

## op-053 · Ticket 04: Pages CMS installed and proven with Lee's own edit
- category: Tickets
- status: proposed
- ticket: 04
- depends: op-020, op-029, op-004, op-047, op-009
- image: none
- caption:
- screen: Pages CMS at app.pagescms.org
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the fourth of thirteen slices and the second track in the order of work. It gives Susan the editor over what exists today; later slices add their fields to the editor as they add them to the site.

**Question.** Is installing the editor over today's content the right slice, before the new fields exist?

**Decision.** Pages CMS is installed on the repo with a configuration that exposes services, site settings, the Programs page, the About page and the images folder. Lee changes a service price in the editor and it is live on metaphasemgt.com within minutes without touching GitHub. Susan is then invited by email and can sign in.

**Why.** The editor is Susan's biggest ask and proving the round trip early tells us whether the whole plan holds. Waiting for every new field would delay her by weeks.

**What else was considered.** Installing the editor last, once every field existed.

**What it touches.** .pages.yml, docs/agents/editor.md

**Details.** 
- [ ] The editor lists Services, Programs, About, Site settings and Media
- [ ] Lee's price edit is live on the site within minutes
- [ ] Saves carry Susan's name as the commit author
- [ ] Susan has received her invitation and signed in once
- [ ] A note says what she can edit and where

## op-054 · Ticket 05: Services shown in three groups from the collection
- category: Tickets
- status: proposed
- ticket: 05
- blocked: 01, 04
- depends: op-045, op-033, op-022
- image: none
- caption:
- screen: Homepage, services section
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the fifth of thirteen slices and the first of the site additions. It replaces the hand-written homepage cards with the collection, grouped.

**Question.** Is the grouping one slice, blocked by the harness and the editor?

**Decision.** A visitor sees the services under Individuals, Groups and Organizations, each service in its approved group, including the two programs. Susan can change a service's group in the editor and the homepage follows.

**Why.** It is the first thing a visitor sees and the first edit that needs a new field; it proves the collection-driven homepage before the other additions build on it.

**What else was considered.** Group headings around the existing hand-written cards.

**What it touches.** _services, index.html, assets/css/style.css, .pages.yml, test

**Details.** 
- [ ] Every service has a group field with one of the three values
- [ ] The homepage renders the groups from the collection; the hand-written cards are gone
- [ ] The editor offers the group as a choice
- [ ] The test asserts the three headings and which service sits under each

## op-055 · Ticket 06: Booking link and the "who she works with" line
- category: Tickets
- status: proposed
- ticket: 06
- blocked: 01, 04, 05
- depends: op-034, op-041, op-022, op-026
- image: none
- caption:
- screen: Homepage hero and Contact page
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the sixth of thirteen slices. It puts the first conversation one click away and names Susan's audience in the hero.

**Question.** Are the booking link and the hero line one slice?

**Decision.** A visitor sees a line in the hero saying who Susan works with and a button that opens her Google Calendar appointment schedule; the same button sits at the top of the Contact page. The line and the link address are in the site settings, so Susan edits both in the editor. The hero line goes live only after Susan has read Lee's draft in the editor.

**Why.** Both live in the hero and both are settings fields; one slice, one edit to the hero, one test.

**What else was considered.** Separate tickets for the calendar and the copy.

**What it touches.** _data/settings.yml, index.html, pages/contact.html, .pages.yml, test

**Details.** 
- [ ] An appointment schedule exists in Susan's Google Calendar and its address is in the settings
- [ ] The hero button and the Contact page button open it
- [ ] The hero shows the audience line from the settings
- [ ] The editor exposes both fields
- [ ] Lee's draft line is in the settings and Susan has edited or accepted it in the editor
- [ ] The test asserts the button address and the line on both pages

## op-056 · Ticket 07: Testimonials from a data file, hidden until real
- category: Tickets
- status: proposed
- ticket: 07
- blocked: 01, 04, 05, 06
- depends: op-040, op-022
- image: none
- caption:
- screen: Homepage, testimonials section
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the seventh of thirteen slices. It builds the credibility section Susan fills herself.

**Question.** Is the testimonials section its own slice?

**Decision.** Susan adds a testimonial with name, title, organization and quote in the editor and it appears on the homepage. With no entries the section is absent. No placeholder text ever ships.

**Why.** Its own data file, its own section, its own two tests; it does not need anything the other additions add.

**What else was considered.** Folding it into the About page ticket.

**What it touches.** _data/testimonials.yml, index.html, assets/css/style.css, .pages.yml, test

**Details.** 
- [ ] The data file exists and is empty
- [ ] The editor exposes it as a list with four fields
- [ ] The section is absent when the file is empty and present with one fixture entry
- [ ] The test covers both cases

## op-057 · Ticket 08: A fuller About page Susan edits herself
- category: Tickets
- status: proposed
- ticket: 08
- blocked: 04, 05, 06, 07
- depends: op-041, op-022, op-004
- image: none
- caption:
- screen: About page
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the eighth of thirteen slices, the last of the content additions.

**Question.** Is the About page its own slice?

**Decision.** The About page carries a fuller bio drafted by Lee from the profile document, as a body Susan edits in the editor. It goes live only after she has read it there.

**Why.** It is copy work with one page and one editor entry; it waits on Susan, so it must not block the sections that do not.

**What else was considered.** Writing the bio into the settings rather than the page body.

**What it touches.** pages/about.html, .pages.yml

**Details.** 
- [ ] The About body is editable in the editor as rich text
- [ ] Lee's draft is in place and Susan has edited or accepted it
- [ ] The page keeps the existing photos and contact block

## op-058 · Ticket 09: Footer signup through Substack's form
- category: Tickets
- status: proposed
- ticket: 09
- blocked: 01, 05, 06, 07
- depends: op-035, op-022
- image: none
- caption:
- screen: Site footer
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the ninth of thirteen slices; the footer is on every page, so it is cut on its own.

**Question.** Is the footer form its own slice?

**Decision.** Every page's footer carries Substack's subscribe form for metaphase.substack.com. A signup lands in Susan's Substack list.

**Why.** One include, one test, no dependency on the other additions; kept separate so a footer regression is easy to find.

**What else was considered.** Adding the form with the Insights page.

**What it touches.** _includes/footer.html, assets/css/style.css, test

**Details.** 
- [ ] The footer embeds Substack's subscribe form
- [ ] The form works on the live site: a test address receives Substack's confirmation
- [ ] The test asserts the form on the homepage and a service page

## op-059 · Ticket 10: The Insights page, refreshed daily from the feed
- category: Tickets
- status: proposed
- ticket: 10
- blocked: 01, 05, 06, 07, 09
- depends: op-007, op-036, op-037, op-044, op-035
- image: none
- caption:
- screen: Insights page
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the tenth of thirteen slices, the one that shows Susan writes.

**Question.** Is the script, the schedule and the page one slice?

**Decision.** A visitor opens Insights from the menu and sees the ten newest Experience Matters posts with date and excerpt, each opening on Substack, with the subscribe form at the top. The site refreshes them once a day and on every push without anyone touching anything; when the feed is down the build still passes and the page says the posts are on Substack.

**Why.** The script, the workflow step and the page are useless apart; together they are one demoable thing and one test with a fixture feed.

**What else was considered.** A script ticket and a page ticket.

**What it touches.** scripts/insights-feed.mjs, .github/workflows/jekyll.yml, pages/insights.html, _data/settings.yml, .gitignore, assets/css/style.css, test

**Details.** 
- [ ] The script reads a URL or a file and writes the data file with the ten newest posts
- [ ] The workflow runs it before the build, on push and daily at 13:00 UTC
- [ ] The data file is gitignored
- [ ] The page lists the posts from the fixture feed in the test and shows the fallback line without the file
- [ ] Insights is in the menu after Services

## op-060 · Ticket 11: The Substack gets Susan's own look
- category: Tickets
- status: proposed
- ticket: 11
- depends: op-017, op-027, op-028, op-001, op-026
- image: none
- caption:
- screen: Substack settings and home
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the eleventh of thirteen slices and the fourth track in the order of work. It touches only the Substack.

**Question.** Is the Substack branding one slice, with no repo blockers?

**Decision.** Experience Matters has a logo, colors, a real About page and named sections built from Susan's own palette. Drafts go to Lee first; the address and the paid plans are untouched. A screenshot goes on op-017.

**Why.** One account, one approved decision, and nothing in the repo depends on it.

**What else was considered.** Doing it alongside the LinkedIn work in ticket 02.

**What it touches.** .scratch/presence/substack-brand.md, docs/ssot/decisions/images/presence/op-017.png

**Details.** 
- [ ] Drafts of logo, colors, About text and section names are in the file and Lee has said yes
- [ ] The Substack shows them
- [ ] The address is still metaphase.substack.com and the paid plans are still on
- [ ] Screenshot on op-017

## op-061 · Ticket 12: Prices confirmed and the Metaphase Stripe account created
- category: Tickets
- status: proposed
- ticket: 12
- depends: op-025, op-032, op-008, op-006
- image: none
- caption:
- screen: Stripe dashboard
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the twelfth of thirteen slices, the account side of payments; the pay buttons in ticket 13 wait on it.

**Question.** Are the price confirmation and the Stripe account one slice, and the right blocker for the buttons?

**Decision.** Susan has confirmed the five prices in writing. A second Stripe account for Metaphase exists under her login with a checkout link for each of the five items at those prices, each sending the buyer to the site's thank-you address. The links are listed in a file for ticket 13.

**Why.** Nothing about a button can be right before the price is confirmed and the link exists; keeping this apart from the template work means the site slice can be built and tested with fixture links while Susan is still deciding.

**What else was considered.** Creating the links inside the pay-button ticket.

**What it touches.** .scratch/presence/prices.md

**Details.** 
- [ ] The file lists the five items, their confirmed prices and Susan's confirmation date
- [ ] The Metaphase Stripe account exists and is not the Substack one
- [ ] Five checkout links exist with a success address on the site
- [ ] Susan gets Stripe's payment email for a test payment

## op-062 · Ticket 13: Pay buttons and the thank-you page
- category: Tickets
- status: proposed
- ticket: 13
- blocked: 01, 04, 05, 06, 07, 08, 09, 10, 12
- depends: op-046, op-038, op-039, op-032, op-008
- image: none
- caption:
- screen: Service page, call to action
- source: tickets presence 2026-09-14

**Context.** Susan wants her online presence to look professional and to work without Lee for everyday changes. This is the last of thirteen slices and the last track in the order of work.

**Question.** Are the checkout field, the layout change, the thank-you page and the Tapestry form change one slice?

**Decision.** A buyer on a service page with a checkout link sees a pay button showing the page's price, pays on Stripe, and lands on the site's thank-you page. A page without a link shows today's register and contact buttons. Tapestry shows the pay button and no registration form; Turning Point Tenders keeps the form. Susan pastes each link into the editor herself.

**Why.** The button, the field, the page it lands on and the form it replaces are one path a buyer walks; they are tested together with fixture links, then switched on by pasting the real ones.

**What else was considered.** A thank-you page ticket on its own; buttons before the account exists.

**What it touches.** _layouts/service.html, _services, pages/thank-you.html, pages/programs.html, .pages.yml, assets/css/style.css, test

**Details.** 
- [ ] The service layout shows a pay button when the checkout field is set and the register button when it is not
- [ ] The thank-you page exists and says what happens next
- [ ] Tapestry's page and the Programs page show the pay button, not the registration form
- [ ] The editor exposes the checkout field
- [ ] The test covers a service with and without a link and the thank-you page
- [ ] The five real links are pasted and Susan has approved each price on the page
