// Testimonials Susan adds in the editor (op-040, op-056). The section is absent until there is a
// real entry, so no placeholder quote ever ships.
import { test } from "node:test";
import assert from "node:assert/strict";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadYaml, buildWithData } from "./jekyll.mjs";

test("the testimonials file ships with no entries", () => {
  assert.deepEqual(loadYaml("_data/testimonials.yml"), { testimonials: [] });
});

test("with no testimonials the homepage has no testimonials section", () => {
  const b = buildWithData();
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    assert.doesNotMatch(b.page("index.html"), /id="testimonials"/);
  } finally {
    b.cleanup();
  }
});

test("a testimonial from the data file shows its quote, name, title and organization", () => {
  const b = buildWithData((data) =>
    writeFileSync(
      join(data, "testimonials.yml"),
      [
        "testimonials:",
        '  - name: "Ada Lovelace"',
        '    title: "Founder"',
        '    organization: "Analytical & Co"',
        '    quote: "Susan helped us turn a <b>concept</b> into a company."',
        '  - name: "Grace Hopper"',
        '    title: ""',
        '    organization: ""',
        '    quote: "Clear, kind and practical."',
        "",
      ].join("\n"),
    ),
  );
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const section = b.page("index.html").match(/<section class="testimonials" id="testimonials">([\s\S]*?)<\/section>/);
    assert.ok(section, "the homepage has no testimonials section");
    const html = section[1];
    assert.match(html, /<blockquote>\s*<p>Susan helped us turn a &lt;b&gt;concept&lt;\/b&gt; into a company\.<\/p>/);
    assert.match(html, /Ada Lovelace/);
    assert.match(html, /Founder, Analytical &amp; Co/);
    assert.match(html, /Grace Hopper<\/cite>\s*<\/figcaption>/, "an entry without title or organization shows the name alone");
  } finally {
    b.cleanup();
  }
});
