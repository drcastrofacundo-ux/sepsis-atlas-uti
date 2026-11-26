// Verifica que los enlaces del Atlas hacia UTI Tools existan en el sitio publicado.
// Necesita red, por eso va aparte de `npm run verify`: se corre con `npm run verify:links`.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const registry = JSON.parse(readFileSync(path.join(here, '../src/data/uti-tools.json'), 'utf8'));
const errors = [];

// 1) Cada módulo apunta a calculadoras que están registradas.
for (const [mod, ids] of Object.entries(registry.modulos)) {
  for (const id of ids) {
    if (!registry.tools[id]) errors.push(`${mod}: la calculadora "${id}" no está en "tools"`);
  }
}

// 2) Cada página registrada figura en el sitemap del sitio y responde con su propio título.
// No alcanza con mirar el código HTTP: un sitio puede responder 200 ante una ruta que no existe.
const sitemapRes = await fetch(`${registry.baseUrl}/sitemap.xml`);
if (!sitemapRes.ok) {
  errors.push(`No se pudo leer ${registry.baseUrl}/sitemap.xml (HTTP ${sitemapRes.status})`);
} else {
  const sitemap = await sitemapRes.text();
  for (const [id, tool] of Object.entries(registry.tools)) {
    const url = `${registry.baseUrl}/${tool.path}`;
    if (!sitemap.includes(`<loc>${url}</loc>`)) {
      errors.push(`${id}: ${url} no figura en el sitemap`);
      continue;
    }
    const res = await fetch(url);
    const html = res.ok ? await res.text() : '';
    if (!res.ok || !html.includes('UTI Tools')) {
      errors.push(`${id}: ${url} no responde con una página de UTI Tools (HTTP ${res.status})`);
    }
  }
}

if (errors.length) {
  console.error('FALLO verify-links:\n - ' + errors.join('\n - '));
  process.exit(1);
}
console.log(`OK verify-links: ${Object.keys(registry.tools).length} calculadoras y ${Object.keys(registry.modulos).length} módulos`);
