# Susan's online presence

The website, LinkedIn pages, Substack and payment setup of Susan Mills and her firm, Metaphase Management Associates. This repo holds the website; the record in `docs/ssot/decisions/` rules on all four.

## Language

### Who

**Susan**:
Susan Mills, the consultant. Owns every word and price. Speaks as herself on LinkedIn and Substack.
_Avoid_: the client, the owner

**Metaphase**:
Metaphase Management Associates, her firm. The website and the company page speak as Metaphase.
_Avoid_: MMA, the company

**Lee**:
Builds and runs everything here. Rules on the decisions page as Susan's proxy.

**Ratifier**:
Whoever rules on the decisions page: Lee or Susan.

### Channels

**Site**:
metaphasemgt.com, the Jekyll site in this repo, on GitHub Pages.
_Avoid_: homepage (that is one page of it), web page

**Profile**:
Susan's personal LinkedIn page.
_Avoid_: her LinkedIn (ambiguous with the company page)

**Company page**:
The Metaphase LinkedIn page.

**Substack**:
Experience Matters, Susan's personal newsletter at metaphase.substack.com.
_Avoid_: blog, newsletter (when the site's own signup is meant)

**Banner**:
The background image at the top of a LinkedIn profile or company page. Personal 1584 by 396, company 1512 by 256.
_Avoid_: header image, cover

**Editor**:
The web app Susan uses to change the site without code. Pages CMS.
_Avoid_: CMS, admin

**Insights page**:
The site page that lists her Substack posts, read from the feed at build time.
_Avoid_: blog

**Booking link**:
The one link on the site for a first conversation. A Google Calendar appointment schedule in Susan's account.
_Avoid_: calendar, scheduler

### Offers

**Service**:
One of the seven standing offers with a page under `_services/`: BizBlitz, VizBlitz, Coaching, Peer Circles, Team Building, Strategic Planning, Performance.

**Program**:
A dated, enrolling offer: Tapestry and Turning Point Tenders. Has a flyer, a service page and a registration.

**Group**:
Where a service sits on the homepage: Individuals, Groups or Organizations (op-033). Each service names one in its `group` front matter; the three are listed in `_data/service_groups.yml` (op-045).
_Avoid_: course, workshop

**Blitz**:
A 60-minute fixed-price session: BizBlitz (business analysis) or VizBlitz (future visioning).

**Fixed-price item**:
An offer with a published price that gets a pay button: programs, blitzes, the coaching package.

**Retained work**:
An engagement quoted in conversation and invoiced: strategic planning, performance, team building beyond the first session.

**Registration**:
No longer a thing on the site (op-065). A visitor who wants a program writes through the contact form; `/register/` redirects there.
_Avoid_: signup, enrollment, register button

### Money

**Substack Stripe account**:
The Stripe account Substack requires to charge readers. Already connected; the one Stripe emailed about.

**Metaphase Stripe account**:
Was planned as a second account for program and coaching payments. Never created; dropped by op-065. The Substack account is the only Stripe account.

**Pay button**:
Was a planned Stripe checkout link on a fixed-price item's page. Dropped by op-065; the site takes no payments.
_Avoid_: buy now, cart

**Paywall**:
Substack's paid-subscriber gate on a post. Plans: $8 a month, $80 a year, $240 founding.
