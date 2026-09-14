# 01: The site builds locally and every push is tested before deploy

**Status:** done
**Blocked by:** None (can start immediately).
**Next:** `/implement-lee presence`

**What to build:** Lee runs one documented setup and `bundle exec jekyll build` succeeds on his machine. A Node test builds the site into a temporary folder and asserts the homepage renders. The deploy workflow runs that test before the deploy step, so a push that breaks the build never reaches metaphasemgt.com.

**Decisions:** op-048, op-043; approved as op-050.

**Touches:** .github/workflows/jekyll.yml, test, package.json, docs/agents/build.md

- [x] A setup note says how to install the Ruby and run the build
- [x] `bundle exec jekyll build` succeeds locally
- [x] `node --test` builds the site to a temp folder and passes one assertion on the homepage
- [x] The workflow runs `node --test` before deploying and fails the run when it fails

Next: /implement-lee presence

## Comments

2026-09-14, implement: Homebrew Ruby 3.4.7 was already installed; `bundle install` with a local `vendor/bundle` path and `bundle exec jekyll build` succeed. The test builds with `--strict_front_matter`, which exposed an unquoted colon in `pages/register.html`'s front matter: the live site built that page at `/pages/register/` and every Register link 404ed. Quoted the description; the page now builds at `/register/`. GitHub's Jekyll action pins Jekyll 3.10, not 4; noted in `docs/agents/build.md` and proposed as op-063.
