// The editor configuration must match the site it edits (op-047, op-053).
// Reads .pages.yml and the files it points at; asserts that every path and field exists,
// that the sidebar shows exactly what Susan may change, and that nothing else is exposed.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { repo, loadYaml, frontMatter } from "./jekyll.mjs";

const config = loadYaml(".pages.yml");
const entries = Object.fromEntries(config.content.map((entry) => [entry.label, entry]));

test("the sidebar lists Services, Programs, About, Site settings and Media", () => {
  assert.deepEqual(
    config.content.map((entry) => entry.label),
    ["Services", "Programs", "About", "Site settings"],
  );
  assert.equal(config.media.label, "Media");
});

test("every path the editor exposes exists in the repo", () => {
  for (const entry of config.content) {
    assert.ok(existsSync(join(repo, entry.path)), `${entry.label} points at missing ${entry.path}`);
  }
  assert.ok(existsSync(join(repo, config.media.input)), `media folder ${config.media.input} is missing`);
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
});

test("the About and Programs pages expose their front matter and body", () => {
  for (const label of ["About", "Programs"]) {
    const entry = entries[label];
    assert.equal(entry.type, "file");
    assert.equal(entry.format, "yaml-frontmatter", `${label} must keep its front matter separate from its body`);
    const names = entry.fields.map((field) => field.name);
    assert.ok(names.includes("body"), `${label} has no body field`);
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

test("media is the images folder, images only", () => {
  assert.equal(config.media.input, "assets/images");
  assert.equal(config.media.output, "/assets/images");
  assert.deepEqual(config.media.categories, ["image"]);
});

test("saves carry the editor's own name and keep the keys the editor does not manage", () => {
  assert.equal(config.settings?.commit?.identity, "user");
  assert.equal(config.settings?.content?.merge, true);
});
