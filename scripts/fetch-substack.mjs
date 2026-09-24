// Fetches the Substack section named in _data/settings.yml (substack_section) and writes the newest
// posts to _data/substack.json, which Insights and the homepage read. The deploy workflow runs this
// on every build and once a day, so a post Susan publishes in that section reaches the site within
// a day with nothing to edit here. Any failure writes an empty list and exits 0: the site must
// still build when the section does not exist yet. No npm dependencies.
//
// Substack's per-section RSS feeds (/s/<slug>/feed) answer 404 on this publication, so the posts
// come from the publication's archive API instead, which labels every post with its section slug.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(dirname(fileURLToPath(import.meta.url)));
export const output = join(repo, "_data/substack.json");
export const LIMIT = 6;

export function sectionUrl(settingsText = readFileSync(join(repo, "_data/settings.yml"), "utf8")) {
  const match = settingsText.match(/^substack_section:\s*["']?([^"'\n]*)["']?\s*$/m);
  return match ? match[1].trim().replace(/\/+$/, "") : "";
}

// https://metaphase.substack.com/s/money-culture-community -> the publication origin and the slug.
// A publication address with no /s/ part means every post, whatever its section.
export function parseSectionUrl(url) {
  const m = url.match(/^(https?:\/\/[^/]+)(?:\/s\/([^/?#]+))?/);
  return m ? { origin: m[1], slug: m[2] || "" } : { origin: "", slug: "" };
}

export function archiveUrl(url) {
  const { origin } = parseSectionUrl(url);
  return origin ? `${origin}/api/v1/archive?sort=new&offset=0&limit=50` : "";
}

const entity = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", "#39": "'", nbsp: " " };
export function decode(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, code) => {
    if (code[0] === "#") return String.fromCodePoint(code[1] === "x" || code[1] === "X" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10));
    return code in entity ? entity[code] : m;
  });
}

export function summarize(html, words = 40) {
  const text = decode(String(html || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  const parts = text.split(" ");
  return parts.length > words ? parts.slice(0, words).join(" ") + "…" : text;
}

// Turns the archive API's post list into the list the site shows: the section's public posts,
// newest first, LIMIT at most.
export function parseArchive(posts, url) {
  const { slug } = parseSectionUrl(url);
  const inSection = (Array.isArray(posts) ? posts : []).filter((post) => !slug || post.section_slug === slug);
  const items = inSection.map((post) => {
    const date = new Date(post.post_date);
    return {
      title: decode(String(post.title || "")).trim(),
      url: post.canonical_url || "",
      date: Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10),
      summary: summarize(post.subtitle || post.description || post.truncated_body_text || ""),
      image: post.cover_image || "",
    };
  }).filter((post) => post.title && post.url);
  items.sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));
  const title = inSection.find((post) => post.section_name)?.section_name || "";
  return { title, url, items: items.slice(0, LIMIT) };
}

export async function fetchSection(url) {
  if (!url) return { url: "", items: [], note: "no substack_section in _data/settings.yml" };
  const api = archiveUrl(url);
  if (!api) return { url, items: [], note: "substack_section is not an address" };
  try {
    const response = await fetch(api, { headers: { "user-agent": "metaphasemgt.com build", accept: "application/json" }, signal: AbortSignal.timeout(20000) });
    if (!response.ok) return { url, items: [], note: `archive returned ${response.status}` };
    return { ...parseArchive(await response.json(), url), api };
  } catch (error) {
    return { url, items: [], note: `archive failed: ${error.message}` };
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const result = await fetchSection(sectionUrl());
  result.fetched = new Date().toISOString();
  writeFileSync(output, JSON.stringify(result, null, 2) + "\n");
  console.log(`${result.items.length} Substack posts${result.note ? ` (${result.note})` : ""} -> _data/substack.json`);
}
