// The one test seam: the built site (op-043).
// Builds the repo with Jekyll into a temporary folder and asserts on the HTML that comes out.
// Nothing here reaches Substack, Stripe, LinkedIn or Google.
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { repo, run, loadYaml, frontMatter, buildWithData } from "./jekyll.mjs";

function buildSite() {
  const destination = mkdtempSync(join(tmpdir(), "metaphase-site-"));
  const result = run("bundle", ["exec", "jekyll", "build", "--strict_front_matter", "--disable-disk-cache", "--destination", destination]);
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
    assert.match(home, /<title>[^<]*Metaphase Management Associates[^<]*<\/title>/);
    // The homepage is the list of blocks Susan edits (_data/home.yml): every block's heading is on
    // the page unless the block hides itself while it has nothing to show, and in her order.
    const { sections } = loadYaml("_data/home.yml");
    const hero = sections.find((block) => block.type === "hero");
    assert.ok(home.includes(`<h1>${escapeHtml(hero.heading)}</h1>`), "the hero headline is not the one in home.yml");
    assert.ok(home.includes(escapeHtml(hero.text)), "the hero paragraph is not the one in home.yml");
    for (const button of hero.buttons) assert.ok(home.includes(`href="${button.url}"`), `no hero button to ${button.url}`);
    const shown = sections.filter((block) => !["posts", "testimonials"].includes(block.type) && block.heading);
    const positions = shown.map((block) => home.indexOf(escapeHtml(block.heading)));
    assert.ok(positions.every((at) => at >= 0), "a block's heading is missing from the homepage");
    assert.deepEqual(positions, [...positions].sort((a, b) => a - b), "the blocks are not in home.yml's order");
    assert.doesNotMatch(home, /Now Enrolling/);
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
    assert.equal(og("services/tapestry/index.html"), "https://metaphasemgt.com/assets/social/share-tapestry.png");
    assert.equal(og("services/pivot-point-passage/index.html"), "https://metaphasemgt.com/assets/social/share-pivot-point-passage.png");
    assert.equal(og("services/conversation-with-an-og/index.html"), "https://metaphasemgt.com/assets/social/share-conversation-with-an-og.png");
    assert.equal(og("blitz/index.html"), "https://metaphasemgt.com/assets/social/share-blitz.png");
    assert.equal(og("index.html"), "https://metaphasemgt.com/assets/social/share-default.png");
    assert.equal(og("about/index.html"), "https://metaphasemgt.com/assets/social/share-default.png");
    assert.equal(og("services/index.html"), "https://metaphasemgt.com/assets/social/share-default.png");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// Turning Point Tenders was renamed Pivot Point Passage on 2026-09-21. Susan's LinkedIn Featured
// card and anyone's old bookmark still use the old address, so it forwards to the new page.
test("the old Turning Point Tenders address forwards to Pivot Point Passage", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const page = (p) => readFileSync(join(destination, p), "utf8");
    assert.match(page("services/turning-point-tenders/index.html"), /<meta http-equiv="refresh" content="0; ?url=\/services\/pivot-point-passage\/">/);
    for (const p of ["services/pivot-point-passage/index.html", "services/index.html", "index.html"]) {
      assert.doesNotMatch(page(p), /Turning Point Tenders/, `${p} still says Turning Point Tenders`);
    }
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

    for (const p of ["index.html", "services/index.html", "services/tapestry/index.html", "services/coaching/index.html"]) {
      assert.doesNotMatch(page(p), /href="[^"]*\/register\//, `${p} still links to /register/`);
      assert.match(page(p), /href="[^"]*\/contact\/[^"]*"/, `${p} has no link to the contact form`);
    }
    assert.match(page("services/tapestry/index.html"), /href="\/contact\/\?program=Tapestry"/);

    const redirect = page("register/index.html");
    assert.match(redirect, /<meta http-equiv="refresh" content="0; ?url=\/contact\/">/);
    assert.doesNotMatch(redirect, /<form/);

    const contact = page("contact/index.html");
    // op-071: the form in Lee's Formspree account; the old one reached nobody he could see.
    assert.match(contact, /<form action="https:\/\/formspree\.io\/f\/mgavwrdd" method="POST"/);
    assert.doesNotMatch(contact, /meeljpzb/);
    assert.match(contact, /susanmills@metaphasemgt\.com/);
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// op-033 and op-045 put the services in three groups; Lee, 2026-09-24: one flat grid in `order`,
// no group headings, each card with title, tagline, one summary sentence and a Learn more button.
// The expected cards come from the front matter, so a service Susan hides or reorders in the
// editor moves on the homepage and the deploy still passes.
test("the homepage shows the visible services as one grid of cards from the collection", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const home = readFileSync(join(destination, "index.html"), "utf8");

    const services = readdirSync(join(repo, "_services"))
      .map((file) => frontMatter(join("_services", file)))
      .sort((a, b) => a.order - b.order);
    const visible = services.filter((service) => service.group !== "hidden");
    const expected = visible.map((service) => escapeHtml(service.title));
    // Susan sets each card's place with the Order number in the editor.
    assert.equal(entriesOrderField(), "number");
    // Conversation With An OG is the homepage's call to action, not a service card.
    assert.ok(!expected.includes("Conversation With An OG"));
    for (const service of visible) assert.ok(service.summary, `${service.title} has no homepage summary sentence`);

    const servicesSection = home.slice(home.indexOf('<section class="services"'), home.indexOf("</section>", home.indexOf('<section class="services"')) + 1);
    assert.doesNotMatch(servicesSection, /service-group/, "the group headings are still on the homepage");
    const cards = [...servicesSection.matchAll(/<article class="service-card[^"]*">\s*<div class="service-card-content">\s*<h4><a href="(\/services\/[^"]+\/)">([^<]+)<\/a><\/h4>\s*<p class="service-card-tagline">[^<]+<\/p>\s*<p class="service-card-summary">[^<]+<\/p>\s*<a href="\1" class="btn btn-secondary service-card-more"[^>]*>Learn more<\/a>/g)];
    assert.deepEqual(cards.map((m) => m[2]), expected, "the cards are not the visible services in order");
    assert.doesNotMatch(servicesSection, /service-price/, "a price is on a homepage card");
    assert.doesNotMatch(home, /<!-- BizBlitz -->/, "the hand-written cards are still on the homepage");
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// Lee, 2026-09-24: one Services entry in the menu, a /services/ page with every card, no New
// Programs button or page (the old address forwards), and no icon or tagline above a service.
test("Services is a page with every card, /programs/ forwards to it, and service pages start with the banner or a plain title", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const page = (p) => readFileSync(join(destination, p), "utf8");
    const menu = loadYaml("_data/settings.yml").menu;
    assert.deepEqual(menu.filter((m) => /services|programs/i.test(m.title)).map((m) => [m.title, m.url]), [["Services", "/services/"]]);
    assert.doesNotMatch(page("index.html"), /New Programs|href="\/programs\/"/);

    const services = readdirSync(join(repo, "_services")).map((file) => frontMatter(join("_services", file)));
    const visible = services.filter((s) => s.group !== "hidden").sort((a, b) => a.order - b.order).map((s) => escapeHtml(s.title));
    const titles = [...page("services/index.html").matchAll(/<h4><a href="\/services\/[^"]+\/">([^<]+)<\/a><\/h4>/g)].map((m) => m[1]);
    assert.deepEqual(titles, visible);
    assert.doesNotMatch(page("services/index.html"), /carousel-arrow/);
    assert.match(page("programs/index.html"), /<meta http-equiv="refresh" content="0; ?url=\/services\/">/);

    for (const service of services) {
      const html = page(`services/${slugOf(service)}/index.html`);
      assert.doesNotMatch(html, /service-header|service-icon-large|service-tagline/, `${service.title} still has the icon or tagline header`);
      if (service.image) assert.match(html, /<h1 class="visually-hidden">/, `${service.title} has a banner but a visible title`);
      else assert.match(html, /<h1 class="service-title">/, `${service.title} has no banner and no title`);
    }
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

function slugOf(service) {
  return readdirSync(join(repo, "_services")).find((file) => frontMatter(join("_services", file)).title === service.title).replace(/\.md$/, "");
}

function entriesOrderField() {
  const services = loadYaml(".pages.yml").content.find((entry) => entry.name === "services");
  return services.fields.find((field) => field.name === "order")?.type;
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// op-071: after sending, the visitor lands on a thank-you page on the site. The contact page
// opens it once Formspree accepts the message.
test("the contact form leads to a thank-you page on the site", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const contact = readFileSync(join(destination, "contact/index.html"), "utf8");
    assert.match(contact, /data-thanks="\/thanks\/"/, "the contact form does not name the thank-you page");
    const thanks = readFileSync(join(destination, "thanks/index.html"), "utf8");
    assert.match(thanks, /<h1[^>]*>Thank you/);
    assert.match(thanks, /href="\/"/, "the thank-you page has no way back");
    assert.match(thanks, /<meta name="robots" content="noindex">/);
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// op-035, and Lee on 2026-09-18: Insights is a blog on the site now, but every page's footer still
// carries Substack's subscribe form, so a signup lands in Susan's Substack list.
test("the footer carries Substack's subscribe form", () => {
  const { destination, result } = buildSite();
  try {
    assert.equal(result.status, 0, `jekyll build failed (exit ${result.status})\n${result.stderr}`);
    const { social } = loadYaml("_data/settings.yml");
    for (const p of ["index.html", "services/coaching/index.html", "contact/index.html", "insights/index.html"]) {
      const html = readFileSync(join(destination, p), "utf8");
      const footer = html.slice(html.indexOf('<footer class="site-footer">'));
      assert.ok(footer.includes(`<iframe src="${social.substack}embed"`), `${p} footer has no subscribe form`);
      assert.equal(html.split("<iframe").length, 2, `${p} should embed Substack once, in the footer`);
    }
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});

// Lee, 2026-09-18: the homepage's call to action and the Conversation With An OG page carry a
// "Request a time" button. It opens the booking page named in the site settings, and the contact
// form while there is none. The OG page keeps its address: LinkedIn's Featured card links to it.
test("schedule buttons open the booking page, or the contact form while there is none", () => {
  for (const booking_url of ["", "https://calendar.app.google/example"]) {
    const b = buildWithData((data) => {
      const path = join(data, "settings.yml");
      writeFileSync(path, readFileSync(path, "utf8").replace(/^booking_url:.*$/m, `booking_url: "${booking_url}"`));
    });
    try {
      assert.equal(b.result.status, 0, `jekyll build failed\n${b.result.stderr}`);
      for (const p of ["index.html", "services/conversation-with-an-og/index.html"]) {
        const [, href] = b.page(p).match(/<a href="([^"]+)"[^>]*>\s*<i class="fas fa-calendar-check"><\/i> Request a time/) || [];
        assert.equal(href, booking_url || "/contact/?program=Conversation+With+An+OG", `${p} schedule button`);
      }
    } finally {
      b.cleanup();
    }
  }
});

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
        // Posts fetched from the Substack section (scripts/fetch-substack.mjs) link into the publication.
        assert.ok(allowed.has(href) || href.startsWith(social.substack), `${p} links to ${href}, which is not in the site settings`);
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
