# 09: Footer signup through Substack's form

**Status:** ready-for-human (built 2026-09-16; a test signup on the live site waits on Lee's yes)
**Blocked by:** 01 (touches test), 05 (touches assets/css/style.css), 06 (touches test), 07 (touches assets/css/style.css).
**Next:** `/implement-lee presence`

**What to build:** Every page's footer carries Substack's subscribe form for metaphase.substack.com. A signup lands in Susan's Substack list.

**Decisions:** op-035, op-022; approved as op-058.

**Touches:** _includes/footer.html, assets/css/style.css, test

- [x] The footer embeds Substack's subscribe form
- [ ] The form works on the live site: a test address receives Substack's confirmation
- [x] The test asserts the form on the homepage and a service page

Next: /implement-lee presence
