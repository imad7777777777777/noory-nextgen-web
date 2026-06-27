import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 4510;

const routes = [
  "/",
  "/blog",
  "/blog/psychologie-de-l-argent-pourquoi-mauvaises-decisions",
  "/blog/biais-cognitifs-budget",
  "/blog/coach-financier-comportemental",
  "/blog/depenses-emotionnelles-pourquoi-acheter-quand-triste",
  "/blog/tdah-argent-gestion-budget",
  "/blog/test-depensier-emotionnel",
  "/blog/quel-salaire-pour-epargner-500-par-mois",
  "/blog/comment-arreter-de-depenser-impulsivement",
  "/blog/epargner-petit-salaire-methodes-concretes",
  "/blog/finance-comportementale-guide-debutant",
  "/blog/epargne-automatique-comment-mettre-en-place",
  "/blog/habitudes-financieres-qui-changent-tout",
  "/blog/defi-epargne-52-semaines",
  "/blog/fonds-urgence-combien-comment",
  "/blog/routine-financiere-dimanche",
  "/blog/depenses-inutiles-couper-sans-souffrir",
  "/blog/tracker-ses-depenses-simplement",
  "/blog/objectif-financier-comment-le-definir",
  "/blog/relation-saine-argent",
  "/blog/premiere-paie-5-reflexes",
  "/blog/gerer-son-argent-sans-stress",
  "/blog/profil-financier-psychologie-argent",
  "/blog/culpabilite-argent-depenser",
  "/blog/investir-debutant-peur",
  "/blog/j-achete-quand-je-suis-triste",
  "/blog/charge-mentale-financiere",
  "/blog/ou-passe-mon-argent-chaque-mois",
  "/blog/no-buy-challenge-comment-faire",
  "/blog/budget-pour-les-nuls",
  "/blog/pourquoi-je-depense-tout-mon-salaire",
  "/blog/epargner-quand-on-a-pas-la-motivation",
  "/blog/argent-et-emotions-comprendre-le-lien",
  "/blog/couple-et-argent-eviter-les-disputes",
  "/blog/depense-plaisir-sans-culpabiliser",
  "/blog/premier-salaire-quoi-faire",
  "/blog/methode-enveloppes-budget",
  "/blog/anxiete-financiere-calmer",
  "/blog/acheter-en-ligne-moins-depenser",
  "/blog/epargne-de-precaution-combien",
  "/blog/parler-argent-tabou-france",
  "/blog/regle-50-30-20-explication",
  "/blog/money-date-couple",
  "/blog/arreter-comparer-finances-reseaux",
  "/blog/habitudes-financieres-21-jours",
  "/quiz",
  "/faq",
  "/confidentialite",
  "/cgu",
  "/a-propos",
  "/nous-contacter",
  "/profil/depensier-emotionnel",
  "/profil/navigateur-a-vue",
  "/profil/queteur-de-serenite",
  "/profil/batisseur-bloque",
  "/profil/investisseur-paralyse",
  "/comparatif/meilleure-application-budget",
  "/comparatif/alternative-ynab",
  "/comparatif/alternative-bankin",
];

// Old slug → new slug. Generates a static HTML stub at the old path that
// redirects to the new one (meta refresh + canonical). GitHub Pages can't do
// 301s server-side, so this is the closest equivalent for googlebot.
const redirects = {
  // Consolidation (May 2026): old "pourquoi" fonds-urgence article merged into
  // the new combien/comment pillar to kill keyword cannibalization on "fonds d'urgence".
  "/blog/fond-urgence-pourquoi-indispensable":
    "/blog/fonds-urgence-combien-comment/",
  "/blog/depenses-impulsives-comment-arreter":
    "/blog/comment-arreter-de-depenser-impulsivement/",
  "/blog/epargner-petit-salaire":
    "/blog/epargner-petit-salaire-methodes-concretes/",
  // Legacy URL still in Google's index (old English about page) → current FR page
  "/about-us": "/a-propos/",
  // Legacy /plan URL (no longer exists) → homepage
  "/plan": "/",
};

// A route whose #root has fewer than this many chars after render means React
// didn't hydrate — it would ship a blank page to crawlers. Fails the build.
const MIN_ROOT_CONTENT = 2000;

const BASE = "https://noory.io";

function redirectStubHtml(target) {
  const absolute = `${BASE}${target}`;
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Redirection — Noory</title>
    <link rel="canonical" href="${absolute}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <meta name="robots" content="noindex,follow" />
    <script>window.location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <p>Cet article a été déplacé. <a href="${target}">Cliquer ici si la redirection ne fonctionne pas.</a></p>
  </body>
</html>
`;
}

// Simple static file server for dist/
function startServer() {
  const indexHtml = readFileSync(join(DIST, "index.html"), "utf-8");

  const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  const server = createServer((req, res) => {
    let filePath = join(DIST, req.url);
    try {
      const ext = req.url.match(/\.[^.]+$/)?.[0] || "";
      if (ext && mimeTypes[ext]) {
        const data = readFileSync(filePath);
        res.writeHead(200, { "Content-Type": mimeTypes[ext] });
        res.end(data);
      } else {
        // SPA fallback
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(indexHtml);
      }
    } catch {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(indexHtml);
    }
  });

  return new Promise((resolve) => {
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function prerender() {
  console.log(`Prerendering ${routes.length} routes...`);

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let success = 0;
  let failed = 0;
  const thin = [];

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://127.0.0.1:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait a bit for React to fully render
      await page.waitForSelector("#root > *", { timeout: 10000 });

      const html = await page.content();

      // Guard: detect silent hydration failures (empty #root shipped to bots).
      const rootContentLen = await page.evaluate(() => {
        const r = document.getElementById("root");
        return r ? r.innerHTML.length : 0;
      });
      if (rootContentLen < MIN_ROOT_CONTENT) {
        thin.push(`${route} — #root only ${rootContentLen} chars`);
      }

      // Write the prerendered HTML
      const outDir =
        route === "/" ? DIST : join(DIST, ...route.split("/").filter(Boolean));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf-8");

      await page.close();
      success++;
      console.log(`  ✅  ${route}`);
    } catch (err) {
      failed++;
      console.error(`  ❌  ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  // Emit redirect stubs at old paths (meta refresh + canonical to new URL).
  let redirectCount = 0;
  for (const [from, to] of Object.entries(redirects)) {
    const outDir = join(DIST, ...from.split("/").filter(Boolean));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), redirectStubHtml(to), "utf-8");
    redirectCount++;
    console.log(`  ↪️   ${from} → ${to}`);
  }

  console.log(`Redirect stubs: ${redirectCount}`);

  if (thin.length > 0) {
    console.error(
      `\n🔥 ${thin.length} route(s) rendered with a thin/empty #root (< ${MIN_ROOT_CONTENT} chars) — likely a hydration failure that would ship a blank page to crawlers:`
    );
    thin.forEach((t) => console.error(`   - ${t}`));
  }

  console.log(
    `\nDone: ${success} prerendered, ${failed} failed, ${thin.length} thin out of ${routes.length} routes.`
  );

  if (failed > 0 || thin.length > 0) process.exit(1);
}

prerender();
