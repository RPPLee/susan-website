// The one test seam: the built site (op-043).
// Builds the repo with Jekyll into a temporary folder and asserts on the HTML that comes out.
// Nothing here reaches Substack, Stripe, LinkedIn or Google.
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { repo, run, loadYaml, frontMatter } from "./jekyll.mjs";

function buildSite() {
  const destination = mkdtempSync(join(tmpdir(), "metaphase-site-"));
  const result = run("bundle", ["exec", "jekyll", "build", "--strict_front_matter", "--destination", destination]);
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
    // The hero intro comes from the site settings so Susan can change it in the editor (op-004).
    const { intro } = loadYaml("_data/settings.yml");
    assert.ok(intro, "settings.yml has no intro");
    assert.ok(home.includes(intro), "the homepage does not show the intro from settings.yml");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// Links shared on LinkedIn and elsewhere get a branded preview image: each program page its own,
// every other page the site default.
test("pages carry a share image for link previews", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const page = (p) => readFileSync(join(destination, p), "utf8");
    const og = (p) => (page(p).match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
    assert.equal(og("programs/index.html"), "https://metaphasemgt.com/assets/social/share-programs.png");
    assert.equal(og("services/tapestry/index.html"), "https://metaphasemgt.com/assets/social/share-tapestry.png");
    assert.equal(og("services/turning-point-tenders/index.html"), "https://metaphasemgt.com/assets/social/share-turning-point-tenders.png");
    assert.equal(og("services/conversation-with-an-og/index.html"), "https://metaphasemgt.com/assets/social/share-conversation-with-an-og.png");
    assert.equal(og("blitz/index.html"), "https://metaphasemgt.com/assets/social/share-blitz.png");
    assert.equal(og("index.html"), "https://metaphasemgt.com/assets/social/share-default.png");
    assert.equal(og("about/index.html"), "https://metaphasemgt.com/assets/social/share-default.png");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// op-065: no registration or payment on the site. Every "register" button goes to the contact form,
// and the old /register/ address sends its visitors there too.
test("register buttons go to the contact form and /register/ redirects there", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const page = (p) => readFileSync(join(destination, p), "utf8");

    for (const p of ["index.html", "programs/index.html", "services/tapestry/index.html", "services/coaching/index.html"]) {
      assert.doesNotMatch(page(p), /href="[^"]*\/register\//, `${p} still links to /register/`);
      assert.match(page(p), /href="[^"]*\/contact\/[^"]*"/, `${p} has no link to the contact form`);
    }
    assert.match(page("programs/index.html"), /href="\/contact\/\?program=Tapestry"/);

    const redirect = page("register/index.html");
    assert.match(redirect, /<meta http-equiv="refresh" content="0; ?url=\/contact\/">/);
    assert.doesNotMatch(redirect, /<form/);

    const contact = page("contact/index.html");
    assert.match(contact, /<form action="https:\/\/formspree\.io\/f\/meeljpzb" method="POST"/);
    assert.match(contact, /susanmills@metaphasemgt\.com/);
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// op-033 and op-045: the homepage shows the services in three groups, rendered from the
// collection's `group` field. The expected membership comes from the front matter, so a service
// Susan regroups in the editor moves on the homepage and the deploy still passes.
test("the homepage shows the services in three groups from the collection", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const home = readFileSync(join(destination, "index.html"), "utf8");
    const groupList = loadYaml("_data/service_groups.yml");

    const expected = Object.fromEntries(groupList.map((g) => [g.id, []]));
    const services = readdirSync(join(repo, "_services"))
      .map((file) => frontMatter(join("_services", file)))
      .sort((a, b) => a.order - b.order);
    for (const service of services) expected[service.group].push(escapeHtml(service.title));

    const groups = [...home.matchAll(/<section class="service-group" id="([^"]+)">([\s\S]*?)<\/section>/g)];
    assert.deepEqual(groups.map((m) => m[1]), groupList.filter((g) => expected[g.id].length).map((g) => g.id));

    const titles = (html) => [...html.matchAll(/<h4><a href="\/services\/[^"]+\/">([^<]+)<\/a><\/h4>/g)].map((m) => m[1]);
    for (const [id, html] of groups.map((m) => [m[1], m[2]])) {
      assert.deepEqual(titles(html), expected[id], `the ${id} group shows the wrong services`);
    }
    for (const { id, title } of groupList) {
      if (!expected[id].length) continue;
      assert.match(home, new RegExp(`<section class="service-group" id="${id}">\\s*<h3 class="service-group-title">${title}</h3>`));
    }
    assert.doesNotMatch(home, /<!-- BizBlitz -->/, "the hand-written cards are still on the homepage");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Susan changes her own links and contact details in the editor (2026-09-16). Every LinkedIn and
// Substack link, email address and phone number on the site comes from the site settings, so a
// change there reaches every page, and nothing hard-coded is left behind.
test("social links and contact details on every page come from the site settings", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const { social, author } = loadYaml("_data/settings.yml");
    for (const key of ["linkedin", "linkedin_company", "substack"]) {
      assert.match(social[key], /^https:\/\//, `social.${key} must be a full address Susan can paste`);
    }
    const allowed = new Set([social.linkedin, social.linkedin_company, social.substack]);
    const phoneDigits = author.phone.replace(/\D/g, "");

    for (const p of htmlFiles(destination)) {
      const html = readFileSync(join(destination, p), "utf8");
      for (const [, href] of html.matchAll(/href="(https:\/\/[^"]*(?:linkedin\.com|substack\.com)[^"]*)"/g)) {
        assert.ok(allowed.has(href), `${p} links to ${href}, which is not in the site settings`);
      }
      for (const [, address] of html.matchAll(/href="mailto:([^"?]+)/g)) {
        assert.equal(address, author.email, `${p} has a mailto link that is not the settings email`);
      }
      for (const [, number] of html.matchAll(/href="tel:([^"]+)"/g)) {
        assert.ok(number.replace(/\D/g, "").endsWith(phoneDigits), `${p} has a phone link that is not the settings phone`);
      }
    }

    const page = (p) => readFileSync(join(destination, p), "utf8");
    const footer = (p) => page(p).slice(page(p).indexOf('<footer class="site-footer">'));
    for (const p of ["index.html", "about/index.html"]) {
      assert.ok(footer(p).includes(`href="${social.linkedin}"`), `${p} footer has no LinkedIn link`);
      assert.ok(footer(p).includes(`href="${social.substack}"`), `${p} footer has no Substack link`);
      assert.ok(footer(p).includes(author.location), `${p} footer does not show the settings location`);
    }
    const contact = page("contact/index.html");
    for (const href of allowed) assert.ok(contact.includes(`href="${href}"`), `the contact page has no link to ${href}`);
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

function htmlFiles(root, dir = "") {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(root, path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}
