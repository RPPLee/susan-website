// The Insights page and the homepage's latest writing (op-007, op-036, op-037, op-044).
// The feed is a fixture file; nothing here reaches Substack. Each build gets its own data folder
// inside the repo (Jekyll only reads data from inside the source), holding a copy of _data plus
// whatever the feed script wrote.
import { test } from "node:test";
import assert from "node:assert/strict";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { repo, run, loadYaml } from "./jekyll.mjs";

const fixture = join(repo, "test/fixtures/substack-feed.xml");

function build({ feed }) {
  const data = mkdtempSync(join(repo, ".test-data-"));
  const destination = mkdtempSync(join(tmpdir(), "metaphase-insights-"));
  cpSync(join(repo, "_data"), data, { recursive: true });
  rmSync(join(data, "insights.json"), { force: true });
  let script;
  if (feed) script = run("node", ["scripts/insights-feed.mjs", feed, join(data, "insights.json")]);
  const config = join(data, "_test_config.yml");
  writeFileSync(config, `data_dir: ${basename(data)}\n`);
  const result = run("bundle", ["exec", "jekyll", "build", "--config", `_config.yml,${config}`, "--destination", destination]);
  const cleanup = () => {
    rmSync(data, { recursive: true, force: true });
    rmSync(destination, { recursive: true, force: true });
  };
  return { data, destination, result, script, cleanup };
}

test("the feed script keeps the ten newest posts with title, date, link, excerpt and image", () => {
  const out = mkdtempSync(join(tmpdir(), "metaphase-feed-"));
  try {
    const result = run("node", ["scripts/insights-feed.mjs", fixture, join(out, "insights.json")]);
    assert.equal(result.status, 0, result.stderr);
    const posts = JSON.parse(readFileSync(join(out, "insights.json"), "utf8"));
    assert.equal(posts.length, 10);
    assert.deepEqual(posts.map((p) => p.title), ["Post 12", "Post 11", "Post 10", "Post 09", "Post 08", "Post 07", "Post 06", "Post 05", "Post 04", "Post 03"]);
    assert.equal(posts[0].link, "https://metaphase.substack.com/p/post-12");
    assert.equal(posts[0].date, "2026-09-06T14:00:00.000Z");
    assert.equal(posts[0].excerpt, "Excerpt for post 12, with “quotes” & an ampersand");
    assert.equal(posts[0].image, "https://substackcdn.com/image/post-12.jpg");
    assert.equal(posts[1].excerpt, "");
    assert.equal(posts[1].image, "");
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

// Substack blocks GitHub's runners, so the deploy reads the feed through rss2json.com.
test("the feed script reads rss2json's JSON as well as RSS", () => {
  const out = mkdtempSync(join(tmpdir(), "metaphase-feed-"));
  try {
    const result = run("node", ["scripts/insights-feed.mjs", join(repo, "test/fixtures/rss2json-feed.json"), join(out, "insights.json")]);
    assert.equal(result.status, 0, result.stderr);
    const posts = JSON.parse(readFileSync(join(out, "insights.json"), "utf8"));
    assert.deepEqual(posts, [
      { title: "Post A & B", date: "2026-09-11T14:26:47.000Z", link: "https://metaphase.substack.com/p/post-a", excerpt: "Excerpt A", image: "https://images.example/a.jpg?x=1&y=2" },
      { title: "Post B", date: "2026-09-06T10:45:06.000Z", link: "https://metaphase.substack.com/p/post-b", excerpt: "", image: "" },
    ]);
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("an unreachable feed leaves no data file and does not fail the build step", () => {
  const out = mkdtempSync(join(tmpdir(), "metaphase-feed-"));
  try {
    const result = run("node", ["scripts/insights-feed.mjs", join(out, "missing.xml"), join(out, "insights.json")]);
    assert.equal(result.status, 0, "the script must exit 0 so the deploy still runs");
    assert.ok(!existsSync(join(out, "insights.json")));
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("the Insights page lists the posts, each opening on Substack, under the subscribe form", () => {
  const b = build({ feed: fixture });
  try {
    assert.equal(b.script.status, 0, b.script.stderr);
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stdout}\n${b.result.stderr}`);
    const { social } = loadYaml("_data/settings.yml");
    const html = readFileSync(join(b.destination, "insights/index.html"), "utf8");
    const main = html.slice(html.indexOf("<main>"), html.indexOf("</main>"));

    const form = main.indexOf(`src="${social.substack}embed"`);
    assert.ok(form > -1, "the Insights page has no Substack subscribe form");
    const links = [...main.matchAll(/<h3><a href="(https:\/\/metaphase\.substack\.com\/p\/[^"]+)"[^>]*>([^<]+)<\/a><\/h3>/g)];
    assert.deepEqual(links.map((m) => m[2]).slice(0, 2), ["Post 12", "Post 11"]);
    assert.equal(links.length, 10);
    assert.ok(main.indexOf(links[0][0]) > form, "the subscribe form must come before the posts");
    assert.match(main, /Excerpt for post 12, with “quotes” &amp; an ampersand/);
    assert.match(main, /September 6, 2026/);
    assert.doesNotMatch(main, /posts are on Substack/);
  } finally {
    b.cleanup();
  }
});

test("without the data file the Insights page still builds and points to Substack", () => {
  const b = build({ feed: null });
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const { social } = loadYaml("_data/settings.yml");
    const html = readFileSync(join(b.destination, "insights/index.html"), "utf8");
    assert.match(html, /posts are on Substack/);
    assert.ok(html.includes(`href="${social.substack}"`));
    assert.ok(html.includes(`src="${social.substack}embed"`));
    const home = readFileSync(join(b.destination, "index.html"), "utf8");
    assert.doesNotMatch(home, /id="writing"/, "the homepage shows an empty writing section");
  } finally {
    b.cleanup();
  }
});

test("the homepage features the three newest posts and links to Insights", () => {
  const b = build({ feed: fixture });
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const home = readFileSync(join(b.destination, "index.html"), "utf8");
    const section = home.match(/<section class="writing" id="writing">([\s\S]*?)<\/section>/);
    assert.ok(section, "the homepage has no writing section");
    const titles = [...section[1].matchAll(/<h3><a href="https:\/\/metaphase\.substack\.com\/p\/[^"]+"[^>]*>([^<]+)<\/a><\/h3>/g)].map((m) => m[1]);
    assert.deepEqual(titles, ["Post 12", "Post 11", "Post 10"]);
    assert.match(section[1], /href="\/insights\/"/);
  } finally {
    b.cleanup();
  }
});

test("Insights is in the menu after Services", () => {
  const titles = loadYaml("_data/settings.yml").menu.map((item) => item.title);
  assert.equal(titles[titles.indexOf("Services") + 1], "Insights");
});
