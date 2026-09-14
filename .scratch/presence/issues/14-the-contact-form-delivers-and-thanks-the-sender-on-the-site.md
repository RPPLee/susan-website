# 14: The contact form delivers and thanks the sender on the site

**Status:** ready-for-human
**Blocked by:** None (Lee's check comes first; the agent's part can start any time).
**Next:** `/implement 14`

**What to build:** A message sent from metaphasemgt.com/contact/ reaches Susan's inbox, and the sender lands on a thank-you page on the site instead of Formspree's generic one.

**Decisions:** op-065 (the form is the only way in; no registration or payment). Proposal to write once Lee's check is done.

**Touches:** pages/contact.html, pages/thanks.html, test/site.test.mjs, the Formspree dashboard

- [ ] Lee signs in at formspree.io, opens form `meeljpzb`, and reads the recipient address and whether it is verified
- [ ] The test submission of 2026-09-14 ("Test from Claude Code, ignore") is in the form's Submissions tab
- [ ] The recipient is susanmills@metaphasemgt.com and verified; Susan has received a test message
- [ ] The form carries a `_next` field pointing at /thanks/, and /thanks/ exists with a short note and a way back
- [ ] The site test checks the `_next` field and that /thanks/ builds

## Comments

2026-09-14, from the check: the page posts to Formspree form `meeljpzb` with a honeypot and a fixed subject. A test POST returned `ok: true`, so the form is active, not disabled and not over quota. The test did not reach Lee's Gmail, inbox or spam, so the form delivers somewhere else, most likely Susan's address. Whether that address is verified in Formspree, or the mail lands in her spam, can only be seen in the dashboard, which needs Lee's password. The two Formspree submissions in Lee's mail (October 2025) came from a different form on his own site.
