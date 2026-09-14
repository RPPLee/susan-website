# 06: Booking link and the "who she works with" line

**Status:** ready-for-agent
**Blocked by:** 01 (touches test), 04 (touches .pages.yml), 05 (touches index.html).
**Next:** `/implement-lee presence`

**What to build:** A visitor sees a line in the hero saying who Susan works with and a button that opens her Google Calendar appointment schedule; the same button sits at the top of the Contact page. The line and the link address are in the site settings, so Susan edits both in the editor. The hero line goes live only after Susan has read Lee's draft in the editor.

**Decisions:** op-034, op-041, op-022, op-026; approved as op-055.

**Touches:** _data/settings.yml, index.html, pages/contact.html, .pages.yml, test

- [ ] An appointment schedule exists in Susan's Google Calendar and its address is in the settings
- [ ] The hero button and the Contact page button open it
- [ ] The hero shows the audience line from the settings
- [ ] The editor exposes both fields
- [ ] Lee's draft line is in the settings and Susan has edited or accepted it in the editor
- [ ] The test asserts the button address and the line on both pages

Next: /implement-lee presence
