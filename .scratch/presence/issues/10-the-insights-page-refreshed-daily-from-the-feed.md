# 10: The Insights page, refreshed daily from the feed

**Status:** ready-for-agent
**Blocked by:** 01 (touches .github/workflows/jekyll.yml), 05 (touches assets/css/style.css), 06 (touches _data/settings.yml), 07 (touches assets/css/style.css), 09 (touches assets/css/style.css).
**Next:** `/implement-lee presence`

**What to build:** A visitor opens Insights from the menu and sees the ten newest Experience Matters posts with date and excerpt, each opening on Substack, with the subscribe form at the top. The site refreshes them once a day and on every push without anyone touching anything; when the feed is down the build still passes and the page says the posts are on Substack.

**Decisions:** op-007, op-036, op-037, op-044, op-035; approved as op-059.

**Touches:** scripts/insights-feed.mjs, .github/workflows/jekyll.yml, pages/insights.html, _data/settings.yml, .gitignore, assets/css/style.css, test

- [ ] The script reads a URL or a file and writes the data file with the ten newest posts
- [ ] The workflow runs it before the build, on push and daily at 13:00 UTC
- [ ] The data file is gitignored
- [ ] The page lists the posts from the fixture feed in the test and shows the fallback line without the file
- [ ] Insights is in the menu after Services

Next: /implement-lee presence
