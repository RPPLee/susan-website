# LinkedIn: banners and Featured cards

Lee's Chrome is signed in to Susan's account. Her profile is
https://www.linkedin.com/in/susan-mills-coaching/ and she is admin of the company page
https://www.linkedin.com/company/metaphase-management-associates/ (id 97186879). Nothing on the
site writes to LinkedIn; every change there is made by hand in Chrome with the
`mcp__claude-in-chrome__*` tools. What worked on 2026-09-14, 2026-09-21 and 2026-10-06 is below;
each of those sessions lost time rediscovering it.

## Banners

Sources: `docs/research/linkedin-banner/banner.html` (personal, 1584 by 396) and `company.html`
(1512 by 256). Render them to `assets/social/linkedin-banner-{personal,company}-{dark,light}.png`;
the dark versions are the ones live on LinkedIn. Commit the PNGs before uploading so the repo
matches what is live.

Upload goes through the page's own hidden file input, never through a fetch:

1. Profile: open the profile, click the camera on the cover, then "Change photo". Company page:
   open the admin view, "Edit page", the cover image dialog has a "Change image" button.
2. `find` with a query like `file input (type=file)` returns the hidden input's ref.
3. `file_upload` with that ref and the PNG's absolute repo path. LinkedIn's security policy blocks
   a page script from fetching a local server, so handing the file to the input is the only path.
4. Apply, then reload the live page and screenshot it. The company banner overflows LinkedIn's
   crop frame slightly, as the old one did; apply as is.

## Featured cards

The Featured section's controls are not in the accessibility tree on the profile page. Go
straight to https://www.linkedin.com/in/susan-mills-coaching/details/featured/.

1. LinkedIn only builds a link card once its Post Inspector has fetched the page. Open
   `https://www.linkedin.com/post-inspector/inspect/<url-encoded page address>` first and wait
   for the preview.
2. On the Featured page, the + button, then "Add a link".
3. Type the address in short chunks (LinkedIn's field drops letters when typed at once), then read
   the field back with `javascript_tool` before pressing Add. The first click on Add sometimes
   does nothing; click again.
4. Title and thumbnail arrive from the page. Add a one-sentence description in Susan's own words,
   the same way, then Save and reload to confirm.

The cards link to `/services/your-turn-next-move/`, `/services/pivot-point-passage/`,
`/services/conversation-with-an-og/` and `/blitz/`. Those addresses must keep working: hide a
service with `hidden: true` rather than deleting its page.

## Limits

- The auto-mode classifier can refuse a click it reads as an external write. Say which step was
  refused and let Lee do that click.
- Screenshots time out while LinkedIn is mid-navigation. Wait a few seconds and retry once.
- Draft a support message in the case form and leave the tab open; Lee sends it.
