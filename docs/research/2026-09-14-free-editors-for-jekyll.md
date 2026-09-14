# Free editors for a Jekyll site on GitHub Pages

Researched 2026-09-14. Answers op-021 and backs op-020.

The editor is for Susan, who is comfortable with email and Google Docs and not with GitHub. After a save, GitHub Actions rebuilds; a small site is live in 1 to 3 minutes.

| Editor | Susan needs GitHub? | Login | Jekyll support | Free limits | Risk |
|---|---|---|---|---|---|
| Pages CMS (app.pagescms.org) | No, email invite | hosted | collections, front matter, body, images, `_data` | none stated | small single-maintainer project, MIT, self-hostable |
| Sveltia CMS | Yes, with write access | self-deployed worker or a pasted token | full | none | none, static |
| Decap CMS | Yes | self-deployed proxy; Decap Turbo free plan is one seat | full, no live preview for Jekyll | none | none, static |
| Keystatic Cloud | No | hosted | not Jekyll | 3 users | not applicable |
| TinaCMS | No, email | hosted | full, but adds a Node build and schema | 2 users | proprietary cloud |
| CloudCannon | No | hosted | best | no free plan, $49 to $55 | low |
| JekyllPad | Yes | hosted | posts and pages | 5 posts a month, ads | proprietary |

## Pages CMS setup, for Lee

1. Sign in at app.pagescms.org with GitHub and install the Pages CMS GitHub App on `RPPLee/susan-website`.
2. Commit `.pages.yml` describing the content: `_services` as a collection, `pages/programs.html` and `_data/settings.yml` as files, `assets/images` as media.
3. Add Susan as a collaborator by email. She signs in through the emailed link. No GitHub account.
4. Saves commit straight to `main` under the App's identity (set `settings.commit.identity: user` for her name). No draft step.

Sources: https://pagescms.org/docs/configuration/collaborators/, https://pagescms.org/docs/configuration/content/, https://pagescms.org/docs/configuration/media/, https://github.com/pages-cms/pages-cms, https://sveltiacms.app/en/docs/faq, https://decapcms.org/docs/github-backend/, https://keystatic.com/docs/cloud, https://tina.io/pricing, https://cloudcannon.com/pricing/, https://www.jekyllpad.com/pricing
