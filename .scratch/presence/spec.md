# Spec: Susan's online presence

Status: ready-for-agent
Feature: presence
Decisions: docs/ssot/decisions/presence.md and .scratch/presence/decisions.md

## Problem Statement

Susan wants her online presence to look professional and to work without Lee for everyday changes. Her site is a Jekyll site only Lee can edit. Her LinkedIn profile and the Metaphase company page carry no banner in her branding and do not point to her Substack. Her Substack, Experience Matters, is unbranded, and the site does not show she writes. Stripe emailed her about an account she did not know she had. She cannot take money for programs or coaching online, and her prices date from old flyers.

## Solution

The site evolves rather than being redesigned (op-005). Susan gets a free web editor, Pages CMS, on top of the current site, and changes titles, prices, copy, testimonials and photos herself (op-004, op-009, op-020, op-029). The site gains what the comparable sites have: named testimonials, a line naming who she works with, services in three groups, one booking link, a footer signup and a fuller About page (op-022). An Insights page lists her Substack posts, refreshed once a day without anyone touching anything (op-007, op-036, op-037). Fixed-price items get a pay button through a second Stripe account for Metaphase; retained work stays invoiced (op-006, op-008, op-025, op-032). Her profile and the company page get the matching banners and complete details, and her profile features the Substack (op-002, op-010, op-011, op-012, op-014, op-031). The Substack keeps its address and paywall and gets her own look (op-017, op-027, op-028). The Stripe email is ignored (op-023, op-030). The work runs banner, editor, site additions, Substack branding, payments (op-042).

## User Stories

1. As Susan, I want to change a service's price in a web form, so that I never wait on Lee for a number.
2. As Susan, I want to sign in to the editor from an email invitation, so that I never need a GitHub account.
3. As Susan, I want my save to be live within minutes, so that I can check it on my phone.
4. As Susan, I want to edit the homepage intro and my bio, so that the site says what I say.
5. As Susan, I want to paste in a testimonial with the person's name, title and organization, so that new clients see who trusts me.
6. As Susan, I want to swap a photo, so that the site shows a current picture.
7. As Susan, I want to change program dates and descriptions, so that enrolling programs stay accurate.
8. As Susan, I want to change my phone, email and location, so that contact details are never stale.
9. As Susan, I want layout and navigation left to Lee, so that I cannot break the site.
10. As Lee, I want to make the first editor change myself and see it live, so that Susan's first experience works.
11. As Lee, I want every editor save in git history, so that any mistake is undone with one revert.
12. As Lee, I want the editor to cost nothing, so that the site stays free to run.
13. As a first-time visitor, I want the services shown as individuals, groups and organizations, so that I find the one for me without knowing Susan's vocabulary.
14. As a visitor, I want to find Tapestry under Groups, so that I do not need to know it is a "program".
15. As a visitor, I want to see who Susan works with in the hero, so that I know within seconds whether she is for me.
16. As a visitor, I want to read named testimonials, so that I can trust her claims.
17. As a visitor, I want one button to book a first conversation, so that I do not have to write an email.
18. As a visitor, I want the booking button on the homepage and the Contact page, so that it is where I look for it.
19. As a visitor, I want a fuller About page, so that I know her forty years of work.
20. As a visitor, I want to read what Susan writes, so that I get a sense of her thinking before I call.
21. As a visitor, I want the Insights page to show her ten latest posts with a short excerpt, so that I can pick one.
22. As a visitor, I want a post to open on Substack, so that I read it where it lives and can subscribe.
23. As a visitor, I want a subscribe form at the top of Insights and in the footer, so that I can sign up anywhere.
24. As a reader, I want my footer signup to land in Susan's Substack list, so that I get her posts and nothing else.
25. As Susan, I want new posts to appear on the site within a day without doing anything, so that the site never looks stale.
26. As Susan, I want the site to keep working when the Substack feed is unreachable, so that one outage does not break a build.
27. As a search engine, I want the posts as plain HTML, so that Susan's writing is found.
28. As a buyer, I want to pay for a coaching package with a button, so that I can commit without a call.
29. As a buyer, I want to pay for a Tapestry seat, so that I am enrolled at once.
30. As a buyer, I want to land on a thank-you page that says what happens next, so that I know Susan will follow up.
31. As a buyer, I want the pay button to say the price I saw on the page, so that there is no surprise.
32. As Susan, I want Stripe to email me when someone pays, so that I know without checking a dashboard.
33. As Susan, I want to confirm every price before a button goes live, so that no old flyer price is charged.
34. As Susan, I want the blitzes to get a button only when I have named a price, so that nothing is sold at a guess.
35. As a prospect, I want retained work to say it is quoted, so that I know to get in touch.
36. As a prospect interested in Turning Point Tenders, I want the registration form, so that Susan can quote me.
37. As Susan, I want a second Stripe account for Metaphase under my login, so that business income stays apart from my writing income.
38. As Susan, I want to ignore the Stripe email, so that I stop worrying about it.
39. As a LinkedIn visitor, I want Susan's profile and the company page to share a banner family, so that they read as one business.
40. As a LinkedIn visitor, I want her profile to feature Experience Matters, so that I find her writing from her profile.
41. As a LinkedIn visitor, I want the company page to carry the tagline, website, location, specialties and description, so that it looks like a real firm.
42. As Susan, I want my headline and About to say who I help, so that the profile converts.
43. As Susan, I want the profile copy shown to Lee before it is saved, so that nothing in my voice goes out unseen.
44. As a Substack reader, I want the publication to look like Susan's, so that it feels personal.
45. As a Substack reader, I want the address unchanged, so that old links keep working.
46. As a paying reader, I want the paid plans to stay on, so that my subscription continues.
47. As Susan, I want Lee's drafts of the hero line and About to reach me in the editor first, so that I sign off before they go live.
48. As Lee, I want to know each track's order, so that Susan's visible asks land first.
49. As Lee, I want changes in Susan's accounts made directly and reported after, so that I do not press a button per change.
50. As Lee, I want a test that builds the site and checks the pages, so that a broken template never reaches metaphasemgt.com.
51. As Lee, I want that test to run on every push, so that Susan's editor saves are checked too.
52. As Lee, I want the account work verified with a screenshot on the decisions page, so that what cannot be tested by code is still checked.

## Implementation Decisions

Everything on the site is built into the existing Jekyll site on GitHub Pages at metaphasemgt.com. There is no new platform, paid or otherwise (op-005, op-009).

The editor is Pages CMS, installed by Lee on the live repo. Lee makes the first edit, a service price, and it must appear on the site within minutes without touching GitHub; only then is Susan invited by email (op-020, op-029).

The editor's configuration exposes exactly what Susan may change: the services as a collection with title, tagline, price, format, duration, group, checkout link and body; the site settings, including the hero's audience line, the intro, her bio, contact details and the booking link; the testimonials data file; the About page body; the Programs page; and the images folder as media. Layout, navigation, the workflow and the editor configuration itself are not exposed (op-004, op-047).

Services are rendered from the services collection, grouped by a `group` field in each service's front matter with the values individuals, groups and organizations. The homepage's hand-written service cards are replaced by that rendering, so a service Susan edits or regroups changes the homepage without touching a template (op-045). The groups are: Individuals, Coaching & Mentoring and Turning Point Tenders; Groups, Peer Circles and Tapestry; Organizations, BizBlitz, VizBlitz, Team Building, Strategic Planning and Performance. The programs appear in their group and the Programs page stays the enrolling view (op-033).

A pay button is a Stripe checkout link stored in the service's `checkout` field. A service page shows the pay button when the field is set and the existing register-interest and contact buttons when it is not. Susan pastes the link from the Metaphase Stripe account into the editor; nothing about Stripe lives in a template (op-046). The first buttons go on the coaching initial session, the four-session coaching package, Peer Circles formation, Team Building initial planning and Tapestry at the group-of-five price; the blitzes wait for a price; Susan confirms every price before a link is pasted (op-008, op-032). On Tapestry the pay button replaces the registration form; the form stays for Turning Point Tenders and custom work (op-038). Every checkout link sends the buyer to a thank-you page on the site; Susan learns of a payment from Stripe's email (op-039). The Metaphase Stripe account is a second account under Susan's login (op-025).

The Insights page is generated from a data file that a script writes before the Jekyll build. The script reads the Substack feed from a URL or a local file, keeps the ten newest posts with title, date, link and excerpt, and writes the data file. The deploy workflow runs it before the build on every push and on a daily schedule. The data file is not committed; when it is missing or the feed is unreachable, the build still succeeds and the page shows the subscribe form with a line saying posts are on Substack (op-036, op-044). The page lists the ten posts, each linking to Substack, with the subscribe form at the top, and Insights joins the menu after Services (op-007, op-037).

The footer signup and the Insights form are Substack's embedded subscribe form for metaphase.substack.com (op-035).

The booking link is a Google Calendar appointment schedule in Susan's account. Its address lives in the site settings; it is the hero button and the top of the Contact page, not a menu entry (op-034).

Testimonials live in a data file with name, title, organization and quote. The homepage section renders only when the file has at least one entry; there are no placeholders (op-040).

The hero's audience line and the fuller About page are drafted by Lee from the profile document and edited by Susan in the editor before they go live (op-041).

The LinkedIn work is done directly in Susan's accounts while Lee is logged in: the dark personal banner on the profile, the company banner in the same version on the company page, the company page's tagline, website, location, specialties and description from the site settings, and Experience Matters plus metaphasemgt.com in the profile's Featured and contact sections (op-002, op-010, op-011, op-012, op-014, op-031). Headline and About copy wait for op-013.

The Substack keeps its address and its paid plans and gets its own look built from Susan's palette; drafts go to Lee first (op-017, op-027, op-028). The Stripe email gets no reply (op-023, op-030).

Local builds need Jekyll 4 running through Bundler on a Ruby newer than the system's 2.6, installed once on Lee's machine; the tests and the workflow build with the same Jekyll (op-048).

The tracks run in this order: banners and company page; the editor trial; the site additions; Substack branding; pay buttons (op-042).

## Testing Decisions

A good test builds the site the way GitHub does and reads the HTML that comes out. It asserts on what a visitor sees, the text, links and forms on a page, never on template internals or CSS classes chosen for styling. It never reaches Substack, Stripe, LinkedIn or Google; the feed is a fixture file, the checkout link is a fixture address.

There is one seam: the built site. A Node test runs the feed script against a fixture feed, runs the Jekyll build into a temporary folder with fixture data, and asserts on the resulting pages. It runs locally with `node --test` and in the workflow before deploy, so a push from Susan's editor that breaks a template stops before it reaches the site (op-043).

Through that seam the tests cover: the homepage shows the three groups with the right services in each; a service with a checkout link shows a pay button and no register button, and one without shows the register button; the Insights page lists the ten newest posts from the fixture feed with links to Substack, and shows the fallback line when the data file is absent; the footer carries the Substack form; the testimonials section is absent when the data file is empty and present with a named entry; the menu carries Insights after Services; the thank-you page exists.

Prior art is the sync module's tests, `node --test` over a markdown fixture asserting on the output, and the matt resolver's tests, which run the same way.

What happens in Susan's accounts, LinkedIn, Substack, Stripe and Google Calendar, cannot be tested by code. Each is verified by hand and a screenshot of the result is attached to its decision card on the page (op-049).

## Out of Scope

- A new design or a move to another platform (op-005, op-009).
- Renaming the Substack (op-028). Turning the paywall off (op-027).
- Pay buttons on the blitzes or Turning Point Tenders until a price exists (op-032).
- A draft or preview step in the editor; git history is the undo (op-020).
- Reading the feed live in the browser (op-036).
- LinkedIn headline and About copy, pending op-013.
- Lee's plum-and-orange banner mockup; the banners in the logo colors superseded it (op-002).

## Further Notes

The prices on the service pages come from the 2020 flyers. op-008 and op-032 make Susan's confirmation the gate for every pay button; the confirmation itself is a conversation, not a build step.

GitHub pauses a scheduled workflow after 60 days without a commit to the default branch. Susan's editor saves are commits, so the daily Insights refresh keeps running as long as the site is edited; if it ever pauses, one commit restarts it.

The company banner card op-011 was withdrawn by a stray second Approve on the page and restored on Lee's ruling in the grill of 2026-09-14; it stands approved.
