# Metaphase Management Associates website

Jekyll site for Susan Mills' consulting firm, live at https://metaphasemgt.com via GitHub Pages.

## Agent skills

### Issue tracker

Issues and specs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage roles, each label string equal to its name.

### Domain docs

Single-context: the glossary is `CONTEXT.md` at the repo root; use its terms, not the ones it avoids.

### Building, editing, paying, LinkedIn

`docs/agents/build.md` (build, test, push), `docs/agents/editor.md` (what Susan edits in Pages
CMS and where it lives), `docs/agents/payments.md` (the Stripe `checkout` field),
`docs/agents/linkedin.md` (changing banners and Featured cards in Chrome).

### Publishing

Jekyll copies any file without front matter into the built site. Agent and planning files
(`CLAUDE.md`, `CONTEXT.md`, `docs/`, `.scratch/`) are listed under `exclude` in `_config.yml`
so they never reach metaphasemgt.com. Add any new non-site file there too.

### Decision record

Product decisions live in `docs/ssot/decisions/<feature>.md` and enter only through a ratifier's
verdict on the decisions page. Proposals wait in `.scratch/<feature>/decisions.md`. Format, page,
sync commands and rules: `docs/ssot/decisions/README.md`. `/ssot` in `.claude/skills/` opens
the page and applies verdicts. The `-lee` wrappers around Matt Pocock's skills were removed on
2026-10-11; use his skills directly. Current feature slug: `presence` (website, LinkedIn,
Substack, payments).
