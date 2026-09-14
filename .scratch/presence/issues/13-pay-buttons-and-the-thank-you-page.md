# 13: Pay buttons and the thank-you page

**Status:** wontfix
**Blocked by:** 01 (touches test), 04 (touches .pages.yml), 05 (touches _services), 06 (touches .pages.yml), 07 (touches .pages.yml), 08 (touches .pages.yml), 09 (touches assets/css/style.css), 10 (touches assets/css/style.css), 12.
**Next:** `/implement-lee presence`

**What to build:** A buyer on a service page with a checkout link sees a pay button showing the page's price, pays on Stripe, and lands on the site's thank-you page. A page without a link shows today's register and contact buttons. Tapestry shows the pay button and no registration form; Turning Point Tenders keeps the form. Susan pastes each link into the editor herself.

**Decisions:** op-046, op-038, op-039, op-032, op-008; approved as op-062.

**Touches:** _layouts/service.html, _services, pages/thank-you.html, pages/programs.html, .pages.yml, assets/css/style.css, test

- [ ] The service layout shows a pay button when the checkout field is set and the register button when it is not
- [ ] The thank-you page exists and says what happens next
- [ ] Tapestry's page and the Programs page show the pay button, not the registration form
- [ ] The editor exposes the checkout field
- [ ] The test covers a service with and without a link and the thank-you page
- [ ] The five real links are pasted and Susan has approved each price on the page

Next: /implement-lee presence

## Comments

2026-09-14, Lee in the terminal: Susan does not want reservations or payments handled on the website, and there will be no separate Stripe account. op-065 reverses the payment cards this ticket depends on; they are withdrawn. Nothing here gets built. Register buttons now open the contact form (commit 1c489bb).
