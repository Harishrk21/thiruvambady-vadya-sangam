/**
 * Prerender SPA routes after build for SEO crawlers.
 * Reads routes from build/sitemap.xml and saves static HTML snapshots.
 * Skip with PRERENDER=0
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import handler from "serve-handler";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const buildDir = join(root, "build");

if (process.env.PRERENDER === "0" || process.env.NETLIFY === "true") {
  const indexPath = join(buildDir, "index.html");
  if (existsSync(indexPath)) {
    writeFileSync(join(buildDir, "404.html"), readFileSync(indexPath));
    console.log("Copied index.html → 404.html (Netlify SPA fallback)");
  }
  console.log("Prerender skipped (PRERENDER=0 or NETLIFY build)");
  process.exit(0);
}

const sitemapPath = join(buildDir, "sitemap.xml");
const PORT = 45678;

if (!existsSync(buildDir)) {
  console.error("Build folder not found. Run npm run build first.");
  process.exit(1);
}

const sitemap = readFileSync(sitemapPath, "utf8");
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)?<\/loc>/g)].map((m) => {
  const path = m[1] || "/";
  return path === "" ? "/" : path;
});

const server = createServer((req, res) =>
  handler(req, res, { public: buildDir, rewrites: [{ source: "**", destination: "/index.html" }] })
);

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`Prerender server on http://localhost:${PORT}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const route of routes) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle0", timeout: 60000 });
  await page.waitForSelector("#root > *", { timeout: 15000 }).catch(() => {});

  let html = await page.content();
  const outDir = route === "/" ? buildDir : join(buildDir, route.slice(1));
  if (route !== "/") mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html);
  console.log(`Prerendered ${route}`);
  await page.close();
}

await browser.close();
server.close();
console.log(`Prerendered ${routes.length} routes`);
