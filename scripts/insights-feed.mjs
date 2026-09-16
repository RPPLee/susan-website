// Writes the Insights data file from Susan's Substack feed (op-036, op-044).
//   node scripts/insights-feed.mjs [feed URL or file] [output]
// With no feed given, reads social.substack from _data/settings.yml and adds "feed", so the
// address Susan sets in the editor is the one read. Substack's Cloudflare answers 403 to GitHub's
// runners (probed 2026-09-16), so that feed is then read again through rss2json.com, a free
// feed-to-JSON service that GitHub can reach. The script accepts either format. The output defaults to _data/insights.json,
// which is not committed. When the feed cannot be read the script warns, writes nothing and
// exits 0: the site still builds and the pages point to Substack instead.
import { readFileSync, writeFileSync } from "node:fs";

const LIMIT = 10;

const [given, output = "_data/insights.json"] = process.argv.slice(2);
const feed = feedFromSettings();
const sources = given ? [given] : [feed, `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`];

let written = false;
for (const source of sources) {
  try {
    const text = await read(source);
    const posts = (text.trimStart().startsWith("{") ? parseJson(text) : parseRss(text))
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, LIMIT);
    writeFileSync(output, JSON.stringify(posts, null, 2) + "\n");
    console.log(`insights: wrote ${posts.length} posts from ${source} to ${output}`);
    written = true;
    break;
  } catch (error) {
    console.warn(`insights: could not read ${source} (${error.message})`);
  }
}
if (!written) console.warn("insights: no feed could be read; the site builds without posts");

function feedFromSettings() {
  const settings = readFileSync("_data/settings.yml", "utf8");
  const substack = settings.match(/^\s+substack:\s*["']?([^"'\s#]+)/m)?.[1];
  if (!substack) return "";
  // A trailing slash is optional in the settings.
  return substack.replace(/\/?$/, "/") + "feed";
}

async function read(from) {
  if (!from) throw new Error("no Substack address in the settings");
  if (!/^https?:\/\//.test(from)) return readFileSync(from, "utf8");
  // Substack answers 403 to requests without a browser-like User-Agent, which is what GitHub's
  // runners send by default.
  const response = await fetch(from, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; metaphasemgt.com Insights; +https://metaphasemgt.com/insights/)",
      Accept: "application/rss+xml, application/xml;q=0.9, */*;q=0.8",
    },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

// rss2json.com's shape: { status, items: [{ title, pubDate "YYYY-MM-DD HH:MM:SS" in UTC, link,
// description, enclosure: { link, type } }] }
function parseJson(text) {
  const data = JSON.parse(text);
  if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error(data.message || "not a feed");
  return keep(
    data.items.map((item) => ({
      title: decode(item.title ?? "").trim(),
      date: isoDate(`${item.pubDate}`.replace(" ", "T") + "Z"),
      link: item.link ?? "",
      excerpt: decode(item.description ?? "").trim(),
      image: /^image\//.test(item.enclosure?.type ?? "") ? decode(item.enclosure.link) : "",
    })),
  );
}

function parseRss(xml) {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  if (!items.length && !/<channel>/.test(xml)) throw new Error("not an RSS feed");
  return keep(
    items.map((item) => ({
      title: field(item, "title"),
      date: isoDate(field(item, "pubDate")),
      link: field(item, "link"),
      excerpt: field(item, "description"),
      image: decode(item.match(/<enclosure[^>]*url="([^"]+)"[^>]*type="image\//)?.[1] ?? ""),
    })),
  );
}

function keep(posts) {
  return posts.filter((post) => post.title && post.link.startsWith("https://") && post.date);
}

function isoDate(text) {
  const date = new Date(text);
  return Number.isNaN(date.valueOf()) ? "" : date.toISOString();
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
