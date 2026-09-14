# 05: Services shown in three groups from the collection

**Status:** ready-for-agent
**Blocked by:** 01 (touches test), 04 (touches .pages.yml).
**Next:** `/implement-lee presence`

**What to build:** A visitor sees the services under Individuals, Groups and Organizations, each service in its approved group, including the two programs. Susan can change a service's group in the editor and the homepage follows.

**Decisions:** op-045, op-033, op-022; approved as op-054.

**Touches:** _services, index.html, assets/css/style.css, .pages.yml, test

- [ ] Every service has a group field with one of the three values
- [ ] The homepage renders the groups from the collection; the hand-written cards are gone
- [ ] The editor offers the group as a choice
- [ ] The test asserts the three headings and which service sits under each

Next: /implement-lee presence
