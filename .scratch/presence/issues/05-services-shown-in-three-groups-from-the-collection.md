# 05: Services shown in three groups from the collection

**Status:** done (b2f90e7, 2026-09-14)
**Blocked by:** 01 (touches test), 04 (touches .pages.yml).
**Next:** `/implement-lee presence`

**What to build:** A visitor sees the services under Individuals, Groups and Organizations, each service in its approved group, including the two programs. Susan can change a service's group in the editor and the homepage follows.

**Decisions:** op-045, op-033, op-022; approved as op-054.

**Touches:** _services, index.html, assets/css/style.css, .pages.yml, test

- [x] Every service has a group field with one of the three values
- [x] The homepage renders the groups from the collection; the hand-written cards are gone
- [x] The editor offers the group as a choice
- [x] The test asserts the three headings and which service sits under each

Next: /implement-lee presence
