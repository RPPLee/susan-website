# The editor: Pages CMS

Susan edits the site at https://app.pagescms.org without a GitHub account. Every save is a commit
to `main`; the deploy workflow tests it and publishes it to metaphasemgt.com within a few minutes.
There is no draft step; git history is the undo. Decisions: op-020, op-029, op-047, op-053.

The configuration is `.pages.yml` at the repo root. `test/editor.test.mjs` checks that every path
and field in it exists in the site, so a rename on either side fails `npm test`.

## What Susan can edit, and where it shows

| Sidebar entry | File | What changes |
|---|---|---|
| Services | `_services/*.md` | Title, tagline, price, duration, format, group and the page text of each service. The group (Individuals, Groups or Organizations) is where the service sits on the homepage. Prices are free text, shown as written. |
| Programs | `pages/programs.html` | The New Programs page: title, search description, and the page HTML. |
| About | `pages/about.md` | Her bio as text, plus "Publish the new bio". While that switch is off, the page shows the old bio from `_includes/about-bio-current.html`. The rest of the page is `_layouts/about.html`. |
| Site settings | `_data/settings.yml` | Site name, tagline, description, the homepage intro; Susan's name, title, email, phone and location; the LinkedIn and email links. |
| Media | `assets/images/` | Upload and pick images. Images only. |

The Programs and About pages open as HTML source for now. Susan changes words between the tags;
tickets 06 and 08 turn the pieces she edits often into fields.

Not exposed: layouts, includes, the menu, the specialties list, the group list in
`_data/service_groups.yml`, `_config.yml`, the workflow and `.pages.yml` itself. Adding or
deleting a service is off too: a new service needs an icon, an order and a share image, which
stay with Lee. The homepage card text is the tagline, or the `summary` key where one exists
(the three newest services); `summary` is not an editor field yet. The short
bio in the settings file is not exposed either, since nothing on the site shows it yet; ticket 08
adds it with the About page.

Front-matter keys the editor does not list (`layout`, `icon`, `order`, `new`, `summary`) survive a save because
`settings.content.merge` is on.

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
3. Open the repository in Pages CMS. The sidebar shows Services, Programs, About, Site settings
   and Media.
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
