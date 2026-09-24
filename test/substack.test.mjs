// Insights shows the posts of one Substack section (Lee, 2026-09-24). scripts/fetch-substack.mjs
// fetches the section's posts from the publication's archive API into _data/substack.json on every
// deploy and once a day; Susan publishes on Substack and edits nothing here. The section address is
// a site setting. (Substack's per-section RSS feeds answer 404 on this publication.)
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildWithData, loadYaml, repo } from "./jekyll.mjs";
import { parseArchive, parseSectionUrl, archiveUrl, sectionUrl, fetchSection } from "../scripts/fetch-substack.mjs";

const section = "https://metaphase.substack.com/s/money-culture-community";
const archive = [
  { title: "Older post", canonical_url: "https://metaphase.substack.com/p/older-post", post_date: "2026-09-01T15:00:00.000Z", subtitle: "", description: "", truncated_body_text: "First paragraph of the older post.", cover_image: null, section_slug: "money-culture-community", section_name: "Money, Culture, Community", audience: "everyone" },
  { title: "On the road", canonical_url: "https://metaphase.substack.com/p/on-the-road", post_date: "2026-09-05T15:00:00.000Z", subtitle: "Not in this section", cover_image: "https://substackcdn.com/image/road.jpg", section_slug: "notes-from-the-road", section_name: "Notes From The Road", audience: "everyone" },
  { title: "Gift &amp; gain", canonical_url: "https://metaphase.substack.com/p/gift-and-gain", post_date: "2026-09-10T15:00:00.000Z", subtitle: "Why a gift economy pairs with business.", cover_image: "https://substackcdn.com/image/gift.jpg", section_slug: "money-culture-community", section_name: "Money, Culture, Community", audience: "everyone" },
  { title: "No section", canonical_url: "https://metaphase.substack.com/p/no-section", post_date: "2026-09-12T15:00:00.000Z", subtitle: "", section_slug: null, section_name: null, audience: "everyone" },
];

test("the fetcher keeps the section's posts, newest first, with title, link, date, summary and picture", () => {
  const result = parseArchive(archive, section);
  assert.equal(result.url, section);
  assert.equal(result.title, "Money, Culture, Community");
  assert.deepEqual(result.items, [
    { title: "Gift & gain", url: "https://metaphase.substack.com/p/gift-and-gain", date: "2026-09-10", summary: "Why a gift economy pairs with business.", image: "https://substackcdn.com/image/gift.jpg" },
    { title: "Older post", url: "https://metaphase.substack.com/p/older-post", date: "2026-09-01", summary: "First paragraph of the older post.", image: "" },
  ]);
  // The publication address alone means every post.
  assert.equal(parseArchive(archive, "https://metaphase.substack.com").items.length, 4);
});

test("the section address is a site setting under the Substack publication, and it names the archive API", async () => {
  const settings = loadYaml("_data/settings.yml");
  assert.equal(sectionUrl(), settings.substack_section);
  assert.ok(sectionUrl().startsWith(settings.social.substack), "the section is not on Susan's Substack");
  assert.deepEqual(parseSectionUrl(sectionUrl()), { origin: "https://metaphase.substack.com", slug: "money-culture-community" });
  assert.equal(archiveUrl(sectionUrl()), "https://metaphase.substack.com/api/v1/archive?sort=new&offset=0&limit=50");
  assert.deepEqual((await fetchSection("https://127.0.0.1:9/s/nothing")).items, []);
  assert.deepEqual((await fetchSection("")).items, []);
  assert.deepEqual((await fetchSection("not an address")).items, []);
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
  const b = buildWithData((data) => writeFileSync(join(data, "substack.json"), JSON.stringify({ ...parseArchive(archive, section), fetched: "2026-09-24T12:00:00Z" })));
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const titles = (html) => [...html.matchAll(/<h3><a href="(https:\/\/metaphase\.substack\.com\/p\/[^"]+)" target="_blank" rel="noopener">([^<]+)<\/a><\/h3>/g)].map((m) => m[2]);
    const insights = b.page("insights/index.html");
    assert.deepEqual(titles(insights), ["Gift &amp; gain", "Older post"]);
    assert.match(insights, /<time datetime="2026-09-10">September 10, 2026<\/time>/);
    assert.match(insights, /<img src="https:\/\/substackcdn\.com\/image\/gift\.jpg" alt="" loading="lazy">/);
    assert.match(insights, /Why a gift economy pairs with business\./);
    assert.match(insights, /href="https:\/\/metaphase\.substack\.com\/s\/money-culture-community"[^>]*>All posts on Substack/);
    assert.doesNotMatch(insights, /The first tips are on their way/);
    assert.deepEqual(titles(b.page("index.html")), ["Gift &amp; gain", "Older post"]);
  } finally {
    b.cleanup();
  }
});

test("with an empty fetch the site falls back to local posts or the waiting note", () => {
  const b = buildWithData((data) => writeFileSync(join(data, "substack.json"), JSON.stringify({ url: "", items: [], note: "archive returned 404" })));
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    assert.doesNotMatch(b.page("insights/index.html"), /Read on Substack/);
  } finally {
    b.cleanup();
  }
});
