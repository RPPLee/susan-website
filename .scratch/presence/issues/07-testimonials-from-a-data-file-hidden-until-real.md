# 07: Testimonials from a data file, hidden until real

**Status:** done (2026-09-16)
**Blocked by:** 01 (touches test), 04 (touches .pages.yml), 05 (touches index.html), 06 (touches index.html).
**Next:** `/implement-lee presence`

**What to build:** Susan adds a testimonial with name, title, organization and quote in the editor and it appears on the homepage. With no entries the section is absent. No placeholder text ever ships.

**Decisions:** op-040, op-022; approved as op-056.

**Touches:** _data/testimonials.yml, index.html, assets/css/style.css, .pages.yml, test

- [x] The data file exists and is empty
- [x] The editor exposes it as a list with four fields
- [x] The section is absent when the file is empty and present with one fixture entry
- [x] The test covers both cases

Next: /implement-lee presence
