// The one test seam: the built site (op-043).
// Builds the repo with Jekyll into a temporary folder and asserts on the HTML that comes out.
// Nothing here reaches Substack, Stripe, LinkedIn or Google.
import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, existsSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(dirname(fileURLToPath(import.meta.url)));

// Homebrew's Ruby is the documented one (docs/agents/build.md); prefer it over the system Ruby when present.
const brewRuby = "/opt/homebrew/opt/ruby/bin";
const PATH = existsSync(brewRuby) ? `${brewRuby}:${process.env.PATH}` : process.env.PATH;

function buildSite() {
  const destination = mkdtempSync(join(tmpdir(), "metaphase-site-"));
  const result = spawnSync(
    "bundle",
    ["exec", "jekyll", "build", "--strict_front_matter", "--destination", destination],
    { cwd: repo, env: { ...process.env, PATH }, encoding: "utf8" },
  );
  return { destination, result };
}

test("the site builds and the homepage renders", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(
      result.status,
      0,
      `jekyll build failed (exit ${result.status})\n${result.stdout}\n${result.stderr}`,
    );
    const home = readFileSync(join(destination, "index.html"), "utf8");
    assert.match(home, /<h1>Navigate the Journey from Idea to Impact<\/h1>/);
    assert.match(home, /<title>[^<]*Metaphase Management Associates[^<]*<\/title>/);
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});
