// The editor configuration must match the site it edits (op-047, op-053).
// Reads .pages.yml and the files it points at; asserts that every path and field exists,
// that the sidebar shows exactly what Susan may change, and that nothing else is exposed.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { repo, loadYaml, frontMatter } from "./jekyll.mjs";

const config = loadYaml(".pages.yml");
const entries = Object.fromEntries(config.content.map((entry) => [entry.label, entry]));

// Lee, 2026-09-24: every page with words on it is in the sidebar, the Blitz, Contact and Thank-you
// pages included, and the share banners are a second media folder.
test("the sidebar lists every page with words on it, Site settings, Media and Banners", () => {
  assert.deepEqual(
    config.content.map((entry) => entry.label),
    ["Home page", "Insights posts", "Insights page", "Services", "Programs", "BizBlitz and VizBlitz page", "Contact page", "Thank-you page", "About", "Testimonials", "Site settings"],
  );
  assert.deepEqual(config.media.map((m) => m.label), ["Media", "Banners"]);
});

test("every path the editor exposes exists in the repo", () => {
  for (const entry of config.content) {
    assert.ok(existsSync(join(repo, entry.path)), `${entry.label} points at missing ${entry.path}`);
  }
  for (const m of config.media) assert.ok(existsSync(join(repo, m.input)), `media folder ${m.input} is missing`);
});

test("services are a collection whose fields match the service front matter", () => {
  const services = entries.Services;
  assert.equal(services.type, "collection");
  assert.equal(services.path, "_services");

  const names = services.fields.map((field) => field.name);
  for (const required of ["title", "tagline", "price", "format", "duration", "body"]) {
    assert.ok(names.includes(required), `services collection has no ${required} field`);
  }

  const keys = new Set();
  for (const file of readdirSync(join(repo, "_services"))) {
    for (const key of Object.keys(frontMatter(join("_services", file)))) keys.add(key);
  }
  for (const name of names.filter((name) => name !== "body")) {
    assert.ok(keys.has(name), `services field ${name} is in no service file`);
  }
});

test("site settings expose fields that exist in the data file, and not the menu", () => {
  const settings = entries["Site settings"];
  assert.equal(settings.type, "file");
  assert.equal(settings.path, "_data/settings.yml");
  const data = loadYaml(settings.path);

  function assertFieldsExist(fields, object, prefix) {
    for (const field of fields) {
      assert.ok(field.name in object, `settings field ${prefix}${field.name} is not in ${settings.path}`);
      if (field.fields) assertFieldsExist(field.fields, object[field.name], `${prefix}${field.name}.`);
    }
  }
  assertFieldsExist(settings.fields, data, "");

  const names = settings.fields.map((field) => field.name);
  assert.ok(!names.includes("menu"), "the menu is navigation and stays with Lee (op-047)");
  assert.ok(!names.includes("baseurl"), "baseurl is a build setting and stays with Lee");

  // Susan changes her own links and contact details (2026-09-16).
  const group = (name) => settings.fields.find((field) => field.name === name).fields.map((field) => field.name);
  assert.deepEqual(group("social"), ["linkedin", "linkedin_company", "substack"]);
  for (const name of ["email", "phone", "location"]) assert.ok(group("author").includes(name), `author.${name} is not editable`);
});

test("the About, Programs and Insights pages expose front matter that exists", () => {
  for (const label of ["About", "Programs", "Insights page"]) {
    const entry = entries[label];
    assert.equal(entry.type, "file");
    assert.equal(entry.format, "yaml-frontmatter", `${label} must keep its front matter separate from its body`);
    const names = entry.fields.map((field) => field.name);
    if (label === "About") assert.ok(names.includes("body"), `${label} has no body field`);
    const data = frontMatter(entry.path);
    for (const name of names.filter((name) => name !== "body")) {
      assert.ok(name in data, `${label} field ${name} is not in ${entry.path}`);
    }
  }
});

test("layouts, includes, the workflow, the build config and the editor config are not exposed", () => {
  const paths = config.content.map((entry) => entry.path);
  for (const forbidden of ["_layouts", "_includes", ".github", "_config.yml", ".pages.yml", "_sass"]) {
    assert.ok(
      !paths.some((p) => p === forbidden || p.startsWith(`${forbidden}/`)),
      `${forbidden} is exposed to the editor`,
    );
  }
});

test("media is the images folder and the banners folder, images only", () => {
  const [images, banners] = config.media;
  assert.equal(images.input, "assets/images");
  assert.equal(images.output, "/assets/images");
  assert.equal(banners.input, "assets/social");
  assert.equal(banners.output, "/assets/social");
  for (const m of config.media) assert.deepEqual(m.categories, ["image"]);
});

test("saves carry the editor's own name and keep the keys the editor does not manage", () => {
  assert.equal(config.settings?.commit?.identity, "user");
  assert.equal(config.settings?.content?.merge, true);
});

test("the editor offers each service's group as a choice of the three, or off the homepage (op-045)", () => {
  const group = entries.Services.fields.find((field) => field.name === "group");
  assert.ok(group, "services collection has no group field");
  assert.equal(group.type, "select");
  const ids = loadYaml("_data/service_groups.yml").map((g) => g.id);
  assert.deepEqual(ids, ["individuals", "groups", "organizations"]);
  assert.deepEqual(group.options.values.map((v) => v.value), [...ids, "hidden"]);
  assert.equal(group.required, true);

  for (const file of readdirSync(join(repo, "_services"))) {
    const value = frontMatter(join("_services", file)).group;
    assert.ok([...ids, "hidden"].includes(value), `${file} has group ${JSON.stringify(value)}`);
  }
});

test("testimonials are a list Susan edits with name, title, organization and quote", () => {
  const entry = entries.Testimonials;
  assert.ok(entry, "the editor has no Testimonials entry");
  assert.equal(entry.type, "file");
  assert.equal(entry.path, "_data/testimonials.yml");
  const list = entry.fields.find((field) => field.name === "testimonials");
  assert.ok(list && list.list === true && list.type === "object", "testimonials must be a list of objects");
  assert.deepEqual(list.fields.map((field) => field.name), ["quote", "name", "title", "organization"]);
});

// Lee, 2026-09-18: the homepage is a list of blocks Susan edits, reorders, adds to and removes from.
// Every block type the editor offers needs a template, and every field it offers must be one the
// template reads, or her words would go nowhere.
test("every home page block the editor offers has a template that reads its fields", () => {
  const sections = entries["Home page"].fields.find((field) => field.name === "sections");
  assert.equal(sections.type, "block");
  assert.equal(sections.list, true);
  assert.equal(sections.blockKey, "type");
  const index = readFileSync(join(repo, "index.html"), "utf8");
  for (const block of sections.blocks) {
    const path = join(repo, "_includes/home", `${block.name}.html`);
    assert.ok(existsSync(path), `no template for the ${block.name} block`);
    assert.ok(index.includes(`{% when "${block.name}" %}`), `index.html does not render the ${block.name} block`);
    const template = readFileSync(path, "utf8");
    for (const field of block.fields) {
      assert.ok(template.includes(`block.${field.name}`), `the ${block.name} template never reads ${field.name}`);
    }
  }
  const offered = sections.blocks.map((block) => block.name);
  for (const block of loadYaml("_data/home.yml").sections) {
    assert.ok(offered.includes(block.type), `home.yml has a ${block.type} block the editor does not offer`);
  }
});

test("Insights posts are a collection Susan writes in the rich-text editor, with pictures", () => {
  const posts = entries["Insights posts"];
  assert.equal(posts.type, "collection");
  assert.equal(posts.path, "_posts");
  assert.match(posts.filename, /^\{year\}-\{month\}-\{day\}-/, "Jekyll reads a post's date from its file name");
  const field = (name) => posts.fields.find((f) => f.name === name);
  assert.equal(field("body").type, "rich-text");
  assert.equal(field("body").options.media, "images");
  assert.equal(field("image").type, "image");
  assert.equal(field("date").type, "date");
  assert.equal(field("published").type, "boolean");
});

// Lee, 2026-09-18: Susan cannot edit HTML, so the Programs page is fields, and no entry opens as code.
test("nothing in the editor opens as HTML source", () => {
  const types = (fields) => fields.flatMap((f) => [f.type, ...types(f.fields || []), ...(f.blocks || []).flatMap((b) => types(b.fields || []))]);
  for (const entry of config.content) assert.ok(!types(entry.fields).includes("code"), `${entry.label} has a code field`);
  const layout = readFileSync(join(repo, "_layouts/programs.html"), "utf8");
  const programs = entries.Programs.fields.find((f) => f.name === "programs");
  for (const f of programs.fields) assert.ok(layout.includes(`program.${f.name}`), `the Programs layout never reads ${f.name}`);
  const blitz = entries["BizBlitz and VizBlitz page"].fields.find((f) => f.name === "programs");
  for (const f of blitz.fields) assert.ok(layout.includes(`program.${f.name}`), `the Programs layout never reads ${f.name}`);
  for (const [label, file] of [["Contact page", "pages/contact.html"], ["Thank-you page", "pages/thanks.html"]]) {
    const page = readFileSync(join(repo, file), "utf8");
    for (const f of entries[label].fields) assert.ok(page.includes(`page.${f.name}`) || f.name === "title", `${file} never reads ${f.name}`);
  }
});
