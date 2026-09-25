// Insights is a blog on the site (Lee, 2026-09-18): Susan writes posts in the editor, each gets a
// page under /insights/, the Insights page lists them newest first, and the homepage shows the
// newest. The posts here are written into a private copy of the source (buildCopy).
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildCopy } from "./jekyll.mjs";

const post = ({ title, published = true, image = "" }) => `---
title: "${title}"
published: ${published}
summary: Summary of ${title}.
${image ? `image: ${image}\n` : ""}---

## A heading

Some **bold** words and a picture.

![A chart](/assets/images/chart.png)
`;

test("a post Susan writes gets a page, a card on Insights and a place on the homepage", () => {
  const b = buildCopy((source) => {
    // Susan's real posts stay out of this build, so the lists below are exactly the three written here.
    for (const file of readdirSync(join(source, "_posts"))) rmSync(join(source, "_posts", file));
    // Substack posts take the place of local ones, so the fetched section is emptied too.
    writeFileSync(join(source, "_data/substack.json"), JSON.stringify({ items: [] }));
    writeFileSync(join(source, "_posts/2026-09-01-older-tip.md"), post({ title: "Older tip" }));
    writeFileSync(join(source, "_posts/2026-09-10-newer-tip.md"), post({ title: "Newer tip", image: "/assets/images/tip.jpg" }));
    writeFileSync(join(source, "_posts/2026-09-12-a-draft.md"), post({ title: "A draft", published: false }));
  });
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);

    const page = b.page("insights/newer-tip/index.html");
    assert.match(page, /<h1>Newer tip<\/h1>/);
    assert.match(page, /<time datetime="2026-09-10[^"]*">September 10, 2026<\/time>/);
    assert.match(page, /<h2[^>]*>A heading<\/h2>/);
    assert.match(page, /<strong>bold<\/strong>/);
    assert.match(page, /<img src="\/assets\/images\/chart\.png" alt="A chart"/);
    assert.match(page, /<img src="\/assets\/images\/tip\.jpg" alt="" class="post-image">/);
    assert.match(page, /href="\/insights\/"/, "the post has no way back to Insights");

    const titles = (html) => [...html.matchAll(/<h3><a href="(\/insights\/[^"]+\/)">([^<]+)<\/a><\/h3>/g)].map((m) => m[2]);
    const insights = b.page("insights/index.html");
    assert.deepEqual(titles(insights), ["Newer tip", "Older tip"]);
    assert.match(insights, /Summary of Newer tip\./);
    assert.ok(!existsSync(join(b.destination, "insights/a-draft/index.html")), "an unpublished post was built");

    assert.deepEqual(titles(b.page("index.html")), ["Newer tip", "Older tip"]);
  } finally {
    b.cleanup();
  }
});

test("with no posts, Insights says so and the homepage leaves the section out", () => {
  const b = buildCopy();
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    if (b.page("insights/index.html").includes("post-card")) return; // Susan has published by now
    assert.match(b.page("insights/index.html"), /The first tips are on their way\./);
    assert.doesNotMatch(b.page("index.html"), /<section class="writing"/);
  } finally {
    b.cleanup();
  }
});
