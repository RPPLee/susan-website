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
- image: none
- caption:
- svg: docs/ssot/decisions/images/presence/op-063.svg
- screen: none (toolchain)
- source: ticket 01

**Context.** op-048 clause 3 keeps GitHub's `jekyll-build-pages` action and says both builds use Jekyll 4. Ticket 01 found otherwise: the action pins the `github-pages` gem at 232, which is Jekyll 3.10, while the Gemfile, the local build and the test use Jekyll 4.4. Ticket 01 shipped with the mismatch and noted it in `docs/agents/build.md`; the site builds under both today.

**Question.** Should the deploy build with the same Jekyll the test builds with?

**Decision.** 1. The workflow replaces the `jekyll-build-pages` step with `bundle exec jekyll build` from the Gemfile, using the Ruby it already installs for the test. 2. `JEKYLL_ENV=production` and the Pages base path are set the way the action set them. 3. Nothing else in the workflow changes.

**Why.** op-048's own reason: the tests are worthless if the build they run does not match the one that deploys. One build command in three places (Lee's machine, the test, the deploy) means a green test is a safe deploy.

**What else was considered.** Pinning the Gemfile to the `github-pages` gem so the local build drops to Jekyll 3.10; leaving the mismatch.

**What it touches.** `.github/workflows/jekyll.yml`, `docs/agents/build.md`.

## op-064 · The company banner's headline moves right so the logo tile does not cover it
- category: LinkedIn
- status: proposed
- image: docs/ssot/decisions/images/presence/op-011.png
- caption: The company page today: the logo tile sits over "IDEA".
- screen: LinkedIn company page header
- source: ticket 02
- work: pending

**Context.** op-002 rendered the company banner at 1512 by 256 with the headline centred, and op-011 put the dark version up on 2026-09-14. On a company page LinkedIn overlays the square logo tile on the lower left of the banner, where on a profile the round photo sits lower still. The tile covers the "I" and part of the "D" of "IDEA to IMPACT" and the start of the tagline line. The personal banner is not affected; its left third was left empty for the photo.

**Question.** Does the company banner get re-rendered with the headline clear of the logo tile?

**Decision.** 1. The company banner is re-rendered with the headline, rule and tagline line shifted right so nothing sits under the logo tile, and the logo mark top right stays. 2. Both versions (dark and light) are re-rendered the same way. 3. The dark version replaces the one on the company page and op-011's screenshot is retaken.

**Why.** The headline is the point of the banner; a covered first word reads as a mistake to anyone who lands on the page.

**What else was considered.** Leaving it, since the banner is otherwise legible; centring the headline in the right two thirds instead of shifting it.

**What it touches.** assets/social/linkedin-banner-company-dark.png, assets/social/linkedin-banner-company-light.png, LinkedIn company page.

## op-066 · The personal banner carries the headline and the logo only
- category: LinkedIn
- status: proposed
- image: docs/ssot/decisions/images/presence/op-031.png
- caption: Susan's profile header with the trimmed banner up, 2026-09-14.
- screen: LinkedIn profile header
- source: Susan via Lee 2026-09-14
- work: done

**Context.** op-002 gave both banners a headline, a gold rule, a tagline line ("Strategic Management & Business Consulting, Berkeley, California, metaphasemgt.com") and the logo top right, and op-031 put the dark personal version up. Susan looked at her profile on 2026-09-14 and found it too wordy. She asked for the headline and the logo only.

**Question.** What stays on the personal banner?

**Decision.** 1. The personal banner shows "Navigate the journey from Idea to Impact" and the Metaphase logo top right, nothing else. 2. The logo sits left of where LinkedIn draws its edit button, so it is not covered for Susan when she is signed in. 3. Both versions, dark and light, are re-rendered from `docs/research/linkedin-banner/banner.html`, and the dark one replaced the banner on her profile the same day. 4. The company banner keeps its tagline line until op-064 re-renders it; it can drop the line then if Susan wants the same look.

**Why.** It is Susan's own read of her own profile, and the headline alone says what the tagline line said.

**What else was considered.** Keeping the gold rule as a mark without words; dropping only the tagline line and keeping the rule.

**What it touches.** assets/social/linkedin-banner-personal-dark.png, assets/social/linkedin-banner-personal-light.png, docs/research/linkedin-banner/, LinkedIn profile.

## op-067 · Her offerings are featured on her profile as link cards to the site, one colour each
- category: LinkedIn
- status: proposed
- image: docs/ssot/decisions/images/presence/op-067.png
- caption: Featured on Susan's profile, 2026-09-14: BizBlitz and VizBlitz in gold, Conversation With An OG in teal, Turning Point Tenders in dark teal, then the Substack and the OG post.
- screen: LinkedIn profile, Featured section
- source: Susan via Lee 2026-09-14
- work: done

**Context.** Susan wants her offerings on her profile the way the company page lists what Metaphase offers. A personal profile has no Products or Programs section; it has Featured (picture cards near the top), Services (LinkedIn's fixed category list) and Projects under Accomplishments, which she rightly says is the wrong word. Featured link cards show a picture, a title and two lines of text and open the page on the site. Her first pass had Tapestry and a combined Programs card; she asked for those to go and for Conversation With An OG and the two Blitz sessions instead, each in its own colour.

**Question.** How do her offerings appear on her personal profile?

**Decision.** 1. Featured carries, in this order: BizBlitz and VizBlitz (gold), Conversation With An OG (teal), Turning Point Tenders (dark teal), Experience Matters (the Substack about page), and her Conversation With An OG post. 2. Each site link shows a branded card rendered from `docs/research/share-images/card.html` in that colour; the site sets `og:image` on every page, with these pages getting their own cards and everything else a site card. 3. Conversation With An OG, until now only a LinkedIn post, is a page on the site written from that post, free, 60 minutes. 4. `/blitz/` presents BizBlitz and VizBlitz together and links to both service pages. 5. Tapestry is not featured. 6. The Services section keeps LinkedIn's categories; About and the headline stay Susan's copy (op-026).

**Why.** Featured is the only place on a personal profile that shows offerings as pictures near the top, and linking to the site sends readers to the full page and the contact form. One colour per card makes three offerings read as three things at a glance.

**What else was considered.** Projects under Accomplishments (wrong word, buried); a LinkedIn Services page (fixed categories, no program names); image-only Featured cards (no link); featuring the OG post alone (no branded picture, no page to send people to).

**What it touches.** LinkedIn profile, assets/social/share-*.png, _config.yml defaults, _services/conversation-with-an-og.md, pages/blitz.html, _services/turning-point-tenders.md.

## op-068 · Conversation With An OG sits under Individuals
- category: Website
- status: proposed
- linked: op-033, op-054
- image: none
- caption:
- screen: Homepage, services section
- source: implement ticket 05, 2026-09-14
- work: done

**Context.** op-033 placed nine services in three groups. Conversation With An OG became a tenth service page after that ruling (op-067). Ticket 05 renders every service from the collection, so it needs a group.

**Question.** Which group does Conversation With An OG belong to?

**Decision.** Individuals, after Coaching & Mentoring and Turning Point Tenders. Its front matter says so; Susan can move it in the editor.

**Why.** It is a one-on-one conversation for one person at a time, the same shape as the other two in that group.

**What else was considered.** Leaving it off the homepage; a fourth group for free offers.

**What it touches.** _services/conversation-with-an-og.md, the homepage services section.

## op-069 · The homepage shows her three newest Substack posts
- category: Website
- status: proposed
- linked: op-007, op-037
- image: none
- caption:
- screen: Homepage, Latest Writing section
- source: Lee in the terminal 2026-09-16 ("by adding substack she also meant to feature some of her articles on her website like she was doing on LinkedIn"); built with ticket 10
- work: done

**Context.** Susan asked on 2026-09-16 how to add her Substack to the website. On LinkedIn her Featured section shows her writing as cards (op-067). op-037 put the posts on a separate Insights page only.

**Question.** Does her writing appear on the homepage, and how?

**Decision.**
1. A Latest Writing section after the services shows the three newest posts from the same daily feed as Insights, each with its image, date, title and excerpt, opening on Substack.
2. A More Insights button leads to the Insights page.
3. The section is absent when the feed has not been read.

**Why.** Visitors see she writes without finding the menu item, the way her LinkedIn Featured cards show it.

**What else was considered.** Posts Susan picks by hand in the editor instead of the newest three; a link to Substack only.

**What it touches.** index.html, _includes/post-card.html, assets/css/style.css.

## op-070 · No booking button on the site
- category: Website
- status: proposed
- linked: op-034, op-055, op-065
- image: none
- caption:
- screen: Homepage hero, Contact page
- source: Lee in the terminal 2026-09-16 ("she no longer wants to support bookings and things")
- work: done

**Context.** op-034 approved one booking link to a Google Calendar appointment schedule, built by ticket 06. op-065 already removed registration and payments.

**Question.** Does the site offer a way to book time with Susan?

**Decision.**
1. No booking button or appointment schedule. The contact form is the way in.
2. Ticket 06 is closed as wontfix, and its "who she works with" hero line goes with it.

**Why.** Susan no longer wants to take bookings through the site.

**What else was considered.** Keeping the hero line without the button.

**What it touches.** Ticket 06; nothing built changes.

## op-071 · The contact form sends to Lee's new Formspree form and thanks the sender on the site
- category: Website
- status: proposed
- linked: op-065
- image: none
- caption:
- screen: Contact page, thank-you page
- source: Lee in the terminal 2026-09-16; ticket 14
- work: pending

**Context.** The contact page posted to Formspree form `meeljpzb`, which lives in an account Lee cannot see; a test message on 2026-09-14 never reached him. Formspree's own redirect after sending needs a paid plan.

**Question.** Where do contact messages go, and what does the sender see afterwards?

**Decision.**
1. The page posts to form `mgavwrdd` in Lee's Formspree account, which emails lee@rightpathprogramming.com.
2. The page sends the message in the background and opens /thanks/ on the site. If sending fails, it says so and keeps what they typed.

**Why.** Lee can see and manage the form, and the thank-you page keeps visitors on metaphasemgt.com on the free plan.

**What else was considered.** Recovering the old form; Formspree's paid redirect.

**What it touches.** pages/contact.html, pages/thanks.html, Formspree.

## op-072 · The homepage is a list of blocks Susan edits, reorders, adds to and removes from
- category: Website
- status: proposed
- image: none
- caption:
- screen: Homepage; Pages CMS, Home page
- source: Susan through Lee in the terminal 2026-09-18
- work: pending

**Context.** The homepage was hand-written HTML in `index.html`. Susan could change only the intro paragraph, from Site settings. She wants to change every word on the page, including the headline, the line under it and the buttons, and to remove sections or add new ones.

**Question.** How much of the homepage can Susan change in the editor?

**Decision.**
1. The homepage renders the blocks in `_data/home.yml`, in order. The editor shows them as a block list she can edit, reorder, add to and remove from.
2. The block types are: headline banner, schedule a call, services, latest Insights, testimonials, about Susan, get in touch, cards, and free text.
3. The "Now Enrolling" programs section is gone. Tapestry and Turning Point Tenders stay in Our Services and on the Programs page.
4. A service's homepage card text becomes an editor field.

**Why.** She asked for wide freedom over the page, and blocks give it without letting a save break the layout.

**What else was considered.** A fixed set of sections, each with a show or hide switch; less freedom for the same work.

**What it touches.** index.html, _includes/home/, _data/home.yml, .pages.yml, _data/settings.yml (the intro moves into the banner block).

## op-073 · Insights becomes a blog on the site, and the Substack feed and forms come off
- category: Website
- status: proposed
- image: none
- caption:
- screen: Insights page, a post page, homepage, footer; Pages CMS, Insights posts
- source: Susan through Lee in the terminal 2026-09-18
- work: pending

**Context.** Reverses op-007, op-035, op-036, op-037 and the proposed op-069. Insights listed her Substack posts from a feed read once a day, and every footer carried Substack's subscribe form. Susan wants a small blog of tips on her own site, written by her.

**Question.** Where do Susan's tips live, and what happens to the Substack pieces?

**Decision.**
1. Insights posts are files in `_posts`, written in the editor's rich-text field: headings, bold, lists, links, quotes and uploaded pictures. Each post has a title, date, summary, optional picture and a Published switch for drafts.
2. Each post gets a page at /insights/<title>/. The Insights page lists them newest first, and the homepage shows the newest three once one exists.
3. The feed script, the daily rebuild, the subscribe form in the footer and the one on Insights are removed.
4. The link to her Substack stays in the footer and contact links, from Site settings. She hides it by emptying the field.

**Why.** One place to write, under her own name and address, with no third party between a save and the site.

**What else was considered.** Keeping the footer subscribe form; it would sign people up to a newsletter the site no longer shows.

**What it touches.** _posts/, _layouts/post.html, pages/insights.html, _includes/post-card.html, _includes/footer.html, .github/workflows/jekyll.yml, scripts/ (emptied), .pages.yml.

## op-074 · "Schedule a time" for Conversation With An OG, through a Google Calendar booking page
- category: Website
- status: proposed
- image: none
- caption:
- screen: Homepage call to action; Conversation With An OG page; Pages CMS, Site settings
- source: Susan through Lee in the terminal 2026-09-18
- work: pending

**Context.** Reverses op-070 (no booking button). Susan wants the homepage's main call to action to be Conversation With An OG: a visitor reads what the call is, clicks, and a time gets arranged. Her mail is on Google Workspace, which includes Calendar's appointment schedules.

**Question.** How does a visitor arrange the free conversation?

**Decision.**
1. A "Schedule a call" block sits under the homepage banner: what the conversation is, three facts, and a "Schedule a time" button. The same button is on the Conversation With An OG page.
2. The button opens the address in Site settings > Booking page. That address is a Google Calendar appointment schedule Susan creates in her own calendar.
3. While the field is empty, the button opens the contact form with the subject filled in.
4. Conversation With An OG leaves Our Services. Its page keeps its address, because her LinkedIn Featured card links to it.
5. VizBlitz moves from Organizations to Individuals.

**Why.** Google's booking page is free with the account she has, shows her real availability, and puts the meeting in her calendar. The fallback means the button works today.

**What else was considered.** Calendly and Cal.com, which add an account to manage; an embedded calendar on the page, which is heavier and harder for her to change.

**What it touches.** _includes/home/call.html, _layouts/service.html, _data/settings.yml, _services/conversation-with-an-og.md, _services/vizblitz.md, .pages.yml.

## op-075 · The About page carries her LinkedIn About, without the impact section
- category: Website
- status: proposed
- image: none
- caption:
- screen: About page
- source: Susan through Lee in the terminal 2026-09-18
- work: pending

**Context.** Amends op-057. Lee's third-person draft waited behind a "Publish the new bio" switch while visitors saw an older bio. Susan wants the About page to match her LinkedIn profile and does not want the Our Impact section.

**Question.** What does the About page say?

**Decision.**
1. The bio is her LinkedIn About, word for word and in the first person, as read from her profile on 2026-09-18, without its "(website: Metaphasemgt.com)" aside.
2. Background is drawn from her LinkedIn experience entries, and Education lists both degrees shown there.
3. The publish switch and the old bio are removed. The page body is the bio, and she edits it in the editor.
4. The Our Impact section is removed. Specialties and About Metaphase Management stay.
5. The Performance service is renamed Performance Alignment. Its address stays /services/performance/.

**Why.** One voice across LinkedIn and the site, and one bio instead of two.

**What else was considered.** Keeping the third-person rewrite, which says the same things but is not her wording.

**What it touches.** pages/about.md, _layouts/about.html, _includes/about-bio-current.html (deleted), _services/performance.md, .pages.yml.

## op-076 · A light facelift: serif headings, a warmer banner, softer cards
- category: Brand
- status: proposed
- image: none
- caption:
- screen: Every page
- source: Lee in the terminal 2026-09-18
- work: pending

**Context.** Lee asked for quick, low-effort changes that make the site look better without changing much. The colours are unchanged.

**Question.** What changes in the look?

**Decision.**
1. Headings are set in Source Serif 4 over Inter for body text. (Fraunces was tried first; its J and f looked wrong at headline size.)
2. The banner gets a faint teal and gold wash, and the line under the headline becomes small gold capitals.
3. Buttons are pill-shaped, section titles get a short gold rule, and cards get rounder corners and a softer shadow.

**Why.** All of it is CSS in one block at the end of the stylesheet, so any part can be taken out.

**What else was considered.** A new layout or photography, which is not low effort.

**What it touches.** assets/css/style.css, _layouts/default.html (the font link).
