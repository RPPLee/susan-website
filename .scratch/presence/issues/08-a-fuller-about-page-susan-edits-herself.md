# 08: A fuller About page Susan edits herself

**Status:** ready-for-human (built 2026-09-16; waits on Susan switching on the new bio)
**Blocked by:** 04 (touches .pages.yml), 05 (touches .pages.yml), 06 (touches .pages.yml), 07 (touches .pages.yml).
**Next:** `/implement-lee presence`

**What to build:** The About page carries a fuller bio drafted by Lee from the profile document, as a body Susan edits in the editor. It goes live only after she has read it there.

**Decisions:** op-041, op-022, op-004; approved as op-057.

**Touches:** pages/about.html, .pages.yml

- [x] The About body is editable in the editor as rich text
- [ ] Lee's draft is in place and Susan has edited or accepted it
- [x] The page keeps the existing photos and contact block

Next: /implement-lee presence

## Comments

2026-09-16: the draft is in `pages/about.md`, rewritten in the third person from Susan's own LinkedIn About (her email of 2026-09-15) plus the background facts already on the page. The page now shows her photo. In the editor, About > "Publish the new bio" is off, so the old bio stays live until she turns it on. Once she has, delete `_includes/about-bio-current.html` and the switch.
