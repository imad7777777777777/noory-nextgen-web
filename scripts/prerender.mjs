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
  "/blog/depenses-impulsives-comment-arreter",
  "/blog/gerer-son-argent-sans-stress",
  "/blog/profil-financier-psychologie-argent",
  "/blog/epargner-petit-salaire",
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
  "/profil/depensier-emotionnel",
  "/profil/navigateur-a-vue",
  "/profil/queteur-de-serenite",
  "/profil/batisseur-bloque",
  "/profil/investisseur-paralyse",
];

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

  console.log(
    `\nDone: ${success} prerendered, ${failed} failed out of ${routes.length} routes.`
  );

  if (failed > 0) process.exit(1);
}

prerender();
