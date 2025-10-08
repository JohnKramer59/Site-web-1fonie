import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(process.cwd());
const siteUrl = "https://www.1fonie.fr";

// importe les listes depuis le code source
const citiesMod = await import(pathToFileURL(resolve(root, "src/seo/cities.js")));
const servicesMod = await import(pathToFileURL(resolve(root, "src/seo/services.js")));
const CITIES = citiesMod.CITIES;
const SERVICES = servicesMod.SERVICES;

const staticRoutes = [
  "/",
  "/services",
  "/services/standard-telephonique",
  "/services/maintenance-informatique",
  "/services/telephonie-mobile",
  "/services/internet-fibre",
  "/villes",
  "/contact",
  "/blog",
  "/mentions-legales",
];

const cityRoutes = CITIES.map(c => `/villes/${c.slug}`);
const cityServiceRoutes = CITIES.flatMap(c => SERVICES.map(s => `/villes/${c.slug}/${s.slug}`));

const urls = [...staticRoutes, ...cityRoutes, ...cityServiceRoutes];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${siteUrl}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === "/" ? "1.0" : u.startsWith("/villes") ? "0.8" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const out = resolve(root, "public/sitemap.xml");
writeFileSync(out, xml, "utf8");
console.log(`Sitemap écrit: ${out} (${urls.length} URLs)`);
