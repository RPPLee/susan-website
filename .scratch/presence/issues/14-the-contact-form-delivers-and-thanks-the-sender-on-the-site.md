# 14: The contact form delivers to Lee's new Formspree form and thanks the sender on the site

**Status:** ready-for-agent
**Blocked by:** None (can start immediately).
**Next:** `/implement 14`

**What to build:** A message sent from metaphasemgt.com/contact/ goes to the new Formspree form `mgavwrdd` ("Metaphase website contact", in Lee's Formspree account, emailing lee@rightpathprogramming.com), and the sender lands on a thank-you page on the site. Formspree's redirect setting needs a paid plan, so the page sends the form in the background and opens /thanks/ itself; without JavaScript the plain form post still reaches Formspree.

**Decisions:** op-065 (the form is the only way in); op-071 (the new form and the on-site thank-you page).

**Touches:** pages/contact.html, pages/thanks.html, test/site.test.mjs

- [x] A new form exists in Lee's Formspree account (`mgavwrdd`, created 2026-09-16)
- [ ] The contact page posts to `mgavwrdd`, not the old `meeljpzb`
- [ ] A successful send opens /thanks/; a failed send says so on the page and keeps the message
- [ ] /thanks/ exists with a short note and a way back, and is not in the sitemap
- [ ] The site test checks the form address and that /thanks/ builds
- [ ] A test message from the live site arrives at lee@rightpathprogramming.com

## Comments

2026-09-14, from the first check: the old form `meeljpzb` accepted a test POST, but the message never reached Lee. On 2026-09-16 Lee's Formspree account had no forms at all, so `meeljpzb` belongs to another account. Lee asked for a new form in his own account.

2026-09-16: the new form emails lee@rightpathprogramming.com, the only address on the account. To send to Susan too, add susanmills@metaphasemgt.com under Account > Linked Emails (she confirms by email), then pick it in the form's settings.
