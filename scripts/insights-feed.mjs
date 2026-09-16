// Writes the Insights data file from Susan's Substack feed (op-036, op-044).
//   node scripts/insights-feed.mjs [feed URL or file] [output]
// With no feed given, reads social.substack from _data/settings.yml and adds "feed", so the
// address Susan sets in the editor is the one read. The output defaults to _data/insights.json,
// which is not committed. When the feed cannot be read the script warns, writes nothing and
// exits 0: the site still builds and the pages point to Substack instead.
import { readFileSync, writeFileSync } from "node:fs";

const LIMIT = 10;

const [source = feedFromSettings(), output = "_data/insights.json"] = process.argv.slice(2);

try {
  const xml = await read(source);
  const posts = parse(xml)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, LIMIT);
  writeFileSync(output, JSON.stringify(posts, null, 2) + "\n");
  console.log(`insights: wrote ${posts.length} posts from ${source} to ${output}`);
} catch (error) {
  console.warn(`insights: could not read ${source} (${error.message}); the site builds without posts`);
}

function feedFromSettings() {
  const settings = readFileSync("_data/settings.yml", "utf8");
  const substack = settings.match(/^\s+substack:\s*["']?([^"'\s#]+)/m)?.[1];
  if (!substack) return "";
  return substack.replace(/\/?$/, "/") + "feed";
}

async function read(from) {
  if (!from) throw new Error("no Substack address in the settings");
  if (!/^https?:\/\//.test(from)) return readFileSync(from, "utf8");
  const response = await fetch(from, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function parse(xml) {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  if (!items.length && !/<channel>/.test(xml)) throw new Error("not an RSS feed");
  return items
    .map((item) => {
      const date = new Date(field(item, "pubDate"));
      return {
        title: field(item, "title"),
        date: Number.isNaN(date.valueOf()) ? "" : date.toISOString(),
        link: field(item, "link"),
        excerpt: field(item, "description"),
        image: decode(item.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="image\//)?.[1] ?? ""),
      };
    })
    .filter((post) => post.title && post.link.startsWith("https://") && post.date);
}

function field(item, name) {
  const raw = item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? "";
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return (cdata ? cdata[1] : decode(raw)).trim();
}

function decode(text) {
  return text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}
