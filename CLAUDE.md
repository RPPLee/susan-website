# Metaphase Management Associates website

Jekyll site for Susan Mills' consulting firm, live at https://metaphasemgt.com via GitHub Pages.

## Agent skills

### Issue tracker

Issues and specs live as local markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

The five default triage roles, each label string equal to its name. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` plus `docs/adr/` at the repo root. See `docs/agents/domain.md`.

### Publishing

Jekyll copies any file without front matter into the built site. Agent and planning files
(`CLAUDE.md`, `CONTEXT.md`, `docs/`, `.scratch/`) are listed under `exclude` in `_config.yml`
so they never reach metaphasemgt.com. Add any new non-site file there too.
