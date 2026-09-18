# The editor: Pages CMS

Susan edits the site at https://app.pagescms.org without a GitHub account. Every save is a commit
to `main`; the deploy workflow tests it and publishes it to metaphasemgt.com within a few minutes.
There is no draft step; git history is the undo. Decisions: op-020, op-029, op-047, op-053.

The configuration is `.pages.yml` at the repo root. `test/editor.test.mjs` checks that every path
and field in it exists in the site, so a rename on either side fails `npm test`.

## What Susan can edit, and where it shows

| Sidebar entry | File | What changes |
|---|---|---|
| Home page | `_data/home.yml` | The homepage as a list of blocks. She edits a block's words, drags blocks to reorder them, removes one, or adds one: headline banner (headline, line under it, paragraph, buttons), schedule a call, services, latest Insights, testimonials, about Susan, get in touch, cards, free text. |
| Insights posts | `_posts/*.md` | Her blog. Title, date, a Published switch for drafts, summary, picture, and the post in the rich-text editor (headings, bold, lists, links, quotes, uploaded pictures). Each post is a page at `/insights/<title>/`. |
| Insights page | `pages/insights.html` | The heading and the line above the list of posts. |
| Services | `_services/*.md` | Title, tagline, homepage card text, price, duration, format, group, order and the page text of each service. Order is a number; lower comes first within the group. The group (Individuals, Groups, Organizations, or Not on the homepage) is where the service sits on the homepage. Prices are free text, shown as written. |
| Programs | `pages/programs.html` | The New Programs page as fields: the words at the top, a list of programs (name, tagline, description, facts, links) she can add to, remove from and reorder, and the closing section. The HTML is `_layouts/programs.html`. |
| About | `pages/about.md` | Her bio as text. The rest of the page is `_layouts/about.html`. |
| Testimonials | `_data/testimonials.yml` | Client quotes. The homepage block stays hidden until there is one. |
| Site settings | `_data/settings.yml` | Site name, tagline, description; the booking page address; Susan's name, title, email, phone and location; the LinkedIn and Substack links. |
| Media | `assets/images/` | Upload and pick images. Images only. |

Each homepage block type is a template in `_includes/home/<type>.html`, offered under `blocks` in
`.pages.yml` and rendered by the `case` in `index.html`. A new type needs all three;
`test/editor.test.mjs` fails when one is missing or when the editor offers a field the template
never reads.

"Schedule a time" buttons (the homepage call block and the Conversation With An OG page) open
Site settings > Booking page, a Google Calendar appointment schedule Susan creates in her own
calendar. While that field is empty they open the contact form.

Not exposed: layouts, includes, the menu, the specialties list, the group list in
`_data/service_groups.yml`, `_config.yml`, the workflow and `.pages.yml` itself. Adding or
deleting a service is off too: a new service needs an icon, an order and a share image, which
stay with Lee.

Front-matter keys the editor does not list (`layout`, `icon`, `new`, `booking`) survive a save because
`settings.content.merge` is on.

Addresses her LinkedIn Featured cards link to must keep working: `/services/conversation-with-an-og/`,
`/services/turning-point-tenders/` and `/blitz/`. Nothing on the site writes to LinkedIn; a change
here shows there only as the preview image and title LinkedIn re-reads for those links.

## Saves and who they are from

`settings.commit.identity: user` asks Pages CMS to put the editor's own name and email on each
save "when available", so Susan's saves should show as hers in `git log` and Lee's as his. What
name it holds for an email-invited collaborator is not documented; step 4 below checks Lee's
own commit and Susan's first save settles hers. Commit messages read
"Update _services/coaching.md in the editor".

A save rewrites the file from the editor. Keys the editor does not list survive
(`settings.content.merge`), but comments in `_data/settings.yml` do not.

## Setup, once (Lee)

1. Push `.pages.yml` to `main`.
2. Open https://app.pagescms.org, sign in with GitHub as `RPPLee`, and install the Pages CMS
   GitHub App on the `RPPLee/susan-website` repository only.
3. Open the repository in Pages CMS. The sidebar shows the entries in the table above.
4. Prove the round trip: open Services, change one price, press Save. Check that the commit
   appears on `main` with Lee as its author (`git log -1 --format='%an <%ae>'` after a pull),
   the deploy workflow runs, and the new price is on metaphasemgt.com. Note how long it took.
5. Invite Susan: repository settings in Pages CMS, Collaborators, add
   susanmills@metaphasemgt.com. She gets an email with a sign-in link and never needs GitHub.
6. Ask her to sign in once and open a service, and send her the "What Susan can edit" table above.

## If something breaks

- A save that breaks the build stops at the workflow's test step and never reaches the site.
  Revert the commit on `main` or fix the file; the next save deploys again.
- A field in `.pages.yml` that no longer exists in the site fails `npm test`. Change the config
  or the file, not the test.
- Pages CMS caches the repo; if a change made outside the editor is not showing, reopen the
  repository or use its refresh action.
