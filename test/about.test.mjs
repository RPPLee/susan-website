// The fuller About page (op-041, op-057). The bio is the page body, which Susan edits as text in
// the editor. Lee's draft waits behind a switch: until Susan turns on "Publish the new bio",
// visitors keep seeing the old bio.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { repo, loadYaml, frontMatter, buildWithData } from "./jekyll.mjs";

const config = loadYaml(".pages.yml");
const about = config.content.find((entry) => entry.label === "About");

test("the editor offers the bio as text and a switch to publish it", () => {
  assert.equal(about.path, "pages/about.md");
  const body = about.fields.find((field) => field.name === "body");
  assert.equal(body.type, "rich-text");
  const toggle = about.fields.find((field) => field.name === "show_new_bio");
  assert.equal(toggle?.type, "boolean");
  assert.equal(typeof frontMatter("pages/about.md").show_new_bio, "boolean");
});

test("the About page shows the bio the switch selects, with the photo, specialties and impact", () => {
  const { show_new_bio } = frontMatter("pages/about.md");
  const source = readFileSync(join(repo, "pages/about.md"), "utf8").replace(/^---\n[\s\S]*?\n---\n/, "");
  const firstDraftSentence = source.match(/^[A-Z][^\n.]*\./m)[0];

  const b = buildWithData();
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const html = b.page("about/index.html");
    assert.match(html, /<img src="\/assets\/images\/susan-profile-2\.jpg" alt="Susan Mills"/);
    assert.match(html, /Specialties/);
    assert.match(html, /Our Impact/);
    assert.match(html, /About Metaphase Management/);
    if (show_new_bio) {
      assert.ok(html.includes(firstDraftSentence), "the new bio is switched on but not shown");
      assert.doesNotMatch(html, /Most of this work focused on competitive performances/);
    } else {
      assert.match(html, /Most of this work focused on competitive performances/);
      assert.ok(!html.includes(firstDraftSentence), "the draft bio is live before Susan switched it on");
    }
  } finally {
    b.cleanup();
  }
});
