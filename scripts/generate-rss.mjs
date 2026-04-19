import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "..", "src", "data", "blogArticles.ts");
const OUT = join(__dirname, "..", "public", "rss.xml");

const BASE = "https://noory.io";

const src = readFileSync(SRC, "utf8");

// Match each article object in the array (slug, title, date, intro)
const entries = [];
const blockRegex = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)",[\s\S]*?date:\s*"([^"]+)",[\s\S]*?intro:\s*"((?:[^"\\]|\\.)*)"/g;
let m;
while ((m = blockRegex.exec(src)) !== null) {
  const unescape = (s) => s.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  entries.push({
    slug: m[1],
    title: unescape(m[2]),
    date: m[3],
    intro: unescape(m[4]),
  });
}

entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const escapeXml = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const firstTwoSentences = (text) => {
  const match = text.match(/^(.*?[.!?])\s+(.*?[.!?])/s);
  return match ? `${match[1]} ${match[2]}` : text;
};

const toRfc822 = (isoDate) => {
  const d = new Date(`${isoDate}T09:00:00Z`);
  return d.toUTCString();
};

const lastBuild = entries.length > 0 ? toRfc822(entries[0].date) : new Date().toUTCString();

const items = entries
  .map((e) => {
    const link = `${BASE}/blog/${e.slug}`;
    const desc = firstTwoSentences(e.intro);
    return `    <item>
      <title>${escapeXml(e.title)}</title>
      <link>${link}</link>
      <description>${escapeXml(desc)}</description>
      <pubDate>${toRfc822(e.date)}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
  })
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Noory Blog</title>
    <link>${BASE}/blog</link>
    <description>Articles sur la psychologie de l'argent, l'épargne et les habitudes financières.</description>
    <language>fr</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

writeFileSync(OUT, rss, "utf8");
console.log(`RSS written: ${entries.length} items → ${OUT}`);
