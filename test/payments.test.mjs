// Stripe Payment Links (docs/agents/payments.md). A service or program with a checkout link shows
// a Pay button; without one the page shows the contact button as before.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { loadYaml, buildCopy } from "./jekyll.mjs";

const link = "https://buy.stripe.com/test_abc123";

// The New Programs page went on 2026-09-24; the blitz page keeps the same card layout and field.
test("the editor offers the Stripe link on services and the blitz sessions", () => {
  const config = loadYaml(".pages.yml");
  const services = config.content.find((entry) => entry.name === "services");
  assert.ok(services.fields.some((field) => field.name === "checkout"));
  const blitz = config.content.find((entry) => entry.name === "blitz");
  const cards = blitz.fields.find((field) => field.name === "programs");
  assert.ok(cards.fields.some((field) => field.name === "checkout"));
});

test("a checkout link turns the service and blitz buttons into Pay", () => {
  const b = buildCopy((source) => {
    const service = join(source, "_services/coaching.md");
    writeFileSync(service, readFileSync(service, "utf8").replace(/^checkout: ""$/m, `checkout: ${link}`));
    const blitz = join(source, "pages/blitz.html");
    writeFileSync(blitz, readFileSync(blitz, "utf8").replace("url: /services/bizblitz/", `url: /services/bizblitz/\n    checkout: ${link}`));
  });
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    const coaching = b.page("services/coaching/index.html");
    assert.match(coaching, new RegExp(`href="${link}"[^>]*class="btn btn-primary pay-button"`));
    assert.match(coaching, /Pay \$250 initial session/);
    const blitz = b.page("blitz/index.html");
    assert.match(blitz, /Pay for BizBlitz/);
    assert.match(blitz, /Ask About VizBlitz/);
  } finally {
    b.cleanup();
  }
});

test("without a link the pages show Get in Touch and no Pay button", () => {
  const b = buildCopy();
  try {
    assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
    assert.doesNotMatch(b.page("services/coaching/index.html"), /pay-button/);
    assert.match(b.page("services/coaching/index.html"), /Get in Touch/);
    assert.doesNotMatch(b.page("blitz/index.html"), /pay-button/);
    assert.match(b.page("thanks/index.html"), /paid=1/);
  } finally {
    b.cleanup();
  }
});
