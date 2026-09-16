// Shared by the tests: where the repo is, which Ruby to use, and a YAML reader.
// Ruby ships the YAML parser the site is built with, so the tests keep no npm dependencies.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const repo = dirname(dirname(fileURLToPath(import.meta.url)));

// Homebrew's Ruby is the documented one (docs/agents/build.md); prefer it over the system Ruby when present.
const brewRuby = "/opt/homebrew/opt/ruby/bin";
export const PATH = existsSync(brewRuby) ? `${brewRuby}:${process.env.PATH}` : process.env.PATH;

export function run(command, args, options = {}) {
  return spawnSync(command, args, { cwd: repo, env: { ...process.env, PATH }, encoding: "utf8", ...options });
}

export function parseYaml(text, label) {
  const result = run("ruby", ["-ryaml", "-rjson", "-e", "puts JSON.generate(YAML.safe_load(STDIN.read))"], { input: text });
  assert.equal(result.status, 0, `${label} does not parse as YAML\n${result.stderr}`);
  return JSON.parse(result.stdout);
}

export function loadYaml(relativePath) {
  return parseYaml(readFileSync(join(repo, relativePath), "utf8"), relativePath);
}

export function frontMatter(relativePath) {
  const text = readFileSync(join(repo, relativePath), "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  assert.ok(match, `${relativePath} has no front matter`);
  return parseYaml(match[1], `front matter of ${relativePath}`);
}

// Test files run in parallel, so every test build skips Jekyll's shared .jekyll-cache folder.
// Builds the site with a private copy of _data that a test may change first. Jekyll only reads
// data from inside the source, so the copy is a dot folder in the repo (ignored by git and the build).
export function buildWithData(prepare = () => {}) {
  const data = mkdtempSync(join(repo, ".test-data-"));
  const destination = mkdtempSync(join(tmpdir(), "metaphase-build-"));
  cpSync(join(repo, "_data"), data, { recursive: true });
  rmSync(join(data, "insights.json"), { force: true });
  const extra = prepare(data);
  const config = join(data, "_test_config.yml");
  writeFileSync(config, `data_dir: ${basename(data)}\n`);
  const result = run("bundle", ["exec", "jekyll", "build", "--config", `_config.yml,${config}`, "--disable-disk-cache", "--destination", destination]);
  const page = (path) => readFileSync(join(destination, path), "utf8");
  const cleanup = () => {
    rmSync(data, { recursive: true, force: true });
    rmSync(destination, { recursive: true, force: true });
  };
  return { data, destination, result, extra, page, cleanup };
}
