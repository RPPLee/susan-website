// Fetches the Substack section named in _data/settings.yml (substack_section_feed) and writes
// the newest posts to _data/substack.json, which Insights and the homepage read. The deploy
// workflow runs this on every build and once a day, so a post Susan publishes in that section
// reaches the site within a day with nothing to edit here. Any failure writes an empty list and
// exits 0: the site must still build when the section does not exist yet. No npm dependencies.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = dirname(dirname(fileURLToPath(import.meta.url)));
export const output = join(repo, "_data/substack.json");
export const LIMIT = 6;

export function feedUrl(settingsText = readFileSync(join(repo, "_data/settings.yml"), "utf8")) {
  const match = settingsText.match(/^substack_section_feed:\s*["']?([^"'\n]*)["']?\s*$/m);
  return match ? match[1].trim() : "";
}

const entity = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", "#39": "'", nbsp: " " };
export function decode(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, code) => {
    if (code[0] === "#") return String.fromCodePoint(code[1] === "x" || code[1] === "X" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10));
    return code in entity ? entity[code] : m;
  });
}

function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  if (!m) return "";
  const inner = m[1].trim();
  const cdata = inner.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return decode(cdata ? cdata[1] : inner).trim();
}

export function summarize(html, words = 40) {
  const text = decode(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
  const parts = text.split(" ");
  return parts.length > words ? parts.slice(0, words).join(" ") + "…" : text;
}

// Turns a Substack RSS document into the list the site shows: newest first, LIMIT at most.
export function parseFeed(xml) {
  const channel = { title: tag(xml.split("<item>")[0], "title"), url: tag(xml.split("<item>")[0], "link") };
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
    const enclosure = item.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="image\/[^"]+"/) || item.match(/<enclosure[^>]*type="image\/[^"]+"[^>]*url="([^"]+)"/);
    const date = new Date(tag(item, "pubDate"));
    return {
      title: tag(item, "title"),
      url: tag(item, "link"),
      date: Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10),
      summary: summarize(tag(item, "description")),
      image: enclosure ? decode(enclosure[1]) : "",
    };
  }).filter((post) => post.title && post.url);
  items.sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));
  return { ...channel, items: items.slice(0, LIMIT) };
}

export async function fetchSection(url) {
  if (!url) return { url: "", items: [], note: "no substack_section_feed in _data/settings.yml" };
  try {
    const response = await fetch(url, { headers: { "user-agent": "metaphasemgt.com build" }, signal: AbortSignal.timeout(20000) });
    if (!response.ok) return { url, items: [], note: `feed returned ${response.status}` };
    return { ...parseFeed(await response.text()), feed: url };
  } catch (error) {
    return { url, items: [], note: `feed failed: ${error.message}` };
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const result = await fetchSection(feedUrl());
  result.fetched = new Date().toISOString();
  writeFileSync(output, JSON.stringify(result, null, 2) + "\n");
  console.log(`${result.items.length} Substack posts${result.note ? ` (${result.note})` : ""} -> _data/substack.json`);
}
