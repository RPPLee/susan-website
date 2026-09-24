// The About page (op-041, op-057). The bio is the page body, which Susan edits as text in the
// editor. Lee, 2026-09-18: it carries her LinkedIn About, and the impact section is gone.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { repo, loadYaml, frontMatter, buildWithData } from "./jekyll.mjs";

const config = loadYaml(".pages.yml");
const about = config.content.find((entry) => entry.label === "About");

test("the editor offers the bio as text", () => {
  assert.equal(about.path, "pages/about.md");
  assert.equal(about.fields.find((field) => field.name === "body").type, "rich-text");
  assert.ok(!("show_new_bio" in frontMatter("pages/about.md")), "the publish switch is gone; the body is the bio");
});

test("the About page shows the bio with the photo and specialties, and no impact section", () => {
  const source = readFileSync(join(repo, "pages/about.md"), "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
  const firstSentence = source.match(/^[A-Z][^\n.]*\./m)[0];

  const b = buildWithData();
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const html = b.page("about/index.html");
    assert.match(html, /<img src="\/assets\/images\/susan-profile-2\.jpg" alt="Susan Mills"/);
    assert.ok(html.includes(firstSentence), "the bio is not on the page");
    assert.match(html, /Specialties/);
    assert.match(html, /About Metaphase Management/);
    // Lee, 2026-09-24: the firm comes before the founder.
    assert.ok(html.indexOf("About Metaphase Management") < html.indexOf(firstSentence), "the bio is above the company section");
    assert.doesNotMatch(html, /Our Impact/);
  } finally {
    b.cleanup();
  }
});
