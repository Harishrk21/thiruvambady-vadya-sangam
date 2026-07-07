/**
 * Generates public/sitemap.xml from static routes + locality pages.
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const SITE = "https://www.thiruvambadyvadyasangam.com";

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/chenda-melam-chennai", priority: "0.95", changefreq: "weekly" },
  { path: "/chenda-classes-chennai", priority: "0.9", changefreq: "weekly" },
  { path: "/courses", priority: "0.85", changefreq: "monthly" },
  { path: "/melams", priority: "0.85", changefreq: "monthly" },
  { path: "/programs", priority: "0.85", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/instruments", priority: "0.7", changefreq: "monthly" },
  { path: "/gallery", priority: "0.65", changefreq: "monthly" },
  { path: "/testimonials", priority: "0.65", changefreq: "monthly" },
  { path: "/awards", priority: "0.5", changefreq: "yearly" },
];

const areaSlugs = [
  "anna-nagar", "velachery", "porur", "tambaram", "omr", "ecr", "adyar", "tnagar",
  "chromepet", "avadi", "ambattur", "medavakkam", "pallikaranai", "perungudi", "sholinganallur",
];

const citySlugs = [
  "coimbatore", "madurai", "trichy", "salem", "erode", "tirunelveli", "vellore", "thanjavur",
  "kanchipuram", "hosur", "nagercoil", "visakhapatnam", "vijayawada", "guntur", "nellore",
  "tirupati", "kakinada", "rajahmundry", "kurnool", "anantapur", "kadapa", "hyderabad",
  "warangal", "nizamabad", "karimnagar", "khammam", "ramagundam", "mahbubnagar", "nalgonda",
  "adilabad", "siddipet",
];

const localityRoutes = [...areaSlugs, ...citySlugs].map((slug) => ({
  path: `/chenda-melam-${slug}`,
  priority: "0.88",
  changefreq: "weekly",
}));

const allRoutes = [...staticRoutes, ...localityRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ({ path, priority, changefreq }) =>
      `  <url><loc>${SITE}${path === "/" ? "/" : path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml);
console.log(`Sitemap written with ${allRoutes.length} URLs`);
