# 12: Prices confirmed and the Metaphase Stripe account created

**Status:** wontfix
**Blocked by:** None (can start immediately).
**Next:** `/implement-lee presence`

**What to build:** Susan has confirmed the five prices in writing. A second Stripe account for Metaphase exists under her login with a checkout link for each of the five items at those prices, each sending the buyer to the site's thank-you address. The links are listed in a file for ticket 13.

**Decisions:** op-025, op-032, op-008, op-006; approved as op-061.

**Touches:** .scratch/presence/prices.md

- [ ] The file lists the five items, their confirmed prices and Susan's confirmation date
- [ ] The Metaphase Stripe account exists and is not the Substack one
- [ ] Five checkout links exist with a success address on the site
- [ ] Susan gets Stripe's payment email for a test payment

Next: /implement-lee presence

## Comments

2026-09-14, Lee in the terminal: Susan does not want reservations or payments handled on the website, and there will be no separate Stripe account. op-065 reverses the payment cards this ticket depends on; they are withdrawn. Nothing here gets built. Register buttons now open the contact form (commit 1c489bb).
