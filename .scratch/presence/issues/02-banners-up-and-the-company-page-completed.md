# 02: Banners up and the company page completed

**Status:** ready-for-human
**Blocked by:** None (can start immediately).
**Next:** `/implement-lee presence`

**What to build:** Susan's profile carries the dark banner, Experience Matters in Featured, and both the Substack and metaphasemgt.com in contact details. The company page carries the dark company banner, tagline, website, location, specialties and description from the site settings. Each change has a screenshot on its decision card.

**Decisions:** op-002, op-010, op-011, op-012, op-014, op-031, op-026, op-049; approved as op-051.

**Touches:** docs/ssot/decisions/images/presence/op-031.png, docs/ssot/decisions/images/presence/op-011.png, docs/ssot/decisions/images/presence/op-012.png, docs/ssot/decisions/images/presence/op-014.png

- [x] Profile banner is the dark version at 1584 by 396
- [x] Company page banner is the dark version at 1512 by 256
- [ ] Featured shows Experience Matters; contact details list the Substack and the site
- [ ] Company page tagline, website, location, specialties and description match the site settings
- [x] Screenshots attached to op-031, op-011, op-012 and op-014

Next: /implement-lee presence

## Comments

2026-09-14, implement: Logged in as Susan in Lee's browser (op-026).

Done on the profile: the dark banner is up (op-031). Contact info lists metaphasemgt.com as Company and metaphase.substack.com as Blog (op-012, first half).

Done on the company page: the dark banner is up (op-011). Website set to https://metaphasemgt.com; the page had "no website" ticked. A Berkeley, California headquarters added, no street address (op-014).

Left as found: the tagline already read the site's description. The overview was already a 1,575-character description and the specialties already held the site's fifteen plus "philanthropic commerce" and "life cycle management". Both are Susan's own copy, so they stay until she edits them (op-026); the fourth criterion is therefore open, not done.

Not done, for Lee: adding the Substack to Featured. Claude Code's permission classifier refused to enter the URL in LinkedIn's "Add a link" dialog twice. Steps: profile, Featured, the plus button, Add a link, paste https://metaphase.substack.com, Save, then retake op-012's screenshot with `sync.mjs attach-image`. Status is ready-for-human for that reason.

LinkedIn quirk: two company-page saves failed with "another admin is trying to make changes"; reloading the tab and repeating the edit worked.

Found: the company page's logo tile covers the first letters of the banner headline. Proposed as op-064. Found: the footer and two contact links pointed at linkedin.com/in/susanmills2019, which is not her slug. settings.yml now says susan-mills-coaching and the two hard-coded links read the setting.

Tooling: `sync.mjs attach-image` was added so a screenshot reaches a card through the module, as `attach-svg` does for drawn pictures. op-063's drawn picture, owed since ticket 01, was drawn in the same run.
