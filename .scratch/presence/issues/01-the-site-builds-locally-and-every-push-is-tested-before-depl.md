# 01: The site builds locally and every push is tested before deploy

**Status:** ready-for-agent
**Blocked by:** None (can start immediately).
**Next:** `/implement-lee presence`

**What to build:** Lee runs one documented setup and `bundle exec jekyll build` succeeds on his machine. A Node test builds the site into a temporary folder and asserts the homepage renders. The deploy workflow runs that test before the deploy step, so a push that breaks the build never reaches metaphasemgt.com.

**Decisions:** op-048, op-043; approved as op-050.

**Touches:** .github/workflows/jekyll.yml, test, package.json, docs/agents/build.md

- [ ] A setup note says how to install the Ruby and run the build
- [ ] `bundle exec jekyll build` succeeds locally
- [ ] `node --test` builds the site to a temp folder and passes one assertion on the homepage
- [ ] The workflow runs `node --test` before deploying and fails the run when it fails

Next: /implement-lee presence
