// Insights shows the posts of one Substack section (Lee, 2026-09-24). scripts/fetch-substack.mjs
// fetches the section's RSS feed into _data/substack.json on every deploy and once a day; Susan
// publishes on Substack and edits nothing here. The feed address is a site setting.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildWithData, loadYaml, repo } from "./jekyll.mjs";
import { parseFeed, feedUrl, fetchSection } from "../scripts/fetch-substack.mjs";

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title><![CDATA[Money, Culture &amp; Community - Experience Matters]]></title>
<link>https://metaphase.substack.com/s/money-culture-and-community</link>
<item>
<title><![CDATA[Older post]]></title>
<link>https://metaphase.substack.com/p/older-post</link>
<pubDate>Tue, 01 Sep 2026 15:00:00 GMT</pubDate>
<description><![CDATA[<p>First paragraph of the <b>older</b> post.</p>]]></description>
</item>
<item>
<title><![CDATA[Gift &amp; gain]]></title>
<link>https://metaphase.substack.com/p/gift-and-gain</link>
<pubDate>Thu, 10 Sep 2026 15:00:00 GMT</pubDate>
<description><![CDATA[<p>Why a gift economy pairs with business.</p>]]></description>
<enclosure url="https://substackcdn.com/image/gift.jpg" length="0" type="image/jpeg"/>
</item>
</channel></rss>`;

test("the fetcher turns a section feed into newest-first posts with title, link, date, summary and picture", () => {
  const section = parseFeed(feed);
  assert.equal(section.url, "https://metaphase.substack.com/s/money-culture-and-community");
  assert.deepEqual(section.items, [
    { title: "Gift & gain", url: "https://metaphase.substack.com/p/gift-and-gain", date: "2026-09-10", summary: "Why a gift economy pairs with business.", image: "https://substackcdn.com/image/gift.jpg" },
    { title: "Older post", url: "https://metaphase.substack.com/p/older-post", date: "2026-09-01", summary: "First paragraph of the older post.", image: "" },
  ]);
});

test("the feed address is a site setting under the Substack publication, and a missing section leaves the list empty", async () => {
  const settings = loadYaml("_data/settings.yml");
  assert.equal(feedUrl(), settings.substack_section_feed);
  assert.ok(feedUrl().startsWith(settings.social.substack), "the section feed is not on Susan's Substack");
  assert.match(feedUrl(), /\/feed$/);
  const missing = await fetchSection("https://127.0.0.1:9/s/nothing/feed");
  assert.deepEqual(missing.items, []);
  assert.deepEqual((await fetchSection("")).items, []);
});

test("the deploy fetches the section on every build and once a day, and the fetched file stays out of git", () => {
  const workflow = readFileSync(join(repo, ".github/workflows/jekyll.yml"), "utf8");
  assert.match(workflow, /schedule:\s*\n\s*- cron:/);
  assert.match(workflow, /run: node scripts\/fetch-substack\.mjs/);
  assert.ok(workflow.indexOf("fetch-substack") < workflow.indexOf("jekyll-build-pages"), "the fetch runs after the build");
  assert.match(readFileSync(join(repo, ".gitignore"), "utf8"), /^_data\/substack\.json$/m);
  assert.match(readFileSync(join(repo, "_config.yml"), "utf8"), /^\s+- scripts$/m);
});

test("the fetched posts show on Insights and the homepage, linking to Substack", () => {
  const b = buildWithData((data) => writeFileSync(join(data, "substack.json"), JSON.stringify({ ...parseFeed(feed), fetched: "2026-09-24T12:00:00Z" })));
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const titles = (html) => [...html.matchAll(/<h3><a href="(https:\/\/metaphase\.substack\.com\/p\/[^"]+)" target="_blank" rel="noopener">([^<]+)<\/a><\/h3>/g)].map((m) => m[2]);
    const insights = b.page("insights/index.html");
    assert.deepEqual(titles(insights), ["Gift &amp; gain", "Older post"]);
    assert.match(insights, /<time datetime="2026-09-10">September 10, 2026<\/time>/);
    assert.match(insights, /<img src="https:\/\/substackcdn\.com\/image\/gift\.jpg" alt="" loading="lazy">/);
    assert.match(insights, /Why a gift economy pairs with business\./);
    assert.match(insights, /href="https:\/\/metaphase\.substack\.com\/s\/money-culture-and-community"[^>]*>All posts on Substack/);
    assert.doesNotMatch(insights, /The first tips are on their way/);
    assert.deepEqual(titles(b.page("index.html")), ["Gift &amp; gain", "Older post"]);
  } finally {
    b.cleanup();
  }
});

test("with an empty fetch the site falls back to local posts or the waiting note", () => {
  const b = buildWithData((data) => writeFileSync(join(data, "substack.json"), JSON.stringify({ url: "", items: [], note: "feed returned 404" })));
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    assert.doesNotMatch(b.page("insights/index.html"), /Read on Substack/);
  } finally {
    b.cleanup();
  }
});
