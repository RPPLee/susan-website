# 04: Pages CMS installed and proven with Lee's own edit

**Status:** ready-for-human
**Blocked by:** None (can start immediately).
**Next:** `/implement-lee presence`

**What to build:** Pages CMS is installed on the repo with a configuration that exposes services, site settings, the Programs page, the About page and the images folder. Lee changes a service price in the editor and it is live on metaphasemgt.com within minutes without touching GitHub. Susan is then invited by email and can sign in.

**Decisions:** op-020, op-029, op-004, op-047, op-009; approved as op-053.

**Touches:** .pages.yml, docs/agents/editor.md

- [x] The editor lists Services, Programs, About, Site settings and Media (`.pages.yml`, checked by `test/editor.test.mjs`; the sidebar itself is seen after the app is installed)
- [x] Lee's price edit is live on the site within minutes (BizBlitz, "Contact for pricing!", saved 14:05, deployed by 14:08 on 2026-09-14)
- [x] Saves carry the editor's name as the commit author (Lee's save is authored RPPLee; Susan's first save will confirm hers)
- [ ] Susan has received her invitation and signed in once (invited 2026-09-14; waiting on her)
- [x] A note says what she can edit and where (`docs/agents/editor.md`)

Next: /implement-lee presence

## Comments

2026-09-14: Config, test and note are in the repo. The push, the GitHub App install, the price edit, and the invitation are Lee's steps; they are numbered in `docs/agents/editor.md`.

2026-09-14, later: Lee installed the app, changed the BizBlitz price in the editor and it was live within three minutes; the commit is authored RPPLee. Susan is invited. Only her first sign-in is open.
