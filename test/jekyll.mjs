// Shared by the tests: where the repo is, which Ruby to use, and a YAML reader.
// Ruby ships the YAML parser the site is built with, so the tests keep no npm dependencies.
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
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
